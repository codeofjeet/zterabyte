import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiSearch,
  FiTarget,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Keyword Research",
    description:
      "Identify relevant search terms, customer intent and opportunities that can connect your business with potential customers.",
    points: [
      "Keyword research",
      "Search intent",
      "Competitor analysis",
    ],
  },
  {
    number: "02",
    icon: FiTarget,
    title: "Campaign Strategy",
    description:
      "Build a focused advertising strategy around your business goals, target audience, locations and campaign priorities.",
    points: [
      "Campaign structure",
      "Audience targeting",
      "Goal planning",
    ],
  },
  {
    number: "03",
    icon: FiEdit3,
    title: "Ads & Landing Pages",
    description:
      "Create relevant ad messaging and align landing pages with the search experience to make the customer journey clearer.",
    points: [
      "Ad copy",
      "Landing page alignment",
      "Call-to-action strategy",
    ],
  },
  {
    number: "04",
    icon: FiBarChart2,
    title: "Measure & Optimize",
    description:
      "Monitor campaign performance and continuously improve targeting, messaging and budget allocation based on meaningful data.",
    points: [
      "Performance tracking",
      "Conversion analysis",
      "Campaign optimization",
    ],
  },
];

export default function GoogleAdsProcess() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiSearch />
            Our Google Ads Process
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            From Search Intent to
            <span className="block text-[#006cb5]">
              Meaningful Results
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We combine keyword research, campaign planning, relevant
            advertising and performance analysis to create a focused Google
            Ads strategy.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Desktop Connecting Line */}
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
                  Every Click Starts With Intent
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Our approach connects what people search for with relevant
                  advertising and landing-page experiences designed around
                  clear business objectives.
                </p>
              </div>

            </div>

            <div className="shrink-0 text-sm font-bold text-[#006cb5]">
              Data & Intent Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
