import {
  FiCheckCircle,
  FiFileText,
  FiGlobe,
  FiImage,
  FiLayers,
  FiMonitor,
  FiPrinter,
  FiShare2,
} from "react-icons/fi";

const deliverables = [
  {
    icon: FiImage,
    title: "Logo Variations",
    description:
      "Prepare suitable logo variations for different layouts, backgrounds and brand applications.",
  },
  {
    icon: FiFileText,
    title: "Digital File Formats",
    description:
      "Receive practical file formats suitable for websites, digital platforms and everyday brand use.",
  },
  {
    icon: FiPrinter,
    title: "Print-Ready Assets",
    description:
      "Prepare your logo for business cards, brochures, stationery and other printed materials.",
  },
  {
    icon: FiMonitor,
    title: "Website Branding",
    description:
      "Use your logo effectively across your website header, footer, landing pages and digital assets.",
  },
  {
    icon: FiShare2,
    title: "Social Media Branding",
    description:
      "Create suitable logo assets for social media profiles, posts and other online channels.",
  },
  {
    icon: FiLayers,
    title: "Brand Consistency",
    description:
      "Keep your visual identity consistent across different platforms and customer touchpoints.",
  },
];

const applications = [
  "Website & favicon",
  "Social media profiles",
  "Business cards",
  "Marketing materials",
  "Email signatures",
  "Digital advertisements",
];

export default function LogoDesignDeliverables() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiLayers />
            Logo Deliverables
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            One Logo.
            <span className="block text-[#006cb5]">
              Many Brand Applications.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Your logo should work across the different places where
            customers interact with your business.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">

          {/* Deliverable Cards */}
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

          {/* Brand Application Preview */}
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-[#f6fafd] p-6 shadow-sm sm:p-8">

              {/* Logo Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl bg-[#071827]">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
                    <FiGlobe className="text-3xl" />
                  </div>

                  <h3 className="mt-4 text-lg font-black tracking-wide text-white">
                    ZTERABYTE
                  </h3>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#70c8fa]">
                    Digital Solutions
                  </p>

                </div>

              </div>

              {/* Applications */}
              <div className="mt-5">

                <h3 className="text-sm font-bold text-[#071827]">
                  Where Your Logo Can Be Used
                </h3>

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