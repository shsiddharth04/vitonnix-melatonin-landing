export default function Benefits() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: '#FAF9F6' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 text-center max-w-xl">
          <span
            className="inline-block self-center text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: '#F1F0FA', color: '#6B6B7A' }}
          >
            What you'll notice
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-snug"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1E2140' }}
          >
            More than just falling asleep faster.
          </h2>
        </div>
        <div className="w-full rounded-2xl overflow-hidden" style={{ borderRadius: '20px' }}>
          <img
            src="/assets/Melatonin_b35b150b-332c-4eb5-b256-4666e3d30648.webp"
            alt="Vitonnix Melatonin benefits — calm and relaxed mind, deep and restful sleep, refreshed mornings, jet lag recovery"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
