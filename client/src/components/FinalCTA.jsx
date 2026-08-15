import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

export default function FinalCTA() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/60 via-black to-green-950/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl mb-6"
            aria-hidden="true"
          >
            🚀
          </motion.div>

          <h2 className="text-4xl font-black text-white mb-4">
            READY TO GET{' '}
            <span className="green-text-gradient">STARTED?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-4 max-w-lg mx-auto">
            Register now and continue your journey with EarnPepe.
          </p>

          <p className="text-sm text-gray-500 mb-10">
            No registration fee · Simple process · Cashback opportunity
          </p>

          <Button
            size="xl"
            onClick={() => scrollTo('registration')}
            className="animate-pulse-glow"
            aria-label="Register Now for EarnPepe Campaign"
          >
            REGISTER NOW <ArrowRight size={22} />
          </Button>

          <p className="mt-6 text-xs text-gray-600 max-w-sm mx-auto">
            * Cashback and rewards are subject to eligibility and applicable terms.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
