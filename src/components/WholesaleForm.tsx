import { motion } from 'motion/react';
import { Send, Building2, Users, Globe } from 'lucide-react';

export const WholesaleForm = () => {
  return (
    <section id="wholesale" className="py-24 px-6 bg-brand-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl mb-8">BECOME A <br /><span className="text-brand-primary">DISTRIBUTION TITAN</span></h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Join our network of elite retail partners. We provide the fuel, you provide the reach. Let's dominate the market together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">PREMIUM MARGINS</h4>
                  <p className="text-white/40 text-sm">Industry-leading wholesale pricing for maximum profitability.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">MARKETING SUPPORT</h4>
                  <p className="text-white/40 text-sm">Full access to brand assets, POS materials, and local marketing campaigns.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">GLOBAL LOGISTICS</h4>
                  <p className="text-white/40 text-sm">Rapid fulfillment and reliable supply chain management across 40+ countries.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-10 border-brand-primary/20"
          >
            <h3 className="text-3xl mb-8">INQUIRY FORM</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Company Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Apex Retail Ltd" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                <input type="email" className="w-full bg-brand-bg border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Business Type</label>
                <select className="w-full bg-brand-bg border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                  <option>Gym / Fitness Center</option>
                  <option>Retail Store</option>
                  <option>Online Marketplace</option>
                  <option>Distributor</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-brand-bg border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors resize-none" placeholder="Tell us about your distribution goals..."></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
