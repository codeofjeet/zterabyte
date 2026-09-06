import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiLock,
  FiRefreshCw,
  FiSettings,
  FiShield,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Unlock Your Domain",
    description:
      "Make sure your existing domain is unlocked with your current registrar before starting the transfer.",
  },
  {
    number: "02",
    title: "Get Your Transfer Code",
    description:
      "Obtain the domain authorization or transfer code from your current domain provider when required.",
  },
  {
    number: "03",
    title: "Start the Transfer",
    description:
      "Provide your domain details and begin the transfer process with the required authorization information.",
  },
  {
    number: "04",
    title: "Manage With ZTERABYTE",
    description:
      "Once the transfer is completed, manage your domain and related settings from your new service environment.",
  },
];

const benefits = [
  "Straightforward transfer process",
  "Domain management assistance",
  "DNS configuration support",
  "Secure domain handling",
];

export default function DomainTransfer() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              <FiRefreshCw />
              Domain Transfer
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
              Move Your Domain
              <span className="block text-[#006cb5]">
                With Confidence
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
            Already have a domain with another provider? Transfer it to
            ZTERABYTE and get support with the process, DNS settings and
            ongoing domain management.
          </p>

        </div>

        {/* Main Transfer Card */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Information */}
          <div className="rounded-3xl bg-[#071827] p-7 sm:p-9">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
              <FiRefreshCw className="text-2xl" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-white">
              Why Transfer Your Domain?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Bring your domain management closer to your website and digital
              services with a simple and organized transfer experience.
            </p>

            <div className="mt-7 space-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <FiCheckCircle className="text-[#38a9f5]" />
                  </div>

                  <span className="text-sm font-medium text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
            >
              Get Transfer Help
              <FiArrowRight />
            </Link>

          </div>

          {/* Right Steps */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                <FiGlobe />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#006cb5]">
                  Transfer Process
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#071827]">
                  Four Simple Steps
                </h3>
              </div>

            </div>

            <div className="mt-8 space-y-7">

              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-4"
                >

                  {/* Connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-5 top-11 h-[calc(100%+12px)] w-px bg-[#dbeeff]" />
                  )}

                  {/* Number */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#006cb5] text-xs font-black text-white">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pb-1">

                    <h4 className="text-base font-bold text-[#071827] sm:text-lg">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Security Banner */}
        <div className="mt-8 rounded-2xl border border-[#dbeeff] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                <FiShield className="text-xl" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Need Help With Your Domain Transfer?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  If you are unsure about unlocking your domain, obtaining
                  transfer information or updating DNS settings, our team can
                  guide you through the process.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiLock />
              Secure Transfer Support
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}