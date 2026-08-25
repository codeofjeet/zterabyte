import {
  FiCheckCircle,
  FiLayout,
  FiMousePointer,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const optimizationFeatures = [
  {
    icon: FiLayout,
    title: "Intuitive UI Design",
    description:
      "Create clean and organized interfaces that make important app features easy for users to understand.",
  },
  {
    icon: FiMousePointer,
    title: "Easy Navigation",
    description:
      "Design clear navigation patterns so users can move between important application screens naturally.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Interfaces",
    description:
      "Adapt application layouts to different screen sizes and mobile device experiences.",
  },
  {
    icon: FiZap,
    title: "Performance Focus",
    description:
      "Keep application interactions responsive and focus on a smooth experience throughout the app.",
  },
  {
    icon: FiTrendingUp,
    title: "User-Focused Experience",
    description:
      "Structure screens and interactions around the needs and expectations of your target users.",
  },
  {
    icon: FiCheckCircle,
    title: "Consistent Design",
    description:
      "Maintain consistent typography, spacing, buttons and visual patterns throughout the application.",
  },
];

const experiencePoints = [
  "Simple navigation",
  "Clear visual hierarchy",
  "Fast interactions",
  "Consistent UI",
];

export default function MobileAppOptimization() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiTrendingUp />
            UI/UX & Performance
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Designed for a Better
            <span className="block text-[#006cb5]">
              Mobile Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A successful mobile application should not only work correctly.
            It should also be easy to understand, comfortable to use and
            responsive to user interactions.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Mobile UI Preview */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

              <div className="relative w-[270px] rounded-[2.7rem] border-[8px] border-[#071827] bg-[#071827] p-2 shadow-2xl sm:w-[290px]">

                <div className="overflow-hidden rounded-[2.1rem] bg-white">

                  {/* Header */}
                  <div className="bg-[#006cb5] px-5 pb-6 pt-7">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[9px] text-blue-100">
                          Good Morning
                        </p>

                        <h3 className="mt-1 text-sm font-black text-white">
                          Explore Your App
                        </h3>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                        <FiSmartphone />
                      </div>

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-4">

                    {/* Search */}
                    <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-3">

                      <div className="h-3 w-3 rounded-full bg-slate-300" />

                      <div className="h-2 w-24 rounded bg-slate-200" />

                    </div>

                    {/* Main Card */}
                    <div className="mt-4 rounded-2xl bg-[#eaf6ff] p-4">

                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#006cb5]">
                        Featured
                      </span>

                      <h4 className="mt-2 text-lg font-black leading-tight text-[#071827]">
                        Simple.
                        <span className="block text-[#006cb5]">
                          Fast. Useful.
                        </span>
                      </h4>

                      <div className="mt-4 h-8 w-24 rounded-lg bg-[#006cb5]" />

                    </div>

                    {/* Quick Actions */}
                    <div className="mt-4 grid grid-cols-3 gap-2">

                      <div className="rounded-xl border border-slate-100 p-3">

                        <div className="h-8 rounded-lg bg-[#eaf6ff]" />

                        <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />

                      </div>

                      <div className="rounded-xl border border-slate-100 p-3">

                        <div className="h-8 rounded-lg bg-[#eaf6ff]" />

                        <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />

                      </div>

                      <div className="rounded-xl border border-slate-100 p-3">

                        <div className="h-8 rounded-lg bg-[#eaf6ff]" />

                        <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />

                      </div>

                    </div>

                    {/* Activity */}
                    <div className="mt-4 rounded-xl border border-slate-100 p-4">

                      <div className="flex items-center justify-between">

                        <p className="text-[10px] font-bold text-[#071827]">
                          Recent Activity
                        </p>

                        <span className="text-[9px] font-semibold text-[#006cb5]">
                          View All
                        </span>

                      </div>

                      <div className="mt-4 space-y-3">

                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >

                            <div className="h-8 w-8 rounded-lg bg-slate-100" />

                            <div className="flex-1">

                              <div className="h-2 w-3/4 rounded bg-slate-200" />

                              <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />

                            </div>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-4 flex items-center justify-around rounded-xl bg-[#071827] px-3 py-3">

                      <div className="h-1.5 w-8 rounded-full bg-[#38a9f5]" />

                      <div className="h-1.5 w-8 rounded-full bg-slate-600" />

                      <div className="h-1.5 w-8 rounded-full bg-slate-600" />

                      <div className="h-1.5 w-8 rounded-full bg-slate-600" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Features */}
          <div>

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              User Experience
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              Make Every Interaction
              <span className="block text-[#006cb5]">
                Feel Natural
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We focus on the complete mobile experience — from the first
              screen users see to navigation, interactions and important
              actions inside the application.
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

        {/* Experience Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {experiencePoints.map((point, index) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-[#dbeeff] bg-white p-5 shadow-sm"
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