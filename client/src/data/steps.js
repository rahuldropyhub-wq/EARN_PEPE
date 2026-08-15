import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';

export const stepGuideData = [
  {
    id: 1,
    number: "01",
    title: "Register Through Our Campaign Page",
    description:
      "Start by entering your details in the registration form on this website. Provide your full name, email address, contact number, and PhonePe number.",
    ctaText: "Register Now",
    ctaScroll: "registration",
    image: img1,
    imageAlt: "Campaign registration form",
    highlight: "Free to register - no fee required",
  },
  {
    id: 2,
    number: "02",
    title: "Continue to EarnPepe",
    description:
      "After submitting the campaign registration successfully, continue to the EarnPepe website using the provided button on the success screen.",
    ctaText: null,
    image: img2,
    imageAlt: "EarnPepe website homepage",
    highlight: "You'll be redirected automatically",
    isExternal: true,
  },
  {
    id: 3,
    number: "03",
    title: "Create Your EarnPepe Account",
    description:
      "Click \"Create Account\" on the EarnPepe website and complete the required registration information. Use a valid email address you have access to.",
    ctaText: null,
    image: img3,
    imageAlt: "EarnPepe account creation screen",
    highlight: "Use your real details for verification",
  },
  {
    id: 4,
    number: "04",
    title: "Login to EarnPepe",
    description:
      "After completing EarnPepe registration, use your newly created login credentials to access your EarnPepe account.",
    ctaText: null,
    image: img4,
    imageAlt: "EarnPepe login screen",
    highlight: "Keep your credentials safe",
  },
  {
    id: 5,
    number: "05",
    title: "Access Your Dashboard",
    description:
      "After login, you can access the EarnPepe dashboard. Here you'll find all available earning activities and your PEPE coin balance.",
    ctaText: null,
    image: img5,
    imageAlt: "EarnPepe dashboard view",
    highlight: "Explore all available activities",
  },
  {
    id: 6,
    number: "06",
    title: "Watch Ads & Earn PEPE Coins",
    description:
      "Complete eligible advertisements, videos, and other available activities according to EarnPepe's current rules and availability to earn PEPE coins.",
    ctaText: null,
    image: img6,
    imageAlt: "EarnPepe activities and ads screen",
    highlight: "Follow campaign instructions for cashback eligibility",
  },
];
