import { motion } from 'motion/react';
import { MapPin, Navigation, Search, Clock, Zap } from 'lucide-react';
import { STORES } from '../constants';

export const StoreLocator = () => {
  return (
    <section id="locator" className="py-16 px-6 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">FIND YOUR <span className="text-brand-primary">FUEL</span></h2>
            <p className="text-white/60 max-w-md">Locate the nearest Rex Velocity distribution point and recharge your arsenal.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Enter City or Postcode..."
              className="w-full bg-brand-surface border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-brand-primary transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Store List */}
          <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {STORES.map((store) => (
              <motion.div
                key={store.id}
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-6 cursor-pointer hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl mb-1 group-hover:text-brand-primary transition-colors">{store.name}</h3>
                    <p className="text-sm text-white/40">{store.address}</p>
                  </div>
                  <div className="text-brand-primary">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Navigation size={14} className="text-brand-secondary" />
                    {store.distance}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className={store.status === 'Open' ? 'text-green-500' : 'text-red-500'} />
                    <span className={store.status === 'Open' ? 'text-green-500' : 'text-red-500'}>{store.status}</span>
                    {store.status === 'Open' && <span className="text-white/40">Until {store.closingTime}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <div 
              className="absolute inset-0 bg-neutral-900 grayscale"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-brand-bg/40" />
            </div>
            
            {/* Map UI Elements */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
              <button className="w-12 h-12 bg-brand-surface border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors">
                <Navigation size={20} />
              </button>
              <div className="flex flex-col bg-brand-surface border border-white/10 rounded-lg overflow-hidden">
                <button className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors">+</button>
                <div className="h-px bg-white/10 mx-2" />
                <button className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors">-</button>
              </div>
            </div>

            {/* Custom Marker */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,143,112,0.6)]">
                  <Zap size={24} className="text-black fill-black" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-primary rotate-45" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
