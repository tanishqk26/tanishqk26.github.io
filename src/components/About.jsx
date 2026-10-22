export default function About() {
  return (
    <section id="about" className="section about-section fade-in">
      <div className="about-bg" aria-hidden="true" />

      <div className="section-head center">
        <span className="eyebrow">01 — About</span>
        <h2>Who I Am</h2>
      </div>

      <div className="about-copy">
        <p>
          I'm an <span className="em">AI Engineer</span> focused on shipping
          production systems — not demos. My work sits at the intersection of
          <span className="em"> agentic workflows, retrieval, and automation</span>,
          and I enjoy the full loop: designing the pipeline, picking the right
          models, and wiring the backend that puts it in users' hands.
        </p>
        <p>
          Over the last year I've built voice-to-lead pipelines, meeting
          intelligence platforms, supplier-matching engines, and document
          extraction systems — most of them in production, serving paying
          clients at <span className="em">PhazeAI</span>.
        </p>
        <p>
          Graduating 2026 from PDEA College of Engineering, Pune with a
          <span className="em"> 9.27 GPA</span> in Information Technology.
          Open to AI engineering roles and interesting collaborations.
        </p>

        <a href="#contact" className="round-cta" data-cursor="Let's Talk">
          Build Your<br />AI Product <span className="arr">→</span>
        </a>
      </div>

      <div className="about-counters">
        <div className="about-counter lime">
          <div className="k">8+</div>
          <div className="label">Client-facing AI products shipped</div>
        </div>
        <div className="about-counter">
          <div className="k">5+</div>
          <div className="label">Paying clients using the work</div>
        </div>
      </div>
    </section>
  )
}
