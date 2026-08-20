// "use client";

// import { useState } from "react";
// import {
//   FiGlobe,
//   FiSearch,
//   FiShield,
//   FiSettings,
//   FiCheckCircle,
//   FiXCircle,
//   FiLoader,
// } from "react-icons/fi";

// const extensions = [
//   {
//     extension: ".com",
//     label: "Most Popular",
//   },
//   {
//     extension: ".in",
//     label: "India",
//   },
//   {
//     extension: ".net",
//     label: "Technology",
//   },
//   {
//     extension: ".org",
//     label: "Organization",
//   },
//   {
//     extension: ".co.in",
//     label: "Business India",
//   },
// ];

// type DomainResult = {
//   available: boolean;
//   domain: string;
//   message: string;
// };

// export default function DomainSection() {
//   const [domain, setDomain] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [result, setResult] = useState<DomainResult | null>(null);

//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     const value = domain.trim().toLowerCase();

//     // Empty input
//     if (!value) {
//       setError("Please enter a domain name.");
//       setResult(null);
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const response = await fetch(
//         `/api/domain/availability?domain=${encodeURIComponent(value)}`
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         setError(
//           data.message || "Unable to check domain availability."
//         );
//         return;
//       }

//       setResult({
//         available: data.available,
//         domain: data.domain,
//         message: data.message,
//       });
//     } catch (error) {
//       console.error("Domain search error:", error);

//       setError(
//         "Unable to check domain availability. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="overflow-hidden bg-white py-20 lg:py-24">
//       <div className="mx-auto max-w-7xl px-5 lg:px-6">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

//           {/* =====================================================
//               LEFT CONTENT
//           ===================================================== */}
//           <div>

//             {/* Label */}
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
//               <FiGlobe />
//               Domain Registration
//             </span>

//             {/* Heading */}
//             <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
//               Find the Perfect

//               <span className="block text-[#006cb5]">
//                 Domain for Your Business
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
//               Your domain is the foundation of your online identity.
//               Choose a memorable domain name and give your business a
//               professional presence on the internet.
//             </p>

//             {/* =================================================
//                 DOMAIN SEARCH
//             ================================================= */}
//             <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f6fafd] p-3 shadow-sm">

//               <div className="flex flex-col gap-3 sm:flex-row">

//                 {/* Input */}
//                 <div className="relative flex-1">

//                   <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

//                   <input
//                     type="text"
//                     value={domain}
//                     onChange={(e) => {
//                       setDomain(e.target.value);
//                       setError("");
//                       setResult(null);
//                     }}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleSearch();
//                       }
//                     }}
//                     placeholder="Enter your domain name"
//                     disabled={loading}
//                     className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:ring-2 focus:ring-[#006cb5]/10 disabled:cursor-not-allowed disabled:bg-slate-50"
//                   />

//                 </div>

//                 {/* Search Button */}
//                 <button
//                   type="button"
//                   onClick={handleSearch}
//                   disabled={loading}
//                   className="flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#004f86] disabled:cursor-not-allowed disabled:opacity-70"
//                 >

//                   {loading ? (
//                     <>
//                       <FiLoader className="animate-spin" />
//                       Checking...
//                     </>
//                   ) : (
//                     <>
//                       <FiSearch />
//                       Check Domain
//                     </>
//                   )}

//                 </button>

//               </div>

//               {/* =================================================
//                   ERROR MESSAGE
//               ================================================= */}
//               {error && (
//                 <div
//                   className="mt-3 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
//                   role="alert"
//                 >
//                   <FiXCircle className="shrink-0 text-lg" />

//                   <span>
//                     {error}
//                   </span>
//                 </div>
//               )}

//               {/* =================================================
//                   DOMAIN RESULT
//               ================================================= */}
//               {result && (
//                 <div
//                   className={`mt-3 flex items-center gap-3 rounded-xl border px-4 py-3 ${
//                     result.available
//                       ? "border-green-200 bg-green-50 text-green-700"
//                       : "border-red-200 bg-red-50 text-red-700"
//                   }`}
//                   aria-live="polite"
//                 >

//                   {result.available ? (
//                     <FiCheckCircle className="shrink-0 text-xl" />
//                   ) : (
//                     <FiXCircle className="shrink-0 text-xl" />
//                   )}

//                   <div>

//                     <p className="font-semibold">
//                       {result.message}
//                     </p>

//                     <p className="mt-0.5 text-xs opacity-75">
//                       {result.domain}
//                     </p>

//                   </div>

//                 </div>
//               )}

//             </div>

//             {/* =================================================
//                 BENEFITS
//             ================================================= */}
//             <div className="mt-8 grid gap-4 sm:grid-cols-2">

//               {/* Easy Registration */}
//               <div className="flex items-start gap-3">

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
//                   <FiCheckCircle />
//                 </div>

//                 <div>

//                   <h3 className="font-semibold text-[#071827]">
//                     Easy Registration
//                   </h3>

//                   <p className="mt-1 text-sm text-slate-500">
//                     Simple domain registration process.
//                   </p>

//                 </div>

//               </div>

//               {/* Secure Management */}
//               <div className="flex items-start gap-3">

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
//                   <FiShield />
//                 </div>

//                 <div>

//                   <h3 className="font-semibold text-[#071827]">
//                     Secure Management
//                   </h3>

//                   <p className="mt-1 text-sm text-slate-500">
//                     Manage your domains with confidence.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               RIGHT VISUAL
//           ===================================================== */}
//           <div className="relative">

//             <div className="relative overflow-hidden rounded-3xl bg-[#071827] p-7 shadow-2xl sm:p-9">

//               {/* Background Glow */}
//               <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#006cb5]/30 blur-3xl" />

//               <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#006cb5]/20 blur-3xl" />

//               <div className="relative">

//                 {/* Icon */}
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
//                   <FiGlobe className="text-3xl" />
//                 </div>

//                 {/* Heading */}
//                 <h3 className="mt-7 text-2xl font-bold text-white">
//                   Your Digital Identity Starts Here
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-3 text-sm leading-6 text-slate-400">
//                   Choose a domain that represents your brand and
//                   makes it easier for customers to find you online.
//                 </p>

//                 {/* =================================================
//                     DOMAIN EXTENSIONS
//                 ================================================= */}
//                 <div className="mt-7 space-y-3">

//                   {extensions.map((item) => (
//                     <div
//                       key={item.extension}
//                       className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
//                     >

//                       <div className="flex items-center gap-3">

//                         <span className="font-bold text-[#38a9f5]">
//                           {item.extension}
//                         </span>

//                         <span className="text-sm text-slate-400">
//                           {item.label}
//                         </span>

//                       </div>

//                       <FiCheckCircle className="text-[#38a9f5]" />

//                     </div>
//                   ))}

//                 </div>

//                 {/* Bottom Information */}
//                 <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#006cb5]/20 p-4">

//                   <FiSettings className="text-xl text-[#38a9f5]" />

//                   <p className="text-sm text-slate-300">
//                     Manage your domains from one convenient place.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  FiGlobe,
  FiSearch,
  FiShield,
  FiSettings,
  FiCheckCircle,
  FiXCircle,
  FiLoader,
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

type DomainResult = {
  domain: string;
  available: boolean;
  message: string;
};

export default function DomainSection() {
  const [domain, setDomain] = useState("");

  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState<DomainResult[]>([]);

  const [error, setError] = useState("");

  const handleSearch = async () => {
    let value = domain.trim().toLowerCase();

    if (!value) {
      setError("Please enter a domain name.");
      setResults([]);
      return;
    }

    // Remove protocol
    value = value
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "");

    // Remove existing extension if user entered one
    let baseName = value;

    const knownExtensions = [
      ".co.in",
      ".com",
      ".in",
      ".net",
      ".org",
    ];

    for (const extension of knownExtensions) {
      if (baseName.endsWith(extension)) {
        baseName = baseName.slice(
          0,
          -extension.length
        );

        break;
      }
    }

    // Basic validation
    if (
      !/^[a-z0-9-]+$/.test(baseName) ||
      baseName.length < 2
    ) {
      setError(
        "Please enter a valid domain name."
      );

      setResults([]);

      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      // Create all domains
      const domains = extensions.map(
        (item) => `${baseName}${item.extension}`
      );

      // Check all domains simultaneously
      const responses = await Promise.all(
        domains.map(async (domainName) => {
          const response = await fetch(
            `/api/domain/availability?domain=${encodeURIComponent(
              domainName
            )}`
          );

          const data = await response.json();

          if (!response.ok || !data.success) {
            throw new Error(
              data.message ||
                "Unable to check domain."
            );
          }

          return {
            domain: data.domain,
            available: data.available,
            message: data.message,
          };
        })
      );

      setResults(responses);
    } catch (error) {
      console.error(
        "Domain search error:",
        error
      );

      setError(
        "Unable to check domain availability. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div>

            {/* Label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
              <FiGlobe />
              Domain Registration
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">

              Find the Perfect

              <span className="block text-[#006cb5]">
                Domain for Your Business
              </span>

            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Your domain is the foundation of your online identity.
              Choose a memorable domain name and give your business a
              professional presence on the internet.
            </p>

            {/* =================================================
                SEARCH BOX
            ================================================== */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f6fafd] p-3 shadow-sm">

              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Input */}
                <div className="relative flex-1">

                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value);
                      setError("");
                      setResults([]);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Enter your domain name"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:ring-2 focus:ring-[#006cb5]/10 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#004f86] disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {loading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <FiSearch />
                      Check Domain
                    </>
                  )}

                </button>

              </div>

              {/* Error */}
              {error && (
                <div
                  className="mt-3 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                  role="alert"
                >
                  <FiXCircle className="shrink-0 text-lg" />

                  <span>
                    {error}
                  </span>

                </div>
              )}

            </div>


            {/* =================================================
                MULTIPLE DOMAIN RESULTS
            ================================================== */}
            {results.length > 0 && (
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* Header */}
                <div className="border-b border-slate-100 bg-[#f6fafd] px-5 py-4">

                  <h3 className="font-bold text-[#071827]">
                    Domain Availability
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    We checked the most popular extensions for you.
                  </p>

                </div>

                {/* Results */}
                <div className="divide-y divide-slate-100">

                  {results.map((item) => (
                    <div
                      key={item.domain}
                      className="flex items-center justify-between gap-4 px-5 py-4"
                    >

                      <div className="flex min-w-0 items-center gap-3">

                        {item.available ? (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                            <FiCheckCircle />
                          </div>
                        ) : (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                            <FiXCircle />
                          </div>
                        )}

                        <div className="min-w-0">

                          <p className="truncate text-sm font-bold text-[#071827]">
                            {item.domain}
                          </p>

                          <p
                            className={`mt-0.5 text-xs font-medium ${
                              item.available
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                          >
                            {item.available
                              ? "Available"
                              : "Not Available"}
                          </p>

                        </div>

                      </div>


                      {/* Register Button */}
                      {item.available && (
                        <button
                          type="button"
                          className="shrink-0 rounded-lg bg-[#006cb5] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#004f86]"
                        >
                          Register
                        </button>
                      )}

                    </div>
                  ))}

                </div>

              </div>
            )}


            {/* =================================================
                BENEFITS
            ================================================== */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Easy Registration */}
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


              {/* Secure Management */}
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


          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
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