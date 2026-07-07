import { motion, useReducedMotion } from 'framer-motion'

// One-time entrance: fade + slide-up
function fadeUp(delay = 0, reduced = false) {
  if (reduced) return {}
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }
}

// Annotation callout: dot → line → amber pill
// direction 'right': dot is leftmost, pill extends right
// direction 'left': pill is leftmost, line, dot rightmost
function Callout({ anchorX, anchorY, direction = 'right', text }) {
  const dot = (
    <span style={{
      display: 'inline-block', width: 7, height: 7,
      borderRadius: '50%', background: '#fff', flexShrink: 0,
      boxShadow: '0 0 0 2.5px rgba(255,255,255,0.2)',
    }} />
  )
  const line = (
    <span style={{
      display: 'inline-block', width: 52, height: 1,
      background: 'rgba(255,255,255,0.5)', flexShrink: 0, alignSelf: 'center',
    }} />
  )
  const pill = (
    <span style={{
      background: '#E8A94C', color: '#1E2140',
      fontSize: 11, fontWeight: 700,
      fontFamily: 'Inter, sans-serif',
      padding: '4px 12px', borderRadius: 20,
      whiteSpace: 'nowrap', letterSpacing: '0.01em',
    }}>
      {text}
    </span>
  )

  return (
    <div
      className="hidden md:flex items-center"
      style={{
        position: 'absolute',
        left: `${anchorX}%`,
        top: `${anchorY}%`,
        transform: direction === 'left'
          ? 'translate(-100%, -50%)'
          : 'translateY(-50%)',
        flexDirection: direction === 'left' ? 'row-reverse' : 'row',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    >
      {dot}{line}{pill}
    </div>
  )
}

function Stars() {
  // More stars, weighted toward edges where the background is darker
  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    top: `${(i * 137.5) % 100}%`,
    left: `${(i * 97.3) % 100}%`,
    size: (i % 4 === 0) ? 2.5 : (i % 3 === 0) ? 1.5 : 1,
    opacity: 0.10 + (i % 6) * 0.07,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div key={s.id} className="absolute rounded-full" style={{
          top: s.top, left: s.left,
          width: s.size, height: s.size,
          background: '#fff', opacity: s.opacity,
        }} />
      ))}
    </div>
  )
}

function ScrollCue({ reduced }) {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={reduced ? {} : { y: [0, 8, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="rgba(185,179,232,0.45)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 md:py-0"
      style={{
        /* Warm deep lavender — matches the brand palette (not blue-navy) */
        background: '#231b5a',
      }}
    >
      {/* Layer 1: fine dot texture — most visible in dark corners */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(200,185,240,0.20) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }} />

      {/* Layer 2: star field */}
      <Stars />

      {/* Layer 3: central spotlight — periwinkle-violet matching brand label color */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(96,82,188,0.92) 0%, rgba(68,55,148,0.55) 45%, transparent 72%)',
      }} />

      {/* Layer 4: corner vignette — deep plum edges, center pops */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 88% 82% at 50% 50%, transparent 32%, rgba(8,5,28,0.82) 100%)',
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Left column: copy stack, left-aligned ── */}
        <div className="flex flex-col items-start gap-5">

          {/* Trust cue */}
          <motion.div {...fadeUp(0, reduced)} className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#E8A94C" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: 'rgba(185,179,232,0.55)', fontSize: '12px' }}>·</span>
            <span style={{ color: '#c8c0e4', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
              4.8 · 200+ verified reviews
            </span>
          </motion.div>

          {/* Eyebrow pill */}
          <motion.span
            {...fadeUp(0.1, reduced)}
            className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(185,179,232,0.22)',
              color: '#e8e4f8',
              border: '1px solid rgba(185,179,232,0.28)',
            }}
          >
            3:47 AM
          </motion.span>

          {/* Headline — largest, highest contrast, never outweighed */}
          <motion.h1
            {...fadeUp(0.22, reduced)}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FAF9F6' }}
          >
            Still scrolling. Still telling yourself five more minutes.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...fadeUp(0.38, reduced)}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: '#ccc7e8', fontFamily: 'Inter, sans-serif' }}
          >
            You know how this ends. One spray under the tongue breaks the loop before the fourth reel.
          </motion.p>

          {/* CTA + price microcopy */}
          <motion.div {...fadeUp(0.52, reduced)} className="flex flex-col items-start gap-2 mt-1">
            <motion.a
              href="#offer"
              className="inline-block font-semibold text-base px-8 py-4 rounded-xl"
              style={{
                background: '#E8A94C', color: '#1E2140',
                borderRadius: '14px', fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
              }}
              animate={reduced ? {} : { scale: [1, 1.014, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
            >
              Break the loop tonight
            </motion.a>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
              From ₹22/night · Cancel anytime
            </p>
          </motion.div>

          {/* Trust tagline */}
          <motion.p
            {...fadeUp(0.64, reduced)}
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}
          >
            Doctor led · UK formulation · Sublingual spray
          </motion.p>

        </div>

        {/* ── Right column: floating bottle cutout ── */}
        <motion.div
          {...fadeUp(0.18, reduced)}
          className="relative flex items-center justify-center"
        >
          {/* Soft dark pool behind bottle — keeps it readable without fighting the vignette */}
          <div style={{
            position: 'absolute', inset: '-10px', pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(12,10,40,0.45) 0%, transparent 100%)',
          }} />

          {/* Thin outline frame — bottle breaks past on all four sides */}
          <div style={{
            position: 'absolute',
            width: '230px', height: '360px',
            border: '1.5px solid rgba(185,179,232,0.3)',
            borderRadius: '24px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          {/* Floating bottle with callouts */}
          <motion.div
            className="relative"
            style={{ width: 'min(520px, 88vw)', zIndex: 1 }}
            animate={reduced ? {} : { y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/assets/bottle_cutout.png"
              alt="Vitonnix Melatonin Sublingual Spray"
              className="w-full"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(20,18,60,0.5))' }}
            />

            {/* Callout 1: nozzle — extends right */}
            <Callout anchorX={52} anchorY={9} direction="right" text="0.2ml precision dose" />

            {/* Callout 2: label — extends left */}
            <Callout anchorX={48} anchorY={57} direction="left" text="Doctor-formulated in the UK" />
          </motion.div>
        </motion.div>

      </div>

      <ScrollCue reduced={reduced} />
    </section>
  )
}
