// import Link from "next/link";
// import { FiChevronDown } from "react-icons/fi";

// import { navigation } from "@/data/navigation";
// import MegaMenu from "./MegaMenu";

// export default function DesktopMenu() {
//   return (
//     <nav className="hidden w-full min-w-0 items-center justify-start gap-0 lg:flex">

//       {navigation.map((item) => {
//         /* Normal menu item */
//         if (!item.mega) {
//           return (
//             <Link
//               key={item.title}
//               href={item.href}
//               className="shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[12px] font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5] xl:px-2.5 xl:text-[13px]"
//             >
//               {item.title}
//             </Link>
//           );
//         }

//         /* Mega menu item */
//         return (
//           <div
//             key={item.title}
//             className="group relative shrink-0"
//           >
//             <button
//               type="button"
//               className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-[12px] font-semibold text-[#071827] transition hover:bg-[#eaf6ff] hover:text-[#006cb5] xl:px-2.5 xl:text-[13px]"
//             >
//               {item.title}

//               <FiChevronDown
//                 className="shrink-0 text-[11px] transition-transform duration-200 group-hover:rotate-180"
//               />
//             </button>

//             {item.columns && (
//               <MegaMenu columns={item.columns} />
//             )}
//           </div>
//         );
//       })}
//     </nav>
//   );
// }

import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import { navigation } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function DesktopMenu() {
  return (
    <nav className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
      <div className="flex min-w-0 items-center justify-center gap-1 xl:gap-1.5">
        {navigation.map((item) => {
          /* =================================================
             NORMAL MENU ITEM
          ================================================== */
          if (!item.mega) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="
                  shrink-0
                  whitespace-nowrap
                  rounded-lg
                  px-2
                  py-2
                  text-[12px]
                  font-semibold
                  text-[#071827]
                  transition
                  hover:bg-[#eaf6ff]
                  hover:text-[#006cb5]
                  xl:px-2.5
                  xl:text-[13px]
                "
              >
                {item.title}
              </Link>
            );
          }

          /* =================================================
             MEGA MENU ITEM
          ================================================== */
          return (
            <div
              key={item.title}
              className="group relative shrink-0"
            >
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-lg
                  px-2
                  py-2
                  text-[12px]
                  font-semibold
                  text-[#071827]
                  transition
                  hover:bg-[#eaf6ff]
                  hover:text-[#006cb5]
                  xl:px-2.5
                  xl:text-[13px]
                "
              >
                {item.title}

                <FiChevronDown
                  className="
                    shrink-0
                    text-[11px]
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
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