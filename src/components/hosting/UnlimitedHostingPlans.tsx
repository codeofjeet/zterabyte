import PlanEnquiryModal from "@/components/common/PlanEnquiryModal";
import {
  FiCheck,
  FiShield,
  FiZap,
  FiHeadphones,
  FiDatabase,
} from "react-icons/fi";

const plans = [
  {
    name: "Business",
    description:
      "Ideal for businesses that need more websites, resources and professional hosting.",
    price: "₹399",
    period: "/month",
    popular: false,
    features: [
      "Unlimited Websites",
      "Unlimited Bandwidth",
      "50 GB NVMe Storage",
      "Unlimited Email Accounts",
      "Free SSL Certificate",
      "Unlimited Databases",
      "Control Panel",
      "Website Backup",
      "24/7 Support",
    ],
  },
  {
    name: "Professional",
    description:
      "A powerful hosting solution for growing businesses and high-traffic websites.",
    price: "₹599",
    period: "/month",
    popular: true,
    features: [
      "Unlimited Websites",
      "Unlimited Bandwidth",
      "100 GB NVMe Storage",
      "Unlimited Email Accounts",
      "Free SSL Certificate",
      "Unlimited Databases",
      "Advanced Control Panel",
      "Daily Website Backup",
      "Malware Protection",
      "24/7 Priority Support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Designed for established businesses requiring maximum resources and support.",
    price: "₹899",
    period: "/month",
    popular: false,
    features: [
      "Unlimited Websites",
      "Unlimited Bandwidth",
      "200 GB NVMe Storage",
      "Unlimited Email Accounts",
      "Free SSL Certificate",
      "Unlimited Databases",
      "Advanced Control Panel",
      "Daily Backup",
      "Advanced Security",
      "Priority Support",
    ],
  },
];

export default function UnlimitedHostingPlans() {
  return (
    <section id="hosting-plans" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            Unlimited Shared Hosting
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Unlimited Hosting for
            <span className="block text-[#006cb5]">
              Growing Businesses
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Get the resources, flexibility and performance your growing
            business needs to build a stronger online presence.
          </p>

        </div>

        {/* =====================================================
            PLANS
        ====================================================== */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                plan.popular
                  ? "border-[#006cb5] ring-2 ring-[#006cb5]/10"
                  : "border-slate-200"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#006cb5] px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h2 className="text-2xl font-bold text-[#071827]">
                {plan.name}
              </h2>

              {/* Description */}
              <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-7 flex items-end gap-1">

                <span className="text-4xl font-black text-[#071827]">
                  {plan.price}
                </span>

                <span className="mb-1 text-sm text-slate-500">
                  {plan.period}
                </span>

              </div>

              <p className="mt-2 text-xs text-slate-400">
                Billed monthly
              </p>

              {/* CTA */}
                <PlanEnquiryModal
                  service="Unlimited Shared Hosting"
                  plan={plan.name}
                  price={`${plan.price}${plan.period}`}
                  billing="Monthly"
                  features={plan.features}
                />

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* Features */}
              <p className="mb-4 text-sm font-bold text-[#071827]">
                Plan Includes
              </p>

              <div className="space-y-3.5">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                      <FiCheck className="text-xs" />
                    </span>

                    <span className="text-sm text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* =====================================================
            FEATURE STRIP
        ====================================================== */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-slate-200 bg-[#f6fafd] p-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiZap />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                High Performance
              </p>

              <p className="text-xs text-slate-500">
                Built for speed
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiDatabase />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Flexible Resources
              </p>

              <p className="text-xs text-slate-500">
                Room to grow
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiShield />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Secure Hosting
              </p>

              <p className="text-xs text-slate-500">
                Protected environment
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiHeadphones />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Priority Support
              </p>

              <p className="text-xs text-slate-500">
                Help when needed
              </p>
            </div>

          </div>

        </div>

        {/* =====================================================
            NOTE
        ====================================================== */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Hosting prices and resources shown are placeholders and
          should be replaced with Zterabyte's actual plans before launch.
        </p>

      </div>
    </section>
  );
}