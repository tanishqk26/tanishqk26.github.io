// Same Projects section — ul > li > h3 + p + a
// Content replaced: Pratibimb, CreatorIntel, Invo-Geni

const PROJECTS = [
  {
    title: 'Pratibimb – AI Digital Twin Platform',
    description:
      'A production-grade AI Digital Twin platform where users create persistent, memory-enabled AI personas with voice cloning, multimodal understanding, and conversational intelligence. Built with Gemini Live API, LangGraph orchestration, ElevenLabs voice cloning, and a Vector DB memory layer. Supports real-time WebSocket-based voice interaction.',
    link: 'https://github.com/tanishqk26',
    linkText: 'View Project',
  },
  {
    title: 'CreatorIntel',
    description:
      'Multi-agent AI system that autonomously analyzes YouTube creator ecosystems, detects virality patterns, and surfaces content intelligence using LangGraph agent orchestration. Integrates YouTube Data API with FastAPI backend and multiple specialized AI agents for trend analysis and creator performance benchmarking.',
    link: 'https://github.com/tanishqk26',
    linkText: 'View Project',
  },
  {
    title: 'Invo-Geni',
    description:
      'AI-powered invoice intelligence engine that extracts structured data from PDF and image invoices using OCR pipelines and LangChain + Ollama local LLMs. Handles multi-format ingestion (PDF, JPG, PNG), performs text cleanup, and outputs clean JSON with line items, vendor info, totals, and dates.',
    link: 'https://github.com/tanishqk26/InvoGeni',
    linkText: 'View Project',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="Projects fade-in">
      <div className="projects-content">
        <h2>Projects</h2>
        <ul>
          {PROJECTS.map(({ title, description, link, linkText }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
