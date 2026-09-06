import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiMessageCircle,
  FiSend,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const features = [
  "Twitter profile strategy",
  "Content & post planning",
  "Audience engagement",
  "Performance tracking",
];

export default function TwitterMarketingHero() {
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
              <FiMessageCircle />
              Twitter Marketing
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start Conversations
              <span className="block text-[#38a9f5]">
                That Grow Your Brand
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Build an active Twitter presence with relevant content,
              consistent communication and audience-focused strategies that
              help your brand join meaningful conversations.
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
                Grow My Twitter Presence
                <FiArrowRight />
              </Link>

              <Link
                href="/digital-marketing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Digital Marketing
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
                      <FiMessageCircle className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Twitter Analytics
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Audience Engagement
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    TWITTER
                  </span>

                </div>

                {/* Main Analytics */}
                <div className="mt-7 rounded-2xl bg-white p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-400">
                        Engagement Growth
                      </p>

                      <p className="mt-1 text-3xl font-black text-[#071827]">
                        +84%
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#006cb5]">
                        Audience interaction
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#38a9f5] text-sm font-black text-[#006cb5]">
                      84
                    </div>

                  </div>

                  {/* Chart */}
                  <div className="mt-6 flex h-20 items-end gap-2">

                    <div className="h-[27%] flex-1 rounded-t-lg bg-[#dbeeff]" />
                    <div className="h-[39%] flex-1 rounded-t-lg bg-[#b9ddf4]" />
                    <div className="h-[48%] flex-1 rounded-t-lg bg-[#b9ddf4]" />
                    <div className="h-[59%] flex-1 rounded-t-lg bg-[#8bc9ef]" />
                    <div className="h-[70%] flex-1 rounded-t-lg bg-[#38a9f5]" />
                    <div className="h-[85%] flex-1 rounded-t-lg bg-[#006cb5]" />
                    <div className="h-full flex-1 rounded-t-lg bg-[#006cb5]" />

                  </div>

                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiTrendingUp className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Reach
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Growing
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiUsers className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Audience
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Relevant
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                    <FiMessageCircle className="mx-auto text-lg text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Activity
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Active
                    </p>

                  </div>

                </div>

                {/* Bottom Status */}
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                  <FiSend className="text-[#38a9f5]" />

                  <span className="text-xs font-semibold text-slate-300">
                    Twitter Growth Strategy
                  </span>

                  <FiBarChart2 className="ml-auto text-[#38a9f5]" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}