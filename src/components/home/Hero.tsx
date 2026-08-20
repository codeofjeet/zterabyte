import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGift,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <Image
        src="/images/hero/festival-offer.jpg"
        alt="Zterabyte Festival Offer"
        fill
        priority
        className="object-cover object-center"
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-[#071827]/70" />

      {/* =====================================================
          BLUE GRADIENT OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071827]/95 via-[#071827]/75 to-[#006cb5]/30" />

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#38a9f5]/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/30 blur-3xl" />


      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 lg:px-6">

        <div className="max-w-3xl">

          {/* Festival Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">

            <FiGift className="text-[#62c7ff]" />

            FESTIVE SPECIAL OFFER

          </div>


          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">

            Grow Your Business

            <span className="block text-[#55c4ff]">
              Online This Season
            </span>

          </h1>


          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg lg:text-xl">

            Celebrate the season with special offers on domains,
            web hosting, website development and digital marketing
            solutions from Zterabyte.

          </p>


          {/* Offer */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">

            <div className="flex items-center gap-2 text-sm font-semibold text-white">

              <FiCheckCircle className="text-[#55c4ff]" />

              Special Festival Pricing

            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">

              <FiCheckCircle className="text-[#55c4ff]" />

              Limited Time Offer

            </div>

          </div>


          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#0086dc]"
            >
              Get Festival Offer

              <FiArrowRight />
            </Link>


            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#071827]"
            >
              Explore Services

              <FiArrowRight />
            </Link>

          </div>


          {/* Small Offer Note */}
          <p className="mt-5 text-xs text-slate-300">
            *Offer availability and pricing may vary during the promotional period.
          </p>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SHAPE
      ====================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />

    </section>
  );
}