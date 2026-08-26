import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiEdit3,
  FiLayers,
  FiPenTool,
  FiStar,
} from "react-icons/fi";

const features = [
  "Custom logo concepts",
  "Professional brand identity",
  "Multiple design directions",
  "High-quality final files",
];

export default function LogoDesignHero() {
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
              <FiPenTool />
              Logo Design
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Create a Logo That
              <span className="block text-[#38a9f5]">
                Represents Your Brand
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Build a memorable visual identity with a professional logo
              designed around your business, audience and brand personality.
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
                Start Your Logo
                <FiArrowRight />
              </Link>

              <Link
                href="/design"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Design Services
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Design Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiPenTool className="text-xl" />
                    </div>

                    <div>

                      <p className="text-xs text-slate-400">
                        Creative Studio
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Brand Identity
                      </h2>

                    </div>

                  </div>

                  <div className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    Creative
                  </div>

                </div>

                {/* Logo Preview */}
                <div className="mt-7 rounded-2xl bg-white p-6 sm:p-8">

                  <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-[#f6fafd]">

                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#006cb5] text-white shadow-lg">

                      <FiStar className="text-4xl" />

                    </div>

                    <h3 className="mt-5 text-xl font-black tracking-wide text-[#071827]">
                      YOUR BRAND
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#006cb5]">
                      Creative Identity
                    </p>

                  </div>

                </div>

                {/* Design Options */}
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiEdit3 className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Concepts
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Custom
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiLayers className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Identity
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Unique
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiStar className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Quality
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Premium
                    </p>

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