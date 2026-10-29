const fieldEvidenceArticles = [
  {
    title: '100% of Parents Surveyed Demand "Last Safe Point"',
    summary: 'In an on-ground poll of 20 parents and educators at CM SHRI Yamuna Vihar, all 20 agreed a verified last-known safe coordinate is vastly superior to "Location Unknown".',
    source: 'Shadow Squad Field Survey',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    tag: 'Field Survey',
  },
  {
    title: '90% Acknowledge Panic Freezes Motor Response',
    summary: '18 of 20 respondents confirmed that children and victims in life-threatening distress cannot unlock a smartphone, navigate apps, or press tiny SOS buttons.',
    source: 'Behavioral Study',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Crisis Psychology',
  },
  {
    title: '1.05 Lakh Missing-Children Cases Reported Yearly in India',
    summary: 'NCRB data underscores that search time in the first golden hour is decisive. Verified Last Safe Point timestamps provide police with actionable CCTV review times.',
    source: 'NCRB Crime in India',
    date: '2026 Report',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    tag: 'National Data',
  },
  {
    title: '14+ Crore Indian Children Commute to School Daily',
    summary: 'UDISE+ estimates show over 14 crore students travelling daily, with 20+ lakh in Delhi alone. Most families cannot afford ₹5,000–₹10,000 smartwatches.',
    source: 'UDISE+ Census',
    date: 'Annual Bulletin',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Transit Scale',
  },
  {
    title: '1 in 3 Women Report Severe Anxiety on Public Transit',
    summary: 'Delhi commuter studies show college girls and working women frequently face harassment in buses, Metros, and autos, requiring discreet, silent assistance.',
    source: 'Delhi Transit Study',
    date: 'Safe City Mission',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    tag: 'Women Safety',
  },
  {
    title: 'Privacy by Design under India\'s DPDP Act 2023',
    summary: '80% of parents reject continuous surveillance. Safety Shadow stores only local route vectors taken every 10 minutes, ensuring strict legal data compliance.',
    source: 'DPDP Act Compliance',
    date: 'Statutory Review',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tag: 'Data Privacy',
  },
];

export function ClimateNewsSection() {
  return (
    <section id="evidence" className="relative z-20 bg-[#020202] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-zinc-400/10 blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-zinc-400 font-mono tracking-[0.2em] uppercase mb-6">
              Voices From the Field
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
              Ground Reality & Research Evidence
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl">
              Survey data gathered by Shadow Squad from parents, students, and teachers in Delhi, supported by national statistics from NCRB and UDISE+.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {fieldEvidenceArticles.map((article) => (
            <article
              key={article.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-400/30 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                  {article.tag}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4 text-xs text-white/35 uppercase tracking-[0.22em] font-mono mb-4">
                  <span>{article.source}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/55 leading-relaxed mb-6 text-sm">
                  {article.summary}
                </p>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 transition-all duration-300 group-hover:border-zinc-400/40 group-hover:bg-zinc-400/10 group-hover:text-zinc-200">
                  Verified Finding
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
