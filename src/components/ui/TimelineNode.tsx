'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function TimelineNode({ isCurrent }: { isCurrent: boolean }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center justify-center w-4 h-4 flex-shrink-0"
    >
      <div className="w-4 h-4 rounded-full border-2 border-[--accent] bg-[--bg-base]" />
      {isCurrent && (
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-[--accent] opacity-50 animate-ping" />
      )}
    </motion.div>
  )
}
