const steps = [
  {
    n: '01',
    heading: 'Shake and spray once under the tongue',
    body: 'One press of the pump delivers exactly 0.3ml — the dose you need, no more.',
  },
  {
    n: '02',
    heading: 'No water. No swallowing. Works lying down in the dark.',
    body: 'The mist absorbs through the sublingual tissue. You don\'t need to sit up, turn on a light, or find a glass.',
  },
  {
    n: '03',
    heading: 'Lights off. Let it work.',
    body: 'Put the phone down. The wind-down has already started.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: '#FAF9F6' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#F1F0FA', color: '#6B6B7A' }}
          >
            How to use
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            Three steps. No bedside ritual required.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="flex gap-6 items-start p-6 rounded-2xl"
              style={{ background: '#F1F0FA', borderRadius: '20px' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm"
                style={{ background: '#1E2140', color: '#FAF9F6', fontFamily: 'Inter, sans-serif', borderRadius: '12px' }}
              >
                {step.n}
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-semibold text-base" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>
                  {step.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
