import { SectionHeading } from '@/components/ui/SectionHeading'

interface ProfileSectionProps {
  profile: string
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section aria-labelledby="profile-heading">
      <SectionHeading>
        <span id="profile-heading">Professional Profile</span>
      </SectionHeading>
      <p className="text-base leading-relaxed text-slate-600 text-justify">{profile}</p>
    </section>
  )
}
