import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="navbar">
      <nav>
        <div className="nav-container">
          {/* Logo image — identical to original */}
          <div className="logo">
            <a href="#home">
              <img src="/Coder-removebg-preview.png" alt="Logo" />
            </a>
          </div>

          {/* Hamburger — same 3-span structure as original */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </div>

          {/* Nav links — toggles .open class on mobile */}
          <ul className={`nav-links${isOpen ? ' open' : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={handleLinkClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
