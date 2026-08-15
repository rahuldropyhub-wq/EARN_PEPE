import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Container from './ui/Container';

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-12 section-gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex gap-4 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
            <div className="shrink-0 mt-0.5">
              <AlertTriangle
                size={22}
                className="text-orange-400"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-bold text-orange-300 mb-2 text-sm uppercase tracking-wide">
                Important Disclaimer
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cashback is subject to eligibility and applicable terms. Reward
                availability, PEPE coin earnings and platform activities may vary.
                This campaign does not guarantee earnings or cashback. Cashback is
                not guaranteed for all participants. Users should review the
                applicable EarnPepe terms and conditions before participating.
                Platform rules, coin earning rates, and cashback eligibility may
                change without notice.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
