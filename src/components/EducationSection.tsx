import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Education } from '@/types'

interface EducationSectionProps {
  education: Education
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading">
      <SectionHeading>
        <span id="education-heading">Education</span>
      </SectionHeading>
      <article className="relative border-l-2 border-slate-200 pl-6">
        <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-teal-500" />
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-base font-semibold text-slate-800">{education.degree}</h3>
          <span className="shrink-0 text-xs text-slate-400">{education.period}</span>
        </div>
        <p className="text-sm font-medium text-teal-600">{education.institution}</p>
        <p className="mt-1 text-sm text-slate-500">{education.location}</p>
      </article>
    </section>
  )
}
