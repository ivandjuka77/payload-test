import { CheckCircle2 } from 'lucide-react'

interface JobDetailsProps {
  responsibilities: string[] | null
  requirements: string[] | null
  preferred: string[] | null
}

export default function JobDetails({ responsibilities, requirements, preferred }: JobDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-primary mb-6">Key Responsibilities</h2>
        <ul className="space-y-4">
          {responsibilities &&
            responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3 font-secondary">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{responsibility}</span>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold font-primary mb-6">Requirements</h2>
        <ul className="space-y-4 mb-8">
          {requirements &&
            requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3 font-secondary">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{requirement}</span>
              </li>
            ))}
        </ul>
        <h3 className="text-xl font-semibold font-primary mb-4">Preferred Qualifications</h3>
        <ul className="space-y-4">
          {preferred &&
            preferred.map((preferredItem, index) => (
              <li
                key={index}
                className="flex items-start gap-3 font-secondary text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span>{preferredItem}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
