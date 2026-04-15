import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6">VOICE OF <span className="text-brand-primary">THE APEX</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Real results from those who demand the most from their bodies and minds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 relative group hover:bg-white/10 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors" size={48} />
              
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-brand-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-lg">{t.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">{t.role}</p>
                </div>
              </div>

              <p className="text-lg text-white/80 italic leading-relaxed">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
