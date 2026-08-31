import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiShield,
} from "react-icons/fi";

const extensions = [
  {
    extension: ".com",
    title: "Business & Brands",
    description:
      "A widely recognized choice for businesses, companies and professional websites.",
    tag: "POPULAR",
  },
  {
    extension: ".in",
    title: "Indian Businesses",
    description:
      "A strong domain choice for businesses, organizations and brands targeting India.",
    tag: "INDIA",
  },
  {
    extension: ".net",
    title: "Technology & Networks",
    description:
      "A practical option for technology companies, online services and network-focused businesses.",
    tag: "BUSINESS",
  },
  {
    extension: ".org",
    title: "Organizations",
    description:
      "A suitable extension for organizations, communities, foundations and initiatives.",
    tag: "ORGANIZATION",
  },
  {
    extension: ".tech",
    title: "Technology Brands",
    description:
      "Create a modern digital identity for technology companies, developers and startups.",
    tag: "TECH",
  },
  {
    extension: ".store",
    title: "Online Stores",
    description:
      "A clear domain choice for ecommerce businesses, online shops and retail brands.",
    tag: "ECOMMERCE",
  },
];

export default function DomainExtensions() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiGlobe />
            Popular Domain Extensions
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Choose an Extension That
            <span className="block text-[#006cb5]">
              Fits Your Business
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Select a domain extension that matches your brand, audience and
            online business goals.
          </p>

        </div>

        {/* Extensions Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {extensions.map((item) => (
            <div
              key={item.extension}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf6ff] text-2xl font-black text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  {item.extension}
                </div>

                <span className="rounded-full bg-[#f1f7fb] px-3 py-1 text-[9px] font-bold tracking-wide text-[#006cb5]">
                  {item.tag}
                </span>

              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-[#071827]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <FiCheckCircle className="text-[#006cb5]" />
                  Domain Ready
                </div>

                <FiArrowRight className="text-[#006cb5] transition-transform duration-300 group-hover:translate-x-1" />

              </div>

            </div>
          ))}

        </div>

        {/* Information Banner */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#071827] p-6 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                <FiGlobe className="text-xl" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Build Your Brand Around the Right Domain
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  Your domain is more than a web address. It is an important
                  part of your brand identity and how customers recognize your
                  business online.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#70c8fa]">
              <FiShield />
              Professional Identity
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}