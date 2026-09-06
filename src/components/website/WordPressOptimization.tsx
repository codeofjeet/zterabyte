import {
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const optimizationFeatures = [
  {
    icon: FiSmartphone,
    title: "Mobile Responsive",
    description:
      "Make your WordPress website comfortable to browse across smartphones, tablets and desktop screens.",
  },
  {
    icon: FiZap,
    title: "Performance Focus",
    description:
      "Keep layouts, assets and website structure focused on providing a smooth browsing experience.",
  },
  {
    icon: FiSearch,
    title: "SEO-Friendly Structure",
    description:
      "Build clear page structures and content organization that provide a strong foundation for SEO.",
  },
  {
    icon: FiGlobe,
    title: "Search-Friendly Pages",
    description:
      "Organize important business pages and content so visitors and search engines can understand your website.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversion-Focused Content",
    description:
      "Place important information and calls to action where visitors can easily discover them.",
  },
  {
    icon: FiCheckCircle,
    title: "Better User Experience",
    description:
      "Combine responsive design, clear navigation and useful content for a more comfortable visitor experience.",
  },
];

const optimizationPoints = [
  "Responsive page layouts",
  "Clear heading structure",
  "Easy navigation",
  "Search-friendly content",
];

export default function WordPressOptimization() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiTrendingUp />
            Mobile & SEO Optimization
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Built for Better
            <span className="block text-[#006cb5]">
              User Experience & Visibility
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A professional WordPress website should be easy to use on every
            device and provide a clean foundation for your SEO strategy.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Website Preview */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

              <div className="relative w-[270px] rounded-[2.5rem] border-[8px] border-[#071827] bg-[#071827] p-2 shadow-2xl sm:w-[290px]">

                <div className="overflow-hidden rounded-[2rem] bg-white">

                  {/* Mobile Header */}
                  <div className="flex items-center justify-between bg-[#006cb5] px-4 py-4">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white">
                        <FiGlobe />
                      </div>

                      <span className="text-sm font-bold text-white">
                        Your Website
                      </span>

                    </div>

                    <FiSearch className="text-white" />

                  </div>

                  {/* Search */}
                  <div className="px-4 pt-4">

                    <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">

                      <FiSearch className="text-xs text-slate-400" />

                      <span className="text-[10px] text-slate-400">
                        Search website
                      </span>

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-4">

                    <div className="rounded-2xl bg-[#eaf6ff] p-5">

                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#006cb5]">
                        Professional Website
                      </span>

                      <h3 className="mt-2 text-xl font-black leading-tight text-[#071827]">
                        Grow Your
                        <span className="block text-[#006cb5]">
                          Online Presence
                        </span>
                      </h3>

                      <div className="mt-4 h-8 w-24 rounded-lg bg-[#006cb5]" />

                    </div>

                    {/* Content Cards */}
                    <div className="mt-4 space-y-3">

                      <div className="rounded-xl border border-slate-100 p-3">

                        <div className="flex items-center gap-3">

                          <div className="h-10 w-10 rounded-lg bg-slate-100" />

                          <div className="flex-1">
                            <div className="h-2.5 w-3/4 rounded bg-slate-200" />
                            <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                          </div>

                        </div>

                      </div>

                      <div className="rounded-xl border border-slate-100 p-3">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                            <FiTrendingUp />
                          </div>

                          <div className="flex-1">
                            <div className="h-2.5 w-3/4 rounded bg-slate-200" />
                            <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Status */}
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#f6fafd] p-3">

                      <FiCheckCircle className="text-[#006cb5]" />

                      <span className="text-[10px] font-semibold text-slate-500">
                        Mobile & SEO ready
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Features */}
          <div>

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Optimization Strategy
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              Make Your Website
              <span className="block text-[#006cb5]">
                Easier to Discover & Use
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We structure the website around responsive design, clear
              content and practical SEO considerations to create a better
              experience for both visitors and your business.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {optimizationFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-[#071827]">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {optimizationPoints.map((point, index) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-[#dbeeff] bg-[#f6fafd] p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-sm font-black text-[#006cb5]">
                0{index + 1}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#071827]">
                <FiCheckCircle className="shrink-0 text-[#006cb5]" />
                {point}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}