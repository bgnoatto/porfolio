import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechChip } from '@/components/ui/TechChip'
import { techStack } from '@/lib/data'

export function TechStack() {
  return (
    <section id="stack" className="section-padding bg-[--surface-1]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I work with daily"
          centered
        />

        <div className="space-y-10">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-xs font-mono text-[--accent] tracking-widest uppercase mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.items.map((item) => (
                  <TechChip key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
