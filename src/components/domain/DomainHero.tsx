import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const features = [
  "Easy domain registration",
  "Multiple domain extensions",
  "Simple domain transfers",
  "Secure domain management",
];

export default function DomainHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="absolute right-[35%] top-20 h-2 w-2 rounded-full bg-[#38a9f5]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiGlobe />
              Domain Services
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Give Your Business
              <span className="block text-[#38a9f5]">
                A Powerful Online Identity
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Choose a memorable domain name for your business and establish
              a professional online presence with reliable domain registration,
              transfer and management services.
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

              <Link
                href="/#domain-search"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
              >
                Search a Domain
                <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Us
                <FiArrowRight />
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Card Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiGlobe className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        ZTERABYTE Domains
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Build Your Online Identity
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    DOMAIN
                  </span>

                </div>

                {/* Domain Cards */}
                <div className="mt-7 space-y-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Business Domain
                        </p>

                        <p className="mt-1 text-base font-bold text-white">
                          yourbusiness.com
                        </p>
                      </div>

                      <FiCheckCircle className="text-xl text-[#38a9f5]" />

                    </div>

                  </div>

                  <div className="rounded-xl border border-[#38a9f5]/20 bg-[#006cb5]/10 p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Indian Business
                        </p>

                        <p className="mt-1 text-base font-bold text-white">
                          yourbusiness.in
                        </p>
                      </div>

                      <span className="rounded-full bg-[#006cb5] px-2.5 py-1 text-[10px] font-bold text-white">
                        INDIA
                      </span>

                    </div>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Modern Brand
                        </p>

                        <p className="mt-1 text-base font-bold text-white">
                          yourbusiness.tech
                        </p>
                      </div>

                      <FiCheckCircle className="text-xl text-[#38a9f5]" />

                    </div>

                  </div>

                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiGlobe className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Extensions
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Multiple
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiShield className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Security
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Protected
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiZap className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Management
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Simple
                    </p>

                  </div>

                </div>

                {/* Bottom Status */}
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                  <FiTrendingUp className="text-[#38a9f5]" />

                  <span className="text-xs font-semibold text-slate-300">
                    Professional Domain Solutions
                  </span>

                  <FiCheckCircle className="ml-auto text-[#38a9f5]" />

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}