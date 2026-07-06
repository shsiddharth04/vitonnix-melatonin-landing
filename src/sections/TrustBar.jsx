export default function TrustBar() {
  const badges = [
    { name: 'Amazon', icon: '📦' },
    { name: '1mg', icon: '💊' },
    { name: 'Flipkart', icon: '🛒' },
    { name: 'PharmEasy', icon: '🏥' },
    { name: 'Netmeds', icon: '🩺' },
  ]

  return (
    <section
      className="py-5 px-6 border-b"
      style={{ background: '#FAF9F6', borderColor: '#e8e4f0' }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-center font-medium tracking-widest uppercase mb-4" style={{ color: '#6B6B7A' }}>
          Available on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((b) => (
            <div
              key={b.name}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: '#F1F0FA', color: '#1E2140', borderRadius: '12px' }}
            >
              <span>{b.icon}</span>
              <span style={{ fontFamily: 'Inter, sans-serif' }}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
