import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Plus, Minus, X, Zap, Droplets, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const Shop = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'products' | 'bundles'>('products');
  const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);
  const [selectedCans, setSelectedCans] = useState<Record<string, number>>({});
  
  const maxCans = 12;
  const totalSelected = Object.values(selectedCans).reduce((a: number, b: number) => a + b, 0);

  const handleCanChange = (productId: string, delta: number) => {
    setSelectedCans(prev => {
      const current = prev[productId] || 0;
      const next = current + delta;
      
      if (next < 0) return prev;
      if (delta > 0 && (totalSelected as number) >= maxCans) return prev;
      
      return { ...prev, [productId]: next };
    });
  };

  const handleAddCustomBundle = () => {
    if ((totalSelected as number) !== maxCans) return;
    
    const flavorDesc = Object.entries(selectedCans)
      .filter(([_, count]) => (count as number) > 0)
      .map(([id, count]) => {
        const p = products.find(p => p.id === id);
        return `${count}x ${p?.name}`;
      }).join(', ');

    const customBundle: Product = {
      id: `custom-bundle-${Date.now()}`,
      name: 'Custom 12-Pack',
      flavor: flavorDesc,
      color: 'text-primary',
      accentColor: '#ff8f70',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATMMM8SoRltbc0tHnNFEXlgxLTpzea0Qfwj-tkPqUE8BVQTNqdxTuKijQmx-99igrZQDsopmOx5YbGvjO_DAw-IAQzNxvJViVdNQbwZtGxeJ9lm-AkaClvxLojuizGLiZOmDbTpKbP7Zkj4GPcAllcIH_XflOHLwfj3YrXg-XpcbXEmAk2EATqXBVoqtnQ_oVs_PCppfqM7qHN5yKT9Na9D-eKadYvM96HzNR-u5SnIJACClPd9Dp6tYYl7lGW2LE1UgrXP-HdUaA',
      description: 'Your custom selection of 12 cans.',
      flavorNotes: [],
      benefits: [],
      nutrition: []
    };
    
    addToCart(customBundle);
    setIsBuildModalOpen(false);
    setSelectedCans({});
  };

  const handleAddBundle = (bundle: any) => {
    const bundleProduct: Product = {
      id: bundle.id,
      name: bundle.name,
      flavor: bundle.count,
      color: 'text-primary',
      accentColor: '#ff8f70',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATMMM8SoRltbc0tHnNFEXlgxLTpzea0Qfwj-tkPqUE8BVQTNqdxTuKijQmx-99igrZQDsopmOx5YbGvjO_DAw-IAQzNxvJViVdNQbwZtGxeJ9lm-AkaClvxLojuizGLiZOmDbTpKbP7Zkj4GPcAllcIH_XflOHLwfj3YrXg-XpcbXEmAk2EATqXBVoqtnQ_oVs_PCppfqM7qHN5yKT9Na9D-eKadYvM96HzNR-u5SnIJACClPd9Dp6tYYl7lGW2LE1UgrXP-HdUaA',
      description: bundle.description,
      flavorNotes: [],
      benefits: [],
      nutrition: []
    };
    addToCart(bundleProduct);
  };

  const bundles = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '$24.99',
      count: '6 Cans',
      color: 'from-orange-500 to-yellow-500',
      description: 'Perfect for the weekend warrior. Experience the core surge.',
      features: ['2x Original Velocity', '2x Arctic Surge', '2x Primal Punch'],
      isCustom: false
    },
    {
      id: 'apex',
      name: 'Apex Predator',
      price: '$44.99',
      count: '12 Cans',
      color: 'from-primary to-secondary',
      description: 'The professional choice. Sustained energy for the elite.',
      features: ['4x Original Velocity', '4x Arctic Surge', '4x Primal Punch', 'Exclusive Sticker Pack'],
      isCustom: false
    },
    {
      id: 'custom',
      name: 'Build Your Own',
      price: '$49.99',
      count: '12 Cans',
      color: 'from-purple-500 to-pink-500',
      description: 'Total control. Mix and match your perfect 12-pack arsenal.',
      features: ['Choose any 12 flavors', 'Customized energy profile', 'Exclusive Sticker Pack'],
      isCustom: true
    },
    {
      id: 'horde',
      name: 'The Horde',
      price: '$79.99',
      count: '24 Cans',
      color: 'from-red-600 to-orange-600',
      description: 'Total dominance. Stock your arsenal for the long haul.',
      features: ['8x Original Velocity', '8x Arctic Surge', '8x Primal Punch', 'Limited Edition T-Shirt'],
      isCustom: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black font-headline tracking-tighter mb-6 uppercase italic leading-none"
          >
            THE <span className="text-primary">SHOP</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed"
          >
            Deploy your fuel. From individual biological triggers to total pack dominance, we've engineered the perfect arsenal for every hunt.
          </motion.p>
        </div>
      </section>

      {/* Sub-navigation Tabs */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-y border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 md:gap-12">
            <button
              onClick={() => setActiveTab('products')}
              className={cn(
                "py-6 font-bold uppercase tracking-widest transition-all relative",
                activeTab === 'products' ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Individual Cans
              {activeTab === 'products' && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('bundles')}
              className={cn(
                "py-6 font-bold uppercase tracking-widest transition-all relative",
                activeTab === 'bundles' ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Bundles & Packs
              {activeTab === 'bundles' && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="container mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'products' ? (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group relative bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: product.accentColor }}
                    />
                    <div className="absolute top-6 right-8">
                      <span className="text-4xl font-black font-headline opacity-5 italic">{product.id}</span>
                    </div>
                    <div className="relative aspect-square mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="min-h-[4rem] flex items-center mb-1">
                        <h3 className="text-2xl font-black font-headline uppercase italic leading-tight line-clamp-2">{product.name}</h3>
                      </div>
                      <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${product.color}`}>{product.flavor}</p>
                      <div className="grid grid-cols-3 gap-2 mb-4 border-y border-outline-variant/10 py-4">
                        <div className="text-center">
                          <Zap className="w-4 h-4 mx-auto mb-1 text-primary opacity-60" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Energy</span>
                        </div>
                        <div className="text-center">
                          <Droplets className="w-4 h-4 mx-auto mb-1 text-secondary opacity-60" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Hydrate</span>
                        </div>
                        <div className="text-center">
                          <Brain className="w-4 h-4 mx-auto mb-1 text-tertiary opacity-60" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Focus</span>
                        </div>
                      </div>
                      <div className="mt-auto flex items-center gap-3">
                        <Link 
                          to={`/product/${product.id}`}
                          className="flex-1 bg-on-surface text-background py-4 rounded-full font-bold text-center hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20 uppercase tracking-widest text-sm"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-14 h-14 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110 active:scale-90"
                          title="Add to Cart"
                        >
                          <Plus className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="bundles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8"
            >
              {bundles.map((bundle, index) => (
                <motion.div 
                  key={bundle.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-surface-container-high rounded-[2.5rem] p-8 md:p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 border border-outline-variant/10 flex flex-col h-full"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${bundle.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-bold font-headline mb-2">{bundle.name}</h3>
                        <span className="text-sm font-label uppercase tracking-widest text-secondary">{bundle.count}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black font-headline text-primary">{bundle.price}</span>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-8 font-light leading-relaxed text-sm">
                      {bundle.description}
                    </p>
                    <ul className="space-y-4 mb-10 flex-1">
                      {bundle.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => bundle.isCustom ? setIsBuildModalOpen(true) : handleAddBundle(bundle)}
                      className="w-full py-4 rounded-full font-bold text-lg kinetic-gradient text-on-primary-fixed hover:shadow-2xl hover:shadow-primary/30 transition-all mt-auto"
                    >
                      {bundle.isCustom ? 'Build Bundle' : 'Add to Arsenal'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Performance Matrix */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8 tracking-tight uppercase italic">The Performance Matrix</h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Our formula is balanced for the three pillars of apex performance: Neural Focus, Physical Velocity, and Biological Recovery.
              </p>
              
              <div className="space-y-8">
                <div className="p-6 bg-surface-container-high rounded-2xl border-l-4 border-primary hover:bg-surface-container-highest transition-colors">
                  <h4 className="text-xl font-bold mb-2">Neural Focus</h4>
                  <p className="text-sm text-on-surface-variant">L-Theanine + Green Tea Extract for razor-sharp decision making.</p>
                </div>
                <div className="p-6 bg-surface-container-high rounded-2xl border-l-4 border-secondary hover:bg-surface-container-highest transition-colors">
                  <h4 className="text-xl font-bold mb-2">Physical Velocity</h4>
                  <p className="text-sm text-on-surface-variant">Optimized caffeine delivery for explosive movement without the jitters.</p>
                </div>
                <div className="p-6 bg-surface-container-high rounded-2xl border-l-4 border-tertiary hover:bg-surface-container-highest transition-colors">
                  <h4 className="text-xl font-bold mb-2">Biological Recovery</h4>
                  <p className="text-sm text-on-surface-variant">Prime electrolytes and minerals to prevent the post-hunt crash.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-surface-container-highest rounded-full flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 animate-pulse"></div>
                <img alt="3D render of a futuristic energy drink can with glowing elements" className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,143,112,0.4)] animate-float" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMMM8SoRltbc0tHnNFEXlgxLTpzea0Qfwj-tkPqUE8BVQTNqdxTuKijQmx-99igrZQDsopmOx5YbGvjO_DAw-IAQzNxvJViVdNQbwZtGxeJ9lm-AkaClvxLojuizGLiZOmDbTpKbP7Zkj4GPcAllcIH_XflOHLwfj3YrXg-XpcbXEmAk2EATqXBVoqtnQ_oVs_PCppfqM7qHN5yKT9Na9D-eKadYvM96HzNR-u5SnIJACClPd9Dp6tYYl7lGW2LE1UgrXP-HdUaA" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-surface-container-high">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase mb-8">Never Miss a <span className="text-primary">Drop</span></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-12">Join the inner circle for exclusive flavor releases, limited edition gear, and early access to the next evolution of energy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="YOUR APEX EMAIL" 
              className="bg-background border border-outline-variant/30 rounded-full px-8 py-4 flex-1 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* Build Your Own Modal */}
      <AnimatePresence>
        {isBuildModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface-container-high border border-outline-variant/20 rounded-[2rem] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-6 md:p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-highest">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black font-headline italic uppercase">Build Your 12-Pack</h2>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Selected: <span className={`font-bold ${totalSelected === maxCans ? 'text-primary' : 'text-on-surface'}`}>{totalSelected}</span> / {maxCans} cans
                  </p>
                </div>
                <button 
                  onClick={() => setIsBuildModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-low transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map(product => (
                    <div key={product.id} className="bg-surface-container rounded-2xl p-4 flex items-center gap-4 border border-outline-variant/5">
                      <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center p-2 shrink-0">
                        <img src={product.img} alt={product.name} className="h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold font-headline italic truncate">{product.name}</h4>
                        <p className={`text-xs ${product.color} truncate`}>{product.flavor}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-surface-container-highest rounded-full p-1 shrink-0">
                        <button 
                          onClick={() => handleCanChange(product.id, -1)}
                          disabled={!selectedCans[product.id]}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-low disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-4 text-center font-bold text-sm">{selectedCans[product.id] || 0}</span>
                        <button 
                          onClick={() => handleCanChange(product.id, 1)}
                          disabled={(totalSelected as number) >= maxCans}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-low disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 border-t border-outline-variant/10 bg-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-1/2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${((totalSelected as number) / maxCans) * 100}%` }}
                  />
                </div>
                <button 
                  onClick={handleAddCustomBundle}
                  disabled={totalSelected !== maxCans}
                  className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest kinetic-gradient text-on-primary-fixed disabled:opacity-50 disabled:grayscale transition-all"
                >
                  {totalSelected === maxCans ? 'Add Bundle to Cart' : `Select ${maxCans - (totalSelected as number)} More`}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
