import Link from "next/link";
import {
  FiPenTool,
  FiLayout,
  FiImage,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

const designServices = [
  {
    icon: FiPenTool,
    number: "01",
    title: "Logo Design",
    description:
      "Create a distinctive logo that communicates your brand identity and makes your business memorable.",
    href: "/design/logo-design",
  },
  {
    icon: FiLayout,
    number: "02",
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging digital experiences that make websites and applications easy to use.",
    href: "/design/ui-ux-design",
  },
  {
    icon: FiImage,
    number: "03",
    title: "Graphics Design",
    description:
      "Professional graphics for your digital presence, marketing campaigns and business communication.",
    href: "/design/graphics-design",
  },
];

export default function DesignServices() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
              <FiPenTool />
              What We Design
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
              Make Your Brand
              <span className="block text-[#006cb5]">
                Impossible to Ignore
              </span>
            </h2>

          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:ml-auto">
            Great design helps people understand your business before
            they even read your message. We create visual experiences
            that make your brand look professional, memorable and consistent.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {designServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f6fafd] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#b9ddf5] hover:bg-white hover:shadow-2xl sm:p-8"
              >

                {/* Large Number */}
                <span className="absolute right-5 top-2 text-7xl font-black text-[#006cb5]/5 transition duration-300 group-hover:text-[#006cb5]/10">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#006cb5] shadow-sm transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">

                  <Icon className="text-2xl" />

                </div>

                {/* Content */}
                <div className="relative mt-8">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006cb5]">
                    Design Service
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                </div>

                {/* Features */}
                <div className="relative mt-7 space-y-3">

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-[#006cb5]" />
                    Professional design
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-[#006cb5]" />
                    Brand-focused approach
                  </div>

                </div>

                {/* Link */}
                <div className="relative mt-8 flex items-center justify-between border-t border-slate-200 pt-5">

                  <span className="text-sm font-bold text-[#006cb5]">
                    Explore Service
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#006cb5] shadow-sm transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">

                    <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                  </span>

                </div>

              </Link>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#071827] px-6 py-7 sm:px-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Have a design project in mind?
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Let's create something that represents your business.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#006cb5] px-6 py-3 font-semibold text-white transition hover:bg-[#0082d8]"
            >
              Start a Project
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}