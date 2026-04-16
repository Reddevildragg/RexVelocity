import { motion } from 'motion/react';
import { Star, User, Quote, Instagram, Twitter, MessageSquare, Award } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    { name: 'Alex Rivera', role: 'Crossfit Athlete', text: 'Rex Velocity is the only drink that keeps me going through my double sessions without the crash.', rating: 5, date: '2 days ago' },
    { name: 'Jordan Smith', role: 'Digital Nomad', text: 'The focus I get from the L-Theanine blend is incredible. It\'s my secret weapon for long coding nights.', rating: 5, date: '1 week ago' },
    { name: 'Elena Petrova', role: 'Yoga Instructor', text: 'Clean energy that actually tastes good. I love that it uses natural extracts.', rating: 5, date: '2 weeks ago' },
    { name: 'Marcus Chen', role: 'Ultra Runner', text: 'Primal Punch is my fuel for mountain trails. The electrolyte balance feels surgical.', rating: 5, date: '1 month ago' },
    { name: 'Sarah Jenkins', role: 'Physiotherapist', text: 'I recommend the mixable powders to my clients for focused recovery sessions.', rating: 4, date: '3 months ago' },
    { name: 'David G.', role: 'Pro Surfer', text: 'Volcanic Blood is a ritual for dawn patrol. Sharp citrus, sharp focus.', rating: 5, date: '4 months ago' }
  ];

  const socialStats = [
    { label: 'Apex Points', value: '450k+', icon: Instagram },
    { label: 'Surge Sprints', value: '1.2M', icon: Twitter },
    { label: 'biological Reviews', value: '15k+', icon: MessageSquare }
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
      <section className="min-h-[70vh] flex items-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px] animate-pulse"></div>
          <img 
            alt="Abstract performance background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPY8onMpth-5sEIC9n2LpPXU6q2cb2tFKxWxTzbvDIw3agvnC5M2f4VPdy4m6HJ4y7dyCCL3cY7xXN2n3BIjuDYBCGs_mQHzqBZTlSoovifjwTDzJnfe2XNXnNs24cDFWM7W_ZHtteAcfiThHt22joIacjxt5Jl7oDZBLnLWDpzcXK_8EEyfGJVtDw6ikaVyVu1vNm2fhl8dFgTb4GSuc58Fjsh-dq1Z1ee12A33gYdkZ7YjxPv9jC8KJ4dQhcyg3ujLeysCkVaak" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5"
            >
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-headline tracking-tighter mb-8 uppercase italic leading-[0.8] drop-shadow-2xl">
                Voice <br />of the <span className="text-primary italic">Apex</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Real results from elite performers. Discover how Rex Velocity is redefining the biological limit of human velocity.
              </p>
            </motion.div>
            
            <div className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:max-w-xs">
              {socialStats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="bg-surface-container-high/40 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-2xl flex items-center lg:flex-row flex-col gap-4 text-center lg:text-left group hover:bg-surface-container-highest/60 transition-colors"
                >
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black font-headline text-on-surface">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-container-high p-10 rounded-[2.5rem] border border-outline-variant/10 relative group hover:bg-surface-container-highest transition-all duration-500 hover:scale-[1.02] flex flex-col h-full"
              >
                <div className="absolute top-8 right-8 text-on-surface-variant/10 group-hover:text-primary/10 transition-colors">
                  <Quote className="w-12 h-12 fill-current" />
                </div>
                
                <div className="flex gap-1 text-secondary mb-6 relative z-10">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-current' : 'opacity-20'}`} />
                  ))}
                </div>
                
                <p className="text-lg font-medium leading-relaxed mb-8 italic relative z-10 grow">"{review.text}"</p>
                
                <div className="flex items-center gap-4 pt-8 border-t border-outline-variant/10 relative z-10 mt-auto">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <User className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">{review.name}</h5>
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em]">{review.role}</p>
                  </div>
                  <span className="ml-auto text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Pack Section (Expanded) */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-left"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-black font-headline mb-8 uppercase italic leading-[0.9] tracking-tighter">
                Lead the<br /><span className="text-primary font-black">Velocity</span>
              </h2>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-10">
                Biological enhancement is better shared. Join our community of elite performers and access exclusive seasonal drops, limited edition equipment, and territory-specific surges.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="block text-4xl font-black font-headline text-on-surface">50k+</span>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Biological Units</span>
                </div>
                <div>
                  <span className="block text-4xl font-black font-headline text-on-surface">120+</span>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Apex Partners</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-surface-container-high p-10 md:p-14 rounded-[3.5rem] border border-primary/20 shadow-3xl shadow-primary/5">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-black font-headline uppercase italic leading-none mb-3 italic">Join the Pack</h3>
                  <p className="text-on-surface-variant text-sm font-light">Enter your coordinates to receive early access protocols.</p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-4">Full Identity</label>
                      <input type="text" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-base" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-4">Communication Node</label>
                      <input type="email" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-base" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-4">Mission Statement / Why Rex Velocity?</label>
                    <textarea rows={4} className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-3xl py-4 px-6 focus:outline-none focus:border-primary transition-colors resize-none text-base"></textarea>
                  </div>
                  <button type="submit" className="w-full kinetic-gradient text-on-primary-fixed py-5 rounded-full font-black font-headline uppercase italic tracking-widest text-xl hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-primary/30">
                    Authorize Entry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
