import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceCard } from '@/components/ExperienceCard'
import type { Job } from '@/types'

interface ExperienceSectionProps {
  experience: Job[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-heading">
      <SectionHeading>
        <span id="experience-heading">Professional Experience</span>
      </SectionHeading>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <ExperienceCard key={`${job.company}-${i}`} job={job} />
        ))}
      </div>
    </section>
  )
}
