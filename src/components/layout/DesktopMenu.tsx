import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { navigation } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function DesktopMenu() {
  return (
    <nav className="hidden flex-1 items-center justify-center lg:flex">

      <div className="flex items-center gap-0.5">

        {navigation.map((item) => {
          if (!item.mega) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5] xl:px-3 xl:text-sm"
              >
                {item.title}
              </Link>
            );
          }

          return (
            <div
              key={item.title}
              className="group relative"
            >

              <button
                type="button"
                className="flex whitespace-nowrap items-center gap-1 rounded-lg px-2.5 py-2 text-[13px] font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5] xl:px-3 xl:text-sm"
              >
                {item.title}

                <FiChevronDown className="shrink-0 text-xs transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {item.columns && (
                <MegaMenu columns={item.columns} />
              )}

            </div>
          );
        })}

      </div>

    </nav>
  );
}