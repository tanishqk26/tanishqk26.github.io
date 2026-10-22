const SERVICES = [
  {
    num: '01',
    label: 'AI Agents',
    body: 'Agentic systems with LangGraph & n8n — multi-agent reasoning, tool use, long-running tasks wired into real business processes.',
    tag: 'Agents · LangGraph',
    bg: ['#cbfe01', '#8aff00', 'AI'],
  },
  {
    num: '02',
    label: 'RAG Systems',
    body: 'Semantic + hybrid retrieval, reranking, and vector infrastructure that turns unstructured docs into grounded, auditable answers.',
    tag: 'RAG · Vector DBs',
    bg: ['#ff5101', '#ff8f00', 'RG'],
  },
  {
    num: '03',
    label: 'Voice & Docs',
    body: 'Real-time voice pipelines (STT→LLM→TTS), speaker-diarized transcription, OCR extraction, and intelligent document processing.',
    tag: 'STT · TTS · OCR',
    bg: ['#22d3ee', '#a78bfa', 'VX'],
  },
  {
    num: '04',
    label: 'Full-Stack AI',
    body: 'End-to-end apps on Next.js + Supabase + FastAPI — auth, dashboards, APIs, deployment — the whole product, not just a model.',
    tag: 'Next.js · Supabase',
    bg: ['#a78bfa', '#cbfe01', 'FS'],
  },
  {
    num: '05',
    label: 'Automation',
    body: 'n8n workflows, webhook orchestration, CRM/email/calendar automation. Audit a messy process, ship a system that runs itself.',
    tag: 'n8n · Webhooks',
    bg: ['#cbfe01', '#ff5101', 'AU'],
  },
]

function bgImage(c1, c2, letters) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='800' height='400' fill='${c1}'/><rect width='800' height='400' fill='url(#g)'/><text x='40' y='360' font-family='Phudu, sans-serif' font-weight='800' font-size='320' fill='rgba(0,0,0,0.35)' letter-spacing='-14'>${letters}</text></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

export default function Services() {
  return (
    <section id="services" className="section fade-in">
      <div className="section-head">
        <span className="eyebrow">05 — Services</span>
        <h2>What I Build</h2>
        <span className="rule" />
      </div>

      <div className="services-list">
        {SERVICES.map(({ num, label, body, tag, bg }, i) => (
          <a
            href="#contact"
            className={`service-row${i === 0 ? ' active' : ''}`}
            key={num}
            style={{ '--bg-img': bgImage(bg[0], bg[1], bg[2]) }}
          >
            <div className="num">{num}</div>
            <h3>{label}</h3>
            <p>{body}</p>
            <span className="tag">{tag}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
