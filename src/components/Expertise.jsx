const ROWS = [
  {
    num: '01',
    title: 'AI / ML Engineering',
    pills: ['Python', 'LangChain', 'RAG', 'AI Agents', 'LLMs', 'Prompt Engineering', 'Embeddings'],
    g: ['#cbfe01', '#8aff00'],
    initials: 'AI',
  },
  {
    num: '02',
    title: 'Backend & Databases',
    pills: ['FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'Supabase', 'Redis', 'Pinecone', 'Qdrant', 'pgvector'],
    g: ['#ff5101', '#ff8f00'],
    initials: 'BE',
  },
  {
    num: '03',
    title: 'Automation & Integration',
    pills: ['n8n', 'Webhooks', 'Zoho CRM', 'Selenium', 'REST APIs', 'Email Agents'],
    g: ['#22d3ee', '#a78bfa'],
    initials: 'AU',
  },
  {
    num: '04',
    title: 'Full-Stack & UI',
    pills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Docker'],
    g: ['#a78bfa', '#cbfe01'],
    initials: 'FS',
  },
]

const Thumb = ({ initials, g, title }) => (
  <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`eg-${initials}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={g[0]} stopOpacity="0.9" />
        <stop offset="1" stopColor={g[1]} stopOpacity="0.7" />
      </linearGradient>
      <pattern id={`ep-${initials}`} width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.7" fill="rgba(0,0,0,0.2)" />
      </pattern>
    </defs>
    <rect width="320" height="220" fill="#11141a" />
    <rect width="320" height="220" fill={`url(#eg-${initials})`} />
    <rect width="320" height="220" fill={`url(#ep-${initials})`} />
    <text
      x="24" y="200"
      fontFamily="Phudu, sans-serif"
      fontWeight="800"
      fontSize="150"
      fill="rgba(0,0,0,0.4)"
      style={{ letterSpacing: '-6px' }}
    >
      {initials}
    </text>
    <text
      x="24" y="40"
      fontFamily="JetBrains Mono, monospace"
      fontSize="11"
      fill="rgba(0,0,0,0.7)"
      fontWeight="600"
      style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
    >
      {title}
    </text>
  </svg>
)

export default function Expertise() {
  return (
    <section id="expertise" className="section fade-in">
      <div className="section-head">
        <span className="eyebrow">03 — Expertise</span>
        <h2>Core Expertise</h2>
        <span className="rule" />
      </div>

      <div className="expertise-stack">
        {ROWS.map(({ num, title, pills, g, initials }) => (
          <article className="exp-row" key={num}>
            <div className="exp-thumb">
              <Thumb initials={initials} g={g} title={title} />
            </div>
            <div className="exp-content">
              <div className="num-head">
                <span className="num">{num}</span>
                <h3>{title}</h3>
              </div>
              <ul className="exp-pills">
                {pills.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
