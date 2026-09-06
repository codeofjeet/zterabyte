import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiShare2,
  FiTarget,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility with structured optimization strategies focused on relevant keywords and useful content.",
    points: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO",
    ],
  },
  {
    icon: FiShare2,
    title: "Social Media Optimization",
    description:
      "Optimize your social profiles and content to create a stronger and more consistent presence across social platforms.",
    points: [
      "Profile optimization",
      "Content optimization",
      "Social engagement",
    ],
  },
  {
    icon: FiGlobe,
    title: "Online Visibility",
    description:
      "Improve how your business appears across important digital channels and make it easier for potential customers to discover you.",
    points: [
      "Digital presence",
      "Brand visibility",
      "Business information",
    ],
  },
  {
    icon: FiTarget,
    title: "Audience Targeting",
    description:
      "Develop strategies around relevant search terms, audiences and content to reach people who are interested in your business.",
    points: [
      "Audience research",
      "Search intent",
      "Content targeting",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Performance Analysis",
    description:
      "Review search and social performance to identify opportunities and make informed improvements to your strategy.",
    points: [
      "Performance tracking",
      "Traffic analysis",
      "Growth insights",
    ],
  },
  {
    icon: FiCheckCircle,
    title: "Brand Consistency",
    description:
      "Maintain consistent messaging and visual identity across your website, search presence and social media channels.",
    points: [
      "Brand messaging",
      "Visual consistency",
      "Channel alignment",
    ],
  },
];

export default function SEOAndSMOServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            SEO & SMO Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Improve Visibility Across
            <span className="block text-[#006cb5]">
              Search & Social
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Combine search optimization and social media optimization to
            build a stronger digital presence and connect with relevant
            audiences.
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

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-xl font-bold text-[#071827]">
                Search + Social Working Together
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                A combined SEO and SMO strategy helps create a more
                consistent digital presence across search engines and social
                platforms.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Visibility Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}