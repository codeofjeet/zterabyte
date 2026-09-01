// import {
//   FiArrowRight,
//   FiCheckCircle,
//   FiGlobe,
//   FiShield,
// } from "react-icons/fi";

// const extensions = [
//   {
//     extension: ".com",
//     title: "Business & Brands",
//     description:
//       "A widely recognized choice for businesses, companies and professional websites.",
//     tag: "POPULAR",
//   },
//   {
//     extension: ".in",
//     title: "Indian Businesses",
//     description:
//       "A strong domain choice for businesses, organizations and brands targeting India.",
//     tag: "INDIA",
//   },
//   {
//     extension: ".net",
//     title: "Technology & Networks",
//     description:
//       "A practical option for technology companies, online services and network-focused businesses.",
//     tag: "BUSINESS",
//   },
//   {
//     extension: ".org",
//     title: "Organizations",
//     description:
//       "A suitable extension for organizations, communities, foundations and initiatives.",
//     tag: "ORGANIZATION",
//   },
//   {
//     extension: ".tech",
//     title: "Technology Brands",
//     description:
//       "Create a modern digital identity for technology companies, developers and startups.",
//     tag: "TECH",
//   },
//   {
//     extension: ".store",
//     title: "Online Stores",
//     description:
//       "A clear domain choice for ecommerce businesses, online shops and retail brands.",
//     tag: "ECOMMERCE",
//   },
// ];

// export default function DomainExtensions() {
//   return (
//     <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto max-w-7xl px-5 lg:px-6">

//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">

//           <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
//             <FiGlobe />
//             Popular Domain Extensions
//           </span>

//           <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
//             Choose an Extension That
//             <span className="block text-[#006cb5]">
//               Fits Your Business
//             </span>
//           </h2>

//           <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
//             Select a domain extension that matches your brand, audience and
//             online business goals.
//           </p>

//         </div>

//         {/* Extensions Grid */}
//         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

//           {extensions.map((item) => (
//             <div
//               key={item.extension}
//               className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
//             >

//               {/* Top */}
//               <div className="flex items-start justify-between">

//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf6ff] text-2xl font-black text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
//                   {item.extension}
//                 </div>

//                 <span className="rounded-full bg-[#f1f7fb] px-3 py-1 text-[9px] font-bold tracking-wide text-[#006cb5]">
//                   {item.tag}
//                 </span>

//               </div>

//               {/* Content */}
//               <h3 className="mt-6 text-xl font-bold text-[#071827]">
//                 {item.title}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-slate-500">
//                 {item.description}
//               </p>

//               {/* Bottom */}
//               <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

//                 <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
//                   <FiCheckCircle className="text-[#006cb5]" />
//                   Domain Ready
//                 </div>

//                 <FiArrowRight className="text-[#006cb5] transition-transform duration-300 group-hover:translate-x-1" />

//               </div>

//             </div>
//           ))}

//         </div>

//         {/* Information Banner */}
//         <div className="mt-10 overflow-hidden rounded-2xl bg-[#071827] p-6 sm:p-8">

//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

//             <div className="flex items-start gap-4">

//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006cb5] text-white">
//                 <FiGlobe className="text-xl" />
//               </div>

//               <div>
//                 <h3 className="text-lg font-bold text-white sm:text-xl">
//                   Build Your Brand Around the Right Domain
//                 </h3>

//                 <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
//                   Your domain is more than a web address. It is an important
//                   part of your brand identity and how customers recognize your
//                   business online.
//                 </p>
//               </div>

//             </div>

//             <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#70c8fa]">
//               <FiShield />
//               Professional Identity
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiShield,
} from "react-icons/fi";

const extensions = [
  {
    extension: ".com",
    title: "Business & Brands",
    description:
      "A widely recognized choice for businesses, companies and professional websites.",
    tag: "POPULAR",
  },
  {
    extension: ".in",
    title: "Indian Businesses",
    description:
      "A strong domain choice for businesses, organizations and brands targeting India.",
    tag: "INDIA",
  },
  {
    extension: ".net",
    title: "Technology & Networks",
    description:
      "A practical option for technology companies, online services and network-focused businesses.",
    tag: "BUSINESS",
  },
  {
    extension: ".org",
    title: "Organizations",
    description:
      "A suitable extension for organizations, communities, foundations and initiatives.",
    tag: "ORGANIZATION",
  },
  {
    extension: ".tech",
    title: "Technology Brands",
    description:
      "Create a modern digital identity for technology companies, developers and startups.",
    tag: "TECH",
  },
  {
    extension: ".store",
    title: "Online Stores",
    description:
      "A clear domain choice for ecommerce businesses, online shops and retail brands.",
    tag: "ECOMMERCE",
  },
];

