const Trophy = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4a2 2 0 0 1-2-2V4h4" /><path d="M18 9h2a2 2 0 0 0 2-2V4h-4" />
    <path d="M6 4h12v7a6 6 0 0 1-12 0z" /><path d="M9 20h6M12 14v6" />
  </svg>
)
const Cert = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" /><path d="M8.5 12l-1.5 8 5-3 5 3-1.5-8" />
  </svg>
)
const Users = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const ITEMS = [
  { icon: <Trophy />, title: 'Top 50 — Code Unnati 3.0', meta: 'MAR 2025', body: 'Ranked top 50 among 1500+ participants nationwide in a software engineering challenge.' },
  { icon: <Cert />,   title: 'SAP Foundation + Advanced', meta: 'NOV 2023', body: 'Certified in Python, ML, AI, IoT, and SAP Conversational AI.' },
  { icon: <Users />,  title: 'Organized 24-Hour Hackathon', meta: 'AUG 2024', body: 'Led a 200+ student hackathon end-to-end across cross-functional teams.' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section fade-in">
      <div className="section-head">
        <span className="eyebrow">06 — Recognition</span>
        <h2>Achievements</h2>
        <span className="rule" />
      </div>

      <div className="achv-grid">
        {ITEMS.map(({ icon, title, meta, body }) => (
          <div className="achv-card" key={title}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <div className="meta">{meta}</div>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
