import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiShare2,
  FiTarget,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Better Search Visibility",
    description:
      "Improve your website's presence in relevant search results through consistent and structured SEO activities.",
  },
  {
    icon: FiShare2,
    title: "Stronger Social Presence",
    description:
      "Build a more consistent social presence that helps your audience discover and recognize your business.",
  },
  {
    icon: FiGlobe,
    title: "Greater Online Reach",
    description:
      "Expand your digital presence across search engines, social platforms and other relevant online channels.",
  },
  {
    icon: FiTarget,
    title: "Relevant Audience",
    description:
      "Focus your optimization efforts around relevant searches, audiences and content opportunities.",
  },
  {
    icon: FiBarChart2,
    title: "Performance Insights",
    description:
      "Use search, traffic and engagement data to understand performance and identify areas for improvement.",
  },
  {
    icon: FiCheckCircle,
    title: "Consistent Growth",
    description:
      "Build an ongoing optimization strategy that can adapt as your business, audience and digital presence grow.",
  },
];

const metrics = [
  {
    value: "SEO",
    label: "Search Optimization",
  },
  {
    value: "SMO",
    label: "Social Optimization",
  },
  {
    value: "DATA",
    label: "Performance Tracking",
  },
  {
    value: "GROWTH",
    label: "Long-Term Strategy",
  },
];

export default function SEOAndSMOResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            SEO & SMO Benefits
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build Visibility That
            <span className="block text-[#006cb5]">
              Supports Your Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A consistent SEO and SMO strategy can help your business improve
            visibility, reach relevant audiences and build a stronger online
            presence.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Visibility focused
                </div>

              </div>
            );
          })}

        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-2xl border border-[#dbeeff] bg-white p-6 text-center shadow-sm"
            >

              <p className="text-2xl font-black text-[#006cb5] sm:text-3xl">
                {metric.value}
              </p>

              <p className="mt-2 text-xs font-semibold text-slate-500">
                {metric.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}