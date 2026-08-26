import {
  FiCheckCircle,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiMonitor,
  FiSmartphone,
  FiTablet,
  FiUsers,
} from "react-icons/fi";

const deliverables = [
  {
    icon: FiLayout,
    title: "Website UI Design",
    description:
      "Modern website interfaces with clear layouts, visual hierarchy and user-friendly navigation.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App UI",
    description:
      "Mobile interfaces designed around touch interactions, screen sizes and simple user journeys.",
  },
  {
    icon: FiMonitor,
    title: "Web Application UI",
    description:
      "Functional application interfaces for dashboards, portals, SaaS products and business systems.",
  },
  {
    icon: FiTablet,
    title: "Responsive Design",
    description:
      "Layouts that adapt across desktop, tablet and mobile screen sizes for a consistent experience.",
  },
  {
    icon: FiLayers,
    title: "Design Systems",
    description:
      "Reusable colors, typography, components and interface patterns that keep products consistent.",
  },
  {
    icon: FiUsers,
    title: "User Flow Design",
    description:
      "Clear customer journeys that help users move naturally through important product actions.",
  },
];

const applications = [
  "Business websites",
  "Mobile applications",
  "SaaS platforms",
  "Admin dashboards",
  "E-commerce platforms",
  "Customer portals",
];

export default function UIUXDesignDeliverables() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiLayers />
            UI/UX Deliverables
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Design for Every
            <span className="block text-[#006cb5]">
              Digital Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From websites and mobile applications to dashboards and
            customer portals, create interfaces around your users and
            business requirements.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">

          {/* Deliverables */}
          <div className="grid gap-4 sm:grid-cols-2">

            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Design Preview */}
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-[#f6fafd] p-6 shadow-sm sm:p-8">

              {/* Browser Preview */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <div className="ml-2 h-2.5 flex-1 rounded bg-white" />

                </div>

                <div className="p-5">

                  {/* Header */}
                  <div className="flex items-center justify-between">

                    <div className="h-4 w-24 rounded bg-[#071827]" />

                    <div className="flex gap-2">
                      <span className="h-2 w-8 rounded bg-slate-200" />
                      <span className="h-2 w-8 rounded bg-slate-200" />
                      <span className="h-2 w-8 rounded bg-slate-200" />
                    </div>

                  </div>

                  {/* Hero */}
                  <div className="mt-6 rounded-2xl bg-[#eaf6ff] p-5">

                    <div className="h-3 w-32 rounded bg-[#071827]" />

                    <div className="mt-3 h-2 w-full rounded bg-white" />

                    <div className="mt-2 h-2 w-4/5 rounded bg-white" />

                    <div className="mt-5 h-8 w-24 rounded-lg bg-[#006cb5]" />

                  </div>

                  {/* Cards */}
                  <div className="mt-4 grid grid-cols-3 gap-3">

                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-100 p-3"
                      >

                        <div className="flex h-8 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                          <FiLayers />
                        </div>

                        <div className="mt-3 h-2 w-full rounded bg-slate-200" />

                        <div className="mt-2 h-2 w-3/4 rounded bg-slate-100" />

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* Applications */}
              <div className="mt-6">

                <div className="flex items-center gap-2">

                  <FiGlobe className="text-[#006cb5]" />

                  <h3 className="text-sm font-bold text-[#071827]">
                    Design Applications
                  </h3>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  {applications.map((application) => (
                    <div
                      key={application}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-600"
                    >
                      <FiCheckCircle className="shrink-0 text-[#006cb5]" />
                      {application}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}