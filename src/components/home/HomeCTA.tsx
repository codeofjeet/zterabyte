import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiMessageCircle,
  FiCheckCircle,
  FiGlobe,
  FiServer,
  FiCode,
} from "react-icons/fi";

const benefits = [
  "Domain & Hosting Solutions",
  "Website & Mobile Development",
  "Professional Email Solutions",
  "Digital Marketing Services",
];

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f6fafd]" />

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* CTA Box */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#071827] shadow-2xl">

          {/* Blue Glow */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/30 blur-3xl" />

          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

          {/* Decorative Circles */}
          <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-[#38a9f5]/10 lg:block" />

          <div className="absolute right-20 top-20 hidden h-20 w-20 rounded-full border border-[#38a9f5]/10 lg:block" />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT CONTENT */}
            <div className="p-8 sm:p-10 lg:p-14">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">

                <span className="h-2 w-2 rounded-full bg-[#38a9f5]" />

                Let's Build Something Great

              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

                Ready to Take Your
                <span className="block text-[#38a9f5]">
                  Business Online?
                </span>

              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                From your domain and hosting to websites, mobile
                applications, creative design and digital marketing,
                Zterabyte provides the digital solutions your business
                needs to grow.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >

                    <FiCheckCircle className="shrink-0 text-[#38a9f5]" />

                    <span className="text-sm text-slate-300">
                      {benefit}
                    </span>

                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#006cb5]/20 transition hover:bg-[#0082d8]"
                >
                  Get Started
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#38a9f5]/40 hover:bg-white/10"
                >
                  <FiPhone />
                  Talk to Our Team
                </a>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex items-center justify-center p-8 sm:p-10 lg:p-12">

              {/* Main Visual */}
              <div className="relative w-full max-w-sm">

                {/* Floating Domain Card */}
                <div className="absolute -left-2 top-0 z-20 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-md sm:-left-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiGlobe />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Your Domain
                      </p>

                      <p className="text-sm font-bold text-white">
                        yourbusiness.com
                      </p>
                    </div>

                  </div>

                </div>

                {/* Center Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 pt-12 backdrop-blur-md">

                  {/* Icon */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-2xl shadow-[#006cb5]/30">

                    <FiServer className="text-3xl" />

                  </div>

                  <h3 className="mt-6 text-center text-xl font-bold text-white">
                    Complete Digital Solutions
                  </h3>

                  <p className="mt-2 text-center text-sm leading-6 text-slate-400">
                    Everything you need to establish and grow your
                    online presence.
                  </p>

                  {/* Mini Services */}
                  <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5]">
                        <FiGlobe />
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        Domain & Hosting
                      </span>

                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5]">
                        <FiCode />
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        Website Development
                      </span>

                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5]">
                        <FiMessageCircle />
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        Digital Marketing
                      </span>

                    </div>

                  </div>

                </div>

                {/* Bottom Floating Card */}
                <div className="absolute -bottom-4 right-0 z-20 rounded-2xl border border-[#38a9f5]/20 bg-[#006cb5] px-5 py-4 shadow-xl sm:-right-8">

                  <p className="text-xs text-blue-100">
                    Let's talk
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Start Your Project →
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}