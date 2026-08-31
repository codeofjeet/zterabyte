// import Image from "next/image";
// import Link from "next/link";
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiFacebook,
//   FiInstagram,
//   FiTwitter,
//   FiLinkedin,
//   FiArrowRight,
//   FiGlobe,
// } from "react-icons/fi";

// const services = [
//   {
//     title: "Domain Registration",
//     href: "/domains",
//   },
//   {
//     title: "Web Hosting",
//     href: "/hosting",
//   },
//   {
//     title: "Email Hosting",
//     href: "/email-hosting",
//   },
//   {
//     title: "Website Development",
//     href: "/website-development",
//   },
//   {
//     title: "Design Services",
//     href: "/design",
//   },
//   {
//     title: "Digital Marketing",
//     href: "/digital-marketing",
//   },
// ];

// const developmentLinks = [
//   {
//     title: "Web Development",
//     href: "/website-development/web-development",
//   },
//   {
//     title: "eCommerce Development",
//     href: "/website-development/ecommerce",
//   },
//   {
//     title: "Shopify Development",
//     href: "/website-development/shopify",
//   },
//   {
//     title: "WordPress Development",
//     href: "/website-development/wordpress",
//   },
//   {
//     title: "Mobile App Development",
//     href: "/website-development/mobile-app",
//   },
// ];

// const companyLinks = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "About Us",
//     href: "/about",
//   },
//   {
//     title: "Contact Us",
//     href: "/contact",
//   },
//   {
//     title: "Privacy Policy",
//     href: "/privacy-policy",
//   },
//   {
//     title: "Terms & Conditions",
//     href: "/terms",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#071827] text-white">

//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">

//         {/* Top CTA */}
//         <div className="mb-14 overflow-hidden rounded-3xl border border-[#38a9f5]/20 bg-[#006cb5]/10">

//           <div className="flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

//             <div className="max-w-2xl">

//               <div className="flex items-center gap-2 text-sm font-semibold text-[#38a9f5]">

//                 <FiGlobe />

//                 Complete Digital Solutions

//               </div>

//               <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
//                 Need help with your next digital project?
//               </h2>

//               <p className="mt-2 text-sm leading-6 text-slate-400">
//                 Talk to our team about domains, hosting, websites,
//                 applications, design or digital marketing.
//               </p>

//             </div>

//             <Link
//               href="/contact"
//               className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0082d8]"
//             >
//               Contact Us
//               <FiArrowRight />
//             </Link>

//           </div>

//         </div>

//         {/* Footer Columns */}
//         <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">

//           {/* Brand */}
//           <div>

//             <Link href="/" className="inline-block">

//               <Image
//                 src="/images/logo.png"
//                 alt="Zterabyte"
//                 width={180}
//                 height={50}
//                 className="h-auto w-43.75"
//               />

//             </Link>

//             <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
//               Complete digital solutions for businesses — from domains,
//               hosting and professional email to website development,
//               creative design and digital marketing.
//             </p>

//             {/* Social */}
//             <div className="mt-7 flex gap-3">

//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
//               >
//                 <FiFacebook />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
//               >
//                 <FiInstagram />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Twitter"
//                 className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
//               >
//                 <FiTwitter />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
//               >
//                 <FiLinkedin />
//               </a>

//             </div>

//           </div>

//           {/* Services */}
//           <div>

//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">
//               Services
//             </h3>

//             <ul className="mt-6 space-y-3">

//               {services.map((service) => (
//                 <li key={service.title}>

//                   <Link
//                     href={service.href}
//                     className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
//                   >

//                     <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

//                     {service.title}

//                   </Link>

//                 </li>
//               ))}

//             </ul>

//           </div>

//           {/* Development */}
//           <div>

//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">
//               Development
//             </h3>

//             <ul className="mt-6 space-y-3">

//               {developmentLinks.map((link) => (
//                 <li key={link.title}>

//                   <Link
//                     href={link.href}
//                     className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
//                   >

//                     <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

//                     {link.title}

//                   </Link>

//                 </li>
//               ))}

//             </ul>

//           </div>

//           {/* Company */}
//           <div>

//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">
//               Company
//             </h3>

//             <ul className="mt-6 space-y-3">

//               {companyLinks.map((link) => (
//                 <li key={link.title}>

//                   <Link
//                     href={link.href}
//                     className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
//                   >

//                     <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

//                     {link.title}

//                   </Link>

//                 </li>
//               ))}

//             </ul>

//           </div>

//           {/* Contact */}
//           <div>

//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">
//               Contact Us
//             </h3>

//             <div className="mt-6 space-y-5">

//               {/* Phone */}
//               <a
//                 href="tel:+91-9119220608"
//                 className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
//               >

//                 <FiPhone className="mt-0.5 shrink-0 text-[#38a9f5]" />

//                 <span>
//                   +91 91192 20608
//                 </span>

//               </a>

//               {/* Email */}
//               <a
//                 href="mailto:info@zterabyte.com"
//                 className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
//               >

//                 <FiMail className="mt-0.5 shrink-0 text-[#38a9f5]" />

//                 <span>
//                   info@zterabyte.com
//                 </span>

//               </a>

