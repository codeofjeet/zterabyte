import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiLayout,
  FiMousePointer,
  FiPenTool,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  "User-focused interface design",
  "Responsive web & mobile layouts",
  "Clear navigation and user flows",
  "Modern and consistent visual design",
];

export default function UIUXDesignHero() {
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
              <FiLayout />
              UI/UX Design
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Design Experiences
              <span className="block text-[#38a9f5]">
                Users Love to Use
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Create intuitive digital experiences with thoughtful user
              interfaces, clear navigation and designs built around your
              customers and business goals.
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
                Start Your Design
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
                        Design Studio
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        User Experience
                      </h2>
                    </div>

                  </div>

                  <span className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    Creative
                  </span>

                </div>

                {/* UI Preview */}
                <div className="mt-7 rounded-2xl bg-white p-4 sm:p-5">

                  {/* Fake Browser */}
                  <div className="overflow-hidden rounded-xl border border-slate-200">

                    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">

                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />

                      <div className="ml-2 h-2 flex-1 rounded-full bg-white" />

                    </div>

                    <div className="p-4">

                      <div className="flex items-center justify-between">

                        <div className="h-4 w-20 rounded bg-[#071827]" />

                        <div className="flex gap-2">
                          <span className="h-2 w-7 rounded bg-slate-200" />
                          <span className="h-2 w-7 rounded bg-slate-200" />
                          <span className="h-2 w-7 rounded bg-slate-200" />
                        </div>

                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">

                        <div>

                          <div className="h-3 w-28 rounded bg-[#071827]" />

                          <div className="mt-2 h-2 w-full rounded bg-slate-200" />

                          <div className="mt-1.5 h-2 w-4/5 rounded bg-slate-100" />

                          <div className="mt-4 h-7 w-20 rounded-lg bg-[#006cb5]" />

                        </div>

                        <div className="flex items-center justify-center rounded-xl bg-[#eaf6ff] p-4">

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
                            <FiMousePointer className="text-2xl" />
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Design Features */}
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiLayout className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Interface
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Modern
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiMousePointer className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Interaction
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Simple
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiSmartphone className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Devices
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Responsive
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