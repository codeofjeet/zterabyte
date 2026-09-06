import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiShoppingCart,
  FiSmartphone,
} from "react-icons/fi";

const services = [
  {
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Professional websites designed to build trust and generate new business.",
    href: "/website-development/business",
  },
  {
    icon: FiShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Modern online stores with product management and customer-friendly shopping experiences.",
    href: "/website-development/ecommerce",
  },
  {
    icon: FiMonitor,
    title: "Corporate Websites",
    description:
      "Powerful corporate websites that present your company and services professionally.",
    href: "/website-development/corporate",
  },
  {
    icon: FiCode,
    title: "Custom Web Applications",
    description:
      "Custom web applications built around your business requirements and workflows.",
    href: "/website-development/custom-web-application",
  },
  {
    icon: FiLayers,
    title: "WordPress Websites",
    description:
      "Flexible WordPress websites that are easy to manage and maintain.",
    href: "/website-development/wordpress",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Development",
    description:
      "Websites that provide a smooth experience across desktop, tablet and mobile.",
    href: "/website-development/responsive",
  },
];

export default function WebsiteDevelopmentHero() {
  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071827] py-20 lg:py-24">

        {/* Background decoration */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#006cb5]/25 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#38a9f5]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/30 bg-[#006cb5]/20 px-4 py-2 text-sm font-semibold text-[#70c8ff]">
                <FiCode />
                Website Development
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                Build a Website

                <span className="block text-[#38a9f5]">
                  That Grows Your Business
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Create a fast, modern and professional online presence
                with websites designed around your business goals,
                customers and future growth.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Responsive Design",
                  "Fast Performance",
                  "SEO-Friendly Structure",
                  "Modern Technology",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
                >
                  Get Started
                  <FiArrowRight />
                </Link>

                <a
                  href="#website-services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>

              </div>

            </div>


            {/* RIGHT VISUAL */}
            <div className="relative">

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Browser Header */}
                <div className="rounded-2xl bg-[#0d2436] p-4">

                  <div className="flex items-center gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-3 h-7 flex-1 rounded-lg bg-white/10" />

                  </div>

                </div>


                {/* Website Preview */}
                <div className="mt-4 overflow-hidden rounded-2xl bg-white">

                  {/* Fake navigation */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                    <div className="h-5 w-24 rounded bg-[#006cb5]" />

                    <div className="hidden gap-3 sm:flex">

                      <span className="h-2 w-12 rounded bg-slate-200" />
                      <span className="h-2 w-12 rounded bg-slate-200" />
                      <span className="h-2 w-12 rounded bg-slate-200" />

                    </div>

                  </div>


                  {/* Fake hero */}
                  <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">

                    <div>

                      <div className="h-4 w-20 rounded bg-[#eaf6ff]" />

                      <div className="mt-4 h-7 w-full rounded bg-slate-800" />

                      <div className="mt-2 h-7 w-4/5 rounded bg-[#006cb5]" />

                      <div className="mt-5 space-y-2">

                        <div className="h-2 w-full rounded bg-slate-200" />
                        <div className="h-2 w-5/6 rounded bg-slate-200" />
                        <div className="h-2 w-4/6 rounded bg-slate-200" />

                      </div>

                      <div className="mt-6 h-9 w-28 rounded-lg bg-[#006cb5]" />

                    </div>


                    <div className="flex items-center justify-center rounded-2xl bg-[#eaf6ff] p-5">

                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-[#006cb5] shadow-lg">

                        <FiMonitor className="text-5xl text-white" />

                      </div>

                    </div>

                  </div>


                  {/* Fake cards */}
                  <div className="grid grid-cols-3 gap-3 border-t border-slate-100 p-5">

                    <div className="h-16 rounded-xl bg-[#f6fafd]" />
                    <div className="h-16 rounded-xl bg-[#f6fafd]" />
                    <div className="h-16 rounded-xl bg-[#f6fafd]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="website-services"
        className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#006cb5]">
              Our Services
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
              Website Development Solutions
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              From simple business websites to custom web applications,
              we build digital experiences designed for performance,
              usability and growth.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9def5] hover:shadow-xl sm:p-7"
                >

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#071827]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <Link
  href={service.href}
  className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#006cb5]"
>
  Learn More
  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
</Link>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}