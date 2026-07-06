import { motion, useReducedMotion } from 'framer-motion'

// Entrance animation props — fade + slide up, one-time on load
function enter(delay = 0, reduced = false) {
  if (reduced) return {}
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }
}

function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${(i * 137.5) % 100}%`,
    left: `${(i * 97.3) % 100}%`,
    size: (i % 3) + 1,
    opacity: 0.15 + (i % 5) * 0.1,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: '#fff',
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  )
}

function ScrollCue({ reduced }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={reduced ? {} : { y: [0, 8, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="rgba(185,179,232,0.45)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      >
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{
        background: 'linear-gradient(160deg, #2a2d5e 0%, #3d3882 25%, #6b5fa8 50%, #c4b8e8 75%, #FAF9F6 100%)',
      }}
    >
      <Stars />

      {/* Product bottle — desktop right side, dissolving into the gradient */}
      <div
        className="absolute hidden lg:block pointer-events-none select-none"
        style={{
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '330px',
        }}
        aria-hidden="true"
      >
        <img
          src="/assets/mela.webp"
          alt=""
          className="w-full"
          style={{
            filter: 'brightness(0.52) saturate(0.38)',
            opacity: 0.52,
            WebkitMaskImage:
              'radial-gradient(ellipse 58% 68% at 56% 48%, black 20%, rgba(0,0,0,0.4) 52%, transparent 75%)',
            maskImage:
              'radial-gradient(ellipse 58% 68% at 56% 48%, black 20%, rgba(0,0,0,0.4) 52%, transparent 75%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-5">

        {/* Trust cue — social proof, above headline context */}
        <motion.div
          {...enter(0, reduced)}
          className="flex items-center gap-2"
        >
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#E8A94C" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span style={{ color: 'rgba(185,179,232,0.55)', fontSize: '12px' }}>·</span>
          <span style={{ color: '#b0a8d4', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
            4.8 · 200+ verified reviews
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          {...enter(0.08, reduced)}
          className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full"
          style={{
            background: 'rgba(185,179,232,0.25)',
            color: '#e8e4f8',
            border: '1px solid rgba(185,179,232,0.3)',
          }}
        >
          3:47 AM
        </motion.span>

        {/* Headline — largest, highest contrast, never outweighed */}
        <motion.h1
          {...enter(0.2, reduced)}
          className="text-4xl md:text-6xl font-semibold leading-tight"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FAF9F6' }}
        >
          Still scrolling. Still telling yourself five more minutes.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...enter(0.38, reduced)}
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: '#d4cff0', fontFamily: 'Inter, sans-serif' }}
        >
          You know how this ends. One spray under the tongue breaks the loop before the fourth reel.
        </motion.p>

        {/* CTA + price microcopy */}
        <motion.div
          {...enter(0.52, reduced)}
          className="flex flex-col items-center gap-2.5 mt-1"
        >
          <motion.a
            href="#offer"
            className="inline-block font-semibold text-base px-8 py-4 rounded-xl"
            style={{
              background: '#E8A94C',
              color: '#1E2140',
              borderRadius: '14px',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
            }}
            animate={reduced ? {} : { scale: [1, 1.014, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
          >
            Break the loop tonight
          </motion.a>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            From ₹22/night · Cancel anytime
          </p>
        </motion.div>

        {/* Existing microcopy */}
        <motion.p
          {...enter(0.65, reduced)}
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
        >
          Doctor led · UK formulation · Sublingual spray
        </motion.p>


</div>

      <ScrollCue reduced={reduced} />
    </section>
  )
}
