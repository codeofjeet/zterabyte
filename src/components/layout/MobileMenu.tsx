"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiChevronDown,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setActiveMenu((current) =>
      current === title ? null : title
    );
  };

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        aria-label="Open mobile menu"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-200 p-2.5 text-xl text-[#071827] transition hover:border-[#006cb5] hover:text-[#006cb5] lg:hidden"
      >
        <span className="flex h-5 w-5 flex-col justify-between">
          <span className="h-0.5 w-full rounded bg-current" />
          <span className="h-0.5 w-full rounded bg-current" />
          <span className="h-0.5 w-full rounded bg-current" />
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">

          <div>
            <p className="text-lg font-bold text-[#006cb5]">
              ZTERABYTE
            </p>

            <p className="text-xs text-slate-500">
              Digital Solutions
            </p>
          </div>

          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-slate-100 p-2 text-xl text-slate-700 transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
          >
            <FiX />
          </button>

        </div>

        {/* Navigation */}
        <div className="h-[calc(100%-150px)] overflow-y-auto px-5 py-5">

          <div className="space-y-1">

            {navigation.map((item) => {

              if (!item.mega) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                  >
                    {item.title}
                  </Link>
                );
              }

              const isActive = activeMenu === item.title;

              return (
                <div key={item.title}>

                  <button
                    type="button"
                    onClick={() => toggleSubmenu(item.title)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                  >
                    <span>{item.title}</span>

                    <FiChevronDown
                      className={`transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "max-h-[700px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-3 border-l border-[#dbeeff] pl-4">

                      {item.columns?.map((column) => (
                        <div
                          key={column.heading}
                          className="py-2"
                        >

                          <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#006cb5]">
                            {column.heading}
                          </p>

                          {column.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                            >
                              <FiChevronRight className="text-xs" />
                              {subItem.title}
                            </Link>
                          ))}

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white p-5">

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-[#006cb5] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#004f86]"
          >
            Get Started
          </Link>

        </div>

      </aside>
    </>
  );
}