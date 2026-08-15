import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import RewardSection from '../components/RewardSection';
import HowItWorks from '../components/HowItWorks';
import JourneyTimeline from '../components/JourneyTimeline';
import StepGuide from '../components/StepGuide';
import RegistrationSection from '../components/RegistrationSection';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import MobileStickyCTA from '../components/MobileStickyCTA';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050a06] text-white font-sans overflow-x-hidden">
      {/* Top announcement bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
          <Hero />
          <TrustStrip />
          <RewardSection />
          <HowItWorks />
          <JourneyTimeline />
          <StepGuide />
          <RegistrationSection />
          <Benefits />
          <FAQ />
          <Disclaimer />
          <FinalCTA />
        </main>

        <Footer />
        <MobileStickyCTA />
    </div>
  );
}
