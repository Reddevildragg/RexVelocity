import { motion } from 'motion/react';
import { Container } from '../components/Container';
import { Shield } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-32 pb-20"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black font-headline uppercase italic leading-none">Privacy <span className="text-primary">Protocol</span></h1>
              <p className="text-on-surface-variant font-black uppercase tracking-widest text-xs mt-2">Data Security & Telemetry Protection</p>
            </div>
          </div>

          <div className="prose prose-invert prose-orange max-w-none space-y-12 text-on-surface-variant leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-on-surface uppercase font-headline mb-4">1. Data Capture</h2>
              <p>
                At REX VELOCITY, we collect data to optimize your performance. This includes identity parameters (name, email) and shipping telemetry (address). We use this to fulfill your arsenal requests and improve the biological fuel we supply to the pack.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-on-surface uppercase font-headline mb-4">2. Biological Telemetry</h2>
              <p>
                If you choose to share performance metrics or mission reports (reviews), you grant REX VELOCITY the right to use this data to evolve our formulas. Your individual telemetry is protected with military-grade encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-on-surface uppercase font-headline mb-4">3. Cookie Interrogation</h2>
              <p>
                We use tracking beacons (cookies) to monitor site velocity and optimize your deployment path. You can disable these in your terminal (browser) settings, but it may impact site performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-on-surface uppercase font-headline mb-4">4. Third-Party Intelligence</h2>
              <p>
                We never trade your data to low-level scavengers. We only share info with essential logistical partners (shipping, payments) who follow the REX VELOCITY security protocols.
              </p>
            </section>

            <section className="p-8 rounded-[2rem] bg-surface-container-high border border-primary/20">
              <h3 className="text-lg font-bold text-primary uppercase mb-2">Protocol Update</h3>
              <p className="text-sm font-medium">Last Modified: April 2026. The pack is always evolving.</p>
            </section>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
