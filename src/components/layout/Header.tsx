import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* =========================
          TOP BAR
      ========================== */}
      <div className="hidden bg-[#071827] text-white lg:block">
        <div className="mx-auto flex w-full max-w-600 items-center gap-20 px-5 py-3 lg:px-6 text-sm">

          <div className="flex items-center gap-20">

            <a
              href="tel:+919119220608"
              className="flex items-center gap-2 whitespace-nowrap transition hover:text-[#6fc2f5]"
            >
              <FiPhone />
              +91 91192 20608
            </a>

            <a
              href="mailto:info@zterabyte.com"
              className="flex items-center gap-2 whitespace-nowrap transition hover:text-[#6fc2f5]"
            >
              <FiMail />
              info@zterabyte.com
            </a>

          </div>

          <p className="whitespace-nowrap">
            Trusted Digital & Hosting Solutions
          </p>

        </div>
      </div>


      {/* =========================
          MAIN HEADER
      ========================== */}
      <div className="mx-auto flex w-full max-w-360 items-center gap-4 px-5 py-3 lg:px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="relative h-[38px] w-[140px] xl:h-[42px] xl:w-[150px]">
            <Image
              src="/images/logo.png"
              alt="Zterabyte"
              fill
              priority
              sizes="(max-width: 1279px) 140px, 150px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="min-w-0 flex-1">
          <DesktopMenu />
        </div>


        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">

          <Link
            href="/login"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#006cb5] px-3 py-2 text-[13px] font-semibold text-[#006cb5] transition hover:bg-[#eaf6ff]"
          >
            <FiUser />
            Client Login
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-[#006cb5] px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#004f86]"
          >
            Get Started
          </Link>

        </div>


        {/* Mobile Menu */}
        <MobileMenu />

      </div>

    </header>
  );
}