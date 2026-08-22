import BusinessEmailPlans from "@/components/email/BusinessEmailPlans";
import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { emailFAQ } from "@/components/common/emailFAQ";

const businessEmailStats = [
  {
    value: 5000,
    suffix: "+",
    label: "Email Accounts",
    description: "Professional business mailboxes",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Email Uptime",
    description: "Reliable email access",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Email Support",
    description: "Assistance when you need it",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Email hosting expertise",
  },
];

export default function BusinessEmailPage() {
  return (
    <main>

      {/* Business Email Plans */}
      <BusinessEmailPlans />

      {/* Email Statistics */}
      <StatsCounter
        items={businessEmailStats}
      />

      {/* FAQ */}
      <FAQ
        title="Business Email FAQs"
        description="Find answers to common questions about professional business email."
        items={emailFAQ}
      />

    </main>
  );
}