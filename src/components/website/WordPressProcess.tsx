import {
  FiCheckCircle,
  FiCode,
  FiEdit3,
  FiLayout,
  FiPlay,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiEdit3,
    title: "Discovery & Planning",
    description:
      "We understand your business, audience, content and website requirements before development begins.",
    points: [
      "Business requirements",
      "Website structure",
      "Content planning",
    ],
  },
  {
    number: "02",
    icon: FiLayout,
    title: "Design & Structure",
    description:
      "We create the visual structure of your WordPress website with your brand, content and visitors in mind.",
    points: [
      "Page layouts",
      "Brand styling",
      "Responsive structure",
    ],
  },
  {
    number: "03",
    icon: FiCode,
    title: "Development & Setup",
    description:
      "We build the website, configure WordPress and add the required functionality, plugins and content.",
    points: [
      "WordPress development",
      "Plugin configuration",
      "Content setup",
    ],
  },
  {
    number: "04",
    icon: FiPlay,
    title: "Testing & Launch",
    description:
      "We test important pages and interactions across devices before preparing the website for launch.",
    points: [
      "Responsive testing",
      "Functionality testing",
      "Launch preparation",
    ],
  },
];

export default function WordPressProcess() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Our Development Process
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            From Planning to
            <span className="block text-[#006cb5]">
              WordPress Website Launch
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A clear process helps us build your WordPress website in an
            organized way while keeping your business goals at the center.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Connecting line - desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#b9ddf4] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg"
                >

                  {/* Number + Icon */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-md">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="text-4xl font-black text-[#eaf6ff]">
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
        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-xl font-bold text-[#071827]">
                A WordPress website built around your business
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                From planning and design to development and launch, we
                focus on creating a professional and manageable website.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Business Ready
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}