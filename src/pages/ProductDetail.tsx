import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { ChevronLeft, ShoppingCart, Zap, Droplets, Brain, ShieldCheck, ArrowRight, Info, GlassWater, RotateCw, Sparkles, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pt-40 pb-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 pointer-events-none z-0"
        style={{ backgroundColor: product.accentColor }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group relative z-20"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-label uppercase tracking-widest text-sm">Back to Shop</span>
        </Link>

        {/* Background Number */}
        <motion.span 
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 0.05, y: 0, x: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="font-black text-[12rem] md:text-[20rem] font-headline absolute -top-10 -left-4 md:-left-10 lg:-left-20 pointer-events-none select-none leading-none z-0"
        >
          {product.id}
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div 
                className="absolute inset-0 blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                style={{ backgroundColor: product.accentColor }}
              />
              <img 
                src={product.img} 
                alt={product.name} 
                className="h-[500px] md:h-[700px] object-contain relative z-10 drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-float"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black font-headline italic uppercase leading-none mb-4 tracking-tighter relative z-10">
                {product.name}
              </h1>
              <p className={`${product.color} text-xl md:text-2xl font-bold font-headline italic relative z-10`}>
                {product.flavor}
              </p>
            </div>

            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light max-w-xl">
              {product.description}
            </p>

            {/* Flavor Notes */}
            <div className="flex flex-wrap gap-3">
              {product.flavorNotes.map((note, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full border border-outline-variant/20 bg-surface-container-low text-sm font-label uppercase tracking-widest"
                >
                  {note}
                </span>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex items-center gap-2 mb-3">
                    {i === 0 && <Zap className="w-5 h-5 text-primary" />}
                    {i === 1 && <Droplets className="w-5 h-5 text-secondary" />}
                    {i === 2 && <Brain className="w-5 h-5 text-tertiary" />}
                    <h4 className="font-bold text-sm uppercase tracking-wider">{benefit.title}</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center pt-8">
              <button 
                onClick={() => addToCart(product)}
                className="w-full md:w-auto px-10 py-4 rounded-full kinetic-gradient text-on-primary-fixed font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <Plus className="w-5 h-5" />
                Add to Arsenal
              </button>
              <div className="flex items-end gap-6 md:gap-8 w-full md:w-auto justify-center md:justify-start">
                {product.nutrition.map((item, i) => (
                  <div key={i} className="text-left">
                    <span className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1 whitespace-nowrap">{item.label}</span>
                    <span className="block font-black font-headline text-2xl leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Specs Section */}
      <section className="mt-32 py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase mb-4">The Apex Formula</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Engineered for the hunt. We've combined prehistoric biological triggers with modern neural optimization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4 p-8 bg-surface-container rounded-[2rem] border border-outline-variant/5 hover:border-primary/20 transition-colors">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold font-headline italic uppercase">Pure Formula</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">No artificial colors, no synthetic fillers. Just biological optimization.</p>
            </div>
            <div className="space-y-4 p-8 bg-surface-container rounded-[2rem] border border-outline-variant/5 hover:border-secondary/20 transition-colors">
              <Zap className="w-10 h-10 text-secondary" />
              <h3 className="text-xl font-bold font-headline italic uppercase">Neural Surge</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">200mg of natural caffeine anhydrous for immediate cognitive ignition.</p>
            </div>
            <div className="space-y-4 p-8 bg-surface-container rounded-[2rem] border border-outline-variant/5 hover:border-tertiary/20 transition-colors">
              <Droplets className="w-10 h-10 text-tertiary" />
              <h3 className="text-xl font-bold font-headline italic uppercase">Hydration Matrix</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Prime electrolytes to maintain biological velocity during the hunt.</p>
            </div>
            <div className="space-y-4 p-8 bg-surface-container rounded-[2rem] border border-outline-variant/5 hover:border-blue-400/20 transition-colors">
              <Brain className="w-10 h-10 text-blue-400" />
              <h3 className="text-xl font-bold font-headline italic uppercase">Alpha Focus</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">L-Theanine and Ginseng to cut through the noise with laser precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase mb-12 leading-none">How to <span className="text-primary">Deploy</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-black text-xl shrink-0 border border-outline-variant/20">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <GlassWater className="w-5 h-5 text-primary" />
                      Hydrate
                    </h4>
                    <p className="text-on-surface-variant">Fill your Rex Shaker with 400ml - 500ml of ice-cold water. The colder, the better.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-black text-xl shrink-0 border border-outline-variant/20">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      Charge
                    </h4>
                    <p className="text-on-surface-variant">Add one level scoop of {product.name} powder. Watch the reaction begin.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-black text-xl shrink-0 border border-outline-variant/20">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <RotateCw className="w-5 h-5 text-tertiary" />
                      Ignite
                    </h4>
                    <p className="text-on-surface-variant">Shake vigorously for 15-20 seconds. Drink immediately and unleash the apex predator.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div 
                className="absolute inset-0 blur-[120px] opacity-20 pointer-events-none"
                style={{ backgroundColor: product.accentColor }}
              />
              <div className="relative aspect-square bg-surface-container rounded-[3rem] border border-outline-variant/10 flex items-center justify-center p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={product.img} 
                  alt="Preparation" 
                  className="w-full h-full object-contain rotate-12 group-hover:rotate-0 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-black font-headline italic uppercase mb-2">Ingredient Profile</h3>
                <p className="text-on-surface-variant text-sm">Biological triggers and neural optimization matrix.</p>
              </div>
              <button 
                onClick={() => setShowIngredients(!showIngredients)}
                className="inline-flex items-center gap-3 text-primary hover:text-primary-dim transition-colors group"
              >
                <Info className="w-5 h-5" />
                <span className="font-label uppercase tracking-widest text-sm border-b border-primary/30 group-hover:border-primary transition-colors">
                  {showIngredients ? 'Hide Full Profile' : 'View Full Profile'}
                </span>
              </button>
            </div>

            {/* Preview Ingredients (Always Visible) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold uppercase text-xs tracking-wider text-primary">Key Activator</span>
                  <span className="text-xs font-bold">200mg</span>
                </div>
                <h4 className="text-lg font-bold mb-1">Natural Caffeine</h4>
                <p className="text-xs text-on-surface-variant">Anhydrous source for immediate cognitive ignition.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold uppercase text-xs tracking-wider text-secondary">Neural Buffer</span>
                  <span className="text-xs font-bold">150mg</span>
                </div>
                <h4 className="text-lg font-bold mb-1">L-Theanine</h4>
                <p className="text-xs text-on-surface-variant">Smooths the surge for jitter-free precision.</p>
              </div>
            </div>
            
            <AnimatePresence>
              {showIngredients && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-10 bg-surface-container-high rounded-[2rem] border border-outline-variant/20 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-black font-headline italic uppercase text-2xl mb-6 text-primary">Neural Matrix</h4>
                        <ul className="space-y-4 text-sm text-on-surface-variant">
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Natural Caffeine Anhydrous</span>
                            <span className="font-bold text-on-surface">200mg</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>L-Theanine</span>
                            <span className="font-bold text-on-surface">150mg</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Panax Ginseng Extract</span>
                            <span className="font-bold text-on-surface">100mg</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Bacopa Monnieri</span>
                            <span className="font-bold text-on-surface">50mg</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-black font-headline italic uppercase text-2xl mb-6 text-secondary">Biological Support</h4>
                        <ul className="space-y-4 text-sm text-on-surface-variant">
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Vitamin B12</span>
                            <span className="font-bold text-on-surface">100% DV</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Vitamin B6</span>
                            <span className="font-bold text-on-surface">100% DV</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Vitamin C</span>
                            <span className="font-bold text-on-surface">250mg</span>
                          </li>
                          <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span>Electrolyte Blend</span>
                            <span className="font-bold text-on-surface">300mg</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-10 text-[10px] text-on-surface-variant/50 leading-tight uppercase tracking-tighter">
                      Other Ingredients: Citric Acid, Natural Flavors, Malic Acid, Sucralose, Acesulfame Potassium, Silicon Dioxide, Calcium Silicate, Fruit and Vegetable Juice (Color).
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Next Product CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="font-label uppercase tracking-[0.3em] text-sm text-on-surface-variant mb-6 block">Continue the Hunt</span>
          <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic mb-12">Try Another Surge</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {products.filter(p => p.id !== id).map(p => (
              <Link 
                key={p.id} 
                to={`/product/${p.id}`}
                className="group relative px-8 py-4 rounded-full border border-outline-variant/20 hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="font-bold">{p.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: p.accentColor }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
