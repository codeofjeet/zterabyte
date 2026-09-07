"use client";

import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiStar } from "react-icons/fi";

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
  const viewportRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [transition, setTransition] = useState(true);

  /*
   * Clone first 3 cards for infinite looping.
   */
  const loopTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, 3),
  ];

  /*
   * Detect how many cards should be visible.
   */
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  /*
   * Calculate exact card width from viewport width.
   */
  useEffect(() => {
    const updateSlideWidth = () => {
      if (!viewportRef.current) return;

      const width = viewportRef.current.clientWidth;

      setSlideWidth(width / visibleCards);
    };

    updateSlideWidth();

    const observer = new ResizeObserver(updateSlideWidth);

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateSlideWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, [visibleCards]);

  /*
   * Auto scroll.
   */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  /*
   * Infinite loop reset.
   *
   * Once we reach the first cloned card,
   * wait for the transition to finish,
   * then silently jump back to the original first card.
   */
  useEffect(() => {
    if (current !== testimonials.length) return;

    const timeout = setTimeout(() => {
      setTransition(false);
      setCurrent(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }, 700);

    return () => clearTimeout(timeout);
  }, [current]);

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

          <a
            href="https://g.page/r/CXxZie7flJMNECk/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#0082d8] hover:shadow-lg"
          >
            <FiStar className="fill-current" />
            Leave a Google Review
          </a>

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

          <div
            ref={viewportRef}
            className="overflow-hidden"
          >

            {/* Track */}

            <div
              className={`flex ${
                transition
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }`}
              style={{
                transform: `translate3d(-${
                  current * slideWidth
                }px, 0, 0)`,
              }}
            >

              {loopTestimonials.map((testimonial, index) => (

                <div
                  key={`${testimonial.name}-${index}`}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >

                  {/* =================================================
                      TESTIMONIAL CARD
                  ================================================== */}

                  <article
                    className="
                      relative
                      h-full
                      min-h-[310px]
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#f6fafd]
                      p-6
                      shadow-sm
                      transition-all
                      duration-500
                      hover:border-[#b9ddf5]
                      hover:bg-white
                      hover:shadow-xl
                      sm:p-7
                    "
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

                        {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006cb5] text-sm font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div> */}

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

        </div>

      </div>
    </section>
  );
}