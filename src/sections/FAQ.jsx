import { useState } from 'react'

const faqs = [
  {
    q: 'Will I feel groggy the next morning?',
    a: 'Vitonnix is dosed specifically for wind-down, not sedation. At 2mg per serving — delivered sublingually so it works faster than a tablet — it signals your brain that it\'s time to sleep without the heavy-headed feeling larger oral doses create. Most people report waking up clear.',
  },
  {
    q: 'Is this something I\'ll need forever?',
    a: 'No. Melatonin works best as a short-term reset, not a permanent crutch. Most people use it for 3–6 weeks to rebuild a consistent sleep rhythm, then phase it out. The goal is that your body finds its own timing again.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'Return the bottle within 30 days of purchase for a full refund — no form to fill, no reason needed. Reach us at support@vitonnix.com and we\'ll sort it.',
  },
]

function Item({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#F1F0FA', borderRadius: '16px' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            {faq.a}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
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
            Common questions
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            Before you try it
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <Item key={f.q} faq={f} />
          ))}
        </div>
      </div>
    </section>
  )
}
