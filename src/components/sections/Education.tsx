import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { education } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading title="Education" centered />
      <div className="flex justify-center">
        <GlassCard className="p-8 max-w-lg w-full flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[rgba(34,197,94,0.15)] flex items-center justify-center flex-shrink-0">
            <GraduationCap size={22} className="text-[--accent]" />
          </div>
          <div>
            <h3 className="font-bold text-[--text-primary] text-lg mb-1">{education.degree}</h3>
            <p className="text-[--accent] font-medium mb-1">{education.institution}</p>
            <p className="text-sm text-[--text-muted]">{education.location}</p>
            <p className="text-sm text-[--text-muted] font-mono mt-1">{education.years}</p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
