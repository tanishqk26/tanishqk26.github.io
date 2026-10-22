const Twitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9L1 2h7l4.8 6.3zm-2.4 18h1.9L7.6 4H5.5z"/></svg>
)
const LinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z"/></svg>
)
const GitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.3 1.3a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.8.3 3.1.1 3.4a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.9 5.7-5.6 6 .5.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
)
const Mail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
)
const ArrowUp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
)

const QUICK = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-area">
      <div className="contact-cta-block fade-in">
        <span className="contact-eyebrow">Connect Across Platforms</span>

        <h2>
          Let's build<br />
          <span className="outline">something</span> <span className="accent">great</span><br />
          together.
        </h2>

        <p>
          Open to AI engineering roles, consulting, and interesting
          collaborations. If you're building something at the edge of AI and
          automation, I'd love to hear from you.
        </p>

        <div className="social-pills">
          <a href="https://github.com/tanishqk26" target="_blank" rel="noreferrer">
            <GitHub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanishq-kokane-7611801b4/" target="_blank" rel="noreferrer">
            <LinkedIn /> LinkedIn
          </a>
          <a href="https://x.com/tanishqk26" target="_blank" rel="noreferrer">
            <Twitter /> Twitter
          </a>
          <a href="mailto:tanishqkokane@gmail.com">
            <Mail /> Email
          </a>
        </div>

        <div className="contact-info">
          <span><span className="k">Email:</span><a href="mailto:tanishqkokane@gmail.com">tanishqkokane@gmail.com</a></span>
          <span><span className="k">Phone:</span><a href="tel:+917385990561">+91 7385990561</a></span>
        </div>
      </div>

      <div className="footer-middle">
        <div className="quick">
          <h4>Quick Links</h4>
          <ul>
            {QUICK.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
        <button
          className="footer-top-circle"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp />
        </button>
        <div className="copy">
          <h4>Tanishq Kokane</h4>
          <p>© 2026 — AI Engineer. All rights reserved.<br />Built with React + Vite.</p>
        </div>
      </div>

      <div className="footer-giant">
        <h5>TANISHQ<span className="last">.</span></h5>
      </div>
    </section>
  )
}
