import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Cpu, Users, Layers, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';

interface EventModelerProps {
  onExportToConsultation: (summaryText: string) => void;
}

export default function EventModeler({ onExportToConsultation }: EventModelerProps) {
  const [category, setCategory] = useState<'Corporate' | 'Wedding' | 'Launch' | 'Gala'>('Launch');
  const [scale, setScale] = useState<'Boutique' | 'Premium' | 'Grand' | 'Epic'>('Premium');
  const [guestCount, setGuestCount] = useState<number>(250);
  const [productionGrade, setProductionGrade] = useState<'High-Tech' | 'Cinematic' | 'Sensory' | 'Royal'>('Sensory');
  
  // Custom interactive integrations
  const [addons, setAddons] = useState({
    projectionMapping: true,
    arExperience: false,
    sensoryScenting: true,
    aiHighlights: false,
  });

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Dynamic values calculation based on inputs
  const [stats, setStats] = useState({
    budgetMin: 15,
    budgetMax: 25,
    powerNeeded: 75,
    crewMembers: 18,
    timelineDays: 45,
  });

  useEffect(() => {
    // Basic reactive algorithm simulating realistic startup event planning calculations
    let baseMin = 10; // Lakhs
    let baseMax = 15;
    let crew = 10;
    let power = 30;
    let days = 30;

    // Category modifiers
    if (category === 'Corporate') {
      baseMin = 15; baseMax = 25; crew = 15; power = 60; days = 40;
    } else if (category === 'Wedding') {
      baseMin = 25; baseMax = 45; crew = 25; power = 45; days = 60;
    } else if (category === 'Launch') {
      baseMin = 20; baseMax = 35; crew = 20; power = 80; days = 35;
    } else if (category === 'Gala') {
      baseMin = 18; baseMax = 30; crew = 18; power = 50; days = 45;
    }

    // Guest scaling
    const guestMultiplier = guestCount / 100;
    baseMin += guestMultiplier * 2.5;
    baseMax += guestMultiplier * 4.0;
    crew += Math.floor(guestMultiplier * 3);
    power += Math.floor(guestMultiplier * 8);

    // Production grade modifiers
    if (productionGrade === 'High-Tech') {
      baseMin *= 1.2; baseMax *= 1.25; power += 25;
    } else if (productionGrade === 'Cinematic') {
      baseMin *= 1.35; baseMax *= 1.4; crew += 8; days += 10;
    } else if (productionGrade === 'Sensory') {
      baseMin *= 1.5; baseMax *= 1.6; crew += 12; power += 15;
    } else if (productionGrade === 'Royal') {
      baseMin *= 1.8; baseMax *= 2.0; crew += 20; days += 20;
    }

    // Addons cost additions
    if (addons.projectionMapping) { baseMin += 5; baseMax += 8; power += 20; }
    if (addons.arExperience) { baseMin += 2.5; baseMax += 4; }
    if (addons.sensoryScenting) { baseMin += 1.5; baseMax += 2.5; }
    if (addons.aiHighlights) { baseMin += 2; baseMax += 3.5; }

    setStats({
      budgetMin: Math.round(baseMin),
      budgetMax: Math.round(baseMax),
      powerNeeded: Math.round(power),
      crewMembers: Math.round(crew),
      timelineDays: Math.round(days),
    });
  }, [category, scale, guestCount, productionGrade, addons]);

  const handleExport = () => {
    const summary = `Event Modeler Blueprint:\n` +
      `- Category: ${category} Event\n` +
      `- Scale: ${scale} (${guestCount} Guests)\n` +
      `- Production Grade: ${productionGrade}\n` +
      `- Tech Addons: ${Object.entries(addons).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'None'}\n` +
      `- Est. Production Window: ${stats.timelineDays} Days\n` +
      `- Calculated Est. Crew: ${stats.crewMembers} Specialists\n` +
      `- Power Overhead: ${stats.powerNeeded} kW`;
    onExportToConsultation(summary);
  };

  return (
    <div className="bg-brand-charcoal-light/40 border border-brand-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md relative overflow-hidden" id="event-modeler-container">
      {/* Decorative ambient background lights */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header section with startup theme */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-white/5 pb-6 mb-8">
        <div>
          <span className="font-display font-bold text-[10px] tracking-[0.25em] text-brand-orange-light uppercase bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
            Next-Gen Tech Platform
          </span>
          <h3 className="font-display font-black text-2xl md:text-3xl text-brand-white uppercase mt-2">
            Puram Event Modeler <span className="text-xs text-brand-orange-light lowercase font-mono">v1.2</span>
          </h3>
          <p className="font-sans text-xs text-brand-white/60 mt-1">
            Build your high-speed startup event blueprint in real-time. Transparent estimation, instant architecture.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-brand-white/40">
          <Zap size={14} className="text-brand-orange animate-bounce" />
          <span>Calculations updated instantly</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Modeler Controls - 7 columns */}
        <div className="lg:col-span-7 space-y-8">
          {/* Category Selector */}
          <div className="space-y-3">
            <label className="font-display font-bold text-xs uppercase tracking-widest text-brand-white/60 block">
              1. Event Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'Launch', label: 'Launch', desc: 'Brand & Tech' },
                { id: 'Corporate', label: 'Corporate', desc: 'Summit & Gala' },
                { id: 'Wedding', label: 'Wedding', desc: 'Destinations' },
                { id: 'Gala', label: 'Private Gala', desc: 'Milestone events' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCategory(item.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    category === item.id
                      ? 'bg-brand-orange/10 border-brand-orange text-brand-white'
                      : 'bg-brand-charcoal-light/40 border-brand-white/5 text-brand-white/60 hover:border-brand-white/20'
                  }`}
                >
                  <p className="font-display font-bold text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="font-sans text-[9px] text-brand-white/40 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Guest Count Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-display font-bold text-xs uppercase tracking-widest text-brand-white/60">
                2. Guest Attendance Scale
              </label>
              <span className="font-mono text-xs font-bold text-brand-orange-light bg-brand-orange/10 px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                {guestCount} Guests
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              step="25"
              value={guestCount}
              onChange={(e) => {
                const val = Number(e.target.value);
                setGuestCount(val);
                if (val < 150) setScale('Boutique');
                else if (val < 400) setScale('Premium');
                else if (val < 800) setScale('Grand');
                else setScale('Epic');
              }}
              className="w-full accent-brand-orange bg-brand-charcoal cursor-pointer h-2 rounded-lg"
            />
            <div className="flex justify-between text-[9px] font-mono text-brand-white/30">
              <span>Boutique (&lt;150)</span>
              <span>Premium (150-400)</span>
              <span>Grand (400-800)</span>
              <span>Epic Arena (800+)</span>
            </div>
          </div>

          {/* Production Complexity Grade */}
          <div className="space-y-3">
            <label className="font-display font-bold text-xs uppercase tracking-widest text-brand-white/60 block">
              3. Production &amp; Aesthetic Grade
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'High-Tech', label: 'High-Tech Interactive', desc: 'Focus on digital overlays, laser synchronization, key AV arrays' },
                { id: 'Cinematic', label: 'Cinematic Immersive', desc: 'Theatrical timing, choreographed dynamic lighting, grand staging' },
                { id: 'Sensory', label: 'Sensory Symphonic', desc: 'Scent triggers, interactive tracking graphics, 3D projection mapping' },
                { id: 'Royal', label: 'Royal Architectural', desc: 'Complete custom spatial fabrication, master floristry, full white-glove' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProductionGrade(item.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-24 cursor-pointer ${
                    productionGrade === item.id
                      ? 'bg-brand-orange/10 border-brand-orange text-brand-white'
                      : 'bg-brand-charcoal-light/40 border-brand-white/5 text-brand-white/60 hover:border-brand-white/20'
                  }`}
                >
                  <p className="font-display font-black text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="font-sans text-[10px] text-brand-white/50 mt-1 leading-normal line-clamp-2">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Premium Tech Integrations (Toggle Swaps) */}
          <div className="space-y-3">
            <label className="font-display font-bold text-xs uppercase tracking-widest text-brand-white/60 block">
              4. Premium Tech Modules
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: 'projectionMapping', label: '3D Mapping & Laser Arrays', desc: 'Complex projection overlay on custom backdrops (+5 Lakhs)' },
                { key: 'arExperience', label: 'AR Interactive RSVPs', desc: 'Augmented reality invitation systems (+2.5 Lakhs)' },
                { key: 'sensoryScenting', label: 'Dynamic Scent Engineering', desc: 'Programmatic olfactory system synchronized with events (+1.5 Lakhs)' },
                { key: 'aiHighlights', label: 'AI Real-Time Highlight Reels', desc: 'Automatic instant footage processing for social feeds (+2 Lakhs)' },
              ].map((item) => {
                const active = addons[item.key as keyof typeof addons];
                return (
                  <button
                    key={item.key}
                    onClick={() => toggleAddon(item.key as any)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                      active 
                        ? 'bg-brand-orange/5 border-brand-orange-light/40 text-brand-white' 
                        : 'bg-brand-charcoal-light/20 border-brand-white/5 text-brand-white/50 hover:border-brand-white/15'
                    }`}
                  >
                    <div className={`mt-0.5 rounded p-0.5 border flex items-center justify-center transition-colors ${
                      active ? 'bg-brand-orange border-brand-orange text-brand-white' : 'border-brand-white/20 text-transparent'
                    }`}>
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-xs uppercase tracking-wide leading-tight">{item.label}</p>
                      <p className="font-sans text-[9px] text-brand-white/40 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Estimation Output Card - 5 columns */}
        <div className="lg:col-span-5 bg-brand-charcoal rounded-2xl border border-brand-white/10 p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between self-stretch">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-sans text-[10px] tracking-widest text-brand-orange-light uppercase font-bold">
                ESTIMATED INVESTMENT INDEX
              </span>
              <div className="flex items-baseline gap-1.5 pt-1">
                <span className="font-display font-black text-3xl sm:text-4xl text-brand-white tracking-tight">
                  ₹{stats.budgetMin}L
                </span>
                <span className="font-sans text-xs text-brand-white/40 font-medium">to</span>
                <span className="font-display font-black text-3xl sm:text-4xl text-brand-white tracking-tight">
                  ₹{stats.budgetMax}L
                </span>
              </div>
              <p className="font-sans text-[10px] text-brand-white/40 mt-1 italic">
                *Approximate turn-key budget including complete design, AV, staging, catering &amp; execution.
              </p>
            </div>

            <div className="h-px bg-brand-white/5" />

            {/* Simulated Logistics & Live Metrics */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-bold">
                PLATFORM REAL-TIME PROJECTIONS
              </span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-brand-charcoal-light/60 rounded-xl border border-brand-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-orange-light">
                    <Users size={13} />
                    <span className="font-sans text-[9px] tracking-widest uppercase text-brand-white/40 font-semibold">Crew Team</span>
                  </div>
                  <p className="font-display font-bold text-lg text-brand-white">{stats.crewMembers} Crew</p>
                </div>

                <div className="p-3 bg-brand-charcoal-light/60 rounded-xl border border-brand-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-orange-light">
                    <Cpu size={13} />
                    <span className="font-sans text-[9px] tracking-widest uppercase text-brand-white/40 font-semibold">Power Overhead</span>
                  </div>
                  <p className="font-display font-bold text-lg text-brand-white">{stats.powerNeeded} kW</p>
                </div>

                <div className="p-3 bg-brand-charcoal-light/60 rounded-xl border border-brand-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-orange-light">
                    <Layers size={13} />
                    <span className="font-sans text-[9px] tracking-widest uppercase text-brand-white/40 font-semibold">Planning phase</span>
                  </div>
                  <p className="font-display font-bold text-lg text-brand-white">{stats.timelineDays} Days</p>
                </div>

                <div className="p-3 bg-brand-charcoal-light/60 rounded-xl border border-brand-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-orange-light">
                    <ShieldCheck size={13} />
                    <span className="font-sans text-[9px] tracking-widest uppercase text-brand-white/40 font-semibold">Logistics Score</span>
                  </div>
                  <p className="font-display font-bold text-lg text-brand-white">99.8% Perfect</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-brand-white/5" />

            {/* Planning Milestones Preview */}
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-bold">
                ESTIMATED MILESTONES BLUEPRINT
              </span>
              <div className="space-y-2 text-xs font-sans text-brand-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                  <span>Day 1–3: Bespoke Spatial Layout &amp; 3D Moodboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Day 12–15: AV Engineering Mapping &amp; Curation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Day {stats.timelineDays - 2}: High-fidelity rehearsals &amp; stress checks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleExport}
              className="w-full py-4 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-display text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/10 flex items-center justify-center gap-2 cursor-pointer group"
            >
              Export Blueprint to Planning Form
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-brand-white/40 text-center mt-2 font-sans">
              Exports details to pre-populate consultation details instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
