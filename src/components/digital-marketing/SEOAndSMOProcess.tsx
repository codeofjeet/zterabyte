import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiSearch,
  FiShare2,
  FiTarget,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiTarget,
    title: "Research & Discovery",
    description:
      "Understand your business, target audience, competitors and current online presence before creating the optimization strategy.",
    points: [
      "Business analysis",
      "Audience research",
      "Competitor research",
    ],
  },
  {
    number: "02",
    icon: FiSearch,
    title: "SEO Optimization",
    description:
      "Optimize important website elements and content to improve search engine visibility for relevant queries.",
    points: [
      "Keyword research",
      "On-page optimization",
      "Technical improvements",
    ],
  },
  {
    number: "03",
    icon: FiShare2,
    title: "Social Optimization",
    description:
      "Optimize social profiles and content while creating a consistent presence across relevant social media channels.",
    points: [
      "Profile optimization",
      "Content strategy",
      "Social engagement",
    ],
  },
  {
    number: "04",
    icon: FiBarChart2,
    title: "Monitor & Improve",
    description:
      "Track visibility, traffic and engagement indicators and use the findings to improve the ongoing SEO and SMO strategy.",
    points: [
      "Performance tracking",
      "Data analysis",
      "Continuous improvement",
    ],
  },
];

export default function SEOAndSMOProcess() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiSearch />
            SEO & SMO Strategy
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            A Structured Approach to
            <span className="block text-[#006cb5]">
              Search & Social Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We combine research, optimization, social strategy and
            performance analysis to build a stronger digital presence.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#b9ddf4] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-[#f6fafd] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:bg-white hover:shadow-lg"
                >

                  {/* Icon + Number */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-md">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="text-4xl font-black text-[#dbeeff]">
                      {step.number}
                    </span>

                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-bold text-[#071827]">
                    {step.title}
                  </h3>

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

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-xl font-bold text-[#071827]">
                Search and social working together
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                SEO helps improve your search presence while SMO strengthens
                your social visibility. Together they create a more complete
                digital marketing strategy.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Visibility Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}