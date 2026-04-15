import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Search, Star, User } from 'lucide-react';

export const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stores = [
    { name: 'Apex Fitness Center', address: '123 Performance Way, London', distance: '0.8 miles', status: 'Open' },
    { name: 'Velocity Supplements', address: '45 High Street, Manchester', distance: '2.4 miles', status: 'Open' },
    { name: 'Primal Gym & Spa', address: '88 Evolution Road, Birmingham', distance: '5.1 miles', status: 'Closing Soon' },
    { name: 'The Surge Market', address: '12 Coastal Path, Brighton', distance: '12.4 miles', status: 'Open' }
  ];

  const reviews = [
    { name: 'Alex Rivera', role: 'Crossfit Athlete', text: 'Rex Velocity is the only drink that keeps me going through my double sessions without the crash.', rating: 5 },
    { name: 'Jordan Smith', role: 'Digital Nomad', text: 'The focus I get from the L-Theanine blend is incredible. It\'s my secret weapon for long coding nights.', rating: 5 },
    { name: 'Elena Petrova', role: 'Yoga Instructor', text: 'Clean energy that actually tastes good. I love that it uses natural extracts.', rating: 4 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-surface-container-low relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto lg:mx-0"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-headline tracking-tighter mb-6 uppercase italic leading-none">
              Find Your <span className="text-secondary">Source</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
              The surge is spreading. Locate your nearest Rex Velocity authorized dealer or join the pack as a wholesale partner.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <MapPin className="w-[500px] h-[500px] text-primary rotate-12 animate-float" />
        </div>
      </section>

      {/* Store Locator Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6 md:space-y-8"
            >
              <div className="bg-surface-container-high p-6 md:p-8 rounded-3xl border border-outline-variant/10 shadow-xl shadow-black/5">
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-6">Search Territory</h3>
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Enter City or Postcode"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full py-3 md:py-4 px-6 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                  />
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {stores.map((store, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-2xl hover:bg-surface-container-highest transition-colors cursor-pointer border border-transparent hover:border-primary/20 group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold group-hover:text-primary transition-colors">{store.name}</h4>
                        <span className="text-[10px] font-label text-secondary uppercase">{store.distance}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2">{store.address}</p>
                      <span className={`text-[10px] font-bold uppercase ${store.status === 'Open' ? 'text-green-500' : 'text-orange-500'}`}>
                        {store.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="w-full h-[600px] bg-surface-container-highest rounded-[3rem] relative overflow-hidden border border-outline-variant/10 shadow-2xl shadow-black/10">
                {/* Placeholder for Map */}
                <div className="absolute inset-0 opacity-20 grayscale">
                  <img alt="Abstract map pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7P3z6elJ_vZ64UexC9qos5pI7PxIrZMc9UTXkaoJVey1F_YX5iRXv3MR1XI8v7aJ6Zmq-zZWMUC0e8NmIsVmXnE3O5Rk3hs-fyNG5LyCB2gl0GVsoaGkcDt-Udnp8cEhZaszkzDjxZfeT3bBwigEQpK31Ow2s9tzUeZJ0ykMdzQaJ-id6XGEz-o03KB87iMXsSJhqG92_Dt0Hh_Y9lrrHgth8WjI8H0I_KHfgUUTxDbk4Yk84-7qk2itMxotQNZnhgDeALlHP9k" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center p-12 bg-background/80 backdrop-blur-md rounded-3xl border border-white/10 max-w-md"
                  >
                    <MapPin className="w-16 h-16 text-primary mb-4 animate-bounce mx-auto" />
                    <h4 className="text-2xl font-bold font-headline mb-2">Interactive Map</h4>
                    <p className="text-on-surface-variant text-sm">Our global distribution network is expanding. Use the search to find locations near you.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section (Voice of the Apex) */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-headline mb-4 uppercase italic"
            >
              Voice of the <span className="text-primary">Apex</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant uppercase tracking-[0.3em] text-sm"
            >
              Real Results. Zero Compromise.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10 relative group hover:bg-surface-container-highest transition-colors"
              >
                <div className="flex gap-1 text-secondary mb-6">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <User className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-surface-container-highest p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-primary/20 shadow-2xl shadow-primary/5"
          >
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-6xl font-black font-headline mb-4 md:mb-6 uppercase italic leading-none">Join the Pack</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Interested in stocking Rex Velocity? We're looking for elite partners to expand our territory.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-label uppercase tracking-widest text-secondary ml-4">Full Name</label>
                <input type="text" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full py-3 md:py-4 px-6 focus:outline-none focus:border-primary transition-colors text-sm md:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-label uppercase tracking-widest text-secondary ml-4">Business Email</label>
                <input type="email" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full py-3 md:py-4 px-6 focus:outline-none focus:border-primary transition-colors text-sm md:text-base" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] md:text-xs font-label uppercase tracking-widest text-secondary ml-4">Message / Inquiry</label>
                <textarea rows={4} className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl md:rounded-3xl py-3 md:py-4 px-6 focus:outline-none focus:border-primary transition-colors resize-none text-sm md:text-base"></textarea>
              </div>
              <div className="md:col-span-2 text-center mt-4 md:mt-6">
                <button type="submit" className="kinetic-gradient text-on-primary-fixed px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20 w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
