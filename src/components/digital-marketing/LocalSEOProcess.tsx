import {
  FiBarChart2,
  FiCheckCircle,
  FiMapPin,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Local SEO Audit",
    description:
      "Review your current local search presence, business information and website to identify important opportunities.",
    points: [
      "Local visibility review",
      "Business profile analysis",
      "Competitor research",
    ],
  },
  {
    number: "02",
    icon: FiMapPin,
    title: "Profile Optimization",
    description:
      "Optimize important local business information and improve your presence across relevant local search platforms.",
    points: [
      "Business information",
      "Category optimization",
      "Local profile setup",
    ],
  },
  {
    number: "03",
    icon: FiSettings,
    title: "Local Authority Building",
    description:
      "Develop consistent local signals through relevant listings, content, citations and reputation-building activities.",
    points: [
      "Local citations",
      "Relevant listings",
      "Review strategy",
    ],
  },
  {
    number: "04",
    icon: FiBarChart2,
    title: "Track & Improve",
    description:
      "Monitor local visibility and performance to identify new opportunities and continuously improve your local SEO strategy.",
    points: [
      "Visibility tracking",
      "Performance insights",
      "Ongoing optimization",
    ],
  },
];

export default function LocalSEOProcess() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiMapPin />
            Our Local SEO Process
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            A Structured Approach to
            <span className="block text-[#006cb5]">
              Local Search Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We combine local research, profile optimization, authority
            building and performance tracking to create a stronger local
            search foundation for your business.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Connecting line on desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#b9ddf4] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-[#f6fafd] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:bg-white hover:shadow-lg sm:p-7"
                >

                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-md">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="text-4xl font-black text-[#dbeeff]">
                      {step.number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold text-[#071827]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  {/* Points */}
                  <div className="mt-5 space-y-2">

                    {step.points.map((point) => (
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
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-[#f6fafd] p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                <FiCheckCircle />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Local Relevance Comes First
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Every part of the strategy is designed around your business,
                  location and the customers you want to reach.
                </p>
              </div>

            </div>

            <div className="shrink-0 text-sm font-bold text-[#006cb5]">
              Location Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}