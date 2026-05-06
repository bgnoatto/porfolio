'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personal } from '@/lib/data'

export function Hero() {
  const reducedMotion = useReducedMotion()
  const dur = reducedMotion ? 0 : 0.8
  const stagger = reducedMotion ? 0 : 0.15

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: dur, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[--accent-glow] blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(34,197,94,0.10)] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          className="glass-elevated p-10 md:p-16 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-[--accent] font-mono text-sm mb-4 tracking-widest uppercase"
          >
            {personal.location}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-[--text-primary] tracking-tight mb-4"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-[--accent] mb-6"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[--text-secondary] text-base md:text-lg mb-10 max-w-xl mx-auto"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="primary" as="a" href={`mailto:${personal.email}`}>
              <Mail size={16} />
              Contact Me
            </Button>
            <Button variant="ghost" as="a" href="/porfolio/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown size={16} />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 1.5, duration: dur }}
          className="mt-16 text-[--text-muted] animate-bounce"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  )
}
