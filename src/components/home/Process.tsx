import Link from "next/link";
import {
  FiMessageSquare,
  FiClipboard,
  FiCode,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiMessageSquare,
    title: "Understand",
    description:
      "We start by understanding your business, goals, audience and digital requirements.",
  },
  {
    number: "02",
    icon: FiClipboard,
    title: "Plan",
    description:
      "We recommend the right services and create a clear plan based on your requirements.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Build",
    description:
      "Our team works on your website, application, design or digital marketing solution.",
  },
  {
    number: "04",
    icon: FiHeadphones,
    title: "Support",
    description:
      "After delivery, we remain available to help you manage and grow your digital presence.",
  },
];

export default function Process() {
  return (
    <section className="overflow-hidden bg-[#071827] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
            How We Work
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple Process.
            <span className="block text-[#38a9f5]">
              Clear Results.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From the first conversation to ongoing support, we keep the
            process straightforward and focused on your business goals.
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-white/10 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#38a9f5]/30 hover:bg-white/10"
              >

                {/* Number / Icon */}
                <div className="relative z-10 flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white shadow-lg">
                    <Icon className="text-xl" />
                  </div>

                  <span className="text-3xl font-black text-white/10 transition group-hover:text-[#38a9f5]/20">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-10 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
          >
            Discuss Your Project
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}