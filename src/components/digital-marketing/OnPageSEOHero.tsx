import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiFileText,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  "Keyword-focused content",
  "Technical page optimization",
  "Better search visibility",
  "User-friendly website structure",
];

export default function OnPageSEOHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiSearch />
              On Page SEO
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Optimize Every Page
              <span className="block text-[#38a9f5]">
                For Better Search
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Improve your website's search visibility with carefully
              optimized content, page structure, keywords and technical
              elements designed for both search engines and visitors.
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
                Optimize My Website
                <FiArrowRight />
              </Link>

              <Link
                href="/digital-marketing/seo-smo"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore SEO & SMO
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiSearch className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        SEO Analysis
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Page Optimization
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    SEO
                  </span>

                </div>

                {/* Score */}
                <div className="mt-7 rounded-2xl bg-white p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-400">
                        Optimization Score
                      </p>

                      <p className="mt-1 text-3xl font-black text-[#071827]">
                        92%
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#38a9f5] text-sm font-black text-[#006cb5]">
                      92
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[92%] rounded-full bg-[#006cb5]" />
                  </div>

                </div>

                {/* Optimization Items */}
                <div className="mt-4 space-y-3">

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiFileText />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">
                        Content
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Keyword Optimized
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto shrink-0 text-[#38a9f5]" />

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiCode />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">
                        Structure
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Search Friendly
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto shrink-0 text-[#38a9f5]" />

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiTrendingUp />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">
                        Visibility
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Growth Ready
                      </p>
                    </div>

                    <FiCheckCircle className="ml-auto shrink-0 text-[#38a9f5]" />

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