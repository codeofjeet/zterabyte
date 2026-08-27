import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const results = [
  {
    icon: FiGlobe,
    title: "Stronger Online Presence",
    description:
      "Build a consistent digital presence across search engines, social media and other relevant online channels.",
  },
  {
    icon: FiSearch,
    title: "Better Search Visibility",
    description:
      "Improve your website's ability to appear for relevant searches through structured SEO activities.",
  },
  {
    icon: FiTarget,
    title: "Relevant Audience Reach",
    description:
      "Focus your marketing efforts on audiences that are more relevant to your products and services.",
  },
  {
    icon: FiTrendingUp,
    title: "Business Growth",
    description:
      "Use digital channels to support brand awareness, customer engagement and business opportunities.",
  },
  {
    icon: FiBarChart2,
    title: "Trackable Performance",
    description:
      "Use useful marketing data to understand campaign performance and identify areas for improvement.",
  },
  {
    icon: FiCheckCircle,
    title: "Long-Term Strategy",
    description:
      "Develop a sustainable digital marketing approach that can evolve with your business and audience.",
  },
];

const metrics = [
  {
    value: "SEO",
    label: "Search Visibility",
  },
  {
    value: "SMO",
    label: "Social Presence",
  },
  {
    value: "ADS",
    label: "Targeted Reach",
  },
  {
    value: "DATA",
    label: "Performance Insights",
  },
];

export default function DigitalMarketingResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Marketing Benefits
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build Visibility.
            <span className="block text-[#006cb5]">
              Reach. Grow.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A well-planned digital marketing strategy can help your business
            establish a stronger online presence and make better use of
            digital channels.
          </p>

        </div>

        {/* Results Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {results.map((result) => {
            const Icon = result.icon;

            return (
              <div
                key={result.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {result.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {result.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Growth-focused
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