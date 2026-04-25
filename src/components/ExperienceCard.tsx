import type { Job } from '@/types'

interface ExperienceCardProps {
  job: Job
}

export function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <article className="relative border-l-2 border-slate-200 pl-6">
      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-teal-500" />

      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-slate-800">{job.company}</h3>
        <span className="shrink-0 text-xs text-slate-400">{job.period}</span>
      </div>

      <p className="mb-4 text-sm font-medium text-teal-600">{job.role}</p>

      {job.description && (
        <p className="text-justify text-sm leading-relaxed text-slate-600">{job.description}</p>
      )}

      {job.bullets && (
        <ul className="space-y-2">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
              <span className="text-justify">{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {job.clients && (
        <div className="space-y-6">
          {job.clients.map((client) => (
            <div key={client.name}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {client.name}
              </p>
              <ul className="space-y-2">
                {client.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                    <span className="text-justify">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
