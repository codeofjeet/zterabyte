import {
  FiGlobe,
  FiServer,
  FiCode,
  FiHeadphones,
} from "react-icons/fi";

const stats = [
  {
    icon: FiGlobe,
    value: "Domains",
    label: "Registration & Management",
  },
  {
    icon: FiServer,
    value: "Hosting",
    label: "Reliable Web Infrastructure",
  },
  {
    icon: FiCode,
    value: "Development",
    label: "Web & Mobile Solutions",
  },
  {
    icon: FiHeadphones,
    value: "Support",
    label: "Professional Assistance",
  },
];

export default function TrustStats() {
  return (
    <section className="relative z-10 -mt-8 px-5 pb-8 lg:-mt-10 lg:px-6">

      <div className="mx-auto max-w-6xl">

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                className={`group flex items-center gap-4 p-5 transition hover:bg-[#f6fafd] sm:p-6 ${
                  index !== 0
                    ? "border-t border-slate-200 sm:border-l lg:border-t-0"
                    : ""
                } ${
                  index === 2
                    ? "sm:border-t lg:border-l"
                    : ""
                }`}
              >

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">

                  <Icon className="text-xl" />

                </div>

                {/* Content */}
                <div>

                  <p className="text-lg font-bold text-[#071827]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {stat.label}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}