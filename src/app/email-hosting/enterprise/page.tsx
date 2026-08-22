import EnterpriseEmailPlans from "@/components/email/EnterpriseEmailPlans";
import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { emailFAQ } from "@/components/common/emailFAQ";

const enterpriseEmailStats = [
  {
    value: 10000,
    suffix: "+",
    label: "Mailboxes",
    description: "Professional business email",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Email Uptime",
    description: "Reliable business communication",
  },
  {
    value: 30,
    suffix: " GB",
    label: "Mailbox Storage",
    description: "Generous storage capacity",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Email Support",
    description: "Professional assistance",
  },
];

export default function EnterpriseEmailPage() {
  return (
    <main>

      {/* Enterprise Email Plans */}
      <EnterpriseEmailPlans />

      {/* Enterprise Email Statistics */}
      <StatsCounter
        items={enterpriseEmailStats}
        dark
      />

      {/* FAQ */}
      <FAQ
        title="Enterprise Email FAQs"
        description="Find answers to common questions about Enterprise Email Hosting."
        items={emailFAQ}
      />

    </main>
  );
}