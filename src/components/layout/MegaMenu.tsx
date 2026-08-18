import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type MegaItem = {
  title: string;
  href: string;
};

type MegaColumn = {
  heading: string;
  items: MegaItem[];
};

type MegaMenuProps = {
  columns: MegaColumn[];
};

export default function MegaMenu({ columns }: MegaMenuProps) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-100 bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

      <div
        className={`grid gap-8 ${
          columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {columns.map((column) => (
          <div key={column.heading}>

            <h3 className="mb-4 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-[#006cb5]">
              {column.heading}
            </h3>

            <div className="space-y-1">
              {column.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                >
                  <span>{item.title}</span>

                  <FiArrowRight className="text-[#006cb5] opacity-0 transition group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                </Link>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-[#071827] p-4">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-semibold text-white">
              Need help choosing a service?
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Talk to our team about the right solution for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-[#006cb5] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0082d8]"
          >
            Talk to Us
          </Link>

        </div>

      </div>

    </div>
  );
}