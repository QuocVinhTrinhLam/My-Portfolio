import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn("section", className)}
    >
      {children}
    </section>
  )
}
