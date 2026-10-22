const THEMES = [
  'AI Engineering',
  'Agentic Systems',
  'RAG & Retrieval',
  'Voice AI',
  'Automation',
]

export default function Marquee() {
  const doubled = [...THEMES, ...THEMES]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>
            <span className={i % 2 === 0 ? 'solid' : 'stroke'}>{t}</span>
            <span className="sep">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}
