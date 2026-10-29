import { LenisProvider } from '@/components/LenisProvider';
import { Navigation } from '@/components/Navigation';
import { ScrollStory } from '@/components/ScrollStory';
import { Footer } from '@/components/Footer';
import { LoaderProvider } from '@/components/LoaderContext';
import { IntroLoader } from '@/components/IntroLoader';
import { ScrollPrompt } from '@/components/ScrollPrompt';
import { ClimateImpactCards } from '@/components/ClimateImpactCards';
import { ClimateNewsSection } from '@/components/ClimateNewsSection';
import { HowPlantPulseHelps } from '@/components/HowPlantPulseHelps';

export default function Home() {
  return (
    <LoaderProvider>
      <LenisProvider>
        <main className="min-h-screen bg-black">
          <IntroLoader />
          <Navigation />
          <ScrollPrompt />
          
          {/* The Frame-by-Frame Cinematic Experience */}
          <ScrollStory />
        
        {/* Vibrant Living Bento Grid Section */}
        <section id="platform" className="relative z-20 bg-black pt-32 pb-36 px-4 md:px-8 lg:px-16">
          
          {/* Custom Curved Notch Divider (Allowed to bleed up into the video) */}
          <div className="absolute top-0 left-0 w-full flex items-stretch -translate-y-[calc(100%-1px)] pointer-events-none">
            <div className="flex-1 bg-black border-t border-white/10"></div>
            
            <svg viewBox="0 0 480 61" className="w-[300px] md:w-[480px] flex-shrink-0 overflow-visible">
              <path d="M0,0.5 C80,0.5 80,59.5 160,59.5 L320,59.5 C400,59.5 400,0.5 480,0.5 L480,61 L0,61 Z" fill="black" />
              <path d="M0,0.5 C80,0.5 80,59.5 160,59.5 L320,59.5 C400,59.5 400,0.5 480,0.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            
            <div className="flex-1 bg-black border-t border-white/10"></div>
          </div>

          {/* Ambient Living Background (Safely clipped) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-400/10 rounded-full blur-[140px] opacity-40 transform-gpu"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Hero Header - Safety Shadow Focus */}
            <div className="mb-16 md:w-4/5">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 group cursor-default">
                <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-300"></span>
                </div>
                <span className="text-zinc-300 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-500">
                  Silent Guardian
                </span>
                <div className="w-px h-3 bg-white/20 mx-2"></div>
                <span className="text-white/40 font-mono text-[10px] sm:text-xs tracking-widest uppercase">Seva First Challenge 2026</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tighter mb-6 leading-[1.05] text-white">
                Not just an alarm. <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  A guardian that notices.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl mb-10">
                A ₹1,500 privacy-first wearable that learns what a normal journey looks like, spots anomalies early, quietly asks &quot;are you okay?&quot;, and hands families and police a verified &quot;Last Safe Point&quot; instead of &quot;Location Unknown&quot;.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">₹1,500</div>
                  <div className="text-white/40 text-xs mt-1">Prototype Unit Cost (vs ₹10k)</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-300 font-mono">20 Hours</div>
                  <div className="text-white/40 text-xs mt-1">500 mAh Battery Life</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">45 Sec</div>
                  <div className="text-white/40 text-xs mt-1">Silent Check Auto-Timeout</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-300 font-mono">100%</div>
                  <div className="text-white/40 text-xs mt-1">DPDP Act 2023 Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 6 Critical Gaps / Why Safety Tools Arrive Too Late */}
        <ClimateImpactCards />

        {/* Hardware & Engineering Section */}
        <section id="hardware" className="relative z-20 bg-[#040404] pt-24 pb-28 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-zinc-400 font-mono tracking-[0.2em] uppercase mb-4">
                  Hardware Architecture
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">
                  Under the Hood: ₹1,500 Component Bill
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-2xl">
                  Packaged into a compact 40 × 40 × 12 mm wearable watch case with a custom 35 × 28 mm PCB, delivering laboratory-tested sensing at a fraction of smartwatch costs.
                </p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-right">
                <span className="text-xs text-white/40 uppercase tracking-widest font-mono">Total Unit Cost</span>
                <div className="text-3xl font-black text-zinc-200 font-mono">₹1,500</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { part: 'ESP32-C3 SuperMini', job: 'Brain, Bluetooth LE link to phone app', size: '21 × 17.5 mm', cost: '₹350' },
                { part: 'MPU6050 Motion Sensor', job: 'Detects physical falls (>2.5g), impact & sudden motion', size: '15 × 20 mm', cost: '₹150' },
                { part: 'Coin Vibration + Tactile Switch', job: 'Silent buzz check-in output, haptic user taps input', size: '10 × 2.7 mm motor', cost: '₹150' },
                { part: '500 mAh LiPo + Type-C Charger', job: '20-hour runtime covering 2 full school days of usage', size: '30 × 20 × 4 mm', cost: '₹250' },
                { part: 'Custom PCB + Watch Casing', job: 'Houses electronics securely in a 40 × 40 × 12 mm case', size: '35 × 28 mm PCB', cost: '₹200' },
                { part: 'Reinforced Wearable Strap', job: 'Comfortable band engineered to resist loss or snatching', size: 'Standard fit', cost: '₹400' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/8 hover:border-zinc-400/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{item.size}</span>
                      <span className="text-base font-bold text-white font-mono">{item.cost}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.part}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Escalation & Response Timeline (SVG Chart) */}
        <section id="trends" className="relative z-20 bg-[#020202] pt-20 pb-28 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-white">
                  Incident Escalation & Search-Time Impact
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-3xl">
                  Comparing traditional SOS app failures with Safety Shadow&apos;s graduated autonomous detection — cutting search windows by up to 50% through verified Last Safe Point coordinates.
                </p>
              </div>
              
              {/* Legend */}
              <div className="flex flex-wrap gap-4 bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-full px-6 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-1 bg-[#f43f5e] rounded-full"></div>
                  <span className="text-xs font-medium text-white">Traditional SOS Delay</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-1 bg-[#ffb020] rounded-full"></div>
                  <span className="text-xs font-medium text-white">Panic Freeze Failure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-1 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-xs font-medium text-white">Anomaly Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-1 bg-zinc-300 rounded-full"></div>
                  <span className="text-xs font-medium text-white">Search-Time Cut (~50%)</span>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="w-full relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 md:p-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/5 to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              {/* Flex Layout Chart Area */}
              <div className="w-full h-[300px] md:h-[400px] mt-8 flex flex-col">
                
                {/* Top Section: Y-Axis + Graph Canvas */}
                <div className="flex flex-1 w-full relative">
                  
                  {/* Y-Axis */}
                  <div className="w-12 md:w-16 h-full relative border-r border-white/10 pr-4 text-white/40 text-[10px] md:text-xs font-mono pb-2">
                    <span className="absolute top-0 right-4 translate-y-[-50%]">100%</span>
                    <span className="absolute top-[25%] right-4 translate-y-[-50%]">75%</span>
                    <span className="absolute top-[50%] right-4 translate-y-[-50%]">50%</span>
                    <span className="absolute top-[75%] right-4 translate-y-[-50%]">25%</span>
                    <span className="absolute bottom-2 right-4 translate-y-[50%]">0%</span>
                  </div>

                  {/* SVG Canvas Area */}
                  <div className="flex-1 h-full relative pb-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                      
                      {/* Horizontal Grid Lines */}
                      <path d="M0,75 L1000,75 M0,150 L1000,150 M0,225 L1000,225" stroke="rgba(255,255,255,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" strokeDasharray="4 4" />
                      
                        {/* Traditional SOS Search Delay (Red) */}
                        <path d="M0,260 L100,240 L200,220 L300,190 L400,160 L500,130 L600,100 L700,75 L800,55 L900,40 L1000,25" fill="none" stroke="#f43f5e" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Panic Freeze Failure (Orange) */}
                        <path d="M0,280 L100,270 L200,250 L300,230 L400,210 L500,200 L600,190 L700,180 L800,175 L900,170 L1000,165" fill="none" stroke="#ffb020" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Anomaly Detection Rate (Blue) */}
                        <path d="M0,280 L100,260 L200,220 L300,180 L400,140 L500,110 L600,85 L700,65 L800,50 L900,40 L1000,30" fill="none" stroke="#60a5fa" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Search Time Reduction with Last Safe Point (Silver Grey) */}
                        <path d="M0,270 L100,250 L200,230 L300,210 L400,180 L500,150 L600,130 L700,110 L800,95 L900,85 L1000,75" fill="none" stroke="#d4d4d8" strokeWidth="3.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                      
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(212,212,216,0.3)" />
                          <stop offset="100%" stopColor="rgba(212,212,216,0)" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Interactive Hover Markers */}
                    <div className="absolute left-[38%] top-[35%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-[#60a5fa] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_12px_rgba(96,165,250,0.5)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 bg-black/90 border border-white/10 backdrop-blur-xl rounded-xl p-3 w-52 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-white text-xs font-semibold mb-1">Route Deviation &gt; 500m</p>
                        <p className="text-white/50 text-[10px]">Autonomous sensing flags deviation without user action</p>
                      </div>
                    </div>

                    <div className="absolute right-[22%] top-[20%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-zinc-300 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_12px_rgba(212,212,216,0.5)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 right-0 bg-black/90 border border-zinc-400/40 backdrop-blur-xl rounded-xl p-3 w-56 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-zinc-200 text-sm font-bold mb-0.5">Last Safe Point Logged</p>
                        <p className="text-white/50 text-[10px]">&quot;7:42 PM at Metro Gate 3&quot; hands police immediate CCTV focus</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: X-Axis Spacer + Labels */}
                <div className="flex w-full h-8">
                  <div className="w-12 md:w-16 shrink-0"></div>
                  <div className="flex-1 relative border-t border-white/10 pt-3 text-white/40 text-[10px] md:text-xs font-mono">
                    <span className="absolute left-0 top-3">0 min (Normal)</span>
                    <span className="absolute left-[33%] top-3 -translate-x-1/2">+15 min (Stop Detected)</span>
                    <span className="absolute left-[66%] top-3 -translate-x-1/2">45s (Silent Timeout)</span>
                    <span className="absolute right-0 top-3">2 min (Escalated to Police)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Autonomous Flow (Learn, Detect, Confirm, Escalate) */}
        <HowPlantPulseHelps />

        {/* Voices from the Field & Research Evidence */}
        <ClimateNewsSection />

        {/* SHADOW SQUAD TEAM SECTION */}
        <section id="team" className="relative z-20 bg-[#050505] pt-32 pb-24 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-zinc-400 font-mono tracking-[0.2em] uppercase mb-6">
                Project Creators
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">
                Meet the Shadow Squad
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                Class 10 student innovators from CM SHRI Yamuna Vihar, Delhi — selected for the Seva First Innovation Challenge 2026 (Junior Level, Class 6–12) under the theme of Local Community Level Innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Bhargavi Gupta',
                  role: 'Team Leader & Software Lead',
                  school: 'Class 10, CM SHRI Yamuna Vihar',
                  focus: 'Flutter mobile application flow, Firebase emergency dashboard design, and multi-tier escalation state machine.',
                  photo: '/Members/bhargavi.jpg'
                },
                {
                  name: 'Arohi Rawat',
                  role: 'Idea, Documentation & Coordination',
                  school: 'Class 10, CM SHRI Yamuna Vihar',
                  focus: 'Core concept design, parent & teacher survey coordination, DPDP Act 2023 compliance research, and testing.',
                  photo: '/Members/arohi.jpg'
                },
                {
                  name: 'Dhruv Sharma',
                  role: 'Hardware & Circuit Lead',
                  school: 'Class 10, CM SHRI Yamuna Vihar',
                  focus: 'Circuit schematics, ESP32-C3 SuperMini firmware, MPU6050 fall calibration, and Wokwi simulation testing.',
                  photo: '/Members/dhruv.jpg'
                }
              ].map((member, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-zinc-400/40 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
                  <div className="w-full aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-zinc-400/15 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10"></div>
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6 relative z-20 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent -mt-24 pt-16 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-zinc-200 transition-colors duration-300">{member.name}</h3>
                      <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider mb-1">{member.role}</p>
                      <p className="text-white/40 text-xs mb-4">{member.school}</p>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed border-t border-white/5 pt-3">{member.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Stage & TRL Banner */}
            <div className="mt-16 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Readiness Status</span>
                <h4 className="text-2xl font-bold text-white mt-1">TRL 2 Concept Complete → Targeting TRL 4 Lab Validation</h4>
                <p className="text-white/50 text-sm mt-1 max-w-2xl">
                  Circuit plans, firmware structure, and parent app flows are verified. Next milestone is school and college pilots (TRL 6) across 150+ students.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-white/70">Seva First 2026</span>
                <span className="px-4 py-2 rounded-full border border-zinc-400/30 bg-zinc-400/10 text-xs font-mono text-zinc-300 font-semibold">Junior Level</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </LenisProvider>
    </LoaderProvider>
  );
}
