import React from 'react';

export function HowPlantPulseHelps() {
  const cards = [
    {
      step: '01',
      title: '1. Learn the Route',
      desc: 'Learns regular commute patterns within 3–4 days. Stores local route boundaries without keeping a continuous 24x7 surveillance trail.',
      badge: 'Privacy-First',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      step: '02',
      title: '2. Detect Abnormalities',
      desc: 'Autonomous MPU6050 sensing flags route deviations > 500m, unknown stops > 15 minutes, physical falls > 2.5g, or strap tampering.',
      badge: 'Edge Sensing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      step: '03',
      title: '3. Silent Confirmation',
      desc: 'Quiet haptic pulse checks in: 1 tap ("I am OK"), 2 taps ("Need help"), 3 taps (silent danger), long press (cancel). No reply in 45s auto-escalates.',
      badge: 'Silent Check',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      step: '04',
      title: '4. Multi-Tier Escalation',
      desc: 'App alerts parent first. No acknowledgment in 2 mins triggers secondary contact, school dashboard, and dispatches verified Last Safe Point to police.',
      badge: 'Last Safe Point',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative z-20 bg-[#050505] pt-24 pb-28 px-4 md:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-zinc-400 font-mono tracking-[0.2em] uppercase mb-6">
            System Flow • 4 Steps
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Silent Check First. Escalation Second.
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            Nobody should have to remember to unlock a phone or press a panic button during an emergency. Safety Shadow acts autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-7 hover:border-zinc-400/40 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 text-zinc-300 group-hover:scale-110 transition-transform duration-300">
                    {c.icon}
                  </div>
                  <span className="font-mono text-xs tracking-widest text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-400/25 bg-zinc-400/10 uppercase font-semibold">
                    {c.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{c.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono tracking-widest text-white/30 uppercase">
                Step {c.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
