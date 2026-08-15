import { motion } from 'framer-motion';
import { UserPlus, ExternalLink, UserCheck, LogIn, LayoutDashboard, Play, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

const steps = [
  {
    id: '01',
    icon: UserPlus,
    title: 'Register',
    description: 'Submit your details through our campaign registration form.',
    cta: true,
  },
  {
    id: '02',
    icon: ExternalLink,
    title: 'Continue to EarnPepe',
    description: 'After successful campaign registration, continue to the EarnPepe website.',
    cta: false,
  },
  {
    id: '03',
    icon: UserCheck,
    title: 'Create EarnPepe Account',
    description: 'Complete the required EarnPepe registration process.',
    cta: false,
  },
  {
    id: '04',
    icon: LogIn,
    title: 'Login',
    description: 'Use your EarnPepe credentials to access your account.',
    cta: false,
  },
  {
    id: '05',
    icon: LayoutDashboard,
    title: 'Complete Activities',
    description: 'Access available activities such as eligible advertisements and videos.',
    cta: false,
  },
  {
    id: '06',
    icon: Play,
    title: 'Earn PEPE Coins & Claim',
    description: 'Complete the requirements and follow campaign instructions for eligible cashback.',
    cta: false,
  },
];

export default function HowItWorks() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="pt-24 pb-12 section-gradient relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            📋 Complete Process
          </span>
          <h2 className="text-3xl font-black text-white mb-4">
            HOW IT <span className="green-text-gradient">WORKS</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Follow these six simple steps to complete the process and explore the
            applicable cashback opportunity.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[3.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle with arrow */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] relative z-10 cursor-default"
                    >
                      <Icon size={22} className="text-black" aria-hidden="true" />
                    </motion.div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-black text-[10px] font-black z-20">
                      {step.id}
                    </div>
                    {/* Arrow to next */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -translate-y-1/2 left-full w-full flex items-center justify-center z-0 pointer-events-none">
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={18} className="text-green-500/60" aria-hidden="true" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-white mb-2 group-hover:text-green-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                  {step.cta && (
                    <button
                      onClick={() => scrollTo('registration')}
                      className="mt-3 text-xs font-bold text-green-400 hover:text-green-300 underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                    >
                      Register Now →
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-0 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 relative"
              >
                {/* Left: circle + line */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)] z-10 relative flex-shrink-0">
                      <Icon size={18} className="text-black" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-black text-[9px] font-black z-20">
                      {step.id}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-green-500/25 min-h-[40px] my-2" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8 pt-1 flex-1">
                  <h3 className="font-bold text-base text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  {step.cta && (
                    <button
                      onClick={() => scrollTo('registration')}
                      className="mt-2 text-sm font-bold text-green-400 hover:text-green-300 underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                    >
                      Register Now →
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('registration')}
            aria-label="Start your EarnPepe journey"
            className="whitespace-nowrap text-xs sm:text-lg"
          >
            START NOW - REGISTER FREE →
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
