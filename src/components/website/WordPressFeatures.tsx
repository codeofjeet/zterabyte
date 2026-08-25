import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiGlobe,
  FiLayout,
  FiLock,
  FiMenu,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

const features = [
  {
    icon: FiLayout,
    title: "Custom Page Layouts",
    description:
      "Create structured pages for services, products, portfolios, blogs and business information.",
  },
  {
    icon: FiEdit3,
    title: "Content Management",
    description:
      "Manage website pages, blog posts, images and other content through WordPress.",
  },
  {
    icon: FiSettings,
    title: "Plugin Integration",
    description:
      "Add useful functionality through carefully selected WordPress plugins.",
  },
  {
    icon: FiMenu,
    title: "Navigation & Menus",
    description:
      "Create clear menus and navigation structures that make your website easy to explore.",
  },
  {
    icon: FiSearch,
    title: "Search Functionality",
    description:
      "Help visitors quickly find relevant pages, articles and website content.",
  },
  {
    icon: FiGlobe,
    title: "Business Website Support",
    description:
      "Build WordPress websites for businesses, organizations, blogs and online services.",
  },
  {
    icon: FiLock,
    title: "Security Foundation",
    description:
      "Use practical security measures and a structured setup for a more reliable website.",
  },
  {
    icon: FiBarChart2,
    title: "Performance Focus",
    description:
      "Keep the website structure clean and focused on a smooth visitor experience.",
  },
];

export default function WordPressFeatures() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            WordPress Features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Powerful Functionality for Your
            <span className="block text-[#006cb5]">
              WordPress Website
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build a flexible website with the features your visitors need
            and the tools your business needs to manage its content.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Dashboard Preview */}
          <div className="relative">

            <div className="rounded-3xl bg-[#071827] p-5 shadow-xl sm:p-7">

              <div className="overflow-hidden rounded-2xl bg-white">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      WordPress Admin
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-[#071827]">
                      Website Overview
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                    <FiSettings />
                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">

                  <div className="rounded-xl bg-[#eaf6ff] p-3">
                    <p className="text-[10px] text-slate-400">
                      Pages
                    </p>

                    <p className="mt-1 text-lg font-black text-[#071827]">
                      24
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">
                      Posts
                    </p>

                    <p className="mt-1 text-lg font-black text-[#071827]">
                      48
                    </p>
                  </div>

                  <div className="col-span-2 rounded-xl bg-slate-50 p-3 sm:col-span-1">
                    <p className="text-[10px] text-slate-400">
                      Visitors
                    </p>

                    <p className="mt-1 text-lg font-black text-[#006cb5]">
                      12.8K
                    </p>
                  </div>

                </div>

                {/* Website Preview */}
                <div className="px-4 pb-4">

                  <div className="rounded-xl border border-slate-100 p-4">

                    <div className="flex items-center justify-between">

                      <p className="text-xs font-bold text-[#071827]">
                        Website Content
                      </p>

                      <FiGlobe className="text-[#006cb5]" />

                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">

                      <div className="rounded-lg bg-[#eaf6ff] p-3">
                        <div className="h-10 rounded-md bg-[#dbeeff]" />
                        <div className="mt-2 h-2 rounded bg-slate-200" />
                        <div className="mt-2 h-2 w-2/3 rounded bg-slate-100" />
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="h-10 rounded-md bg-slate-100" />
                        <div className="mt-2 h-2 rounded bg-slate-200" />
                        <div className="mt-2 h-2 w-2/3 rounded bg-slate-100" />
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="h-10 rounded-md bg-slate-100" />
                        <div className="mt-2 h-2 rounded bg-slate-200" />
                        <div className="mt-2 h-2 w-2/3 rounded bg-slate-100" />
                      </div>

                    </div>

                  </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-slate-100 px-4 py-4">

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                    <FiCheckCircle />
                    Easy website management
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-2 rounded-xl bg-[#006cb5] px-4 py-3 shadow-xl sm:right-5">

              <p className="text-[10px] text-blue-100">
                WordPress Management
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                Simple & Flexible
              </p>

            </div>

          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}