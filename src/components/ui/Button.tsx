import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

export function Button({ variant = 'primary', className, children, as: Tag = 'button', href, target, rel, ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-medium transition-all duration-200 text-sm'
  const variants = {
    primary: 'bg-[--accent] text-[#052E16] hover:bg-[--accent-hover] hover:shadow-[0_0_20px_var(--accent-glow)]',
    ghost: 'glass-card text-[--text-primary] hover:bg-[--glass-hover-bg] border border-[--glass-border]',
  }

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
