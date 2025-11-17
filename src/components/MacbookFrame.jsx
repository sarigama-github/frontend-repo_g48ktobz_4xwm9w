import React from 'react'

export default function MacbookFrame({ children }) {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="relative mx-auto w-[1100px] max-w-full">
        {/* Laptop outer body */}
        <div className="relative rounded-[18px] bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-2xl border border-zinc-400/60">
          {/* Bezel */}
          <div className="rounded-[14px] m-3 bg-black/95 shadow-inner border border-zinc-800/60">
            {/* Camera notch */}
            <div className="mx-auto h-2 w-20 rounded-b-xl bg-zinc-800/80 mt-2" />
            {/* Screen */}
            <div className="aspect-[3024/1964] rounded-b-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-black/90" />
              <div className="relative z-10" style={{ width: '100%', height: '100%' }}>
                {children}
              </div>
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="mx-auto h-3 w-[96%] bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-b-2xl border-x border-b border-zinc-400/70" />
        {/* Shadow */}
        <div className="mx-auto mt-2 h-2 w-[80%] bg-black/20 blur-lg rounded-full" />
      </div>
    </div>
  )
}
