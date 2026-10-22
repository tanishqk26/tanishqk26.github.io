import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'About',       href: '#about',       num: '01' },
  { label: 'Expertise',   href: '#expertise',   num: '02' },
  { label: 'Experience',  href: '#experience',  num: '03' },
  { label: 'Projects',    href: '#projects',    num: '04' },
  { label: 'Services',    href: '#services',    num: '05' },
  { label: 'Contact',     href: '#contact',     num: '06' },
]

const Icon = {
  gh: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.3 1.3a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.8.3 3.1.1 3.4a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.9 5.7-5.6 6 .5.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>,
  li: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z"/></svg>,
  x:  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9L1 2h7l4.8 6.3zm-2.4 18h1.9L7.6 4H5.5z"/></svg>,
  mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      document.documentElement.style.setProperty('--sp', `${pct}%`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-container">
          <a href="#home" className="wordmark" onClick={close}>
            TANISHQ<span className="dot">.</span>
          </a>

          <ul className="nav-inline">
            <li><a href="#home" onClick={close}>Home</a></li>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#projects" onClick={close}>Projects</a></li>
            <li><a href="#experience" onClick={close}>Experience</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="pill-cta hide-sm" onClick={close}>
              Let's Talk
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <button
              className={`menu-toggle${isOpen ? ' open' : ''}`}
              onClick={() => setIsOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </header>

      <div className={`drawer-overlay${isOpen ? ' open' : ''}`} onClick={close} />
      <aside className={`drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-left">
          <ul className="drawer-links">
            {LINKS.map(({ label, href, num }) => (
              <li key={label}>
                <a href={href} onClick={close}>
                  <span className="num">{num}</span>{label}
                </a>
              </li>
            ))}
          </ul>
          <div className="drawer-cta">
            <a
              href="/Tanishq-Kokane-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="pill-cta ghost"
              onClick={close}
            >
              Download CV
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
