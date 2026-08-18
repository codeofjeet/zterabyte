import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiServer,
  FiShield,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071827]">

      {/* Background Glow */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-6 lg:py-28">

        {/* Left Content */}
        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#006cb5]/40 bg-[#006cb5]/10 px-4 py-2 text-sm font-medium text-[#8ed1ff]">
            <span className="h-2 w-2 rounded-full bg-[#4db5f5]" />
            Complete Digital Solutions
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

            Build Your Digital
            <span className="block text-[#38a9f5]">
              Presence With Zterabyte
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Domains, reliable hosting, professional business email,
            websites, mobile applications, creative design and digital
            marketing — everything your business needs to grow online.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006cb5] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0082d8]"
            >
              Get Started
              <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust Points */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Reliable Services
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Expert Support
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Business Focused
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">

            {/* Domain Search Card */}
            <div className="rounded-2xl bg-white p-6 shadow-xl">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                  <FiGlobe className="text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-[#071827]">
                    Find Your Perfect Domain
                  </h3>

                  <p className="text-sm text-slate-500">
                    Start your online journey today
                  </p>
                </div>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="text"
                  placeholder="yourbusiness"
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#006cb5]"
                />

                <select className="rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-600 outline-none">
                  <option>.com</option>
                  <option>.in</option>
                  <option>.net</option>
                  <option>.org</option>
                </select>

                <button
                  type="button"
                  className="rounded-lg bg-[#006cb5] px-5 py-3 font-semibold text-white transition hover:bg-[#004f86]"
                >
                  Search
                </button>

              </div>

            </div>

            {/* Service Cards */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiServer className="mb-3 text-2xl text-[#38a9f5]" />

                <h3 className="font-semibold text-white">
                  Powerful Hosting
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Fast and reliable hosting for your websites.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiShield className="mb-3 text-2xl text-[#38a9f5]" />

                <h3 className="font-semibold text-white">
                  Business Email
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Professional email solutions for your business.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}