import { useMemo } from 'react';
import { motion } from 'motion/react';
import { PawPrint, Zap, Droplets, Brain, Star, Leaf, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Science = () => {
  const { addToCart } = useCart();

  const featuredProducts = useMemo(() => {
    return [...products].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <img alt="Abstract molten lava flows in dark space" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP4WCD_rQAY0bRnqcqf7scDnjAaD-pM9SExQTQmJm14LNsNCRIDkxrAEe_7mVCTwDK12uSpvoBejwaXicoyMMVaZim8m1wsY2-h6Q02H0auqj35fU1uzITtjlkCGkZBkdSHYcsSkKKUCipH51mB4t440GHBprZt7L6dlZYW3TFKwBVq9qZJwnylZB5htrmnhWDDgVavV62tz7FTxSrfrKg5ckkIAp8Gh2OJYhdpN9AgC7YwMI3t7lICB7GismbQXrD_NcjxeOxtlc" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic">
              The <span className="text-primary">Primal</span><br />Surge
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Born from the relentless heat of prehistoric survival, Rex Velocity isn't just energy. It's biological evolution in a can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop" className="kinetic-gradient text-on-primary-fixed px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform w-full sm:w-auto text-center">
                Join the Pack
              </Link>
              <button className="border border-outline-variant/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors w-full sm:w-auto">
                Watch Mission
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 transform scale-110">
              <img alt="3D render of a sleek metallic orange energy drink can" className="rounded-3xl shadow-2xl shadow-primary/40 rotate-[-15deg] max-w-md mx-auto animate-float" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMMM8SoRltbc0tHnNFEXlgxLTpzea0Qfwj-tkPqUE8BVQTNqdxTuKijQmx-99igrZQDsopmOx5YbGvjO_DAw-IAQzNxvJViVdNQbwZtGxeJ9lm-AkaClvxLojuizGLiZOmDbTpKbP7Zkj4GPcAllcIH_XflOHLwfj3YrXg-XpcbXEmAk2EATqXBVoqtnQ_oVs_PCppfqM7qHN5yKT9Na9D-eKadYvM96HzNR-u5SnIJACClPd9Dp6tYYl7lGW2LE1UgrXP-HdUaA" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-20 -right-20 z-20 w-80 h-80 opacity-90 hidden lg:block">
              <PawPrint className="w-[240px] h-[240px] text-secondary rotate-12 animate-pulse fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clean Energy Formula Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8 text-center md:text-left"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 md:mb-6 tracking-tight">The Clean Energy Formula</h2>
              <p className="text-on-surface-variant text-base md:text-lg">We stripped away the synthetic fillers and left only what makes an apex predator move. No jitters. No crash. Only velocity.</p>
            </div>
            <div className="text-center md:text-right">
              <span className="text-5xl md:text-6xl font-black text-primary font-headline">100%</span>
              <p className="text-xs md:text-sm font-label uppercase tracking-widest text-secondary">Biological Optimization</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-surface-container-high p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-headline mb-4">Green Tea Extract</h3>
                <p className="text-on-surface-variant font-light mb-8">Pure, sustained release caffeine that mirrors the natural rhythm of a hunt.</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-label">
                    <span>SUSTAINABILITY</span>
                    <span className="text-secondary">95%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full kinetic-gradient"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-container-high p-10 rounded-3xl relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative z-10">
                <Droplets className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-headline mb-4">Prime Electrolytes</h3>
                <p className="text-on-surface-variant font-light mb-8">Himalayan salts and coconut minerals to keep your neural pathways firing.</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-label">
                    <span>HYDRATION</span>
                    <span className="text-secondary">88%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full kinetic-gradient"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface-container-high p-10 rounded-3xl relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-headline mb-4">L-Theanine Focus</h3>
                <p className="text-on-surface-variant font-light mb-8">Sharpens the senses for precise decision-making under high performance stress.</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-label">
                    <span>FOCUS</span>
                    <span className="text-secondary">92%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full kinetic-gradient"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black font-headline mb-16 md:mb-24 tracking-tighter text-center italic"
          >
            EVOLUTIONARY <span className="text-outline-variant">PATH</span>
          </motion.h2>
          <div className="relative border-l-2 border-outline-variant/30 ml-6 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:pt-12 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16 md:mb-0 relative md:w-1/4 pl-12 md:pl-0"
            >
              <div className="absolute -left-5 top-0 md:-top-16 md:left-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,143,112,0.6)]">
                <span className="text-on-primary font-bold text-sm md:text-base">21</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-headline mb-3 md:mb-4 md:mt-4">The Spark</h4>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Conceived in a basement lab by endurance athletes tired of sugar-crashes. The first mascot was a simple charcoal sketch.</p>
              <div className="mt-6 md:mt-8 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-full h-32 md:h-48 bg-surface-container-high rounded-xl overflow-hidden grayscale">
                  <img alt="Early brand development sketches" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfsH1OpcTd4XvcDE6KBez-R3ussVlYNcRA22dZeARDXIoA04bRYZDUIPxWKnQfygi20xFeLwVBxPYDRdmyBvW4_V1JGVdzDoD3PwfcZ1wfQ9vF48qZPeJHBOKO4c9Ht3yikMkzs6GOc_duk9bHnI6VF0CzEgMMia7RcgwJJ0X4HM-sDv5uaA-sEIr38fj2w506Pleanutp5PHt3i1JQl78qFvBE27Xlmi1DmYXIuq4GqYWj-SJXdkNGBY1oIKa4hpOspfTdeUJue4" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 md:mb-0 relative md:w-1/4 pl-12 md:pl-0"
            >
              <div className="absolute -left-5 top-0 md:-top-16 md:left-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,143,112,0.6)]">
                <span className="text-on-primary font-bold text-sm md:text-base">22</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-headline mb-3 md:mb-4 md:mt-4">The Awakening</h4>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">The T-Rex went 3D. We partnered with biomechanical engineers to perfect the energy delivery sequence.</p>
              <div className="mt-6 md:mt-8 transform rotate-6 hover:rotate-0 transition-transform">
                <div className="w-full h-32 md:h-48 bg-surface-container-high rounded-xl overflow-hidden border-2 border-primary/20">
                  <img alt="CGI render of DNA and prehistoric elements" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnikEBwS8FcwNbSkSws3eehMWijuOQ1twRIYbyA3OAjY3Cl8FJa1wX6UFetLxRQ0UubUfkodkFQuZGk_6arOpLz7WdpRA0Fc37VB5h0pKE6imoJUrrkF0EhYAONgBK9v7_XQrfp74oLP-prn0pRx6RzudCLfUh8K5QGKegczWbfQJ7zQain0l5RYuKn4XjnBw76gfdwYqhNwdLNBRy5lR-rpqZ7-vHzM27ul-09c9UD9XDBLukcVpjSiOo8-sahn6U6q2HhR9RT0w" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16 md:mb-0 relative md:w-1/4 pl-12 md:pl-0"
            >
              <div className="absolute -left-5 top-0 md:-top-16 md:left-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,143,112,0.6)]">
                <span className="text-on-primary font-bold text-sm md:text-base">23</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-headline mb-3 md:mb-4 md:mt-4">Global Surge</h4>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Rex Velocity hit major markets. The mascot became a symbol for the high-performance sub-culture.</p>
              <div className="mt-6 md:mt-8 transform -rotate-6 hover:rotate-0 transition-transform">
                <div className="w-full h-32 md:h-48 bg-surface-container-high rounded-xl overflow-hidden">
                  <img alt="Global city lights blurred" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7P3z6elJ_vZ64UexC9qos5pI7PxIrZMc9UTXkaoJVey1F_YX5iRXv3MR1XI8v7aJ6Zmq-zZWMUC0e8NmIsVmXnE3O5Rk3hs-fyNG5LyCB2gl0GVsoaGkcDt-Udnp8cEhZaszkzDjxZfeT3bBwigEQpK31Ow2s9tzUeZJ0ykMdzQaJ-id6XGEz-o03KB87iMXsSJhqG92_Dt0Hh_Y9lrrHgth8WjI8H0I_KHfgUUTxDbk4Yk84-7qk2itMxotQNZnhgDeALlHP9k" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative md:w-1/4 pl-12 md:pl-0"
            >
              <div className="absolute -left-5 top-0 md:-top-16 md:left-0 w-10 h-10 md:w-12 md:h-12 kinetic-gradient rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,215,9,0.4)]">
                <span className="text-on-primary font-bold text-sm md:text-base">24</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-headline mb-3 md:mb-4 md:mt-4 text-secondary">Apex Status</h4>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Unleashing new 3D motion containers. Rex Velocity is now the #1 natural surge for elite performers.</p>
              <div className="mt-6 md:mt-8 transform rotate-3 hover:rotate-0 transition-transform p-1 bg-gradient-to-tr from-primary to-secondary rounded-xl">
                <div className="w-full h-32 md:h-48 bg-surface-container-lowest rounded-lg overflow-hidden flex items-center justify-center">
                  <Star className="w-12 h-12 md:w-16 md:h-16 text-secondary animate-pulse fill-current" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Voice of the Apex</h2>
            <p className="text-on-surface-variant uppercase tracking-[0.3em] text-sm">Real Results. Zero Compromise.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-8 md:p-10 rounded-[2rem] flex flex-col justify-end relative overflow-hidden min-h-[400px] md:min-h-0"
            >
              <div className="absolute inset-0 z-0">
                <img alt="High performer athlete training" className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPY8onMpth-5sEIC9n2LpPXU6q2cb2tFKxWxTzbvDIw3agvnC5M2f4VPdy4m6HJ4y7dyCCL3cY7xXN2n3BIjuDYBCGs_mQHzqBZTlSoovifjwTDzJnfe2XNXnNs24cDFWM7W_ZHtteAcfiThHt22joIacjxt5Jl7oDZBLnLWDpzcXK_8EEyfGJVtDw6ikaVyVu1vNm2fhl8dFgTb4GSuc58Fjsh-dq1Z1ee12A33gYdkZ7YjxPv9jC8KJ4dQhcyg3ujLeysCkVaak" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 text-secondary mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold font-headline leading-tight mb-6">"I switched from pre-workouts to Velocity and my focus levels hit a plateau I didn't know existed. It's my daily driver."</p>
                <div>
                  <h5 className="font-bold text-lg">Marcus Chen</h5>
                  <p className="text-on-surface-variant text-sm font-label">ULTRA-ENDURANCE CYCLIST</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 bg-primary-container/20 p-8 rounded-[2rem] border border-primary/10 flex flex-col justify-center"
            >
              <p className="text-xl font-medium leading-relaxed mb-6 italic">"No more afternoon crashes. The green tea blend keeps my brain sharp for coding sprints."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary"></div>
                <div>
                  <h5 className="font-bold">Sarah Jenkins</h5>
                  <p className="text-on-surface-variant text-xs font-label">SOFTWARE ARCHITECT</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 bg-surface-container p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <p className="text-sm text-on-surface-variant">"The electrolyte balance is perfect for hot climate training."</p>
              <h5 className="font-bold mt-4">David G. <span className="block text-xs font-normal opacity-60">Pro Surfer</span></h5>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-1 bg-secondary p-8 rounded-[2rem] flex items-center justify-center text-on-secondary"
            >
              <Leaf className="w-16 h-16 animate-pulse fill-current" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Arsenal Section */}
      <section className="py-32 bg-background overflow-hidden border-t border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic leading-none mb-6">THE <span className="text-primary">ARSENAL</span></h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light">Engineered for the hunt. Biological triggers customized for every stage of performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/product/${product.id}`}
                  className="group block relative bg-surface-container-low rounded-[3rem] p-8 border border-outline-variant/10 hover:border-primary/30 transition-all overflow-hidden h-full shadow-lg shadow-black/5"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: product.accentColor }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="aspect-square mb-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-h-[3rem] flex items-center mb-1">
                      <h4 className="text-2xl font-black font-headline uppercase italic line-clamp-2 leading-tight">{product.name}</h4>
                    </div>
                    <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${product.color}`}>{product.flavor}</p>
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex-1 bg-on-surface text-background py-4 rounded-full font-bold text-center text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20">
                        Deploy Arsenal
                      </div>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110 active:scale-90"
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 text-on-surface group hover:text-primary transition-colors font-black font-headline italic uppercase text-xl leading-none"
            >
              View Full Arsenal
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};
