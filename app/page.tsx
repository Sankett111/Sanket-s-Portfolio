import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import Projects from "./_components/Projects"
import Techstack from './_components/Techstack'
import Footer from './_components/Footer'
import React from 'react'

function page() {
  return (
   <>
      <Navbar />

      {/* FIXED WIDTH PAGE WRAPPER */}
      <main className="pt-3 mx-auto max-w-[900px] px-4">
        <Hero />
        <Projects />
        <Techstack />
        <Footer />
      </main>
    </>
  )
}

export default page