export default function FloatingCTA() {
  return (
    <a
      href="tel:8167727001"
      className="fixed bottom-6 right-0 z-50 flex items-center gap-2 font-bold px-5 py-3 shadow-lg transition-colors duration-200 md:hidden btn-dark" style={{ background: "#111", color: "#fff" }}
    >
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-semibold uppercase tracking-wide">Call Us Now</span>
        <span className="text-sm font-bold">(816) 772-7001</span>
      </div>
    </a>
  )
}
