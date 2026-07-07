const testimonials = [
  {
    initials: 'RK',
    name: 'Rohit K.',
    location: 'Bengaluru',
    quote: 'I\'ve tried melatonin tablets before and always woke up groggy. With this I\'m asleep within twenty minutes and actually feel rested. The spray thing was weird at first — now I can\'t imagine doing it any other way.',
    stars: 5,
  },
  {
    initials: 'PM',
    name: 'Priya M.',
    location: 'Mumbai',
    quote: 'Work deadlines mean I\'m on my phone until midnight. I started using this about a month ago. The difference is subtle but consistent — it\'s like my brain gets the memo that we\'re done for the day.',
    stars: 5,
  },
  {
    initials: 'AS',
    name: 'Arjun S.',
    location: 'Delhi',
    quote: 'Tried it mostly out of curiosity. Two weeks in and I\'m genuinely falling asleep faster. The lychee-mint flavour is mild. No weird taste, no aftertaste.',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E8A94C" stroke="#E8A94C" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
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
        <div className="flex flex-col gap-3 text-center">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#FAF9F6', color: '#6B6B7A' }}
          >
            Real people
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            What the first month looks like
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 p-6 rounded-2xl"
              style={{ background: '#FAF9F6', borderRadius: '20px' }}
            >
              <Stars count={t.stars} />
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: '#1E2140', color: '#FAF9F6', fontFamily: 'Inter, sans-serif' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
