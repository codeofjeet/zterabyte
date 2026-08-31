import {
  FiCheckCircle,
  FiGlobe,
  FiLock,
  FiRefreshCw,
  FiServer,
  FiSettings,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: FiLock,
    title: "Secure Domain Access",
    description:
      "Keep your domain management protected with secure account access and responsible domain administration.",
  },
  {
    icon: FiShield,
    title: "Domain Protection",
    description:
      "Protect your online identity by keeping important domain settings and ownership information under control.",
  },
  {
    icon: FiSettings,
    title: "DNS Management",
    description:
      "Manage DNS records required to connect your domain with websites, email services and other platforms.",
  },
  {
    icon: FiServer,
    title: "Website Connection",
    description:
      "Connect your registered domain with your hosting environment and get your website online.",
  },
  {
    icon: FiRefreshCw,
    title: "Renewal Management",
    description:
      "Keep track of your domain lifecycle and manage renewals so your domain remains active.",
  },
  {
    icon: FiGlobe,
    title: "Centralized Management",
    description:
      "Keep important domain settings organized so your online identity is easier to manage.",
  },
];

export default function DomainSecurity() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiShield />
            Domain Security & Management
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Keep Your Domain
            <span className="block text-[#006cb5]">
              Secure & Under Control
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A domain is an important part of your digital identity. Manage
            your domain settings, DNS, website connection and renewal needs
            from one organized service environment.
          </p>

        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-[#f8fbfd] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:bg-white hover:shadow-lg sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#006cb5]">
                  <FiCheckCircle />
                  Domain Management
                </div>

              </div>
            );
          })}

        </div>

        {/* Security Panel */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#071827] p-7 sm:p-9 lg:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                  <FiShield className="text-xl" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38a9f5]">
                    Protect Your Digital Identity
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Manage your domain with confidence.
                  </h3>
                </div>

              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                From DNS configuration and website connections to renewals and
                domain settings, proper management helps keep your online
                presence available and organized.
              </p>

            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

                <FiLock className="text-xl text-[#38a9f5]" />

                <p className="mt-3 text-sm font-bold text-white">
                  Protected
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Domain access
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

                <FiSettings className="text-xl text-[#38a9f5]" />

                <p className="mt-3 text-sm font-bold text-white">
                  Managed
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  DNS & settings
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}