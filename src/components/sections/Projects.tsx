'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { projects } from '@/lib/data'
import type { Project } from '@/lib/types'

export function Projects() {
  const flagship = projects.find((p) => p.flagship)
  const others = projects.filter((p) => !p.flagship)
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section-padding bg-[--surface-1]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" subtitle="What I've built" centered />

        {flagship && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <FlagshipCard project={flagship} />
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <div
      className="glass-elevated p-8 md:p-12 relative overflow-hidden"
      style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.50), 0 0 60px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.10)' }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[--accent-glow] blur-[80px] pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <div>
            <span className="text-xs font-mono text-[--accent] tracking-widest uppercase">{project.type}</span>
            <h3 className="text-2xl font-bold text-[--text-primary] mt-1">{project.title}</h3>
          </div>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-[--text-muted] glass-card border border-[--glass-border]">
            <Lock size={12} /> Professional · Confidential
          </span>
        </div>
        <p className="text-[--text-secondary] mb-6 max-w-2xl">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-xs font-mono text-[--accent] bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.20)]">
              {s}
            </span>
          ))}
        </div>
        {project.link && (
          <Button variant="ghost" as="a" href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} /> View on LinkedIn
          </Button>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card p-6 h-full flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.40)]">
      <span className="text-xs font-mono text-[--accent] tracking-widest uppercase mb-2">{project.type}</span>
      <h3 className="text-lg font-bold text-[--text-primary] mb-3">{project.title}</h3>
      <p className="text-sm text-[--text-secondary] mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((s) => (
          <span key={s} className="px-2 py-0.5 rounded-full text-xs font-mono text-[--accent] bg-[rgba(34,197,94,0.10)]">
            {s}
          </span>
        ))}
      </div>
      {project.repo && (
        <Button variant="ghost" as="a" href={project.repo} target="_blank" rel="noopener noreferrer" className="w-fit">
          <Github size={14} /> View on GitHub
        </Button>
      )}
    </div>
  )
}
