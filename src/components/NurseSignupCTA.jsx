import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

export default function NurseSignupCTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#02121A] to-[#041E24] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <GlassCard className="p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 className="text-3xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Are you a licensed nurse?</motion.h3>
              <p className="mt-3 text-cyan-100/80">Join our network to work flexibly, earn more, and make a real impact.</p>
            </div>
            <div className="flex gap-4 justify-end">
              <a href="#" className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-semibold hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/40 transition-all">Sign up as Nurse</a>
              <a href="#" className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium hover:bg-white/20 transition-all">Learn More</a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
