"use client";

import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Vivek Singh",
    // role: "Business Owner",
    company: "Dreams Computers, Delhi",
    message:
      "I highly recommend Mr. Sumit Nagar for his outstanding web development and IT services. He completely transformed our online presence with a beautifully designed, responsive website. Additionally, the web hosting and professional email services he provided have been seamless and incredibly reliable. Exceptional support and highly professional!",
  },
  {
    name: "Rahul Birla",
    company: "Birla Eye Hospital",
    message:
      "Fast and reliable IT services. Our website was developed in few days and after support is also very good. You can trust them.",
  },
  {
    name: "Anushika Mishra",
    company: "The Nalanda",
    message:
      "He is one of the best web designer in the town, providing the quality work at very affordable rates.",
  },
  {
    name: "Ashish Sitaram Panicker",
    company: "Vocean Technologies",
    message:
      "I’m very happy with the service, the timely support, and the guidance provided regarding the server. This was my first time working with Sumit Ji, and he was very helpful with the server configuration. He guided me in choosing the most suitable server for my requirements and advised me not to spend unnecessary money at this stage. I truly appreciate his honest advice, excellent support, and professional service. It was a great first experience working with him, and based on his service and support, I would definitely be happy to work with him again in the future.",
  },
  {
    name: "Ravi Suman",
   // company: "Jain Trading Co.",
    message:
      "Best web hosting service  in kota. Best service with support available 24/7.",
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
                      flex
                      h-full
                      min-h-[310px]
                      flex-col
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

                    <div className="mt-auto border-t border-slate-200 pt-5">

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
                            {/* {testimonial.role} ·*/} {testimonial.company} 
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