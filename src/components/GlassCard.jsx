import React from 'react'

export default function GlassCard({ className = '', children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_1px_0_rgba(255,255,255,0.6),0_20px_40px_-20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(56,189,248,0.35)] transition-all duration-300 ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60" style={{
        background:
          'radial-gradient(600px 200px at 0% 0%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(400px 160px at 100% 100%, rgba(34,197,94,0.10), transparent 60%)'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
