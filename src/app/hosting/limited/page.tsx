import LimitedHostingHero from "@/components/hosting/LimitedHostingHero";
import LimitedHostingPlans from "@/components/hosting/LimitedHostingPlans";
import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { hostingFAQ } from "@/components/common/hostingFAQ";

const limitedHostingStats = [
  {
    value: 500,
    suffix: "+",
    label: "Websites Hosted",
    description: "Reliable shared hosting",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime",
    description: "Stable hosting environment",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Technical Support",
    description: "Help when you need it",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Hosting expertise",
  },
];

export default function LimitedHostingPage() {
  return (
    <main>

      {/* Hero */}
      <LimitedHostingHero />

      {/* Hosting Plans */}
      <LimitedHostingPlans />

      {/* Hosting Statistics */}
      <StatsCounter items={limitedHostingStats} />

      {/* FAQ */}
      <FAQ
        title="Limited Shared Hosting FAQs"
        description="Find answers to common questions about our shared hosting plans."
        items={hostingFAQ}
      />

    </main>
  );
}