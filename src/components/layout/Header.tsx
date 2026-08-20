import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="hidden bg-[#071827] text-white lg:block">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

          <div className="flex items-center gap-6">

            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 transition hover:text-[#6fc2f5]"
            >
              <FiPhone />

              <span>
                +91 12345 67890
              </span>
            </a>

            <a
              href="mailto:info@zterabyte.com"
              className="flex items-center gap-2 transition hover:text-[#6fc2f5]"
            >
              <FiMail />

              <span>
                info@zterabyte.com
              </span>
            </a>

          </div>

          <p className="whitespace-nowrap">
            Trusted Digital & Hosting Solutions
          </p>

        </div>

      </div>


      {/* =====================================================
          MAIN HEADER
      ====================================================== */}
      <div className="mx-auto flex max-w-350 items-center gap-3 px-5 py-4 lg:px-6">

        {/* =================================================
            LOGO
        ================================================== */}
        <Link
          href="/"
          className="shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="Zterabyte"
            width={180}
            height={45}
            priority
            className="h-auto w-36.25 xl:w-41.25"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}
        <DesktopMenu />


        {/* =================================================
            DESKTOP ACTIONS
        ================================================== */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">

          <Link
            href="/login"
            className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-[#006cb5] px-3.5 py-2.5 text-sm font-semibold text-[#006cb5] transition hover:bg-[#eaf6ff]"
          >
            <FiUser />

            <span>
              Client Login
            </span>
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-[#006cb5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#004f86]"
          >
            Get Started
          </Link>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================== */}
        <MobileMenu />

      </div>

    </header>
  );
}