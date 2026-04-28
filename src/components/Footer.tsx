import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Twitch } from 'lucide-react';
import { Container } from './Container';

export const Footer = () => {
  const socials = [
    { icon: <Instagram size={20} />, label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: <Twitter size={20} />, label: 'X (Twitter)', color: 'hover:bg-[#1DA1F2]' },
    { icon: <Youtube size={20} />, label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { icon: <Twitch size={20} />, label: 'Twitch', color: 'hover:bg-[#9146FF]' },
    { icon: <Facebook size={20} />, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
  ];

  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-neutral-950">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 md:py-16">
        <div className="col-span-1 md:col-span-1">
          <div className="text-4xl font-black tracking-tighter text-primary font-headline mb-6">REX VELOCITY</div>
          <p className="font-light text-neutral-400 font-body">UNLEASH THE PRIMAL SURGE. The ultimate bio-available performance fuel for those who refuse to be prey.</p>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Navigation</h5>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/formula">The Formula</Link></li>
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/shop">Shop All</Link></li>
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/reviews">Reviews</Link></li>
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/locations">Find Store</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Support</h5>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="text-neutral-500 hover:text-primary font-body hover:translate-x-1 transition-transform duration-200 block" to="/contact">Contact HQ</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Connect With Us</h5>
          <div className="flex flex-wrap gap-3">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href="#"
                className={`w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500 font-light">Join 500k+ predators in the pack.</p>
        </div>
      </Container>
      <div className="border-t border-neutral-900 py-6 text-center">
        <p className="text-neutral-500 font-light font-body text-sm">© 2026 REX VELOCITY. UNLEASH THE PRIMAL SURGE.</p>
      </div>
    </footer>
  );
};
