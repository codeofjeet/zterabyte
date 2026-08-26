import {
  FiCheckCircle,
  FiEdit3,
  FiEye,
  FiImage,
  FiLayers,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiEye,
    title: "Understand Your Requirements",
    description:
      "We understand your business, audience, campaign goals and the type of graphics you need.",
    points: [
      "Business requirements",
      "Target audience",
      "Design objectives",
    ],
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Creative Direction",
    description:
      "We establish the visual direction, layout, typography and overall style for the design.",
    points: [
      "Visual direction",
      "Color selection",
      "Layout planning",
    ],
  },
  {
    number: "03",
    icon: FiEdit3,
    title: "Design & Refinement",
    description:
      "We create the graphics and refine the visual details based on your requirements and feedback.",
    points: [
      "Creative design",
      "Design refinement",
      "Final adjustments",
    ],
  },
  {
    number: "04",
    icon: FiImage,
    title: "Final Delivery",
    description:
      "The approved graphics are prepared in suitable formats for your intended digital or print applications.",
    points: [
      "Final artwork",
      "Digital formats",
      "Print-ready files",
    ],
  },
];

export default function GraphicsDesignProcess() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiLayers />
            Graphics Design Process
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            From Concept to
            <span className="block text-[#006cb5]">
              Finished Design
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A structured creative process helps turn your requirements into
            polished graphics that are ready for your audience.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Connecting Line */}
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
                Creative work built around your message
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                From the initial concept to the final artwork, each stage
                focuses on creating graphics that communicate your message
                clearly and professionally.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Design Ready
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}