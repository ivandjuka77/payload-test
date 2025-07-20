import { LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import { TeamBlock, TeamMember } from '@/payload-types'

export const Team: React.FC<TeamBlock> = ({ title, subtitle, teamMembers }) => {
  //   const teamMembers: TeamMember[] = [
  //     {
  //       name: 'Roman Karlubik',
  //       title: 'Chief Executive Officer',
  //       department: 'Executive Leadership',
  //       imageSrc: 'placeholder.svg',
  //       bio: 'Leading VUP&apos;s strategic direction and commitment to innovation and sustainable growth.',
  //       linkedin: 'https://linkedin.com',
  //     },
  //     {
  //       name: 'Ing. Peter Grolmus',
  //       title: 'Director of Research & Development',
  //       department: 'Research & Development',
  //       imageSrc: 'placeholder.svg',
  //       bio: 'Overseeing VUP&apos;s extensive R&D programs, driving innovation in chemical synthesis, process development, and new product creation.',
  //       linkedin: 'https://linkedin.com',
  //     },
  //     {
  //       name: 'Ing. Ján Chalupka',
  //       title: 'Head of Commercial Department',
  //       department: 'Commercial',
  //       imageSrc: 'placeholder.svg',
  //       bio: 'Managing VUP&apos;s commercial strategy, client partnerships, and market development for our diverse product and service portfolio.',
  //       linkedin: 'https://linkedin.com',
  //     },
  //     {
  //       name: 'Ing. Ľudovít Žiak, PhD',
  //       title: 'Head of ATBEL Division',
  //       department: 'Analytical, Technical-Safety, and Ecological Laboratories',
  //       imageSrc: 'placeholder.svg',
  //       bio: 'Leading our SNAS S-118 accredited laboratories, ensuring high-quality analytical services, technical safety testing, and environmental monitoring.',
  //       linkedin: 'https://linkedin.com',
  //     },
  //     {
  //       name: 'Ing. Denisa Juríčeková',
  //       title: 'Head of Production Department for Cosmetics',
  //       department: 'Cosmetics Production',
  //       imageSrc: 'placeholder.svg',
  //       bio: 'Overseeing the development, manufacturing, and quality assurance of VUP&apos;s cosmetic products, including custom and private label solutions.',
  //       linkedin: 'https://linkedin.com',
  //     },
  //   ]

  const teamMembersArray = teamMembers as TeamMember[]

  return (
    <section className="py-16 bg-white relative">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-primary mb-4">{title}</h2>

          <p className="text-muted-foreground font-secondary max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {teamMembersArray &&
            teamMembersArray.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Member image */}
                <div className="relative h-[300px]">
                  <Media resource={member.image} fill imgClassName="object-cover object-center" />
                  {member.linkedin && (
                    <div className="absolute top-4 right-4">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-primary transition-colors shadow-sm"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground font-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {member.department?.map((department) => department).join(', ')}
                    </p>
                  </div>
                  <p className="text-muted-foreground font-secondary text-sm leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Decorative element */}
        <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      </div>
    </section>
  )
}
