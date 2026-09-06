import Link from "next/link";
import {
  FiTrendingUp,
  FiSearch,
  FiShare2,
  FiMail,
  FiTarget,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const marketingGroups = [
  {
    icon: FiSearch,
    title: "SEO & SMO",
    description:
      "Improve your search visibility and help your business reach customers who are actively looking for your services.",
    services: [
      "SEO & SMO",
      "On Page SEO",
      "Off Page SEO",
      "Local SEO Services",
      "eCommerce SEO Services",
    ],
    href: "/digital-marketing/seo",
  },

  {
    icon: FiShare2,
    title: "Social Media Marketing",
    description:
      "Build your social presence, connect with your audience and create meaningful engagement around your brand.",
    services: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Twitter Marketing",
    ],
    href: "/digital-marketing/social-media",
  },

  {
    icon: FiTarget,
    title: "Google Ads",
    description:
      "Reach potential customers through targeted online advertising campaigns designed around your business objectives.",
    services: [
      "Google Search Ads",
      "Display Advertising",
      "Campaign Management",
    ],
    href: "/digital-marketing/google-ads",
  },

  {
    icon: FiMail,
    title: "Email Marketing",
    description:
      "Stay connected with your customers through professional and targeted email marketing campaigns.",
    services: [
      "Email Campaigns",
      "Customer Communication",
      "Marketing Emails",
    ],
    href: "/digital-marketing/email-marketing",
  },
];

export default function Marketing() {
  return (
    <section className="relative overflow-hidden bg-[#f6fafd] py-20 lg:py-24">

      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            <FiTrendingUp />
            Digital Marketing
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Grow Your Business
            <span className="block text-[#006cb5]">
              Beyond Your Website
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A great website is only the beginning. Reach the right audience,
            build visibility and turn online visitors into customers.
          </p>

        </div>

        {/* Marketing Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {marketingGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:shadow-xl sm:p-8"
              >

                {/* Header */}
                <div className="flex items-start justify-between gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6fafd] text-[#006cb5] transition group-hover:bg-[#eaf6ff]">
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </div>

                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {group.description}
                </p>

                {/* Services */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {group.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2"
                    >
                      <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                      <span className="text-sm font-medium text-slate-600">
                        {service}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Link */}
                <Link
                  href={group.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#006cb5]"
                >
                  Explore Marketing Services

                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#071827] p-7 sm:p-9">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                  <FiTrendingUp />
                </div>

                <span className="text-sm font-semibold text-[#38a9f5]">
                  Ready to Grow?
                </span>

              </div>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Let's put your business in front of the right audience.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Tell us about your business and we'll help you choose
                the right digital marketing approach.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
            >
              Start Your Growth Plan
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}