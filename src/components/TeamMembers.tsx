import { ArrowRight, Briefcase } from 'lucide-react'
import { TeamMember, Service } from '@/payload-types'
import Link from 'next/link'

export function TeamSection({
  title,
  description,
  team,
}: {
  title: string
  description: string
  team: TeamMember[]
}) {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-muted/20 px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto lg:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-primary mb-4">{title}</h2>
          {description && (
            <p className="text-base md:text-lg text-foreground/80 font-secondary">{description}</p>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all hover:border-primary/50"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground font-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-base md:text-lg">{member.role}</p>
                  </div>

                  {/* Bio Section */}
                  {member.bio && (
                    <p className="text-foreground/70 font-secondary text-sm md:text-base leading-relaxed mb-4 flex-grow">
                      {member.bio}
                    </p>
                  )}

                  {/* Department Links */}
                  {member.department && member.department.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-border">
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
        </div>
      </div>
    </section>
  )
}
