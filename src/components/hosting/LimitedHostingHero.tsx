import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiGlobe,
  FiShield,
  FiZap,
} from "react-icons/fi";

const features = [
  "Reliable shared hosting",
  "Free SSL certificate",
  "Fast website performance",
  "24/7 technical support",
];

export default function LimitedHostingHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiGlobe />
              Limited Shared Hosting
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Hosting for
              <span className="block text-[#38a9f5]">
                Your Growing Website
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Launch your website with reliable shared hosting designed for
              businesses, portfolios, blogs and websites with predictable
              resource requirements.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                  {feature}
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#hosting-plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
              >
                View Hosting Plans
                <FiArrowRight />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiCloud className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Hosting Plan
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Limited Shared
                      </h2>
                    </div>

                  </div>

                  <div className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    Reliable
                  </div>

                </div>

                {/* Resource Cards */}
                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                    <FiZap className="text-[#38a9f5]" />

                    <p className="mt-3 text-xs text-slate-400">
                      Performance
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Fast Hosting
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                    <FiShield className="text-[#38a9f5]" />

                    <p className="mt-3 text-xs text-slate-400">
                      Security
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      SSL Protected
                    </p>

                  </div>

                </div>

                {/* Hosting Status */}
                <div className="mt-4 rounded-2xl bg-white p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Website Status
                      </p>

                      <p className="mt-1 text-lg font-black text-[#071827]">
                        Online & Ready
                      </p>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                      <FiCheckCircle />
                    </div>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[96%] rounded-full bg-[#006cb5]" />
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                    <span>Hosting Health</span>
                    <span className="font-bold text-[#006cb5]">
                      96%
                    </span>
                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                  <span className="text-xs text-slate-400">
                    Technical Support
                  </span>

                  <span className="text-xs font-bold text-[#70c8fa]">
                    24/7 Available
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}