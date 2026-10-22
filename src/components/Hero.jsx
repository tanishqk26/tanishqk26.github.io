export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse" />
          AI Engineer <span style={{ color: 'var(--dim)' }}>@</span>
          <span className="co">PhazeAI</span>
        </div>

        <h1 className="hero-name">
          TANISHQ<span className="accent">.</span>
        </h1>

        <h2 className="hero-headline">
          Building <span className="accent">AI products</span><br />
          that make work simpler.
        </h2>

        <p className="hero-desc">
          I'm an AI Engineer who enjoys building real-world solutions using
          LLMs, automation and modern web technologies. Currently shipping
          products at PhazeAI that bring AI into everyday business workflows.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="pill-cta" data-cursor="View Work">
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="pill-cta ghost">
            Let's Talk
          </a>
        </div>

        <div className="hero-kpis">
          <div className="kpi">
            <div className="k">8+</div>
            <div className="v">Products<br />Shipped</div>
          </div>
          <div className="kpi">
            <div className="k">5+</div>
            <div className="v">Clients<br />Worked With</div>
          </div>
          <div className="kpi">
            <div className="k">1.3+</div>
            <div className="v">Years<br />Building</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow" aria-hidden="true" />
        <img
          src="/new_main.PNG"
          alt="Tanishq Kokane"
          className="hero-photo"
          draggable="false"
          onDragStart={e => e.preventDefault()}
        />
      </div>
    </section>
  )
}
