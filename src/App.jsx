import React from 'react'
import MacbookFrame from './components/MacbookFrame'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Safety from './components/Safety'
import Testimonials from './components/Testimonials'
import NurseSignupCTA from './components/NurseSignupCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#011014] text-white">
      {/* Laptop mockup with full landing page inside */}
      <MacbookFrame>
        <div className="h-full w-full overflow-y-auto">
          <Hero />
          <HowItWorks />
          <Services />
          <WhyChooseUs />
          <Safety />
          <Testimonials />
          <NurseSignupCTA />
          <FAQ />
          <Footer />
        </div>
      </MacbookFrame>
    </div>
  )
}

export default App
