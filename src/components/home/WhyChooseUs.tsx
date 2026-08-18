import Link from "next/link";
import {
  FiCheckCircle,
  FiShield,
  FiHeadphones,
  FiLayers,
  FiBriefcase,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiLayers,
    title: "Complete Digital Solutions",
    description:
      "Domains, hosting, email, development, design and digital marketing are available under one roof.",
  },
  {
    icon: FiShield,
    title: "Security Focused",
    description:
      "We build and support digital solutions with reliability, security and business continuity in mind.",
  },
  {
    icon: FiHeadphones,
    title: "Professional Support",
    description:
      "Get assistance when you need it, from choosing the right service to managing your online presence.",
  },
  {
    icon: FiBriefcase,
    title: "Business Focused",
    description:
      "Our solutions are designed around your business objectives rather than one-size-fits-all packages.",
  },
  {
    icon: FiUsers,
    title: "Long-Term Partnership",
    description:
      "We aim to support your business as it grows, from your first domain to your larger digital projects.",
  },
  {
    icon: FiCheckCircle,
    title: "One Trusted Partner",
    description:
      "Reduce the complexity of managing multiple providers for your digital infrastructure and services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
              Why Zterabyte
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
              One Partner for Your
              <span className="block text-[#006cb5]">
                Complete Digital Journey
              </span>
            </h2>

          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:ml-auto">
            From getting your first domain to building, hosting and
            promoting your online business, Zterabyte brings essential
            digital services together in one place.
          </p>

        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:shadow-xl sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-[#071827]">

          <div className="grid items-center lg:grid-cols-[1fr_auto]">

            <div className="p-7 sm:p-9 lg:p-10">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                  <FiShield />
                </div>

                <span className="text-sm font-semibold text-[#38a9f5]">
                  Built for Businesses
                </span>

              </div>

              <h3 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                Your digital presence should work for your business,
                not become another problem to manage.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Let Zterabyte handle the technology while you focus on
                serving your customers and growing your business.
              </p>

            </div>

            <div className="px-7 pb-7 sm:px-9 sm:pb-9 lg:px-10 lg:pb-0">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
              >
                Talk to Our Team
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}