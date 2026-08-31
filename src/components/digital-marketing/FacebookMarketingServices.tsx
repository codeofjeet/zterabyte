import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiMessageCircle,
  FiShare2,
  FiTarget,
  FiThumbsUp,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    icon: FiThumbsUp,
    title: "Facebook Page Management",
    description:
      "Build and maintain a professional Facebook presence with consistent branding, content and audience communication.",
    points: [
      "Page optimization",
      "Profile branding",
      "Regular management",
    ],
  },
  {
    icon: FiEdit3,
    title: "Facebook Content Creation",
    description:
      "Create engaging posts and visual content designed to communicate your brand and encourage audience interaction.",
    points: [
      "Post content",
      "Creative messaging",
      "Content planning",
    ],
  },
  {
    icon: FiTarget,
    title: "Audience Targeting",
    description:
      "Identify and target relevant audience groups based on your business, customers and marketing objectives.",
    points: [
      "Audience research",
      "Customer targeting",
      "Campaign audiences",
    ],
  },
  {
    icon: FiShare2,
    title: "Facebook Campaigns",
    description:
      "Plan and manage promotional campaigns designed around specific business and marketing objectives.",
    points: [
      "Campaign planning",
      "Promotion strategy",
      "Goal-focused campaigns",
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Community Engagement",
    description:
      "Encourage meaningful interactions and maintain communication with your audience through your Facebook presence.",
    points: [
      "Audience interaction",
      "Customer communication",
      "Community building",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Performance Analytics",
    description:
      "Review important Facebook performance signals to understand audience engagement and improve future campaigns.",
    points: [
      "Engagement analysis",
      "Audience insights",
      "Performance tracking",
    ],
  },
];

export default function FacebookMarketingServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiThumbsUp />
            Facebook Marketing Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build a Stronger
            <span className="block text-[#006cb5]">
              Facebook Presence
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From page management and content creation to audience targeting and
            performance analysis, we help your brand build meaningful
            connections on Facebook.
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
                <FiUsers />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Connect With the People Behind the Numbers
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  A successful Facebook presence is about more than reach.
                  Consistent content and genuine audience interaction help
                  create stronger brand relationships.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Audience Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}