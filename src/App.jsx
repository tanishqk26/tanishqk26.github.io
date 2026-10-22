import { useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in')
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          e.target.classList.add('active')
          observer.unobserve(e.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    )
    faders.forEach(f => io.observe(f))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Services />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
