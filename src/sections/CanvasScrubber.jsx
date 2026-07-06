import { useEffect, useRef, useState, useCallback } from 'react'

const DESKTOP_FRAMES = 120
const MOBILE_FRAMES = 80

// Beat map: [progressStart, progressEnd, text]
const CALLOUTS = [
  [0.0,  0.30, '0.2ml precision dose — no measuring, no guessing'],
  [0.38, 0.65, 'Doctor-formulated in the UK'],
  [0.70, 0.93, 'Absorbs before you\'d finish reading this sentence'],
]

function getFramePath(index, mobile) {
  const dir = mobile ? 'mobile' : 'desktop'
  const num = String(index + 1).padStart(4, '0')
  return `/frames/${dir}/frame_${num}.jpg`
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(img)
    img.src = src
  })
}

export default function CanvasScrubber() {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const startedRef = useRef(false)
  const rafRef = useRef(null)
  const lastFrameRef = useRef(-1)

  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  const [activeCallout, setActiveCallout] = useState(null)
  const [reduced, setReduced] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    setIsMobile(window.innerWidth <= 768)
  }, [])

  const totalFrames = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES

  // Preload frames — called once, guarded by startedRef
  const preload = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    setLoading(true)

    const mobile = window.innerWidth <= 768
    const count = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES
    const paths = Array.from({ length: count }, (_, i) => getFramePath(i, mobile))

    Promise.all(paths.map(loadImage)).then((imgs) => {
      framesRef.current = imgs
      setLoading(false)
      setReady(true)
    })
  }, [])

  // Trigger preload when section is ~1 viewport away
  useEffect(() => {
    if (reduced) return
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) preload() },
      { rootMargin: '100% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [preload, reduced])

  // Size canvas to CSS layout × devicePixelRatio
  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    if (!w || !h) return
    if (canvas.width === Math.round(w * dpr) && canvas.height === Math.round(h * dpr)) return
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
  }, [])

  // Draw a frame by index
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    const img = framesRef.current[index]
    if (!canvas || !img) return
    sizeCanvas()
    const ctx = canvas.getContext('2d')
    const w = canvas.width / (window.devicePixelRatio || 1)
    const h = canvas.height / (window.devicePixelRatio || 1)
    // Letterbox: preserve aspect ratio, center
    const imgAR = img.naturalWidth / img.naturalHeight
    const canvasAR = w / h
    let sw, sh, sx, sy
    if (imgAR > canvasAR) {
      sw = w; sh = w / imgAR; sx = 0; sy = (h - sh) / 2
    } else {
      sh = h; sw = h * imgAR; sx = (w - sw) / 2; sy = 0
    }
    ctx.clearRect(0, 0, w, h)
    ctx.drawImage(img, sx, sy, sw, sh)
  }, [sizeCanvas])

  // Size on mount and on resize
  useEffect(() => {
    sizeCanvas()
    const onResize = () => { sizeCanvas(); if (ready) drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [sizeCanvas, drawFrame, ready])

  // Draw frame 0 as soon as ready
  useEffect(() => {
    if (ready) drawFrame(0)
  }, [ready, drawFrame])

  // Scroll → frame mapping
  useEffect(() => {
    if (!ready || reduced) return

    const frames = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES

    function onScroll() {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const wrapper = wrapperRef.current
        if (!wrapper) return
        const rect = wrapper.getBoundingClientRect()
        const scrollable = wrapper.offsetHeight - window.innerHeight
        if (scrollable <= 0) return
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
        const idx = Math.round(progress * (frames - 1))
        if (idx !== lastFrameRef.current) {
          lastFrameRef.current = idx
          drawFrame(idx)
        }
        let next = null
        for (const [s, e, t] of CALLOUTS) {
          if (progress >= s && progress <= e) { next = t; break }
        }
        setActiveCallout(next)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync on mount in case already scrolled
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    }
  }, [ready, reduced, isMobile, drawFrame])

  // ── Reduced-motion fallback ──────────────────────────────────────────────
  if (reduced) {
    return (
      <section style={{ background: '#0d0e1f', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          <img
            src={getFramePath(89, false)}
            alt="Vitonnix Melatonin spray"
            style={{ width: '100%', maxWidth: 540, borderRadius: 20 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480, textAlign: 'center' }}>
            {CALLOUTS.map(([,, t]) => (
              <p key={t} style={{ color: '#FAF9F6', fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{t}</p>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ── Main scrubber ────────────────────────────────────────────────────────
  return (
    <section
      ref={wrapperRef}
      style={{ position: 'relative', height: '300vh', background: '#0d0e1f' }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh', width: '100%',
        overflow: 'hidden',
      }}>
        {/* Loading overlay */}
        {loading && !ready && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16,
            background: '#0d0e1f',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              border: '2px solid rgba(185,179,232,0.15)',
              borderTopColor: '#B9B3E8',
              animation: 'cspin 0.8s linear infinite',
            }} />
            <p style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', fontSize: 13, margin: 0 }}>Loading…</p>
            <style>{`@keyframes cspin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Canvas — always in DOM so it can be sized before ready */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Callout pill */}
        <div style={{
          position: 'absolute', bottom: 48, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', padding: '0 24px',
          pointerEvents: 'none', zIndex: 5,
        }}>
          <p style={{
            margin: 0,
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 500,
            color: '#FAF9F6',
            background: 'rgba(30,33,64,0.8)',
            backdropFilter: 'blur(10px)',
            padding: '12px 28px',
            borderRadius: 40,
            border: '1px solid rgba(185,179,232,0.25)',
            maxWidth: 520, textAlign: 'center',
            opacity: activeCallout ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}>
            {activeCallout || ' '}
          </p>
        </div>
      </div>
    </section>
  )
}
