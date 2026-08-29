import Link from "next/link";
import {
  FiArrowDown,
  FiArrowRight,
  FiCheckCircle,
  FiMessageCircle,
} from "react-icons/fi";

export default function ContactPageHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">
      
      {/* Background Effects */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="absolute right-[15%] top-20 hidden h-2 w-2 rounded-full bg-[#38a9f5] lg:block" />
      <div className="absolute right-[25%] top-40 hidden h-3 w-3 rounded-full bg-[#006cb5] lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/25 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
            <FiMessageCircle />
            Get In Touch
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Talk About Your
            <span className="block text-[#38a9f5]">
              Digital Success
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Have an idea, project or business requirement? Our team is ready
            to understand your goals and help you find the right digital
            solution for your business.
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Digital Solutions
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Professional Support
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-[#38a9f5]" />
              Business Focused
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
            >
              Send a Message
              <FiArrowRight />
            </Link>

            <Link
              href="#contact-information"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Information
              <FiArrowDown />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}