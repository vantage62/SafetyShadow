'use client';

export function ClimateMapInfoSection() {
  return (
    <div className="mb-10 md:mb-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)] gap-6 items-end">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
          <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-[#10b981] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">Transit Safety Matrix</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white leading-[1.02]">
          Target Transit Corridors & Safe Zones
        </h2>
        <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
          From Delhi government schools and Delhi Metro corridors to bus networks and elderly care communities, Safety Shadow establishes an invisible digital guardian along every journey.
        </p>
        <p className="mt-4 text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          Designed specifically for the 20+ lakh Delhi students travelling daily, college girls navigating peak transit, and police search units who need verified Last Safe Points instead of dead ends.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
        {[
          { label: 'Delhi Transit Volume', value: '20+ Lakh Students Daily', tone: 'from-[#10b981]/20 to-transparent' },
          { label: 'Public Transit Anxiety', value: '1 in 3 Women Affected', tone: 'from-white/10 to-transparent' },
          { label: 'Emergency Target', value: '~50% Search-Time Cut', tone: 'from-[#047857]/20 to-transparent' },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${item.tone} p-4 backdrop-blur-md`}>
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">{item.label}</div>
            <div className="text-sm md:text-base text-white/80 font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
