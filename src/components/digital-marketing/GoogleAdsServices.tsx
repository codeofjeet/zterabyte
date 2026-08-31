import {
  FiBarChart2,
  FiCheckCircle,
  FiDollarSign,
  FiEdit3,
  FiMousePointer,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "Google Search Ads",
    description:
      "Reach potential customers when they actively search for products and services related to your business.",
    points: [
      "Search campaign setup",
      "Keyword targeting",
      "Ad copy strategy",
    ],
  },
  {
    icon: FiTarget,
    title: "Keyword & Audience Targeting",
    description:
      "Build focused campaigns around relevant search terms and audience signals to improve advertising efficiency.",
    points: [
      "Keyword research",
      "Audience targeting",
      "Search intent analysis",
    ],
  },
  {
    icon: FiEdit3,
    title: "Ad Copy & Creative Strategy",
    description:
      "Create compelling advertising messages that clearly communicate your value and encourage potential customers to take action.",
    points: [
      "Ad copywriting",
      "Message testing",
      "Call-to-action strategy",
    ],
  },
  {
    icon: FiMousePointer,
    title: "Landing Page Optimization",
    description:
      "Align your landing pages with your advertising campaigns to create a clearer and more relevant customer journey.",
    points: [
      "Page relevance",
      "Conversion elements",
      "User experience",
    ],
  },
  {
    icon: FiDollarSign,
    title: "Campaign Budget Management",
    description:
      "Structure and manage campaign budgets around your business objectives while keeping performance and efficiency in focus.",
    points: [
      "Budget planning",
      "Bid strategy",
      "Campaign efficiency",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Google Ads Analytics",
    description:
      "Monitor campaign performance and use meaningful data to identify opportunities for continuous improvement.",
    points: [
      "Performance tracking",
      "Conversion analysis",
      "Campaign optimization",
    ],
  },
];

export default function GoogleAdsServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiSearch />
            Google Ads Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Search Intent Into
            <span className="block text-[#006cb5]">
              Business Opportunities
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From keyword targeting and ad creation to campaign management and
            performance analysis, we help businesses build focused Google Ads
            campaigns.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Points */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
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

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                <FiTrendingUp />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Focus on the Right Searches
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Effective Google Ads starts with understanding what your
                  customers are searching for and connecting those searches
                  with relevant advertising experiences.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Search Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}