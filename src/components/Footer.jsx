import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#02121A] text-cyan-100/80">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="text-white text-2xl font-semibold">NurseOnDemand</div>
          <p className="mt-2 max-w-xs">Your trusted partner for on-demand home care and elderly support.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Company</h4>
          <ul className="mt-2 space-y-1">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Support</h4>
          <ul className="mt-2 space-y-1">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Legal</h4>
          <ul className="mt-2 space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Licensing</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-cyan-100/60">© {new Date().getFullYear()} NurseOnDemand. All rights reserved.</div>
      </div>
    </footer>
  )
}
