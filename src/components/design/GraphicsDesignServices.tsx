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

const services = [
  {
    icon: FiShare2,
    title: "Social Media Graphics",
    description:
      "Eye-catching posts, banners and promotional graphics for your social media channels.",
  },
  {
    icon: FiImage,
    title: "Marketing Creatives",
    description:
      "Creative visuals for campaigns, promotions, offers and digital marketing activities.",
  },
  {
    icon: FiGlobe,
    title: "Website Graphics",
    description:
      "Professional banners, promotional sections and supporting graphics for your website.",
  },
  {
    icon: FiPrinter,
    title: "Print Materials",
    description:
      "Business cards, brochures, flyers and other graphics prepared for print applications.",
  },
  {
    icon: FiMonitor,
    title: "Digital Advertisements",
    description:
      "Visual creatives designed for online advertising campaigns and promotional platforms.",
  },
  {
    icon: FiFileText,
    title: "Business Materials",
    description:
      "Presentations, documents and branded business materials that maintain a professional appearance.",
  },
];

const applications = [
  "Social media posts",
  "Website banners",
  "Promotional campaigns",
  "Digital advertisements",
  "Brochures & flyers",
  "Business presentations",
];

export default function GraphicsDesignServices() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiLayers />
            Graphics Design Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Creative Graphics for
            <span className="block text-[#006cb5]">
              Every Business Need
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Create professional visual content for your digital marketing,
            website, social media, advertising and business communication.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">

          {/* Services */}
          <div className="grid gap-4 sm:grid-cols-2">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Visual Preview */}
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-[#f6fafd] p-6 shadow-sm sm:p-8">

              {/* Creative Preview */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="rounded-2xl bg-[#071827] p-6">

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#70c8fa]">
                    Creative Campaign
                  </span>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                    Make Your
                    <span className="block text-[#38a9f5]">
                      Brand Visible
                    </span>
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
                    Professional graphics designed to communicate your
                    message and strengthen your visual presence.
                  </p>

                  <div className="mt-5 h-9 w-28 rounded-lg bg-[#006cb5]" />

                </div>

              </div>

              {/* Applications */}
              <div className="mt-6">

                <div className="flex items-center gap-2">

                  <FiGlobe className="text-[#006cb5]" />

                  <h3 className="text-sm font-bold text-[#071827]">
                    Common Applications
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