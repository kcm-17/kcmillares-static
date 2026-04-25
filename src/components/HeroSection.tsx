import type { CVData } from '@/types'

interface HeroSectionProps {
  name: CVData['name']
  title: CVData['title']
  email: CVData['email']
  linkedin: CVData['linkedin']
  location: CVData['location']
  visaStatus: CVData['visaStatus']
}

export function HeroSection({ name, title, email, linkedin, location, visaStatus }: HeroSectionProps) {
  return (
    <header className="bg-slate-900 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-teal-400">
          {title}
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          {name}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-teal-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {email}
          </a>

          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-teal-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {linkedin}
          </a>

          <span className="flex items-center gap-2 text-sm text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </span>
        </div>

        <div className="mt-5">
          <span className="inline-block rounded-full border border-teal-800 bg-teal-900/40 px-3 py-1 text-xs font-medium text-teal-300">
            {visaStatus}
          </span>
        </div>
      </div>
    </header>
  )
}
