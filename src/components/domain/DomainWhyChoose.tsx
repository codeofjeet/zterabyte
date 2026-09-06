import {
  FiCheckCircle,
  FiGlobe,
  FiHeadphones,
  FiLock,
  FiSettings,
  FiZap,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiZap,
    title: "Simple Domain Management",
    description:
      "Manage your domains through a straightforward process without unnecessary complexity.",
  },
  {
    icon: FiGlobe,
    title: "Multiple Domain Extensions",
    description:
      "Choose from a wide range of domain extensions suitable for different businesses and online projects.",
  },
  {
    icon: FiLock,
    title: "Secure Domain Environment",
    description:
      "Keep your domain information and management activities protected with security-focused practices.",
  },
  {
    icon: FiSettings,
    title: "Easy DNS Control",
    description:
      "Manage DNS settings and connect your domain with websites, email and other online services.",
  },
  {
    icon: FiHeadphones,
    title: "Helpful Support",
    description:
      "Get assistance when you need help with domain registration, transfers, DNS or management.",
  },
  {
    icon: FiCheckCircle,
    title: "Business Ready",
    description:
      "Build a professional online identity with a domain that supports your website and digital presence.",
  },
];

export default function DomainWhyChoose() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              <FiGlobe />
              Why Choose ZTERABYTE
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
              More Than Just a
              <span className="block text-[#006cb5]">
                Domain Name
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
            Your domain is the foundation of your online identity. We make it
            easier to register, manage, connect and protect the domain behind
            your digital presence.
          </p>

        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-slate-200 bg-[#f8fbfd] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:bg-white hover:shadow-lg sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {reason.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#006cb5]">
                  <FiCheckCircle />
                  ZTERABYTE Domain Service
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Feature Banner */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#071827] p-7 sm:p-9 lg:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38a9f5]">
                Your Digital Foundation
              </p>

              <h3 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl">
                Start with a domain that represents your business.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Whether you are launching a new website, an online store or a
                growing business, the right domain helps establish a
                recognizable digital identity.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <FiGlobe className="text-xl text-[#38a9f5]" />

                <div>
                  <p className="text-sm font-bold text-white">
                    Professional
                  </p>

                  <p className="text-xs text-slate-500">
                    Online identity
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <FiLock className="text-xl text-[#38a9f5]" />

                <div>
                  <p className="text-sm font-bold text-white">
                    Secure
                  </p>

                  <p className="text-xs text-slate-500">
                    Domain management
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
