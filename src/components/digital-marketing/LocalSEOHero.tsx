import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  "Improve local search visibility",
  "Optimize Google Business presence",
  "Build local online authority",
  "Reach customers in your area",
];

export default function LocalSEOHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="absolute right-[18%] top-24 hidden h-3 w-3 rounded-full bg-[#38a9f5] lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiMapPin />
              Local SEO Services
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Found By
              <span className="block text-[#38a9f5]">
                Customers Near You
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Strengthen your local online presence and help nearby customers
              discover your business when they search for products and
              services in your area.
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
                Grow My Local Presence
                <FiArrowRight />
              </Link>

              <Link
                href="/digital-marketing/off-page-seo"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Off Page SEO
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
                      <FiMapPin className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Local Search
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Business Visibility
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    LOCAL
                  </span>

                </div>

                {/* Local Search Card */}
                <div className="mt-7 rounded-2xl bg-white p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                      <FiSearch className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Local Search Position
                      </p>

                      <p className="mt-1 text-2xl font-black text-[#071827]">
                        Top Visibility
                      </p>
                    </div>

                  </div>

                  {/* Search Result */}
                  <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">

                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                        <FiMapPin />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-sm font-bold text-[#071827]">
                          Your Business
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Local business • Nearby customers
                        </p>

                        <div className="mt-2 flex items-center gap-1">

                          <FiStar className="text-sm text-[#006cb5]" />

                          <span className="text-xs font-bold text-slate-600">
                            Strong Local Presence
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiGlobe className="text-lg text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Visibility
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Local Reach
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiTrendingUp className="text-lg text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Growth
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Search Ready
                    </p>

                  </div>

                </div>

                {/* Bottom Status */}
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                  <FiCheckCircle className="text-[#38a9f5]" />

                  <span className="text-xs font-semibold text-slate-300">
                    Local SEO Foundation
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