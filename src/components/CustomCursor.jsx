import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const d = dot.current, r = ring.current
    if (!d || !r) return

    let x = 0, y = 0, rx = 0, ry = 0
    const onMove = e => {
      x = e.clientX; y = e.clientY
      d.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    }
    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      requestAnimationFrame(tick)
    }

    const INTERACTIVE = 'a, button, .exp-card, .project-card, .service-row, .achv-card, .round-cta, .menu-toggle, .back-to-top, .hero-circle-cta';

    const onOver = e => {
      const t = e.target
      const cursorHint = t.closest('[data-cursor]')
      if (cursorHint) {
        r.textContent = cursorHint.getAttribute('data-cursor')
        r.classList.add('text')
        d.classList.add('text')
        return
      }
      if (t.closest(INTERACTIVE)) {
        d.classList.add('hover'); r.classList.add('hover')
      }
    }
    const onOut = e => {
      const t = e.target
      if (t.closest('[data-cursor]')) {
        r.textContent = ''
        r.classList.remove('text')
        d.classList.remove('text')
        return
      }
      if (t.closest(INTERACTIVE)) {
        d.classList.remove('hover'); r.classList.remove('hover')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mouseout', onOut, { passive: true })
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
