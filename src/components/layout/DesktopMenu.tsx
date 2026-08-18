import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { navigation } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-1 lg:flex">

      {navigation.map((item) => {
        if (!item.mega) {
          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
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
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
            >
              {item.title}

              <FiChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {item.columns && (
              <MegaMenu columns={item.columns} />
            )}

          </div>
        );
      })}

    </nav>
  );
}