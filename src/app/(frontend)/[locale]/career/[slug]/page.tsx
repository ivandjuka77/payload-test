import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { queryCareers } from '@/utilities/queryCareers'
import PageClient from './page.client'
import JobHeader from '@/components/career/Header'
import JobDetails from '@/components/career/JobDetails'
import ApplyForm from '@/components/career/ApplyForm'
import BenefitsSection from '@/components/career/Benefits'
import RelatedPositions from '@/components/career/RelatedPositions'
import type { Career } from '@/payload-types'

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })
//   const careers = await payload.find({
//     collection: 'careers',
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   })

//   const locales = ['', 'sk', 'jp'] // '' represents default (English)
//   const params = careers.docs.flatMap(({ slug }) => {
//     return locales.map((locale) => ({
//       locale,
//       slug,
//     }))
//   })

//   console.log('Careers', params.length)

//   return params
// }

type Args = {
  params: Promise<{
    slug?: string
    locale?: string
  }>
}

export default async function Career({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'en' } = await paramsPromise
  const url = '/career/' + slug
  const job = await queryCareerBySlug({ slug })

  if (!job) {
    return <PayloadRedirects url={url} />
  }

  console.log('job', job)

  // Extract and transform data according to Career interface
  const responsibilities =
    (job.keyResponsibilities?.map((item) => item.responsibility).filter(Boolean) as string[]) || []
  const requirements =
    (job.requirements?.map((item) => item.requirement).filter(Boolean) as string[]) || []
  const preferred =
    (job.preferredQualifications?.map((item) => item.qualification).filter(Boolean) as string[]) ||
    []
  const benefits = (job.benefits?.map((item) => item.benefit).filter(Boolean) as string[]) || null

  // Get related jobs data
  const allJobs = await queryCareers({ limit: 5, locale: locale as 'en' | 'sk' | 'jp' })
  const jobsData = allJobs.reduce(
    (acc, career) => {
      if (career.slug) {
        acc[career.slug] = {
          title: career.title,
          department: career.category,
          location: career.location,
          type: career.type,
          description: career.description
            ? 'Join our team in this exciting role.'
            : 'Join our team in this exciting role.',
        }
      }
      return acc
    },
    {} as Record<
      string,
      { title: string; department: string; location: string; type: string; description: string }
    >,
  )

  console.log('allJobs', allJobs)

  console.log('Jobs data', jobsData)

  return (
    <main className="flex min-h-screen flex-col">
      <PageClient />

      <JobHeader job={job} />

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-x-20">
            <div className="lg:col-span-3">
              <JobDetails
                responsibilities={responsibilities}
                requirements={requirements}
                preferred={preferred}
              />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>

      {benefits && benefits.length > 0 && <BenefitsSection benefits={benefits} />}
      {/* <AboutVupSection /> */}
      {Object.keys(jobsData).length > 0 && (
        <RelatedPositions jobsData={jobsData} currentSlug={slug} />
      )}

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const career = await queryCareerBySlug({ slug })

  return generateMeta({ doc: career })
}

const queryCareerBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'careers',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
