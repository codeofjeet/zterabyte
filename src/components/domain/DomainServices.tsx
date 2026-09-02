import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiRefreshCw,
  FiSettings,
  FiShield,
} from "react-icons/fi";

const services = [
  {
    icon: FiGlobe,
    title: "Domain Registration",
    description:
      "Register a professional domain name that represents your business, brand or online project.",
    points: [
      "Multiple extensions",
      "Simple registration",
      "Easy management",
    ],
  },
  {
    icon: FiRefreshCw,
    title: "Domain Transfer",
    description:
      "Move your existing domain to ZTERABYTE with a straightforward transfer process and continued management.",
    points: [
      "Easy transfer process",
      "Domain migration support",
      "Management assistance",
    ],
  },
  {
    icon: FiSettings,
    title: "DNS Management",
    description:
      "Manage your domain DNS records and connect your domain with websites, email and other online services.",
    points: [
      "DNS record management",
      "Website connection",
      "Email configuration",
    ],
  },
  {
    icon: FiShield,
    title: "Domain Security",
    description:
      "Protect your online identity with secure domain management and important domain protection features.",
    points: [
      "Secure management",
      "Domain protection",
      "Account security",
    ],
  },
];

export default function DomainServices() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiGlobe />
            Our Domain Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-[#006cb5]">
              Manage Your Domain
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From registering your first domain to transferring and managing
            existing domains, ZTERABYTE provides practical solutions for
            businesses and online professionals.
          </p>

        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-[#f8fbfd] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:bg-white hover:shadow-lg sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-[#071827]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Points */}
                <div className="mt-5 space-y-2 border-t border-slate-200 pt-5">

                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                    >
                      <FiCheckCircle className="shrink-0 text-[#006cb5]" />
                      {point}
                    </div>
                  ))}

                </div>

                {/* Bottom */}
                {/* <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#006cb5]">
                  Explore Service

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div> */}

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ====================================================== */}

        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-[#f6fafd] p-6 sm:p-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                <FiGlobe className="text-xl" />
              </div>

              <div>

                <h3 className="text-lg font-bold text-[#071827] sm:text-xl">
                  One Domain, Many Possibilities
                </h3>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                  Your domain can become the foundation of your website,
                  business email, online store and complete digital identity.
                </p>

              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Business Ready
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}