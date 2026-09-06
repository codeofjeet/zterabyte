import {
  FiCheckCircle,
  FiCode,
  FiEdit3,
  FiEye,
  FiLayers,
  FiPocket,
} from "react-icons/fi";

const processSteps = [
  {
    number: "01",
    icon: FiEye,
    title: "Discover",
    description:
      "We understand your business, target audience, goals and website requirements before development begins.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Plan",
    description:
      "We create the website structure, page flow and technical plan to make sure everything is organized.",
  },
  {
    number: "03",
    icon: FiEdit3,
    title: "Design",
    description:
      "We create a clean and professional user interface that matches your brand and provides a great experience.",
  },
  {
    number: "04",
    icon: FiCode,
    title: "Develop",
    description:
      "Our developers turn the approved design into a responsive and functional website using modern technologies.",
  },
  {
    number: "05",
    icon: FiCheckCircle,
    title: "Test",
    description:
      "We test the website across devices and browsers and check functionality, responsiveness and performance.",
  },
  {
    number: "06",
    icon: FiPocket,
    title: "Launch",
    description:
      "After final approval, we deploy your website and help you get your new digital presence online.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
            From Idea to
            <span className="text-[#006cb5]">
              {" "}Successful Website
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Our structured development process keeps your project
            organized, transparent and focused on your business goals.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-14">

          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-[#cfe7f7] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >

                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f6fafd] bg-[#006cb5] text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#0086dc]">

                    <Icon className="text-2xl" />

                  </div>

                  {/* Step Number */}
                  <span className="mt-4 block text-xs font-bold tracking-widest text-[#006cb5]">
                    STEP {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-[#071827]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}