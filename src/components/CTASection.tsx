import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/10 blur-[150px] rounded-full scale-150" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-24 h-24 bg-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-12 rotate-12 shadow-[0_0_50px_rgba(255,143,112,0.5)]"
        >
          <Zap size={48} className="text-black fill-black" />
        </motion.div>

        <h2 className="text-6xl md:text-9xl mb-12 leading-[0.85]">
          JOIN THE <br />
          <span className="text-gradient">PACK TODAY</span>
        </h2>

        <p className="text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
          The evolution of energy is here. Don't just survive. Dominate.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="btn-primary text-xl px-12 py-6">Get Rex Velocity</button>
          <button className="btn-outline text-xl px-12 py-6">Find a Store</button>
        </div>
      </div>
    </section>
  );
};
