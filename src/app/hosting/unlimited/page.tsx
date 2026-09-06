import UnlimitedHostingHero from "@/components/hosting/UnlimitedHostingHero";
import UnlimitedHostingPlans from "@/components/hosting/UnlimitedHostingPlans";
import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { hostingFAQ } from "@/components/common/hostingFAQ";

const unlimitedHostingStats = [
  {
    value: 1000,
    suffix: "+",
    label: "Websites Hosted",
    description: "Powerful hosting infrastructure",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime",
    description: "Designed for reliability",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Server Monitoring",
    description: "Continuous infrastructure monitoring",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Hosting expertise",
  },
];

export default function UnlimitedHostingPage() {
  return (
    <main>

      {/* Hero */}
      <UnlimitedHostingHero />

      {/* Unlimited Hosting Plans */}
      <UnlimitedHostingPlans />

      {/* Hosting Statistics */}
      <StatsCounter
        items={unlimitedHostingStats}
        dark
      />

      {/* FAQ */}
      <FAQ
        title="Unlimited Shared Hosting FAQs"
        description="Find answers to common questions about our unlimited shared hosting service."
        items={hostingFAQ}
      />

    </main>
  );
}