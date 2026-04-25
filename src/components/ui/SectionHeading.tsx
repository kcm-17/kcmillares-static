import { cn } from '@/utils'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-800">{children}</h2>
      <div className="mt-2 h-0.5 w-12 bg-teal-500" />
    </div>
  )
}
