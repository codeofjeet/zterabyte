import Link from "next/link";
import {
  FiCode,
  FiShoppingCart,
  FiSmartphone,
  FiLayers,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const developmentServices = [
  {
    icon: FiGlobe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed around your business requirements.",
    href: "/website-development/web-development",
  },
  {
    icon: FiShoppingCart,
    title: "eCommerce Development",
    description:
      "Build powerful online stores that provide a smooth shopping experience across all devices.",
    href: "/website-development/ecommerce",
  },
  {
    icon: FiLayers,
    title: "Shopify Development",
    description:
      "Launch and customize Shopify stores with a professional design and business-focused features.",
    href: "/website-development/shopify",
  },
  {
    icon: FiCode,
    title: "WordPress Development",
    description:
      "Flexible WordPress websites for businesses, organizations, blogs and online services.",
    href: "/website-development/wordpress",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Application Development",
    description:
      "Create user-friendly mobile applications that connect your customers with your business.",
    href: "/website-development/mobile-app",
  },
];

const technologies = [
  "Business Websites",
  "eCommerce Stores",
  "Web Applications",
  "Mobile Applications",
];

export default function Development() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 lg:py-24">

      {/* Background Effects */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
            <FiCode />
            Website & App Development
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turn Your Ideas Into
            <span className="block text-[#38a9f5]">
              Digital Experiences
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From business websites and online stores to mobile applications,
            we create digital products designed to help your business grow.
          </p>

        </div>

        {/* Main Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* LEFT VISUAL */}
          <div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">

              {/* Browser Window */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">

                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />

                  <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-xs text-slate-400">
                    yourbusiness.com
                  </div>

                </div>

                {/* Website Preview */}
                <div className="p-5 sm:p-7">

                  <div className="flex items-center justify-between">

                    <div className="h-5 w-24 rounded bg-[#006cb5]" />

                    <div className="flex gap-2">
                      <span className="h-2 w-10 rounded bg-slate-200" />
                      <span className="h-2 w-10 rounded bg-slate-200" />
                      <span className="h-2 w-10 rounded bg-slate-200" />
                    </div>

                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">

                    <div>
                      <div className="h-4 w-40 rounded bg-[#071827]" />

                      <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-slate-200" />

                      <div className="mt-5 h-9 w-28 rounded-lg bg-[#006cb5]" />
                    </div>

                    <div className="rounded-xl bg-[#eaf6ff] p-5">

                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
                        <FiCode className="text-3xl" />
                      </div>

                    </div>

                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-3">

                    <div className="h-16 rounded-xl bg-slate-100" />
                    <div className="h-16 rounded-xl bg-slate-100" />
                    <div className="h-16 rounded-xl bg-slate-100" />

                  </div>

                </div>

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-3 right-4 rounded-xl border border-white/10 bg-[#006cb5] px-5 py-4 shadow-xl sm:right-8">

                <p className="text-xs font-medium text-blue-100">
                  Digital Solutions
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Built Around Your Business
                </p>

              </div>

            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {technologies.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="shrink-0 text-[#38a9f5]" />

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-4">

            {developmentServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#38a9f5]/40 hover:bg-white/10 sm:p-6"
                >

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006cb5]/20 text-[#38a9f5] transition group-hover:bg-[#006cb5] group-hover:text-white">

                    <Icon className="text-xl" />

                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-lg font-bold text-white transition group-hover:text-[#38a9f5]">
                        {service.title}
                      </h3>

                      <FiArrowRight className="shrink-0 text-[#38a9f5] transition group-hover:translate-x-1" />

                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}