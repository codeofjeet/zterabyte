import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiLayout,
} from "react-icons/fi";

const points = [
  "User-focused interface design",
  "Responsive web & mobile layouts",
  "Clear user flows and navigation",
  "Modern and consistent design system",
];

export default function UIUXDesignCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="relative overflow-hidden rounded-3xl bg-[#071827] px-6 py-12 shadow-2xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Background Effects */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#006cb5]/30 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#38a9f5]/15 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* Content */}
            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
                <FiLayout className="text-2xl" />
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Create a Better
                <span className="block text-[#38a9f5]">
                  Digital Experience?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Let's design a digital experience that looks professional,
                feels intuitive and helps your users accomplish their goals.
              </p>

              {/* Points */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                    {point}
                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="lg:min-w-[230px]">

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
              >
                Start Your Design
                <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>

              <p className="mt-4 text-center text-xs text-slate-500">
                Tell us about your website, app or digital product.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}