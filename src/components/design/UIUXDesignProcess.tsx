import {
  FiCheckCircle,
  FiEdit3,
  FiEye,
  FiLayers,
  FiMousePointer,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiEye,
    title: "Research & Discovery",
    description:
      "Understand your business, users, competitors and the goals of the digital product before design begins.",
    points: [
      "Business goals",
      "User requirements",
      "Product research",
    ],
  },
  {
    number: "02",
    icon: FiLayers,
    title: "User Flow & Structure",
    description:
      "Plan the information structure and user journeys so important actions are easy to discover and complete.",
    points: [
      "Information architecture",
      "User journeys",
      "Navigation planning",
    ],
  },
  {
    number: "03",
    icon: FiEdit3,
    title: "UI Design",
    description:
      "Create polished interfaces with consistent typography, colors, spacing and reusable visual components.",
    points: [
      "Visual design",
      "Design system",
      "Responsive layouts",
    ],
  },
  {
    number: "04",
    icon: FiMousePointer,
    title: "Prototype & Refine",
    description:
      "Review interactions and refine the experience before the final design is prepared for development.",
    points: [
      "Interactive prototype",
      "Usability review",
      "Design refinement",
    ],
  },
];

export default function UIUXDesignProcess() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiLayers />
            UI/UX Design Process
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            From Research to
            <span className="block text-[#006cb5]">
              Interactive Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A structured design process helps transform business
            requirements and user needs into clear digital experiences.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Connecting line — desktop only */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#b9ddf4] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg"
                >

                  {/* Icon + Number */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-md">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="text-4xl font-black text-[#eaf6ff]">
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
        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-xl font-bold text-[#071827]">
                Design built around real users
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                From research and user flows to interface design and
                prototyping, every stage focuses on creating a clear and
                practical digital experience.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              User Ready
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}