import {
  FiActivity,
  FiCheckCircle,
  FiDatabase,
  FiLock,
  FiRefreshCw,
  FiShield,
  FiSliders,
  FiZap,
} from "react-icons/fi";

const securityFeatures = [
  {
    icon: FiShield,
    title: "Security Foundation",
    description:
      "Use practical security measures to help protect your WordPress website and administration area.",
  },
  {
    icon: FiLock,
    title: "Secure Admin Access",
    description:
      "Keep administrative access organized and follow safer login and account management practices.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Keep the website structure clean and optimize important areas for a smoother visitor experience.",
  },
  {
    icon: FiRefreshCw,
    title: "Updates & Maintenance",
    description:
      "Keep WordPress, themes and required plugins maintained to support website reliability.",
  },
  {
    icon: FiDatabase,
    title: "Backup Planning",
    description:
      "Maintain a suitable backup approach so important website information can be recovered when needed.",
  },
  {
    icon: FiActivity,
    title: "Performance Monitoring",
    description:
      "Monitor important website areas and identify opportunities to improve the overall experience.",
  },
];

export default function WordPressSecurity() {
  return (
    <section className="overflow-hidden bg-[#071827] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-bold text-[#70c8fa]">
            <FiShield />
            Security & Performance
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            A WordPress Website That Is
            <span className="block text-[#38a9f5]">
              Ready for Business
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Good WordPress development is not only about design. Your
            website also needs a reliable structure, sensible maintenance
            and a smooth visitor experience.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-7">

            <div className="overflow-hidden rounded-2xl bg-white">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Website Management
                  </p>

                  <h3 className="mt-1 text-sm font-bold text-[#071827]">
                    WordPress Health
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                  <FiActivity />
                </div>

              </div>

              {/* Health Status */}
              <div className="p-4 sm:p-5">

                <div className="rounded-xl bg-[#eaf6ff] p-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Website Status
                      </p>

                      <p className="mt-1 text-sm font-black text-[#071827]">
                        Healthy & Ready
                      </p>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#006cb5]">
                      <FiCheckCircle />
                    </div>

                  </div>

                </div>

                {/* Status Items */}
                <div className="mt-4 space-y-3">

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">

                    <div className="flex items-center gap-3">

                      <FiShield className="text-[#006cb5]" />

                      <span className="text-xs font-semibold text-[#071827]">
                        Security
                      </span>

                    </div>

                    <span className="rounded-full bg-[#eaf6ff] px-3 py-1 text-[9px] font-bold text-[#006cb5]">
                      Active
                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">

                    <div className="flex items-center gap-3">

                      <FiZap className="text-[#006cb5]" />

                      <span className="text-xs font-semibold text-[#071827]">
                        Performance
                      </span>

                    </div>

                    <span className="rounded-full bg-[#eaf6ff] px-3 py-1 text-[9px] font-bold text-[#006cb5]">
                      Optimized
                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">

                    <div className="flex items-center gap-3">

                      <FiDatabase className="text-[#006cb5]" />

                      <span className="text-xs font-semibold text-[#071827]">
                        Backup
                      </span>

                    </div>

                    <span className="rounded-full bg-[#eaf6ff] px-3 py-1 text-[9px] font-bold text-[#006cb5]">
                      Ready
                    </span>

                  </div>

                </div>

                {/* Score */}
                <div className="mt-4 rounded-xl bg-slate-50 p-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold text-slate-500">
                      Overall Website Health
                    </span>

                    <span className="text-sm font-black text-[#006cb5]">
                      96%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div className="h-full w-[96%] rounded-full bg-[#006cb5]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Features */}
          <div>

            <span className="inline-flex rounded-full bg-[#006cb5]/15 px-4 py-2 text-sm font-bold text-[#70c8fa]">
              Reliable WordPress Setup
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Protect, Maintain &
              <span className="block text-[#38a9f5]">
                Improve Your Website
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-400">
              We focus on practical website management considerations so
              your WordPress site has a solid foundation for ongoing use.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {securityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#38a9f5]/20 bg-[#006cb5]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-start gap-3">

            <FiSliders className="mt-0.5 shrink-0 text-[#38a9f5]" />

            <div>

              <h4 className="font-bold text-white">
                Built for Long-Term Use
              </h4>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                A well-maintained WordPress website can evolve with your
                business and changing content needs.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#70c8fa]">
            <FiCheckCircle />
            Business Ready
          </div>

        </div>

      </div>
    </section>
  );
}