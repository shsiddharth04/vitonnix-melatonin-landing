export default function Offer() {
  return (
    <section
      id="offer"
      className="py-20 md:py-28 px-6"
      style={{ background: '#1E2140' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-3">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(185,179,232,0.2)', color: '#B9B3E8' }}
          >
            Start tonight
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FAF9F6' }}
          >
            ₹22 a night to stop lying awake.
          </h2>
          <p className="text-base" style={{ color: '#9b96c4', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
            One bottle. 60 nights. That's less than a cup of chai.
          </p>
        </div>

        <div
          className="w-full flex flex-col gap-3 p-6 rounded-2xl"
          style={{ background: 'rgba(241,240,250,0.06)', borderRadius: '20px', border: '1px solid rgba(185,179,232,0.2)' }}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-sm" style={{ color: '#9b96c4', fontFamily: 'Inter, sans-serif' }}>Trial pack — 12ml / 60 servings</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold" style={{ color: '#FAF9F6', fontFamily: 'Inter, sans-serif' }}>₹1,299</span>
              <span className="text-sm line-through" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>₹1,599</span>
            </div>
          </div>

          <div
            className="h-px w-full"
            style={{ background: 'rgba(185,179,232,0.15)' }}
          />

          <div className="flex flex-col gap-2">
            {[
              '60 nights — ₹21.65/night',
              'Free shipping over ₹499',
              'FSSAI certified, GMP manufactured',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4E9B72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm" style={{ color: '#c4c0dc', fontFamily: 'Inter, sans-serif' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full gap-3">
          <button
            className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-95"
            style={{ background: '#E8A94C', color: '#1E2140', borderRadius: '14px', fontFamily: 'Inter, sans-serif' }}
          >
            Start with the trial pack
          </button>
          <button
            className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-95"
            style={{ background: 'transparent', color: '#B9B3E8', border: '1.5px solid rgba(185,179,232,0.4)', borderRadius: '14px', fontFamily: 'Inter, sans-serif' }}
          >
            Subscribe and save 20%
          </button>
        </div>

        <p className="text-xs" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>
          Cancel anytime. No questions asked.
        </p>
      </div>
    </section>
  )
}
