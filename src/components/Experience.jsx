// Same Experience section structure — ul > li > h3 + p + p(duration)
// Content replaced with resume: Vulcury LLC, WebXpressAI, NZ Solutions

const EXPERIENCE = [
  {
    role: 'SDE Intern — Vulcury LLC',
    duration: 'June 2025 – Dec 2025 | Remote',
    description:
      'Architected a semantic search engine to intelligently match customers and suppliers using embedding models and LLM reasoning. Built a dual-LLM parallel search optimization pipeline processing thousands of records in real time. Engineered a Flask + React full-stack platform with AI-driven matching, confidence-score visualization, and Zoho CRM automation workflows.',
  },
  {
    role: 'Contractual AI Intern — WebXpressAI',
    duration: 'May 2025 – June 2025 | Remote',
    description:
      'Developed AI email summarization agents to classify, prioritize, and summarize high-volume logistics email threads using LLM pipelines. Built automated email agents via n8n orchestration, reducing manual triage by over 80%. Designed and shipped a Next.js frontend dashboard to visualize workflow activity and automation metrics.',
  },
  {
    role: 'AI/ML Intern — NZ Solutions',
    duration: 'Jan 2025 – May 2025 | Onsite · Pune',
    description:
      'Engineered a production OCR pipeline using Microsoft TrOCR, fine-tuned on custom CA firm document datasets. Built a SaaS platform for Chartered Accountant firms automating multi-page document extraction, form classification, and structured data export. Integrated LLM-powered form automation that auto-fills OCR-extracted data into structured templates, reducing manual entry by ~90%.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="Experience fade-in">
      <div className="experience-content">
        <h2>Experience</h2>
        <ul>
          {EXPERIENCE.map(({ role, duration, description }) => (
            <li key={role}>
              <h3>{role}</h3>
              <p>{description}</p>
              <p>
                <strong>Duration:</strong> {duration}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
