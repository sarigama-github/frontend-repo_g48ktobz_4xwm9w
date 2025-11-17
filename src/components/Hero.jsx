import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[640px] flex items-center">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#02121A]/70 via-[#02121A]/40 to-[#02121A]/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(800px 300px at 10% 20%, rgba(34,197,94,0.18), transparent 60%), radial-gradient(600px 240px at 80% 60%, rgba(56,189,248,0.18), transparent 60%)'
      }} />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.5, 0.15],
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            style={{ top: `${(i * 11) % 90}%`, left: `${(i * 17) % 90}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 text-white">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Book a Professional Nurse Anytime, Anywhere.
          </motion.h1>
          <motion.p
            className="mt-5 text-cyan-100/90 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            On-demand home care and elderly support from licensed nurses.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a href="#" className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-semibold hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/40 transition-all">Book a Nurse</a>
            <a href="#how" className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium hover:bg-white/20 transition-all">How It Works</a>
          </motion.div>
        </div>

        {/* Glass mockup block */}
        <div className="lg:col-span-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/20 via-emerald-400/10 to-transparent blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOdXJzZXxlbnwwfDB8fHwxNzYzMzcxMjQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Nurse" className="rounded-2xl object-cover h-72 w-full" />
            </div>
            <motion.div
              className="absolute -right-6 -bottom-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 w-48"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-white text-sm">Avg. arrival</div>
              <div className="text-cyan-300 font-semibold text-2xl">18 min</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
