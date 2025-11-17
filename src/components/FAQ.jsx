import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassCard from './GlassCard'

const faqs = [
  { q: 'Is NurseOnDemand available 24/7?', a: 'Yes. You can request a licensed nurse any time, day or night.' },
  { q: 'How are nurses vetted?', a: 'We verify licenses, background checks, and conduct interviews and skill assessments.' },
  { q: 'Can I track my nurse in real time?', a: 'Yes. You will see ETA, route, and can chat securely in-app.' },
  { q: 'How do payments work?', a: 'All payments are processed securely in-app with receipts provided.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative bg-gradient-to-b from-[#041E24] to-[#02121A] text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 className="text-3xl sm:text-4xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>FAQs</motion.h2>
        <p className="mt-3 text-cyan-100/80">Everything you need to know</p>

        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => (
            <GlassCard key={i} className="p-5">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left">
                <span className="text-lg font-medium">{item.q}</span>
                <span className="text-cyan-300">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 text-cyan-100/80">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