const pricing = [
  {
    extension: ".com",
    title: "Business & Brands",
    register: "₹1,299",
    renew: "₹1,299",
    transfer: "₹1,299",
  },
  {
    extension: ".in",
    title: "Indian Businesses",
    register: "₹699",
    renew: "₹699",
    transfer: "₹699",
  },
  {
    extension: ".net",
    title: "Technology & Networks",
    register: "₹999",
    renew: "₹999",
    transfer: "₹999",
  },
  {
    extension: ".org",
    title: "Organizations",
    register: "₹899",
    renew: "₹899",
    transfer: "₹899",
  },
  {
    extension: ".co.in",
    title: "Indian Businesses",
    register: "₹499",
    renew: "₹499",
    transfer: "₹499",
  },
  {
    extension: ".biz",
    title: "Business Websites",
    register: "₹799",
    renew: "₹799",
    transfer: "₹799",
  },
  {
    extension: ".info",
    title: "Information Websites",
    register: "₹699",
    renew: "₹699",
    transfer: "₹699",
  },
  {
    extension: ".online",
    title: "Online Businesses",
    register: "₹899",
    renew: "₹899",
    transfer: "₹899",
  },
  {
    extension: ".store",
    title: "E-Commerce Stores",
    register: "₹999",
    renew: "₹999",
    transfer: "₹999",
  },
  {
    extension: ".tech",
    title: "Technology Brands",
    register: "₹999",
    renew: "₹999",
    transfer: "₹999",
  },
];

export default function DomainExtensions() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiGlobe />
            Popular Domain Extensions
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Choose an Extension That
            <span className="block text-[#006cb5]">
              Fits Your Business
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Select a domain extension that matches your brand, audience and
            online business goals.
          </p>

        </div>

        {/* =====================================================
            EXISTING DOMAIN CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {extensions.map((item) => (
            <div
              key={item.extension}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf6ff] text-2xl font-black text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  {item.extension}
                </div>

                <span className="rounded-full bg-[#f1f7fb] px-3 py-1 text-[9px] font-bold tracking-wide text-[#006cb5]">
                  {item.tag}
                </span>

              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-[#071827]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <FiCheckCircle className="text-[#006cb5]" />
                  Domain Ready
                </div>

                <FiArrowRight className="text-[#006cb5] transition-transform duration-300 group-hover:translate-x-1" />

              </div>

            </div>
          ))}

        </div>

        {/* =====================================================
            DOMAIN PRICING TABLE
        ====================================================== */}

        <div className="mt-20">

          {/* Table Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              <FiGlobe />
              Domain Pricing
            </span>

            <h3 className="mt-5 text-3xl font-black leading-tight text-[#071827] sm:text-4xl">
              Popular Domain Extensions
              <span className="block text-[#006cb5]">
                & Pricing
              </span>
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Compare registration, renewal and transfer pricing for popular
              domain extensions.
            </p>

          </div>

          {/* Table */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Table Header */}
            <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div>

                <h4 className="text-xl font-bold text-[#071827] sm:text-2xl">
                  Domain Price List
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Choose the right domain for your business.
                </p>

              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                <FiShield />
                Secure Registration
              </div>

            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] border-collapse">

                {/* Table Head */}
                <thead>

                  <tr className="bg-[#071827] text-sm font-bold text-white">

                    <th className="px-6 py-5 text-left">
                      Domain
                    </th>

                    <th className="px-6 py-5 text-left">
                      Best For
                    </th>

                    <th className="px-6 py-5 text-center">
                      Register
                    </th>

                    <th className="px-6 py-5 text-center">
                      Renew
                    </th>

                    <th className="px-6 py-5 text-center">
                      Transfer
                    </th>

                    <th className="px-6 py-5 text-center">
                      Action
                    </th>

                  </tr>

                </thead>

                {/* Table Body */}
                <tbody>

                  {pricing.map((item, index) => (

                    <tr
                      key={item.extension}
                      className={`border-b border-slate-100 transition hover:bg-[#f6fafd] ${
                        index === pricing.length - 1
                          ? "border-b-0"
                          : ""
                      }`}
                    >

                      {/* Domain */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-sm font-black text-[#006cb5]">
                            {item.extension}
                          </div>

                          <span className="font-bold text-[#071827]">
                            {item.extension}
                          </span>

                        </div>

                      </td>

                      {/* Best For */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2">

                          <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                          <span className="text-sm text-slate-600">
                            {item.title}
                          </span>

                        </div>

                      </td>

                      {/* Register */}
                      <td className="px-6 py-5 text-center">

                        <span className="font-bold text-[#071827]">
                          {item.register}
                        </span>

                        <span className="ml-1 text-xs text-slate-400">
                          /yr
                        </span>

                      </td>

                      {/* Renew */}
                      <td className="px-6 py-5 text-center">

                        <span className="font-semibold text-slate-700">
                          {item.renew}
                        </span>

                        <span className="ml-1 text-xs text-slate-400">
                          /yr
                        </span>

                      </td>

                      {/* Transfer */}
                      <td className="px-6 py-5 text-center">

                        <span className="font-semibold text-slate-700">
                          {item.transfer}
                        </span>

                        <span className="ml-1 text-xs text-slate-400">
                          /yr
                        </span>

                      </td>

                      {/* Action */}
                      <td className="px-6 py-5 text-center">

                        <Link
                          href="/domains"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#006cb5] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0082d8]"
                        >
                          Register
                          <FiArrowRight />
                        </Link>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Mobile Hint */}
            <div className="border-t border-slate-100 bg-[#f8fbfd] px-5 py-3 text-center text-xs text-slate-500 lg:hidden">
              ← Swipe horizontally to view all pricing →
            </div>

          </div>

        </div>

        {/* =====================================================
            INFORMATION BANNER
        ====================================================== */}

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#071827] p-6 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                <FiGlobe className="text-xl" />
              </div>

              <div>

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Build Your Brand Around the Right Domain
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  Your domain is more than a web address. It is an important
                  part of your brand identity and how customers recognize your
                  business online.
                </p>

              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#70c8fa]">
              <FiShield />
              Professional Identity
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}