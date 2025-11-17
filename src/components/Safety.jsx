import React from 'react'
import { motion } from 'framer-motion'
import { Siren, MapPin, IdCard, Lock } from 'lucide-react'
import GlassCard from './GlassCard'

const items = [
  { title: 'SOS for Nurses', desc: 'Instant emergency assistance within the app.', icon: Siren },
  { title: 'Location Sharing', desc: 'Share live location with trusted contacts.', icon: MapPin },
  { title: 'Client ID Verification', desc: 'ID checks and profile verification before visits.', icon: IdCard },
  { title: 'Encrypted Chat', desc: 'Private, end-to-end encrypted messaging.', icon: Lock },
]

export default function Safety() {
  return (
    <section className="relative bg-gradient-to-b from-[#052128] via-[#062A31] to-[#02121A] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 className="text-3xl sm:text-4xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Safety First</motion.h2>
        <p className="mt-3 text-cyan-100/80 max-w-2xl">Built-in protections for both clients and nurses.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, idx) => (
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
