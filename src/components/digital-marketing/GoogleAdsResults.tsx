import {
  FiBarChart2,
  FiCheckCircle,
  FiDollarSign,
  FiMousePointer,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Reach Active Searchers",
    description:
      "Connect your business with people who are actively searching for products and services related to what you offer.",
  },
  {
    icon: FiTarget,
    title: "Precise Audience Targeting",
    description:
      "Focus campaigns around relevant keywords, locations, audiences and search intent to reach more qualified prospects.",
  },
  {
    icon: FiMousePointer,
    title: "Increase Quality Traffic",
    description:
      "Drive relevant visitors to your website with advertising messages designed around specific search queries.",
  },
  {
    icon: FiTrendingUp,
    title: "Improve Campaign Performance",
    description:
      "Continuously review campaign data and optimize targeting, ads and budgets to improve overall performance.",
  },
  {
    icon: FiDollarSign,
    title: "Better Budget Control",
    description:
      "Structure advertising campaigns around your available budget and business priorities while monitoring performance.",
  },
  {
    icon: FiBarChart2,
    title: "Measurable Results",
    description:
      "Use campaign analytics and conversion data to understand what is working and make informed marketing decisions.",
  },
];

const highlights = [
  {
    value: "SEARCH",
    label: "High Intent",
  },
  {
    value: "TARGET",
    label: "Relevant Audiences",
  },
  {
    value: "TRAFFIC",
    label: "Quality Visits",
  },
  {
    value: "DATA",
    label: "Measurable Performance",
  },
];

export default function GoogleAdsResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Google Ads Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Search Traffic Into
            <span className="block text-[#006cb5]">
              Business Opportunities
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A focused Google Ads strategy can help your business reach active
            searchers, attract relevant traffic and make advertising
            performance easier to measure.
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
                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <FiCheckCircle className="text-lg text-[#b9ddf4]" />

                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (
            <div
              key={item.value}
              className="rounded-2xl border border-[#dbeeff] bg-white px-5 py-6 text-center shadow-sm"
            >
              <p className="text-xl font-black text-[#006cb5] sm:text-2xl">
                {item.value}
              </p>

              <p className="mt-2 text-xs font-semibold text-slate-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl bg-[#071827] p-6 sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38a9f5]">
                Google Ads
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Be visible when your customers are ready to search.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Connect relevant searches with focused advertising and
                conversion-oriented experiences to create a stronger paid
                search strategy.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-[#70c8fa]">
              <FiUsers />
              Audience Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}