import { motion } from 'motion/react';
import { Container } from '../components/Container';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-32 pb-20"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-2/5">
            <h1 className="text-6xl md:text-8xl font-black font-headline uppercase italic leading-[0.8] mb-8">
              Establish <br /><span className="text-primary italic">Contact</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-12">
              Facing a deployment error? Need more fuel? Our intelligence officers are standing by to assist the pack.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Email Terminal</div>
                  <div className="text-lg font-bold">hq@rexvelocity.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Encrypted Line</div>
                  <div className="text-lg font-bold">+1 (888) REX-FUEL</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">HQ Coordinates</div>
                  <div className="text-lg font-bold">Neon District, Sector 7</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-3/5 w-full"
          >
            <div className="bg-surface-container-high p-10 md:p-14 rounded-[3.5rem] border border-outline-variant/10 shadow-3xl shadow-black/40">
              <div className="flex items-center gap-3 mb-10 text-primary">
                <MessageSquare className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-wider font-headline italic">Send Intelligence</h3>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-4">Codename</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-4">Access Email</label>
                    <input type="email" placeholder="you@domain.com" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-4">Mission Status</label>
                  <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Product Inquiries</option>
                    <option>Order Tracking</option>
                    <option>Biological Feedback</option>
                    <option>Other Missions</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-4">Full Report</label>
                  <textarea rows={5} placeholder="Describe your situation..." className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-3xl py-4 px-6 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full kinetic-gradient text-on-primary-fixed py-5 rounded-full font-black font-headline uppercase italic tracking-widest text-xl flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-primary/30">
                  Transmit Data <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};
