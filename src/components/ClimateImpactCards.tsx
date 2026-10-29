import {
  AlertTriangle,
  Coins,
  EyeOff,
  HeartPulse,
  MapPinOff,
  VolumeX,
} from 'lucide-react';

const problemCards = [
  {
    title: 'SOS Triggers Too Late',
    description: 'Alerts depend on a frightened person unlocking a phone and pressing a button. 90% of polled adults affirmed a child freezes in panic.',
    icon: AlertTriangle,
    accent: 'Panic Freeze',
  },
  {
    title: 'Loud Alarms Backfire',
    description: 'A 130 dB siren alerts the attacker, raising hostility and provoking violence instead of quietly summoning help for the victim.',
    icon: VolumeX,
    accent: 'Provocation Risk',
  },
  {
    title: '"Location Unknown" Trap',
    description: 'If the phone is snatched, switched off, or battery dies, parents and police see nothing, losing precious search hours.',
    icon: MapPinOff,
    accent: 'Dead Ends',
  },
  {
    title: 'Expensive Wearables',
    description: 'Commercial kids smartwatches cost ₹5,000–₹10,000 and require monthly SIM cellular plans that families cannot afford.',
    icon: Coins,
    accent: 'Cost Barrier',
  },
  {
    title: 'Surveillance & Drain',
    description: '24x7 continuous live tracking drains batteries in hours and violates student privacy. 80% of parents reject continuous GPS surveillance.',
    icon: EyeOff,
    accent: 'Privacy Violation',
  },
  {
    title: 'Unnoticed Falls & Shocks',
    description: 'Elderly individuals living alone who slip or fall cannot reach a phone or wall buzzer. Help fails to arrive in the golden hour.',
    icon: HeartPulse,
    accent: 'Silent Crises',
  },
];

export function ClimateImpactCards() {
  return (
    <section id="challenges" className="relative z-20 bg-[#030303] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-400/10 blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-zinc-400 font-mono tracking-[0.2em] uppercase mb-6">
            The Problem Space
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Why Today&apos;s Safety Tools Arrive Too Late
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl">
            Existing devices demand a deliberate SOS press — but panic is exactly when hands freeze. Four critical gaps leave children, women, and the elderly unprotected:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {problemCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-400/35 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-zinc-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-zinc-400/25 bg-zinc-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-300">
                      {card.accent}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">{card.title}</h3>
                    <p className="text-white/55 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
