export default function LabelTransparency() {
  const ingredients = [
    { name: 'Melatonin', amount: '2.00 mg per serving', note: 'Active ingredient for sleep onset support' },
    { name: 'Vitamin B6', amount: '0.5 mg', note: 'Supports melatonin synthesis' },
    { name: 'L-Theanine', amount: '50 mg', note: 'Calm without drowsiness' },
    { name: 'Lychee extract', amount: 'Natural flavour base', note: 'No added sugar' },
  ]

  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        background: '#FAF9F6',
        backgroundImage: 'radial-gradient(circle, rgba(185,179,232,0.16) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Product image */}
        <div className="rounded-2xl overflow-hidden sticky top-8" style={{ borderRadius: '20px' }}>
          <img
            src="/assets/mela.webp"
            alt="Vitonnix Melatonin — product and packaging showing full label"
            className="w-full object-contain"
            style={{ background: '#F1F0FA' }}
          />
        </div>

        {/* Ingredient breakdown */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span
              className="inline-block self-start text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: '#F1F0FA', color: '#6B6B7A' }}
            >
              What's inside
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-snug"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
            >
              Nothing hidden. Every ingredient, in plain terms.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
              A 12ml bottle. 60 servings. Each serving is 0.2ml — one spray.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className="flex flex-col gap-1 p-4 rounded-2xl"
                style={{ background: '#F1F0FA', borderRadius: '16px' }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-sm" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>
                    {ing.name}
                  </span>
                  <span className="text-sm font-medium" style={{ color: '#E8A94C', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
                    {ing.amount}
                  </span>
                </div>
                <span className="text-xs" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>
                  {ing.note}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ borderRadius: '16px', background: '#F1F0FA' }}>
            <img
              src="/assets/Vitonnix_Melatonin_3.webp"
              alt="Vitonnix certifications: ISO FSSC 22000 V6, No Added Sugar, GMP Certified, FSSAI Certified, Non-GMO"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
