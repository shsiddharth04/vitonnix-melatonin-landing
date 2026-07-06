export default function Science() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: '#F1F0FA' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 text-center max-w-xl">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#FAF9F6', color: '#6B6B7A' }}
          >
            The science
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-snug"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            Clinically studied. UK-developed.
          </h2>
        </div>
        <div className="w-full rounded-2xl overflow-hidden" style={{ borderRadius: '20px' }}>
          <img
            src="/assets/mela_c99921b0-5bf7-48f9-ad40-ff5fd7a7e176_1400x.webp"
            alt="Vitonnix Melatonin — clinically studied UK formulation supporting sleep onset, circadian rhythm, and sleep quality"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
