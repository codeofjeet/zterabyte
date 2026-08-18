import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Services from "@/components/home/Services";
import DomainSection from "@/components/home/DomainSection";
import HostingPlans from "@/components/home/HostingPlans";
import EmailHosting from "@/components/home/EmailHosting";
import Development from "@/components/home/Development";
import DesignServices from "@/components/home/DesignServices";
import Marketing from "@/components/home/Marketing";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustStats />

      <Services />

      <DomainSection />

      <HostingPlans />

      <EmailHosting />

      <Development />

      <DesignServices />

      <Marketing />

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <HomeCTA />
    </>
  );
}