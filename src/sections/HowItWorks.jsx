const steps = [
  {
    n: '01',
    heading: 'Shake and spray once under the tongue',
    body: 'One press of the pump delivers exactly 0.2ml — the dose you need, no more.',
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

function SprayIllustration() {
  return (
    <svg viewBox="0 0 240 310" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[200px]" aria-hidden="true">
      {/* Ambient glow behind bottle */}
      <ellipse cx="120" cy="185" rx="82" ry="105" fill="rgba(185,179,232,0.11)" />

      {/* Bottle body */}
      <rect x="84" y="120" width="72" height="162" rx="15" fill="#252847" />

      {/* Label band */}
      <rect x="84" y="178" width="72" height="62" fill="rgba(185,179,232,0.18)" />

      {/* Label text lines */}
      <rect x="96" y="188" width="48" height="4.5" rx="2.25" fill="#B9B3E8" opacity="0.75" />
      <rect x="100" y="200" width="40" height="3" rx="1.5" fill="#B9B3E8" opacity="0.48" />
      <rect x="96" y="210" width="48" height="3" rx="1.5" fill="#B9B3E8" opacity="0.32" />
      <rect x="100" y="220" width="40" height="2.5" rx="1.25" fill="#B9B3E8" opacity="0.22" />

      {/* Bottle neck */}
      <rect x="100" y="96" width="40" height="24" rx="7" fill="#252847" />

      {/* Cap / pump collar */}
      <rect x="92" y="81" width="56" height="15" rx="5.5" fill="#2e3260" />

      {/* Pump stem */}
      <rect x="113" y="50" width="14" height="31" rx="4" fill="#2e3260" />

      {/* Nozzle head */}
      <ellipse cx="120" cy="48" r="7.5" fill="#363870" />

      {/* Spray particles — center arc */}
      <circle cx="120" cy="31" r="4.5" fill="#B9B3E8" opacity="0.62" />
      <circle cx="120" cy="20" r="3.5" fill="#B9B3E8" opacity="0.42" />
      <circle cx="120" cy="11" r="2.5" fill="#B9B3E8" opacity="0.26" />

      {/* Spray particles — left arc */}
      <circle cx="103" cy="34" r="4" fill="#B9B3E8" opacity="0.52" />
      <circle cx="91"  cy="26" r="3" fill="#B9B3E8" opacity="0.34" />
      <circle cx="80"  cy="19" r="2" fill="#B9B3E8" opacity="0.2" />

      {/* Spray particles — right arc */}
      <circle cx="137" cy="34" r="4" fill="#B9B3E8" opacity="0.52" />
      <circle cx="149" cy="26" r="3" fill="#B9B3E8" opacity="0.34" />
      <circle cx="160" cy="19" r="2" fill="#B9B3E8" opacity="0.2" />

      {/* Fine mist fill */}
      <circle cx="111" cy="23" r="2"   fill="#B9B3E8" opacity="0.29" />
      <circle cx="129" cy="23" r="2"   fill="#B9B3E8" opacity="0.29" />
      <circle cx="97"  cy="16" r="1.5" fill="#B9B3E8" opacity="0.18" />
      <circle cx="143" cy="16" r="1.5" fill="#B9B3E8" opacity="0.18" />

      {/* Moon crescent — top left */}
      <circle cx="34" cy="76" r="18" fill="#E8A94C" opacity="0.72" />
      <circle cx="44" cy="70" r="14" fill="#1E2140" />

      {/* Scattered stars */}
      <circle cx="198" cy="60"  r="2.5" fill="#B9B3E8" opacity="0.62" />
      <circle cx="212" cy="92"  r="1.5" fill="#B9B3E8" opacity="0.42" />
      <circle cx="202" cy="112" r="1"   fill="#B9B3E8" opacity="0.48" />
      <circle cx="26"  cy="122" r="1.5" fill="#B9B3E8" opacity="0.45" />
      <circle cx="40"  cy="46"  r="1"   fill="#B9B3E8" opacity="0.36" />
      <circle cx="218" cy="140" r="1"   fill="#B9B3E8" opacity="0.32" />

      {/* Amber accent dot */}
      <circle cx="188" cy="44" r="2.5" fill="#E8A94C" opacity="0.52" />

      {/* Ground shadow */}
      <ellipse cx="120" cy="284" rx="44" ry="6" fill="#1E2140" opacity="0.08" />
    </svg>
  )
}

export default function HowItWorks() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        background: '#FAF9F6',
        backgroundImage: 'radial-gradient(circle, rgba(185,179,232,0.16) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: heading + steps */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="inline-block self-start text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: '#F1F0FA', color: '#6B6B7A' }}
              >
                How to use
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold leading-snug"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
              >
                Three steps. No bedside ritual required.
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="flex gap-5 items-start p-6 rounded-2xl"
                  style={{ background: '#F1F0FA', borderRadius: '20px' }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm"
                    style={{
                      background: '#1E2140',
                      color: '#FAF9F6',
                      fontFamily: 'Inter, sans-serif',
                      borderRadius: '12px',
                    }}
                  >
                    {step.n}
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.heading}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustrated dark panel — hidden on mobile */}
          <div
            className="hidden md:flex flex-col items-center justify-center rounded-3xl py-12 px-8"
            style={{
              background: '#1E2140',
              borderRadius: '24px',
              minHeight: '440px',
            }}
          >
            <SprayIllustration />

            {/* Caption below illustration */}
            <div className="mt-8 flex flex-col gap-2 text-center max-w-[200px]">
              <p
                className="text-xs font-medium tracking-wider uppercase"
                style={{ color: '#B9B3E8', fontFamily: 'Inter, sans-serif', opacity: 0.7 }}
              >
                0.2ml per spray
              </p>
              <p
                className="text-xs"
                style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
              >
                Precision-dosed. Works lying down.
                No water. No light.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
