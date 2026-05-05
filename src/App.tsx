/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Science } from './pages/Science';
import { Reviews } from './pages/Reviews';
import { Locations } from './pages/Locations';
import { ProductDetail } from './pages/ProductDetail';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Contact } from './pages/Contact';
import { CartProvider } from './context/CartContext';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect } from 'react';
import { CookieConsentComponent } from './components/CookieConsent';
import { useAnalytics } from './hooks/useAnalytics';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  useAnalytics();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/formula" element={<Science />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <CookieConsentComponent />
        <div className="relative min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-black">
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <AnimatedRoutes />
          </main>

          <Footer />

          {/* Background Noise Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}
