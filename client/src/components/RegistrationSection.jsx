import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Rocket } from 'lucide-react';
import RegistrationForm from './RegistrationForm';
import Container from './ui/Container';

const afterCards = [
  {
    number: '01',
    icon: CheckCircle2,
    title: 'Your Details Are Submitted',
    desc: 'Your campaign registration details are recorded.',
    color: 'text-green-400',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
  },
  {
    number: '02',
    icon: ExternalLink,
    title: 'Continue to EarnPepe',
    desc: 'You are directed to the EarnPepe website.',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Your EarnPepe Journey',
    desc: 'Complete the required EarnPepe registration and available activities.',
    color: 'text-blue-400',
    glow: 'shadow-[0_0_20px_rgba(96,165,250,0.15)]',
  },
];

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #020d04 0%, #031a08 40%, #020d04 100%)',
      }}
    >
      {/* Decorative glow circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-600/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            📝 Register Now
          </span>
          <h2 className="text-3xl font-black text-white mb-3">
            START YOUR{' '}
            <span className="green-text-gradient">EARNPEPE</span> JOURNEY
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Register now to continue to EarnPepe. No registration fee required.
          </p>
        </motion.div>

        {/* 2-Column Desktop Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
          <div className="card-glass-strong p-6 rounded-3xl border border-green-500/25 shadow-[0_0_50px_rgba(34,197,94,0.12)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <span className="text-lg" aria-hidden="true">🚀</span>
              </div>
              <div>
                <p className="text-xs text-green-400 font-bold uppercase tracking-wider">
                  Free Campaign Registration
                </p>
                <h3 className="text-lg font-black text-white">Register & Continue</h3>
              </div>
            </div>

            <RegistrationForm />
          </div>
        </motion.div>

          {/* After-registration Column */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:pt-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left hidden lg:block">What Happens Next?</h3>
            <div className="grid gap-3 md:gap-6">
          {afterCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`card-glass p-3 md:p-5 ${card.glow} hover:scale-105 transition-transform duration-300 flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0`}
              >
                <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-auto md:mb-3">
                  <div className={`text-xs md:text-sm font-black mb-1 md:mb-3 ${card.color}`}>{card.number}</div>
                  <Icon
                    size={24}
                    className={`mx-auto md:w-7 md:h-7 ${card.color}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-[13px] md:text-sm mb-1 md:mb-2 leading-tight">{card.title}</h4>
                  <p className="text-[11px] md:text-xs text-gray-400 leading-snug">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
