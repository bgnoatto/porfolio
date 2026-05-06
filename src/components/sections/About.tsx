'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { StatCounter } from '@/components/ui/StatCounter'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personal, stats } from '@/lib/data'

export function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass-card p-2 rounded-[20px] w-fit">
            <Image
              src="/porfolio/avatar.jpg"
              alt="Bruno Gnoatto"
              width={280}
              height={320}
              className="rounded-[16px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-[--text-secondary] leading-relaxed">
            I&apos;m a Systems Engineer with over 10 years of hands-on experience in back-end development,
            software architecture, and technical leadership. I specialize in building scalable,
            cloud-native applications with <span className="text-[--accent] font-medium">Java</span>,{' '}
            <span className="text-[--accent] font-medium">Spring Boot</span>, and{' '}
            <span className="text-[--accent] font-medium">Microservices</span>.
          </p>
          <p className="text-[--text-secondary] leading-relaxed">
            Currently serving as Back-End Developer and Technical Leader at NSSA S.A., where I lead
            the backend team for Argentina&apos;s national SUBE recharge infrastructure — a system used
            by millions of commuters daily.
          </p>
          <p className="text-[--text-secondary] leading-relaxed">
            Passionate about clean code, developer mentorship, and Agile practices. Available as a
            remote contractor for international projects.
          </p>
        </motion.div>
      </div>

      <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
