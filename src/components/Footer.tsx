import { Link } from 'react-router-dom';
import { Share2, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-4xl font-black tracking-tighter text-orange-600 font-headline mb-6">REX VELOCITY</div>
          <p className="font-light text-neutral-400 font-body">UNLEASH THE PRIMAL SURGE. The ultimate bio-available performance fuel for those who refuse to be prey.</p>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer group">
              <Share2 className="w-4 h-4 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Navigation</h5>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" to="/formula">The Formula</Link></li>
            <li><Link className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" to="/shop">Individual Cans</Link></li>
            <li><Link className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" to="/reviews">Reviews</Link></li>
            <li><Link className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" to="/shop">Bundles</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Support</h5>
          <ul className="space-y-4">
            <li><a className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" href="#">Privacy Policy</a></li>
            <li><a className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" href="#">Terms of Service</a></li>
            <li><Link className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" to="/reviews">Wholesale</Link></li>
            <li><a className="text-neutral-500 hover:text-orange-400 font-body hover:translate-x-1 transition-transform duration-200 block" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold font-headline mb-6 uppercase tracking-wider">Social Feed</h5>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Instagram style aesthetic product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEmsfUMhA7AMsCkb4Oiz4j9lPDcdhtl5TRf6EaB_8L3XH5tpIj6mXbFm05mmrTDmJLzTCfraYRdCMJzs0Dxl1hdqHFCimWz-uHc4MQ-E8K-rb0waJEj2BDdqO_X4cMkMHzYnKlVpySxLSppqdrNR7ipAumRHNdroWdFe36ESoU-bAfX1DDSPlRA6S9eBftBKrPmnTt9TACBty8zlLKrYJfwaTft2-BQ-YDktB_NA2TDx24YID7TfefU9Gm4u8AlB7xQuPp6gC0ko" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="High intensity workout photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0VsdDB9HnNzjttmuHxtlbgF64JnP46n9kHyKiTZ4ESzVgfVMSSNZANAR0PuNKkLRKiY5wqpGNf38cr0tCTPW8-Lp2t4_DWMgQZ2URXX9gprN90rkrMl7mDbpTXorH1-4c_EAQaF4-JuCpFVqemmuj5etWmVoiKuN9mgCHTVqecBYlEzNsdYLlRlW7SxcEswDr3UNtPRv04zVjqlsKjPqIV-TR2RMU2iGgC58PW4tcwxnAMjyg06le7YNjGFvcH_yaDjUXEum7Mc" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-900 py-10 text-center">
        <p className="text-neutral-500 font-light font-body text-sm">© 2024 REX VELOCITY. UNLEASH THE PRIMAL SURGE.</p>
      </div>
    </footer>
  );
};
