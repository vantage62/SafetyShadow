export function Footer() {
  return (
    <footer className="relative bg-[#020202] text-white pt-24 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-zinc-400/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 min-w-10 min-h-10 max-w-10 max-h-10 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(212,212,216,0.2)] shrink-0">
                <img src="/logo.svg" alt="Safety Shadow Logo" className="w-full h-full object-cover block" width={40} height={40} />
              </div>
              <span className="font-semibold text-2xl tracking-tight">Safety Shadow</span>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-4">
              Not just an alarm. A guardian that notices. A ₹1,500 privacy-first wearable created by Shadow Squad for the Seva First Innovation Challenge 2026.
            </p>
            <p className="text-zinc-400 text-xs font-mono tracking-wide mb-8">
              CM SHRI Yamuna Vihar, Delhi • Class 10
            </p>

            <div className="flex gap-4">
              <a href="#" aria-label="Project Repository" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-zinc-200 hover:border-zinc-400/40 hover:bg-zinc-400/10 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="#" aria-label="Community Updates" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Core System</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="#how-it-works" className="hover:text-zinc-300 transition-colors">Silent Haptic Check-in</a></li>
              <li><a href="#how-it-works" className="hover:text-zinc-300 transition-colors">Last Safe Point Engine</a></li>
              <li><a href="#platform" className="hover:text-zinc-300 transition-colors">ESP32-C3 Hardware</a></li>
              <li><a href="#platform" className="hover:text-zinc-300 transition-colors">Flutter & Firebase App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="#evidence" className="hover:text-white transition-colors">Field Survey Report</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware & Cost (₹1,500)</a></li>
              <li><a href="#evidence" className="hover:text-white transition-colors">DPDP Act 2023 Compliance</a></li>
              <li><a href="#trends" className="hover:text-white transition-colors">Incident Escalation Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Initiative</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="#team" className="hover:text-white transition-colors">Shadow Squad</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">CM SHRI Yamuna Vihar</a></li>
              <li><a href="#evidence" className="hover:text-white transition-colors">Seva First Challenge 2026</a></li>
              <li><a href="#evidence" className="hover:text-white transition-colors">Safe City Mission</a></li>
            </ul>
          </div>
        </div>

        {/* Big Stylized Typemark */}
        <div className="w-full border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-end gap-6 relative">
          <div className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none text-white/[0.04] select-none pointer-events-none mt-4 md:mt-0">
            SAFETY SHADOW
          </div>
          <div className="text-white/30 text-xs text-left md:text-right shrink-0 absolute bottom-4 right-0 md:relative md:bottom-auto">
            <p>© {new Date().getFullYear()} Shadow Squad • Seva First Innovation Challenge</p>
            <p className="mt-1">Not just an alarm. A guardian that notices.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
