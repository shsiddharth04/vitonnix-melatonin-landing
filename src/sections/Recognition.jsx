export default function Recognition() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        background: '#F1F0FA',
        backgroundImage: 'radial-gradient(circle, rgba(30,33,64,0.055) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <span
            className="inline-block self-start text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#FAF9F6', color: '#6B6B7A' }}
          >
            Why it works
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-snug"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            The scroll isn't the problem.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            It's what happens after you put the phone down — mind still racing, twenty more minutes before sleep even starts trying.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            Vitonnix works in the fifteen minutes your brain actually needs it — not the forty a tablet takes to kick in.
          </p>
          <div
            className="flex items-center gap-3 p-4 rounded-2xl"
            style={{ background: '#FAF9F6', borderRadius: '20px' }}
          >
            <div
              className="w-1 self-stretch rounded-full flex-shrink-0"
              style={{ background: '#B9B3E8' }}
            />
            <p className="text-sm italic" style={{ color: '#1E2140', fontFamily: 'Fraunces, Georgia, serif' }}>
              "Sublingual delivery means the active dose enters your bloodstream directly through the tissue under your tongue — no stomach, no waiting."
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden" style={{ borderRadius: '20px' }}>
          <img
            src="/assets/mela_e49a387e-6825-4dbb-b37b-6a239426c3f8.webp"
            alt="Vitonnix Melatonin spray with lychee and mint — the natural flavour ingredients"
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}
