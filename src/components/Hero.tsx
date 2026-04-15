import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-secondary/10 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">The Apex Predator of Energy</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85]">
            UNLEASH <br />
            <span className="text-gradient">THE BEAST</span>
          </h1>

          <p className="text-xl text-white/60 max-w-lg mb-12 leading-relaxed">
            Rex Velocity isn't just a drink. It's a biological upgrade. Engineered for those who refuse to be anything but the apex.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-primary flex items-center justify-center gap-2">
              Find Your Fuel <ChevronRight size={20} />
            </button>
            <button className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                <Play size={20} className="fill-current ml-1" />
              </div>
              Watch the Science
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
          <img
            src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
            alt="Rex Velocity Can"
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(255,143,112,0.3)]"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -right-4 glass-panel p-4 z-20"
          >
            <div className="text-brand-primary font-display font-black text-2xl">0%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Sugar Crash</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 -left-4 glass-panel p-4 z-20"
          >
            <div className="text-brand-secondary font-display font-black text-2xl">100%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Apex Focus</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
