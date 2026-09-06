import {
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

const platforms = [
  {
    icon: FiSmartphone,
    title: "Android Development",
    description:
      "Build modern Android applications with interfaces and functionality designed around your users and business requirements.",
    points: [
      "Android-friendly interface",
      "Device responsive layouts",
      "Business-focused features",
    ],
  },
  {
    icon: FiMonitor,
    title: "iOS Development",
    description:
      "Create polished iOS application experiences with clean navigation, intuitive interfaces and business-ready functionality.",
    points: [
      "iOS-friendly interface",
      "Consistent user experience",
      "Performance-focused design",
    ],
  },
  {
    icon: FiLayers,
    title: "Cross-Platform Apps",
    description:
      "Develop applications that can provide a consistent experience across multiple mobile platforms.",
    points: [
      "Shared application experience",
      "Reusable components",
      "Efficient development",
    ],
  },
  {
    icon: FiCode,
    title: "API Integration",
    description:
      "Connect mobile applications with your existing backend systems, APIs and databases.",
    points: [
      "REST API integration",
      "Backend connectivity",
      "Dynamic application data",
    ],
  },
];

export default function MobileAppPlatforms() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiGlobe />
            Mobile Platforms
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build for Android,
            <span className="block text-[#006cb5]">
              iOS & Multiple Devices
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose the application approach that fits your business,
            customers, technical requirements and future growth plans.
          </p>

        </div>

        {/* Platform Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">

          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                key={platform.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-8"
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>

                  <span className="text-4xl font-black text-[#eaf6ff]">
                    0{platforms.indexOf(platform) + 1}
                  </span>

                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[#071827]">
                  {platform.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {platform.description}
                </p>

                {/* Points */}
                <div className="mt-6 space-y-3">

                  {platform.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <FiCheckCircle className="shrink-0 text-[#006cb5]" />
                      {point}
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Platform Banner */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#071827] p-6 sm:p-8 lg:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                  <FiSmartphone />
                </div>

                <span className="text-sm font-bold text-[#70c8fa]">
                  Multi-Device Experience
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                One Business Idea.
                <span className="text-[#38a9f5]">
                  {" "}
                  Multiple Mobile Experiences.
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Whether your customers use Android, iPhone or different
                screen sizes, your application can be planned around a
                consistent and intuitive experience.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                Android
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                iOS
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                Cross-Platform
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}