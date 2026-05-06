'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { TimelineNode } from '@/components/ui/TimelineNode'
import { experience } from '@/lib/data'

export function Experience() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading title="Experience" subtitle="My professional journey" centered />

      <div className="relative">
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[--accent] opacity-20" />

        <div className="space-y-12">
          {experience.map((entry, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div key={entry.company} className="relative flex items-start gap-6 md:gap-0">
                <div className="md:hidden mt-1.5 flex-shrink-0">
                  <TimelineNode isCurrent={entry.isCurrent} />
                </div>

                <div className={`hidden md:flex w-full items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 flex justify-end pr-8">
                    {isLeft && (
                      <motion.div
                        initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-md"
                      >
                        <ExperienceCard entry={entry} />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <TimelineNode isCurrent={entry.isCurrent} />
                  </div>
                  <div className="w-1/2 pl-8">
                    {!isLeft && (
                      <motion.div
                        initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-md"
                      >
                        <ExperienceCard entry={entry} />
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="md:hidden flex-1">
                  <ExperienceCard entry={entry} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold text-[--text-primary]">{entry.company}</h3>
          <p className="text-[--accent] text-sm mt-0.5">{entry.role}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-[--text-muted] font-mono">{entry.period}</p>
          {entry.isCurrent && (
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs bg-[--accent] text-[#052E16] font-semibold">
              Current
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-1.5">
        {entry.bullets.map((b, i) => (
          <li key={i} className="text-sm text-[--text-secondary] flex gap-2">
            <span className="text-[--accent] mt-0.5 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}
