interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center mb-16' : 'mb-16'}>
      <h2 className="text-3xl font-bold text-[--text-primary] tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[--text-secondary] text-base">{subtitle}</p>
      )}
    </div>
  )
}
