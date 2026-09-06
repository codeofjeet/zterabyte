import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiMessageCircle,
  FiSearch,
  FiStar,
} from "react-icons/fi";

const services = [
  {
    icon: FiMapPin,
    title: "Google Business Profile",
    description:
      "Optimize your business profile with accurate information, relevant categories and useful content for local customers.",
    points: [
      "Business information",
      "Category optimization",
      "Profile improvement",
    ],
  },
  {
    icon: FiSearch,
    title: "Local Keyword Optimization",
    description:
      "Target location-based search terms that connect your products and services with customers searching in your area.",
    points: [
      "Local keywords",
      "Search intent",
      "Location targeting",
    ],
  },
  {
    icon: FiGlobe,
    title: "Local Citations",
    description:
      "Build consistent business information across relevant local directories and online platforms.",
    points: [
      "Business listings",
      "NAP consistency",
      "Directory presence",
    ],
  },
  {
    icon: FiStar,
    title: "Reviews & Reputation",
    description:
      "Strengthen your online reputation by encouraging genuine customer feedback and maintaining a professional presence.",
    points: [
      "Review visibility",
      "Customer feedback",
      "Reputation building",
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Local Content",
    description:
      "Create useful location-focused content that helps your business connect with customers and demonstrate local relevance.",
    points: [
      "Location content",
      "Local topics",
      "Customer-focused content",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Local Performance Tracking",
    description:
      "Monitor local search visibility and important performance signals to understand how your local SEO strategy is progressing.",
    points: [
      "Visibility tracking",
      "Local insights",
      "Performance review",
    ],
  },
];

export default function LocalSEOServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiMapPin />
            Local SEO Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Put Your Business
            <span className="block text-[#006cb5]">
              On the Local Map
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We help businesses improve their local search presence so nearby
            customers can discover, understand and connect with them more
            easily.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Points */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <FiCheckCircle className="shrink-0 text-[#006cb5]" />
                      {point}
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-[#dbeeff] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                <FiMapPin />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Be Visible Where Local Customers Search
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  A strong local SEO presence helps connect your business with
                  people actively looking for relevant products and services
                  nearby.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Local Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}