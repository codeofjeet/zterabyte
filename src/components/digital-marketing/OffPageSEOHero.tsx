import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiLink,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  "High-quality link building",
  "Online authority development",
  "Relevant website outreach",
  "Stronger search presence",
];

export default function OffPageSEOHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiLink />
              Off Page SEO
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Authority
              <span className="block text-[#38a9f5]">
                Beyond Your Website
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Strengthen your website's authority and online reputation with
              strategic off-page SEO activities designed to build relevant
              connections and improve search visibility.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
              >
                Build My SEO Authority
                <FiArrowRight />
              </Link>

              <Link
                href="/digital-marketing/on-page-seo"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                On Page SEO
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiLink className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Authority Dashboard
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Off Page SEO
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    SEO
                  </span>

                </div>

                {/* Authority Score */}
                <div className="mt-7 rounded-2xl bg-white p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-400">
                        Authority Growth
                      </p>

                      <p className="mt-1 text-3xl font-black text-[#071827]">
                        +76%
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#006cb5]">
                        Link profile potential
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#38a9f5] text-sm font-black text-[#006cb5]">
                      76
                    </div>

                  </div>

                  <div className="mt-6 flex h-20 items-end gap-2">

                    <div className="h-[30%] flex-1 rounded-t-lg bg-[#dbeeff]" />
                    <div className="h-[40%] flex-1 rounded-t-lg bg-[#b9ddf4]" />
                    <div className="h-[47%] flex-1 rounded-t-lg bg-[#b9ddf4]" />
                    <div className="h-[60%] flex-1 rounded-t-lg bg-[#8bc9ef]" />
                    <div className="h-[72%] flex-1 rounded-t-lg bg-[#38a9f5]" />
                    <div className="h-[84%] flex-1 rounded-t-lg bg-[#006cb5]" />
                    <div className="h-full flex-1 rounded-t-lg bg-[#006cb5]" />

                  </div>

                </div>

                {/* Link Building */}
                <div className="mt-4 space-y-3">

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiGlobe />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-400">
                        Outreach
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Relevant Websites
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto text-[#38a9f5]" />

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiLink />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-400">
                        Links
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Quality Link Profile
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto text-[#38a9f5]" />

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiTrendingUp />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-400">
                        Authority
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Growth Focused
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto text-[#38a9f5]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}