"use client";

import { useState } from "react";
import {
  FiGlobe,
  FiSearch,
  FiShield,
  FiSettings,
  FiCheckCircle,
} from "react-icons/fi";

const extensions = [
  {
    extension: ".com",
    label: "Most Popular",
  },
  {
    extension: ".in",
    label: "India",
  },
  {
    extension: ".net",
    label: "Technology",
  },
  {
    extension: ".org",
    label: "Organization",
  },
  {
    extension: ".co.in",
    label: "Business India",
  },
];

export default function DomainSection() {
  const [domain, setDomain] = useState("");

  const handleSearch = () => {
    if (!domain.trim()) {
      return;
    }

    console.log("Searching domain:", domain);
  };

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
              <FiGlobe />
              Domain Registration
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
              Find the Perfect
              <span className="block text-[#006cb5]">
                Domain for Your Business
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Your domain is the foundation of your online identity.
              Choose a memorable domain name and give your business a
              professional presence on the internet.
            </p>

            {/* Search Box */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f6fafd] p-3 shadow-sm">

              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="relative flex-1">

                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Enter your domain name"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition focus:border-[#006cb5] focus:ring-2 focus:ring-[#006cb5]/10"
                  />

                </div>

                <button
                  type="button"
                  onClick={handleSearch}
                  className="rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#004f86]"
                >
                  Search Domain
                </button>

              </div>

            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-semibold text-[#071827]">
                    Easy Registration
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Simple domain registration process.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                  <FiShield />
                </div>

                <div>
                  <h3 className="font-semibold text-[#071827]">
                    Secure Management
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage your domains with confidence.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-3xl bg-[#071827] p-7 shadow-2xl sm:p-9">

              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#006cb5]/30 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
                  <FiGlobe className="text-3xl" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Your Digital Identity Starts Here
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Choose a domain that represents your brand and
                  makes it easier for customers to find you online.
                </p>

                {/* Domain Extensions */}
                <div className="mt-7 space-y-3">

                  {extensions.map((item) => (
                    <div
                      key={item.extension}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                    >

                      <div className="flex items-center gap-3">

                        <span className="font-bold text-[#38a9f5]">
                          {item.extension}
                        </span>

                        <span className="text-sm text-slate-400">
                          {item.label}
                        </span>

                      </div>

                      <FiCheckCircle className="text-[#38a9f5]" />

                    </div>
                  ))}

                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#006cb5]/20 p-4">

                  <FiSettings className="text-xl text-[#38a9f5]" />

                  <p className="text-sm text-slate-300">
                    Manage your domains from one convenient place.
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