//               {/* Address */}
//               <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">

//                 <FiMapPin className="mt-0.5 shrink-0 text-[#38a9f5]" />

//                 <span>
//                   1234, Basant Vihar,
//                   Dadabari, Kota,
//                   Rajasthan 324009
//                   <br />
//                   India
//                 </span>

//               </div>

//             </div>

//             <Link
//               href="/contact"
//               className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#006cb5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
//             >
//               Get in Touch
//               <FiArrowRight />
//             </Link>

//           </div>

//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">

//         <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-6">

//           <p>
//             © {new Date().getFullYear()} Zterabyte. All rights reserved.
//           </p>

//           <div className="flex flex-wrap gap-5">

//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms"
//               className="transition hover:text-white"
//             >
//               Terms & Conditions
//             </Link>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Domains",
    href: "/domains",
  },
  {
    title: "Limited Shared Hosting",
    href: "/hosting/limited",
  },
  {
     title: "Unlimited Shared Hosting",
     href: "/hosting/unlimited",
  },
  {
    title: "Business Email Hosting",
    href: "/email-hosting/business",
  },
  {
    title: "Enterprise Email Hosting",
    href: "/email-hosting/enterprise",
  },
];

/* =========================================================
   DEVELOPMENT
========================================================= */

const developmentLinks = [
  {
    title: "eCommerce Development",
    href: "/website-development/ecommerce",
  },
  {
    title: "Mobile App Development",
    href: "/website-development/mobile-app",
  },
  {
    title: "Shopify Development",
    href: "/website-development/shopify",
  },
  {
    title: "Web Development",
    href: "/website-development/web-development",
  },
  {
    title: "WordPress Development",
    href: "/website-development/wordpress",
  },
];

/* =========================================================
   DIGITAL MARKETING
========================================================= */

const marketingLinks = [
  {
    title: "eCommerce SEO",
    href: "/digital-marketing/ecommerce-seo",
  },
  {
    title: "Email Marketing",
    href: "/digital-marketing/email-marketing",
  },
  {
    title: "Facebook Marketing",
    href: "/digital-marketing/facebook-marketing",
  },
  {
    title: "Google Ads",
    href: "/digital-marketing/google-ads",
  },
  {
    title: "Instagram Marketing",
    href: "/digital-marketing/instagram-marketing",
  },
  {
    title: "Local SEO",
    href: "/digital-marketing/local-seo",
  },
  {
    title: "Off Page SEO",
    href: "/digital-marketing/off-page-seo",
  },
  {
    title: "On Page SEO",
    href: "/digital-marketing/on-page-seo",
  },
  {
    title: "SEO & SMO",
    href: "/digital-marketing/seo-smo",
  },
  {
    title: "Twitter Marketing",
    href: "/digital-marketing/twitter-marketing",
  },
];

/* =========================================================
   DESIGN
========================================================= */

const designLinks = [
  {
    title: "Graphics Design",
    href: "/design/graphics-design",
  },
  {
    title: "Logo Design",
    href: "/design/logo-design",
  },
  {
    title: "UI/UX Design",
    href: "/design/ui-ux-design",
  },
];

/* =========================================================
   COMPANY
========================================================= */

const companyLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white">

      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-6 lg:pt-20">

        <div className="overflow-hidden rounded-3xl border border-[#38a9f5]/20 bg-[#006cb5]/10">

          <div className="flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 text-sm font-semibold text-[#38a9f5]">
                <FiGlobe />
                Complete Digital Solutions
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Need help with your next digital project?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Talk to our team about domains, hosting, websites,
                applications, design or digital marketing.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0082d8]"
            >
              Contact Us
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_0.9fr_1.25fr_1.25fr_0.9fr_1.15fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link href="/" className="inline-block">

              <Image
                src="/images/logo.png"
                alt="Zterabyte"
                width={180}
                height={50}
                className="h-auto w-[180px]"
              />

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Complete digital solutions for businesses — from domains,
              hosting and professional email to website development,
              creative design and digital marketing.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiLinkedin />
              </a>

            </div>

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              {services.map((service) => (
                <li key={service.title}>

                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {service.title}

                  </Link>

                </li>
              ))}

            </ul>

            

          </div>

          {/* =================================================
              DESIGN & DEVELOPMENT
          ================================================== */}

          <div>

            {/* Design Links */}

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Design
            </h3>

            <ul className="mt-5 space-y-3">

              {designLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

              {/* Development Links */}

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Development
            </h3>

            <ul className="mt-6 space-y-3">

              {developmentLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              DIGITAL MARKETING
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Digital Marketing
            </h3>

            <ul className="mt-6 space-y-3">

              {marketingLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3">

              {companyLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:+91-9119220608"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
              >
                <FiPhone className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  +91 91192 20608
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@zterabyte.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
              >
                <FiMail className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  info@zterabyte.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">

                <FiMapPin className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  1234, Basant Vihar,
                  <br />
                  Dadabari, Kota,
                  <br />
                  Rajasthan 324009
                  <br />
                  India
                </span>

              </div>

            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#006cb5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
            >
              Get in Touch
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-6">

          <p>
            © {new Date().getFullYear()} Zterabyte. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}