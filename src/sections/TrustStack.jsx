const tags = [
  {
    label: 'Doctor led',
    detail: 'Formulated with sleep medicine specialists who set the dosage for wind-down, not sedation.',
    credential: 'Sleep medicine verified',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: 'UK formulation',
    detail: 'Developed in London and manufactured to EU Directive 2002/46/EC standards. Sublispray® delivery technology.',
    credential: 'Sublispray® UK Technology',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: 'Sublingual spray',
    detail: 'Under-the-tongue delivery means no swallowing, no water, no sitting up. Works from the position you\'re already in.',
    credential: '60 servings · 0.2ml each',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
]

const certs = [
  'ISO FSSC 22000 V6',
  'GMP Certified',
  'FSSAI Certified',
  'Non-GMO',
  'No Added Sugar',
]

export default function TrustStack() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        background: '#F1F0FA',
        backgroundImage: 'radial-gradient(circle, rgba(30,33,64,0.055) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section header */}
        <div className="flex flex-col gap-3 text-center">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#FAF9F6', color: '#6B6B7A' }}
          >
            Why it works
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-snug"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            The credentials are built in, not bolted on.
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}
          >
            Every decision in the formulation — dose, delivery format, ingredient list — was made
            by people who treat sleep disorders, not by a marketing brief.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tags.map((tag) => (
            <div
              key={tag.label}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{ background: '#FAF9F6', borderRadius: '20px' }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl"
                style={{
                  background: '#F1F0FA',
                  border: '1.5px solid rgba(185,179,232,0.45)',
                  color: '#1E2140',
                  borderRadius: '16px',
                }}
              >
                {tag.icon}
              </div>

              {/* Label + detail */}
              <div className="flex flex-col gap-2 flex-1">
                <span
                  className="font-semibold text-lg"
                  style={{ color: '#1E2140', fontFamily: 'Fraunces, Georgia, serif' }}
                >
                  {tag.label}
                </span>
                <p
                  className="text-sm"
                  style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}
                >
                  {tag.detail}
                </p>
              </div>

              {/* Amber credential */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(185,179,232,0.35)' }}
              >
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: '#E8A94C', fontFamily: 'Inter, sans-serif' }}
                >
                  {tag.credential}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {certs.map((c) => (
            <span
              key={c}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full"
              style={{
                background: 'rgba(30,33,64,0.07)',
                color: '#6B6B7A',
                fontFamily: 'Inter, sans-serif',
                border: '1px solid rgba(185,179,232,0.3)',
              }}
            >
              {c}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
