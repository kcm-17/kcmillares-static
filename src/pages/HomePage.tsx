import { HeroSection } from '@/components/HeroSection'
import { ProfileSection } from '@/components/ProfileSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { EducationSection } from '@/components/EducationSection'
import { cvData } from '@/data/cv'

export function HomePage() {
  const { name, title, email, linkedin, location, visaStatus, profile, competencies, experience, education } = cvData

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        name={name}
        title={title}
        email={email}
        linkedin={linkedin}
        location={location}
        visaStatus={visaStatus}
      />

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-16">
        <ProfileSection profile={profile} />
        <SkillsSection competencies={competencies} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-center">
        <p className="text-sm text-slate-400">
          Get in touch —{' '}
          <a
            href={`mailto:${email}`}
            className="text-teal-400 underline-offset-4 hover:underline"
          >
            {email}
          </a>
        </p>
      </footer>
    </div>
  )
}
