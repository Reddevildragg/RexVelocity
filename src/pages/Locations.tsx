import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Search, Store, Navigation, Phone, Clock, Globe } from 'lucide-react';

export const Locations = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stores = [
    { 
      name: 'Apex Fitness Center', 
      address: '123 Performance Way, London', 
      distance: '0.8 miles', 
      status: 'Open',
      phone: '+44 20 7123 4567',
      hours: '06:00 - 22:00',
      type: 'Gym & Fitness',
      stock: ['Original Velocity', 'Arctic Surge', 'Volcanic Blood Mix']
    },
    { 
      name: 'Velocity Supplements', 
      address: '45 High Street, Manchester', 
      distance: '2.4 miles', 
      status: 'Open',
      phone: '+44 161 987 6543',
      hours: '09:00 - 20:00',
      type: 'Retail Specialist',
      stock: ['Full Arsenal Range']
    },
    { 
      name: 'Primal Gym & Spa', 
      address: '88 Evolution Road, Birmingham', 
      distance: '5.1 miles', 
      status: 'Closing Soon',
      phone: '+44 121 444 3333',
      hours: '07:00 - 21:00',
      type: 'Health Club',
      stock: ['Original Velocity', 'Primal Punch']
    },
    { 
      name: 'The Surge Market', 
      address: '12 Coastal Path, Brighton', 
      distance: '12.4 miles', 
      status: 'Open',
      phone: '+44 1273 111 222',
      hours: '08:00 - 22:00',
      type: 'Natural Foods',
      stock: ['Limited Edition Bundles', 'All Cans']
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
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-full blur-[160px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ff8f70_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
          <img 
            alt="Tactical satellite map background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale contrast-150" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7P3z6elJ_vZ64UexC9qos5pI7PxIrZMc9UTXkaoJVey1F_YX5iRXv3MR1XI8v7aJ6Zmq-zZWMUC0e8NmIsVmXnE3O5Rk3hs-fyNG5LyCB2gl0GVsoaGkcDt-Udnp8cEhZaszkzDjxZfeT3bBwigEQpK31Ow2s9tzUeZJ0ykMdzQaJ-id6XGEz-o03KB87iMXsSJhqG92_Dt0Hh_Y9lrrHgth8WjI8H0I_KHfgUUTxDbk4Yk84-7qk2itMxotQNZnhgDeALlHP9k" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-headline tracking-tighter mb-8 uppercase italic leading-[0.8] drop-shadow-2xl">
              Find Your <br /><span className="text-secondary italic">Source</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The surge is spreading globally. Locate your nearest Rex Velocity authorized deployment center and refuel your biological arsenal.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
          <MapPin className="w-[600px] h-[600px] text-primary rotate-12 animate-float" />
        </div>
      </section>

      {/* Store Locator Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Search */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl shadow-black/5 sticky top-28">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black font-headline uppercase italic">Territory</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Enter City or Postcode"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-5 px-6 focus:outline-none focus:border-secondary transition-colors text-base font-medium placeholder:opacity-50"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-secondary hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {stores.map((store, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-[2rem] bg-surface-container-lowest hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-secondary/30 group relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-black font-headline uppercase italic group-hover:text-secondary transition-colors line-clamp-1">{store.name}</h4>
                          <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{store.distance}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-4 font-light">{store.address}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {store.stock.slice(0, 2).map((item, idx) => (
                            <span key={idx} className="text-[9px] font-bold uppercase tracking-wider bg-background px-2 py-1 rounded-md text-on-surface-variant/60">
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${store.status === 'Open' ? 'text-emerald-500' : 'text-orange-500'}`}>
                            {store.status}
                          </span>
                          <button className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            <Navigation className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Map View */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="w-full h-[500px] lg:h-[800px] bg-surface-container-highest rounded-[3.5rem] relative overflow-hidden border border-outline-variant/10 shadow-2xl shadow-black/20 group">
                {/* Dynamic Map Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(#ff8f70_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                  <img alt="Abstract tactical map" className="w-full h-full object-cover filter contrast-125 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7P3z6elJ_vZ64UexC9qos5pI7PxIrZMc9UTXkaoJVey1F_YX5iRXv3MR1XI8v7aJ6Zmq-zZWMUC0e8NmIsVmXnE3O5Rk3hs-fyNG5LyCB2gl0GVsoaGkcDt-Udnp8cEhZaszkzDjxZfeT3bBwigEQpK31Ow2s9tzUeZJ0ykMdzQaJ-id6XGEz-o03KB87iMXsSJhqG92_Dt0Hh_Y9lrrHgth8WjI8H0I_KHfgUUTxDbk4Yk84-7qk2itMxotQNZnhgDeALlHP9k" referrerPolicy="no-referrer" />
                </div>

                {/* Map Markers Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10 w-full max-w-lg bg-surface-container-lowest/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10 md:p-12 text-center shadow-3xl shadow-black/50"
                  >
                    <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(255,143,112,0.4)] animate-pulse">
                      <MapPin className="w-12 h-12 text-on-primary-fixed" />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black font-headline uppercase italic mb-4 leading-none">Biological Network</h4>
                    <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed mb-8">
                      Authorized deployment centers detected. Search by territory to reveal specific access points.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-background/50 rounded-2xl border border-white/5">
                        <span className="block text-2xl font-black font-headline text-secondary">248+</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Active Nodes</span>
                      </div>
                      <div className="p-4 bg-background/50 rounded-2xl border border-white/5">
                        <span className="block text-2xl font-black font-headline text-primary">12</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Expansion Zones</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Map Scanning Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary/30 shadow-[0_0_20px_rgba(255,215,9,0.5)] animate-scan z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a Reseller Partner */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic leading-none mb-6">Authorize Your <span className="text-primary">Territory</span></h2>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8">Become an authorized source for Rex Velocity. Join our elite network of gyms, retailers, and distributors carrying the future of energy science.</p>
              <div className="space-y-4">
                {[
                  { icon: Store, title: 'Strategic Support', text: 'Premium POS displays and brand alignment kits.' },
                  { icon: Navigation, title: 'Global Network', text: 'Inclusion in our interactive deployment grid.' },
                  { icon: Clock, title: 'Priority Stock', text: 'Early access to limited edition seasonal drops.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-surface-container-high border border-outline-variant/5">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-sm text-on-surface-variant font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-background p-10 rounded-[3rem] border border-primary/20 shadow-2xl">
                <h3 className="text-2xl font-black font-headline uppercase italic mb-8">Wholesale Intake</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input placeholder="Business Name" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                    <input placeholder="Website URL" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <input placeholder="Contact Email" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  <textarea rows={4} placeholder="Describe your performance territory..." className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                  <button className="w-full kinetic-gradient text-on-primary-fixed py-5 rounded-full font-black font-headline uppercase italic tracking-widest text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                    Apply for Authorization
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
