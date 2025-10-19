import { LinkedinIcon, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { TeamBlock, TeamMember, Service } from '@/payload-types'

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
                className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground font-primary">
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary transition-colors shrink-0"
                          title="View LinkedIn Profile"
                        >
                          <LinkedinIcon className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    <p className="text-primary font-semibold text-base md:text-lg">{member.role}</p>
                  </div>

                  {/* Bio Section */}
                  {member.bio && (
                    <p className="text-muted-foreground font-secondary text-sm md:text-base leading-relaxed mb-4 flex-grow">
                      {member.bio}
                    </p>
                  )}

                  {/* Department Links */}
                  {member.department && member.department.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {member.department.map((dept, deptIndex) => {
                          const deptObj = typeof dept === 'object' ? (dept as Service) : null
                          if (!deptObj) return null

                          return (
                            <Link
                              key={deptIndex}
                              href={`/services/${deptObj.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors group bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                            >
                              <Briefcase className="h-3.5 w-3.5" />
                              <span>{deptObj.title}</span>
                              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
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
