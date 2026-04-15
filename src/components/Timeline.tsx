import { motion } from 'motion/react';
import { TIMELINE } from '../constants';

export const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6">EVOLUTIONARY <span className="text-brand-primary">PATH</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">From a single formula to a global movement. Witness the rise of the predator.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {TIMELINE.map((event, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full md:w-auto">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`glass-panel p-8 ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                  >
                    <div className="text-brand-primary font-display font-black text-4xl mb-2">{event.year}</div>
                    <h3 className="text-2xl mb-4">{event.title}</h3>
                    <p className="text-white/60 leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-bg border-4 border-brand-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-brand-primary animate-ping" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
