import Image from 'next/image'
import { Users } from 'lucide-react'

export function TeamSection({ title, description, team }: any) {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary font-primary mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-foreground/80 font-secondary">{description}</p>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member: any, index: any) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-[300px] bg-primary">
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt || member.name}
                      fill
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-20 w-20 text-primary/30" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground font-primary">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">{member.title}</p>
                  </div>

                  {member.credentials && (
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {member.credentials}
                      </span>
                    </div>
                  )}

                  {member.description && (
                    <p className="text-foreground/70 font-secondary text-sm leading-relaxed line-clamp-4">
                      {member.description}
                    </p>
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
