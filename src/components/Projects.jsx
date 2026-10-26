const PROJECTS = [
  {
    num: '01', title: 'AI Quotation Automation', tag: 'Live',
    description: 'Email-triggered agentic workflow in n8n that ingests client emails, extracts requirements via LLM parsing, and auto-drafts quotations with hybrid semantic + keyword retrieval and a confidence-score gate.',
    stack: ['n8n', 'Next.js', 'Supabase', 'LLMs'],
    live: 'https://quotation-tool-red.vercel.app/',
    initials: 'QA', g: ['#cbfe01', '#8aff00'],
  },
  {
    num: '02', title: 'Digital Mind — AI Clone', tag: 'Live',
    description: 'RAG-based "digital twin" platform letting coaches clone their expertise into a shareable chatbot. Ingests YouTube, websites, and files via Gemini video parsing with a Qdrant retrieval stack.',
    stack: ['Next.js', 'Qdrant', 'Gemini', 'RAG'],
    live: 'https://demo-life-coach.vercel.app/',
    initials: 'DM', g: ['#ff5101', '#ff8f00'],
  },
  {
    num: '03', title: 'Pratibimb — Voice AI', tag: 'Live',
    description: 'Real-time voice-to-voice conversational AI with full STT → LLM → TTS pipeline, FastAPI backend, and a dual-layer memory system (Redis short-term + pgvector long-term).',
    stack: ['FastAPI', 'Redis', 'pgvector', 'React'],
    live: 'https://pratibimb-zkbh.vercel.app/',
    initials: 'PR', g: ['#22d3ee', '#a78bfa'],
  },
  {
    num: '04', title: 'LabourBook — Farm Ops Platform', tag: 'Live',
    description: 'Multi-platform farm labour & operations management system (web + mobile + API) built for grape farmers and FPOs in Maharashtra. Handles daily attendance for individuals and contracted Toli teams, cash advances, acre-based contracts, plot operations with photos, and ledger statements — with English, Hindi, and Marathi UI. In production use by FPOs and multiple farmers.',
    stack: ['Next.js', 'FastAPI', 'Expo', 'PostgreSQL', 'Supabase'],
    live: 'https://labour-book.vercel.app',
    initials: 'LB', g: ['#15803d', '#84cc16'],
  },
  {
    num: '05', title: 'CreatorIntel', tag: 'In Development',
    description: 'Multi-agent AI system analyzing YouTube creator ecosystems, detecting virality patterns, and surfacing content intelligence using LangGraph orchestration and specialized trend-analysis agents.',
    stack: ['LangGraph', 'FastAPI', 'YouTube API'],
    live: null,
    initials: 'CI', g: ['#a78bfa', '#cbfe01'],
  },
]

const screenshot = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&meta=false&viewport.width=1280&viewport.height=800&waitFor=1500`

const Thumb = ({ initials, g, title }) => (
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`pg-${initials}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={g[0]} stopOpacity="0.95" />
        <stop offset="1" stopColor={g[1]} stopOpacity="0.75" />
      </linearGradient>
      <pattern id={`pp-${initials}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="rgba(0,0,0,0.22)" />
      </pattern>
    </defs>
    <rect width="320" height="200" fill="#11141a" />
    <rect width="320" height="200" fill={`url(#pg-${initials})`} />
    <rect width="320" height="200" fill={`url(#pp-${initials})`} />
    <text x="22" y="180" fontFamily="Phudu, sans-serif" fontWeight="800" fontSize="130"
      fill="rgba(0,0,0,0.42)" style={{ letterSpacing: '-5px' }}>{initials}</text>
    <text x="22" y="38" fontFamily="JetBrains Mono, monospace" fontSize="11"
      fill="rgba(0,0,0,0.7)" fontWeight="600"
      style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>{title}</text>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="section projects-section fade-in">
      <div className="projects-backdrop">WORKS</div>

      <div className="section-head">
        <span className="eyebrow">04 — Work</span>
        <h2>Selected Projects</h2>
        <span className="rule" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map(({ num, title, tag, description, stack, live, initials, g }) => {
          const ThumbInner = live ? (
            <img
              src={screenshot(live)}
              alt={`${title} — live preview`}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          ) : (
            <Thumb initials={initials} g={g} title={title} />
          )

          return (
            <article className="project-card" key={num}>
              {live ? (
                <a
                  className="thumb thumb-link"
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="View Live"
                  aria-label={`Open ${title} in a new tab`}
                >
                  {ThumbInner}
                </a>
              ) : (
                <div className="thumb">
                  {ThumbInner}
                </div>
              )}
              <div className="meta">
                <span className="num">{num}</span>
                <span className={`badge${tag === 'In Development' ? ' wip' : ' live'}`}>
                  {tag === 'Live' && <span className="live-dot" />}
                  {tag}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="stack">
                {stack.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
              <div className="links">
                {live ? (
                  <a href={live} target="_blank" rel="noreferrer">
                    Visit Site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                ) : (
                  <span className="disabled-note">Not yet deployed</span>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
