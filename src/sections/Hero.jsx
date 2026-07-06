export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{
        background: 'linear-gradient(160deg, #2a2d5e 0%, #3d3882 25%, #6b5fa8 50%, #c4b8e8 75%, #FAF9F6 100%)',
      }}
    >
      {/* Star field */}
      <Stars />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
        <span
          className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full"
          style={{ background: 'rgba(185,179,232,0.25)', color: '#e8e4f8', border: '1px solid rgba(185,179,232,0.3)' }}
        >
          3:47 AM
        </span>

        <h1
          className="text-4xl md:text-6xl font-semibold leading-tight"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FAF9F6' }}
        >
          Still scrolling. Still telling yourself five more minutes.
        </h1>

        <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#d4cff0', fontFamily: 'Inter, sans-serif' }}>
          You know how this ends. One spray under the tongue breaks the loop before the fourth reel.
        </p>

        <a
          href="#offer"
          className="inline-block mt-2 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: '#E8A94C', color: '#1E2140', borderRadius: '14px', fontFamily: 'Inter, sans-serif' }}
        >
          Break the loop tonight
        </a>

        <p className="text-sm" style={{ color: '#b0a8d4', fontFamily: 'Inter, sans-serif' }}>
          Doctor led · UK formulation · Sublingual spray
        </p>
      </div>
    </section>
  )
}

function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.6 + 0.2,
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
