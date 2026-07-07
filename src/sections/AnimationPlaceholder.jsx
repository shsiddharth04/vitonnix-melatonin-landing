export default function AnimationPlaceholder() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: '#F1F0FA' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Placeholder card */}
        <div
          className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed text-center"
          style={{
            minHeight: '480px',
            borderColor: '#B9B3E8',
            borderRadius: '20px',
            background: 'rgba(185,179,232,0.08)',
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: '#B9B3E8', borderRadius: '16px' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E2140" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="text-sm font-semibold" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>
              Canvas scroll-scrubber animation
            </p>
            <p className="text-sm" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              Source: <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#e8e4f0', color: '#1E2140' }}>make_the_background_pop_a_bit.mp4</code>
            </p>
            <p className="text-sm" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              Step 2: extract frames with ffmpeg, wire pinned canvas + scroll-to-frame mapping, text callouts at beat points.
            </p>
          </div>

          {/* Callout previews */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {[
              '0.2ml precision dose — no measuring, no guessing',
              'Doctor-formulated in the UK',
              'Absorbs before you\'d finish reading this sentence',
            ].map((text) => (
              <span
                key={text}
                className="text-xs px-4 py-2 rounded-full font-medium"
                style={{ background: '#26155a', color: '#FAF9F6', fontFamily: 'Inter, sans-serif' }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
