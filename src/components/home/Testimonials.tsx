"use client";

import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    company: "Sharma Enterprises",
    message:
      "Zterabyte provided a smooth and professional experience. Their team understood our requirements and helped us with the right digital solution.",
  },
  {
    name: "Priya Verma",
    role: "Founder",
    company: "PV Fashion Studio",
    message:
      "We were looking for a reliable technology partner and found the support and service very helpful throughout our project.",
  },
  {
    name: "Amit Gupta",
    role: "Business Manager",
    company: "AG Solutions",
    message:
      "From website development to digital services, the overall experience was professional and focused on our business requirements.",
  },
  {
    name: "Neha Singh",
    role: "Director",
    company: "NS Healthcare",
    message:
      "The Zterabyte team understood our business goals and converted our ideas into a clean and professional digital presence.",
  },
  {
    name: "Vikas Jain",
    role: "Founder",
    company: "Jain Trading Co.",
    message:
      "We needed a dependable technology partner for our website and online services. Zterabyte provided practical guidance throughout the project.",
  },
  {
    name: "Anjali Mehta",
    role: "Marketing Manager",
    company: "AM Lifestyle",
    message:
      "Working with Zterabyte was a great experience. Their team was creative, knowledgeable and always willing to understand our ideas.",
  },
  {
    name: "Suresh Kumar",
    role: "Director",
    company: "SK Industries",
    message:
      "Zterabyte has been a helpful technology partner for our business. Their professional approach and technical knowledge made the project experience positive.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev <= 0 ? testimonials.length - 3 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= testimonials.length - 3 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            <FiMessageCircle />
            Client Experiences
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            What Our Clients
            <span className="block text-[#006cb5]">
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We believe successful projects are built on understanding,
            communication and long-term relationships.
          </p>

        </div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Viewport */}
          <div className="overflow-hidden">

            {/* Track */}

            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${current * 33.333333}%)`,
              }}
            >

              {testimonials.map((testimonial, index) => (

                <div
                  key={`${testimonial.name}-${index}`}
                  className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                >

                  {/* =================================================
                      TESTIMONIAL CARD
                  ================================================== */}

                  <article
                    className={`relative h-full min-h-[310px] rounded-2xl border p-6 transition-all duration-700 sm:p-7 ${
                      index === current + 1
                        ? "border-[#b9ddf5] bg-white shadow-xl lg:-translate-y-1"
                        : "border-slate-200 bg-[#f6fafd] shadow-sm"
                    }`}
                  >

                    {/* Quote */}
                    <div className="absolute right-5 top-3 text-6xl font-black leading-none text-[#006cb5]/10">
                      "
                    </div>

                    {/* Stars */}
                    <div className="relative flex gap-1 text-[#006cb5]">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <FiStar
                          key={star}
                          className="fill-current text-sm"
                        />
                      ))}

                    </div>

                    {/* Message */}
                    <p className="relative mt-6 text-sm leading-7 text-slate-600">
                      “{testimonial.message}”
                    </p>

                    {/* Client */}
                    <div className="absolute bottom-6 left-6 right-6 border-t border-slate-200 pt-5 sm:left-7 sm:right-7">

                      <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006cb5] text-sm font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>

                        <div className="min-w-0">

                          <p className="truncate font-bold text-[#071827]">
                            {testimonial.name}
                          </p>

                          <p className="mt-1 truncate text-xs text-slate-500">
                            {testimonial.role} · {testimonial.company}
                          </p>

                        </div>

                      </div>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          </div>

          {/* =====================================================
              CONTROLS
          ====================================================== */}

          <div className="mt-7 flex items-center justify-between">

            {/* Dots */}

            <div className="flex items-center gap-2">

              {Array.from({
                length: testimonials.length - 2,
              }).map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial group ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-[#006cb5]"
                      : "w-2.5 bg-slate-300 hover:bg-[#38a9f5]"
                  }`}
                />

              ))}

            </div>

            {/* Arrows */}

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#071827] shadow-sm transition hover:border-[#006cb5] hover:bg-[#eaf6ff] hover:text-[#006cb5]"
              >
                <FiArrowLeft />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006cb5] text-white shadow-sm transition hover:bg-[#0082d8]"
              >
                <FiArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}