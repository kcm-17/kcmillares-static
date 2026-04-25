import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils'
import type { CoreCompetencies } from '@/types'

interface SkillsSectionProps {
  competencies: CoreCompetencies
}

interface SkillGroupProps {
  label: string
  skills: string[]
  variant: 'teal' | 'slate'
}

function SkillGroup({ label, skills, variant }: SkillGroupProps) {
  const tagClass = cn(
    'rounded-full border px-3 py-1 text-xs font-medium',
    variant === 'teal'
      ? 'border-teal-200 bg-teal-50 text-teal-700'
      : 'border-slate-200 bg-slate-100 text-slate-600',
  )

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className={tagClass}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection({ competencies }: SkillsSectionProps) {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading>
        <span id="skills-heading">Core Competencies</span>
      </SectionHeading>
      <div className="flex flex-col gap-8">
        {competencies.ai && (
          <SkillGroup label="AI & Agentic Systems" skills={competencies.ai} variant="teal" />
        )}
        <SkillGroup label="Technical" skills={competencies.technical} variant="teal" />
        <SkillGroup label="Practices" skills={competencies.practices} variant="slate" />
      </div>
    </section>
  )
}
