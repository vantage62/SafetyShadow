const sdgGoals = [
  {
    number: '11',
    title: 'Sustainable Cities & Communities',
    description: 'Make cities and human settlements inclusive, safe, resilient, and sustainable.',
    contribution: 'Safety Shadow safeguards daily school commutes and public transport routes with community-level safety nets, cutting search times by up to 50%.',
    color: '#f99d26',
    emphasis: true,
  },
  {
    number: '5',
    title: 'Gender Equality',
    description: 'End all forms of discrimination and violence against all women and girls in public and private spheres.',
    contribution: 'Silent haptic check-ins and non-provoking alerts protect college girls and working women across Delhi Metro, buses, and autos.',
    color: '#ef4a60',
  },
  {
    number: '3',
    title: 'Good Health and Well-Being',
    description: 'Ensure healthy lives and promote well-being for all at all ages through proactive emergency response.',
    contribution: 'Integrated MPU6050 2.5g fall detection immediately triggers emergency check-ins for elderly individuals living alone.',
    color: '#4c9f38',
  },
  {
    number: '16',
    title: 'Peace, Justice & Strong Institutions',
    description: 'Significantly reduce all forms of violence and work with communities to secure safety and human rights.',
    contribution: 'Verified Last Safe Point logs provide emergency responders and police with actionable timestamps to review targeted CCTV footage.',
    color: '#00689d',
  },
];

export function SDGImpactSection() {
  const featuredGoal = sdgGoals[0];
  const supportingGoals = sdgGoals.slice(1);

  return (
    <section id="sdg-impact" className="relative z-20 bg-[#030303] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#10b981]/10 blur-[120px] opacity-40" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#047857]/10 blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-[#10b981] font-mono tracking-[0.2em] uppercase mb-6">
            Sustainable Development
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Supporting the UN Sustainable Development Goals
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl">
            Safety Shadow aligns with global sustainability by creating safe, dignified, and surveillance-free urban mobility for children, women, and the elderly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/15 via-transparent to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between gap-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 mb-5">
                    Primary focus
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                    SDG {featuredGoal.number} — {featuredGoal.title}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-6">
                    {featuredGoal.description}
                  </p>
                </div>

                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[2rem] border border-white/10 bg-black/50 shadow-[0_0_40px_rgba(249,157,38,0.2)]" style={{ color: featuredGoal.color }}>
                  <div className="text-center">
                    <div className="text-[11px] uppercase tracking-[0.32em] text-white/40">SDG</div>
                    <div className="text-4xl font-black leading-none">{featuredGoal.number}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Verified Last Safe Point coordinates for police & parents',
                  'Zero-hardware web dashboard for Delhi schools & colleges',
                  'Discreet haptic alerts prevent attacker provocation on transit',
                  'Strict compliance with India\'s DPDP Act 2023 data rights',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/40 p-4 text-white/75 leading-relaxed text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/40 p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-3">Safety Shadow Contribution</div>
                <p className="text-white/70 leading-relaxed text-sm">{featuredGoal.contribution}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {supportingGoals.map((goal) => (
              <article key={goal.number} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${goal.color}22, transparent)` }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-white shadow-[0_0_20px_rgba(0,0,0,0.18)]" style={{ boxShadow: `0 0 0 1px ${goal.color}22, 0 12px 28px rgba(0,0,0,0.2)` }}>
                    <div className="text-center" style={{ color: goal.color }}>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/35">SDG</div>
                      <div className="text-2xl font-black leading-none">{goal.number}</div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-white mb-2">SDG {goal.number}: {goal.title}</h3>
                    <p className="text-white/55 leading-relaxed mb-4 text-sm">{goal.description}</p>
                    <div className="rounded-2xl border border-white/8 bg-black/40 p-4">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Safety Shadow Impact</div>
                      <p className="text-white/75 leading-relaxed text-xs">{goal.contribution}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
