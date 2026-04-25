import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { ChevronLeft, ShoppingCart, Zap, Droplets, Brain, ShieldCheck, ArrowRight, Info, GlassWater, RotateCw, Sparkles, Plus } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { Container } from '../components/Container';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [showIngredients, setShowIngredients] = useState(false);

  const relatedProducts = useMemo(() => {
    return products
      .filter(p => p.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [id]);

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

      <Container className="relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center md:pt-8 min-h-[70vh]">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end z-20"
          >
            <div className="relative group w-full max-w-[480px] lg:max-w-[550px]">
              {/* Decorative elements to fill space */}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-primary/20 rounded-tl-[3rem] hidden lg:block" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b-2 border-r-2 border-primary/20 rounded-br-[3rem] hidden lg:block" />
              
              {/* Floating Stats */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 z-30 bg-surface-container-highest/80 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 shadow-2xl hidden 2xl:flex flex-col gap-1"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Voltage</span>
                <span className="text-xl font-headline italic font-black">200MW</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/4 z-30 bg-surface-container-highest/80 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/10 shadow-2xl hidden 2xl:flex flex-col gap-1 text-right"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Purity</span>
                <span className="text-xl font-headline italic font-black">99.9%</span>
              </motion.div>

              <div 
                className="absolute inset-0 blur-[120px] opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: product.accentColor }}
              />
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] lg:rounded-[4rem] relative z-10 shadow-3xl shadow-black/60 transition-all duration-500 border border-outline-variant/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 md:pr-4 lg:pr-12"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black font-headline italic uppercase leading-[0.9] mb-6 tracking-tight relative z-10 py-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-[2px] ${product.color.replace('text-', 'bg-')} opacity-50`} />
                <p className={`${product.color} text-xl md:text-2xl font-bold font-headline italic relative z-10 uppercase tracking-widest`}>
                  {product.flavor}
                </p>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed font-light max-w-xl border-l border-outline-variant/20 pl-8">
              {product.description}
            </p>

            {/* Flavor Notes / Tags */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 md:gap-3">
              {product.tags.map((tag, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 rounded-xl border border-outline-variant/10 bg-surface-container-high/50 text-[10px] md:text-xs font-black uppercase tracking-widest text-center flex items-center justify-center min-h-[40px]"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-y border-outline-variant/10 py-8">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                      {i === 0 && <Zap className="w-4 h-4 text-primary" />}
                      {i === 1 && <Droplets className="w-4 h-4 text-secondary" />}
                      {i === 2 && <Brain className="w-4 h-4 text-tertiary" />}
                    </div>
                    <h4 className="font-bold text-[11px] uppercase tracking-widest leading-tight">{benefit.title}</h4>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Section */}
            <div className="flex flex-col gap-10 pt-4">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {product.nutrition.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-2">{item.label}</span>
                    <span className="font-black font-headline italic text-2xl sm:text-3xl leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto px-12 py-5 rounded-full kinetic-gradient text-on-primary-fixed font-bold text-lg flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                <span className="uppercase tracking-[0.2em]">Deploy Arsenal</span>
              </button>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Detailed Specs Section */}
      <section className="mt-32 py-24 bg-surface-container-low border-y border-outline-variant/10">
        <Container>
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
        </Container>
      </section>

      {/* Preparation Section (Only for Powders) */}
      {product.type === 'powder' && (
        <section className="py-32">
          <Container>
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
                <motion.div 
                  initial={{ rotateY: -20, rotateX: 10 }}
                  whileInView={{ rotateY: -15, rotateX: 5 }}
                  whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                  viewport={{ once: true }}
                  style={{ perspective: 1000 }}
                  className="relative aspect-square rounded-[3rem] flex items-center justify-center overflow-hidden group shadow-2xl transition-all duration-700"
                >
                  <img 
                    src={product.img} 
                    alt="Preparation" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Ingredients Section */}
      <section className="py-20 bg-background">
        <Container>
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
        </Container>
      </section>

      {/* Next Product CTA */}
      <section className="py-32 border-t border-outline-variant/10">
        <Container>
          <div className="text-center mb-16">
            <span className="font-label uppercase tracking-[0.3em] text-xs text-on-surface-variant mb-6 block">Continue the Hunt</span>
            <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic leading-none">Try Another <span className="text-primary">Surge</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/product/${p.id}`}
                  className="group block relative bg-surface-container-low rounded-[3rem] p-8 border border-outline-variant/10 hover:border-primary/30 transition-all overflow-hidden h-full shadow-lg shadow-black/5"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: p.accentColor }}
                  />
                  <div className="relative z-10 flex flex-col h-full text-left">
                    <div className="aspect-square mb-8 relative">
                      <motion.div 
                        initial={{ rotateY: 10, rotateX: 5 }}
                        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ perspective: 1000 }}
                        className="w-full h-full"
                      >
                        <img 
                          src={p.img} 
                          alt={p.name} 
                          className="w-full h-full object-cover rounded-[2.5rem] shadow-xl shadow-black/30 relative z-10"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </div>
                    <div className="min-h-[4rem] flex items-center mb-1">
                      <h4 className="text-2xl font-black font-headline uppercase italic leading-[1.1] py-1">{p.name}</h4>
                    </div>
                    <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${p.color} min-h-[2.5rem] flex items-start`}>{p.flavor}</p>
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex-1 bg-on-surface text-background py-4 rounded-full font-bold text-center text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20">
                        View Details
                      </div>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(p);
                        }}
                        className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110 active:scale-90 relative z-20"
                        title="Add to Cart"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </motion.div>
  );
};
