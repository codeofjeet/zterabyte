import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiMail,
  FiSearch,
  FiShare2,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility with structured SEO strategies focused on relevant keywords and useful content.",
    points: ["Keyword strategy", "On-page optimization", "Technical SEO"],
  },
  {
    icon: FiShare2,
    title: "Social Media Marketing",
    description:
      "Build your social presence with engaging content and strategies designed to connect your brand with relevant audiences.",
    points: ["Social strategy", "Content planning", "Audience engagement"],
  },
  {
    icon: FiTrendingUp,
    title: "SEO & SMO",
    description:
      "Combine search visibility and social media optimization to create a stronger and more consistent digital presence.",
    points: ["Search visibility", "Social optimization", "Brand awareness"],
  },
  {
    icon: FiEdit3,
    title: "Content Marketing",
    description:
      "Create useful and relevant content that supports your brand, attracts visitors and communicates your expertise.",
    points: ["Content planning", "Business content", "Audience education"],
  },
  {
    icon: FiMail,
    title: "Email Marketing",
    description:
      "Connect with customers through targeted email communication, promotions, updates and business campaigns.",
    points: ["Campaign planning", "Customer communication", "Email content"],
  },
  {
    icon: FiTarget,
    title: "Paid Advertising",
    description:
      "Reach targeted audiences through paid digital campaigns designed around your business objectives and marketing goals.",
    points: ["Campaign targeting", "Ad creatives", "Performance tracking"],
  },
];

export default function DigitalMarketingServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Digital Marketing Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-[#006cb5]">
              Grow Online
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose the right combination of digital marketing services to
            improve visibility, connect with customers and support business
            growth.
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
                One strategy, multiple digital channels
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Combine SEO, social media, content, email and paid campaigns
                according to your business goals and target audience.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Growth Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}