import FeaturesSection from "../../components/landing/FeaturesSection";
import FinalCtaSection from "../../components/landing/FinalCtaSection";
import HeroSection from "../../components/landing/HeroSection";
import HowItWorksSection from "../../components/landing/HowItWorksSection";
import ProblemSolutionSection from "../../components/landing/ProblemSolutionSection";
import TrustSection from "../../components/landing/TrustSection";

function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FinalCtaSection />
    </main>
  );
}

export default LandingPage;
