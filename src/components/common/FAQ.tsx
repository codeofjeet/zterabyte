"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Find answers to the most common questions about our services.",
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-4xl px-5 lg:px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">

          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#006cb5] shadow-md"
                    : "border-slate-200 shadow-sm"
                }`}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >

                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      isOpen
                        ? "text-[#006cb5]"
                        : "text-[#071827]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#006cb5] text-white"
                        : "bg-[#eaf6ff] text-[#006cb5]"
                    }`}
                  >
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">

                      <p className="text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}