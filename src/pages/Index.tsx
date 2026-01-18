import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FutureReadySection } from "@/components/home/FutureReadySection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EcosystemSection />
      <FutureReadySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
