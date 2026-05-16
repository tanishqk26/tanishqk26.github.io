import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  // Exact same IntersectionObserver logic as the original script
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in')
    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -100px 0px',
    }
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      })
    }, appearOptions)

    faders.forEach(fader => appearOnScroll.observe(fader))
    return () => appearOnScroll.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer />
    </>
  )
}
