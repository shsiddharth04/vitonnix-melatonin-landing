const rows = [
  { label: 'Works lying down in the dark', spray: true, tablet: false },
  { label: 'No water or swallowing needed', spray: true, tablet: false },
  { label: 'Starts working within 15 minutes', spray: true, tablet: false },
  { label: 'Doctor-formulated dosage', spray: true, tablet: false },
  { label: 'Precise per-dose measurement', spray: true, tablet: false },
  { label: 'No added sugar', spray: true, tablet: null },
  { label: 'UK formulation', spray: true, tablet: false },
]

function Cell({ value }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4E9B72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4BAD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <span className="text-xs" style={{ color: '#C4BAD8' }}>—</span>
    </div>
  )
}

export default function Comparison() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        background: '#FAF9F6',
        backgroundImage: 'radial-gradient(circle, rgba(185,179,232,0.16) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#F1F0FA', color: '#6B6B7A' }}
          >
            Why switch
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            Spray vs. tablet
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ borderRadius: '20px' }}>
          {/* Header */}
          <div
            className="grid grid-cols-3 px-6 py-4"
            style={{ background: '#26155a' }}
          >
            <span className="text-sm font-medium" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>Feature</span>
            <span className="text-sm font-semibold text-center" style={{ color: '#E8A94C', fontFamily: 'Inter, sans-serif' }}>Vitonnix Spray</span>
            <span className="text-sm font-medium text-center" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>Traditional tablets</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 px-6 py-4 items-center"
              style={{
                background: i % 2 === 0 ? '#FAF9F6' : '#F1F0FA',
                borderBottom: i < rows.length - 1 ? '1px solid #e8e4f0' : 'none',
              }}
            >
              <span className="text-sm pr-4" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif', lineHeight: '1.4' }}>
                {row.label}
              </span>
              <Cell value={row.spray} />
              <Cell value={row.tablet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
