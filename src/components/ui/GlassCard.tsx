import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  elevated?: boolean
}

export function GlassCard({ children, className, elevated = false }: GlassCardProps) {
  return (
    <div className={cn(elevated ? 'glass-elevated' : 'glass-card', className)}>
      {children}
    </div>
  )
}
