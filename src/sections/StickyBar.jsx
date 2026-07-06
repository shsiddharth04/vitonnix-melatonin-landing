import { useState, useEffect } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById('hero')
      if (!hero) return
      setVisible(window.scrollY > hero.offsetHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        background: '#1E2140',
        borderTop: '1px solid rgba(185,179,232,0.15)',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.2)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="font-semibold text-sm" style={{ color: '#FAF9F6', fontFamily: 'Inter, sans-serif' }}>
            Vitonnix Melatonin Spray
          </span>
          <span className="text-xs" style={{ color: '#9b96c4', fontFamily: 'Inter, sans-serif' }}>
            ₹1,299 · 60 servings · ₹21.65/night
          </span>
        </div>
        <a
          href="#offer"
          className="px-6 py-2.5 rounded-xl font-semibold text-sm flex-shrink-0 transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: '#E8A94C', color: '#1E2140', borderRadius: '12px', fontFamily: 'Inter, sans-serif' }}
        >
          Add to cart
        </a>
      </div>
    </div>
  )
}
