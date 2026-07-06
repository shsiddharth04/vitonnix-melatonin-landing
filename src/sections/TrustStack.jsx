const tags = [
  {
    label: 'Doctor led',
    detail: 'Formulated with sleep physicians',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: 'UK formulation',
    detail: 'Developed in London, held to EU standards',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: 'Sublingual spray',
    detail: 'Under-the-tongue delivery, no water needed',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
]

export default function TrustStack() {
  return (
    <section
      className="py-20 md:py-24 px-6"
      style={{ background: '#F1F0FA' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <div
              key={tag.label}
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl"
              style={{ background: '#FAF9F6', borderRadius: '20px' }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{ background: '#F1F0FA', color: '#1E2140', borderRadius: '14px' }}
              >
                {tag.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base" style={{ color: '#1E2140', fontFamily: 'Inter, sans-serif' }}>
                  {tag.label}
                </span>
                <span className="text-sm" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {tag.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
