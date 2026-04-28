import { motion } from 'motion/react';
import { Activity, Brain, Zap, ShieldCheck } from 'lucide-react';

export const ScienceSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'NEURAL OVERDRIVE',
      desc: 'Advanced nootropics cross the blood-brain barrier for instant cognitive clarity.',
      value: 98,
      color: 'from-brand-primary to-brand-tertiary'
    },
    {
      icon: Activity,
      title: 'CELLULAR KINETICS',
      desc: 'Optimized electrolyte matrix ensures rapid ATP production at the mitochondrial level.',
      value: 94,
      color: 'from-brand-tertiary to-brand-secondary'
    },
    {
      icon: ShieldCheck,
      title: 'METABOLIC STABILITY',
      desc: 'Timed-release carbohydrates prevent insulin spikes and the dreaded energy crash.',
      value: 100,
      color: 'from-brand-secondary to-green-400'
    }
  ];

  return (
    <section id="science" className="py-16 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl mb-8">THE SCIENCE OF <br /><span className="text-gradient">THE PREDATOR</span></h2>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              We didn't just make a drink. We engineered a performance catalyst. Every milligram of Rex Velocity is backed by clinical research into human peak performance.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black text-brand-primary">250MG</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Caffeine Anhydrous</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black text-brand-secondary">1000MG</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">L-Taurine Matrix</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black text-brand-tertiary">0G</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Added Sugars</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 relative z-10 border-brand-primary/20">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-display font-bold tracking-widest">PERFORMANCE METRICS</h4>
                <div className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold rounded-full">LIVE DATA</div>
              </div>
              <div className="space-y-8">
                {features.map((f, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold uppercase tracking-widest">{f.title}</span>
                      <span className="text-2xl font-display font-black text-brand-primary">{f.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${f.value}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className={`h-full bg-linear-to-r ${f.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-panel p-10 group hover:border-brand-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-black transition-all">
                <f.icon size={32} />
              </div>
              <h3 className="text-2xl mb-4">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
