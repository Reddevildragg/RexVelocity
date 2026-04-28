import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';

export const ProductArsenal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  const activeProduct = PRODUCTS[activeIndex];

  return (
    <section id="arsenal" className="py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl mb-6">THE <span className="text-brand-primary">ARSENAL</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Choose your weapon. Each flavor is precision-engineered for specific performance profiles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Product Image Display */}
          <div className="relative h-[500px] flex items-center justify-center">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative z-10"
            >
              <div 
                className="absolute inset-0 blur-[120px] opacity-30 rounded-full"
                style={{ backgroundColor: activeProduct.color }}
              />
              <img
                src={activeProduct.img}
                alt={activeProduct.name}
                className="w-full max-w-sm mx-auto drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-20">
              <button onClick={prev} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <motion.div
            key={activeProduct.id + '-details'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="text-brand-primary font-display font-bold tracking-[0.3em] mb-2 uppercase">{activeProduct.flavor}</div>
              <h3 className="text-5xl md:text-7xl mb-6">{activeProduct.name}</h3>
              <p className="text-xl text-white/60 leading-relaxed">{activeProduct.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeProduct.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass-panel">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProduct.accentColor }} />
                  <span className="font-bold uppercase tracking-widest text-sm">{benefit.title}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-6 pt-6">
              <button className="btn-primary">Buy Now</button>
              <button className="flex items-center gap-2 font-display font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                <Info size={20} /> Full Specs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
