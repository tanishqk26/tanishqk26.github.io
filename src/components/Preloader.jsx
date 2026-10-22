import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`preloader${hidden ? ' hidden' : ''}`} aria-hidden="true">
      <div className="letters">
        {'TANISHQ'.split('').map((c, i) => <span key={i}>{c}</span>)}
      </div>
    </div>
  )
}
