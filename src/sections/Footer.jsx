export default function Footer() {
  const badges = ['Amazon', '1mg', 'Flipkart', 'PharmEasy', 'Netmeds']

  return (
    <footer
      className="py-12 px-6"
      style={{ background: '#1E2140', borderTop: '1px solid rgba(185,179,232,0.1)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-1">
          <span
            className="text-lg font-semibold"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#FAF9F6' }}
          >
            Vitonnix Melatonin
          </span>
          <span className="text-sm" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>
            Future of Vitamins
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs px-4 py-2 rounded-full"
              style={{ background: 'rgba(185,179,232,0.1)', color: '#9b96c4', fontFamily: 'Inter, sans-serif' }}
            >
              {b}
            </span>
          ))}
        </div>

        <div
          className="h-px w-full max-w-xs"
          style={{ background: 'rgba(185,179,232,0.15)' }}
        />

        <div className="flex flex-wrap justify-center gap-6 text-xs" style={{ color: '#6B6B7A', fontFamily: 'Inter, sans-serif' }}>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:support@vitonnix.com" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
        </div>

        <p className="text-xs" style={{ color: '#4a4966', fontFamily: 'Inter, sans-serif' }}>
          FSSAI Licensed · GMP Certified · ISO FSSC 22000 V6 · Non-GMO
        </p>
        <p className="text-xs" style={{ color: '#4a4966', fontFamily: 'Inter, sans-serif' }}>
          © 2024 Vitonnix. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
