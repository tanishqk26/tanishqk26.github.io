const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'PhazeAI',
    duration: 'Aug 2026 – Present',
    mode: 'Remote',
    bullets: [
      <>Shipped <span className="metric">8+ client-facing AI products</span> across sales, HR, finance, and coaching verticals on Next.js + Supabase + n8n — WhatsApp CRM agents, voice-driven lead capture, AI quotations, meeting intelligence — for <span className="metric">5+ paying clients</span>.</>,
      <>Led delivery of <strong>Meetsaar</strong>, a meeting intelligence platform with speaker-diarized transcription, AI summaries, and auto-extracted action items — cutting post-meeting write-up time by <span className="metric">~70%</span>.</>,
      <>Built a <strong>WhatsApp voice-to-lead pipeline</strong> combining Soniox real-time STT, LLM requirement extraction, and Supabase storage — turning raw voice notes into structured CRM leads in <span className="metric">under 30 seconds</span>.</>,
    ],
    stack: ['Next.js', 'Supabase', 'n8n', 'Soniox', 'LLMs', 'WhatsApp API'],
  },
  {
    role: 'Development / AI Intern',
    company: 'Vulcury LLC',
    duration: 'June 2025 – Dec 2025',
    mode: 'Remote',
    bullets: [
      <>Engineered a two-stage supplier recommendation pipeline integrating Zoho CRM, Pinecone semantic retrieval, and Gemini reranking — surfacing the <span className="metric">top-10 suppliers per RFQ</span> with explainable results across <span className="metric">12+ certification variants</span>.</>,
      <>Built an LLM-driven transcript processor with <span className="metric">4 meeting-specific extraction modules</span> (sales, engineering, leadership, shop-floor), pulling <span className="metric">15+ structured fields</span> per session and auto-syncing to Zoho CRM.</>,
    ],
    stack: ['Flask', 'React', 'Pinecone', 'Gemini', 'Zoho CRM', 'REST APIs'],
  },
  {
    role: 'Contractual AI Intern',
    company: 'WebXpressAI',
    duration: 'May 2025 – June 2025',
    mode: 'Remote',
    bullets: [
      <>Developed AI email summarization agents to classify, prioritize, and summarize high-volume logistics email threads using LLM pipelines.</>,
      <>Built automated email agents via <strong>n8n orchestration</strong>, reducing manual triage by over <span className="metric">80%</span>.</>,
      <>Designed and shipped a Next.js frontend dashboard to visualize workflow activity and automation metrics.</>,
    ],
    stack: ['n8n', 'Next.js', 'LLMs', 'Email APIs'],
  },
  {
    role: 'Development / AI Intern',
    company: 'NZ Solutions',
    duration: 'Jan 2025 – May 2025',
    mode: 'On-Site · Pune',
    bullets: [
      <>Built <strong>InvoGeni</strong>, a document-intelligence pipeline converting PDF invoices via OCR (TrOCR + PyTesseract + pdf2image), with a local LLM extracting <span className="metric">20+ fields</span> and exporting to Excel — cutting per-invoice processing from minutes to <span className="metric">under 30 seconds</span>.</>,
      <>Engineered resilient browser automation with Selenium + WebDriver using XPath identification and <strong>AI-assisted fallback recovery</strong> for broken or dynamically changed locators.</>,
    ],
    stack: ['TrOCR', 'PyTesseract', 'Selenium', 'Pandas', 'Local LLM'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <div className="section-head">
        <span className="eyebrow">02 — Journey</span>
        <h2>Experience</h2>
        <span className="rule" />
      </div>

      <div className="timeline">
        {EXPERIENCE.map(({ role, company, duration, mode, bullets, stack }) => (
          <div className="exp-item" key={`${company}-${duration}`}>
            <div className="exp-head">
              <div className="role">
                {role} <span className="company">@ {company}</span>
              </div>
              <div className="duration">{duration}</div>
            </div>
            <span className="exp-mode">{mode}</span>
            <ul className="exp-bullets">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="exp-stack">
              {stack.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
