import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const services = [
  'Home Care',
  'Elderly Care',
  'Post-Op Care',
  'Medication',
  'Vitals Check',
  'Wound Dressing',
  'Physiotherapy',
]

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-[#031A20] via-[#041E24] to-[#052128] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 className="text-3xl sm:text-4xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Services</motion.h2>
        <p className="mt-3 text-cyan-100/80 max-w-2xl">Comprehensive care options tailored to your needs.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((name, idx) => (
            <motion.div key={name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.04 }}>
              <GlassCard className="p-6 group hover:-translate-y-1">
                <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 border border-white/10 mb-4" />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <span className="text-cyan-300 opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
