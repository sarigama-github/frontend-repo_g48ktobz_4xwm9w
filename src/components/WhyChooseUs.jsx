import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Lock, Navigation } from 'lucide-react'
import GlassCard from './GlassCard'

const features = [
  { title: 'Verified Professionals', desc: 'All nurses are licensed and background-checked.', icon: BadgeCheck },
  { title: 'Trust & Safety', desc: 'Industry-grade safety standards for in-home care.', icon: ShieldCheck },
  { title: 'Bank-Level Security', desc: 'Secure payments and encrypted data.', icon: Lock },
  { title: 'Real-time Tracking', desc: 'Track your nurse’s ETA and route live.', icon: Navigation },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-[#052128] via-[#062A31] to-[#052128] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 className="text-3xl sm:text-4xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Why Choose Us</motion.h2>
        <p className="mt-3 text-cyan-100/80 max-w-2xl">Premium, reliable and secure medical care at your doorstep.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
              <GlassCard className="p-6 group hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 border border-white/20 flex items-center justify-center mb-4">
                  <f.icon className="text-cyan-200" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-cyan-100/80 mt-1">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
