import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassCard from './GlassCard'

const testimonials = [
  {
    name: 'Maya R.',
    role: 'Daughter & Caregiver',
    quote: 'Booked a nurse for my mom within minutes. Professional, caring, and punctual.',
  },
  {
    name: 'Daniel K.',
    role: 'Post-op Patient',
    quote: 'The home visits made recovery stress-free. Amazing experience!',
  },
  {
    name: 'Elena S.',
    role: 'Working Parent',
    quote: 'Reliable and safe. The tracking and chat features gave us peace of mind.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-[#02121A] via-[#031A20] to-[#02121A] text-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 className="text-3xl sm:text-4xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>What People Say</motion.h2>
        <p className="mt-3 text-cyan-100/80">Stories from our community</p>

        <div className="mt-10">
          <div className="relative h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <GlassCard className="p-8 h-full flex flex-col items-center justify-center">
                  <p className="text-xl max-w-2xl">“{testimonials[index].quote}”</p>
                  <div className="mt-4 text-cyan-200 font-medium">{testimonials[index].name} · {testimonials[index].role}</div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-cyan-400' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
