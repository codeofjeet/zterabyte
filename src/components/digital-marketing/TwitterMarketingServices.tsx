import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiMessageCircle,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    icon: FiMessageCircle,
    title: "Twitter Profile Optimization",
    description:
      "Create a professional Twitter presence with clear branding, optimized profile information and a focused communication strategy.",
    points: [
      "Profile optimization",
      "Brand presentation",
      "Profile strategy",
    ],
  },
  {
    icon: FiEdit3,
    title: "Twitter Content Creation",
    description:
      "Create relevant and engaging posts that communicate your brand message and encourage audience interaction.",
    points: [
      "Post content",
      "Content ideas",
      "Publishing strategy",
    ],
  },
  {
    icon: FiTarget,
    title: "Audience Targeting",
    description:
      "Identify relevant audiences and focus your Twitter content around their interests, needs and conversations.",
    points: [
      "Audience research",
      "Target audience",
      "Interest-based strategy",
    ],
  },
  {
    icon: FiSend,
    title: "Twitter Campaigns",
    description:
      "Plan and manage promotional activities around specific business objectives and audience segments.",
    points: [
      "Campaign planning",
      "Promotion strategy",
      "Goal-focused campaigns",
    ],
  },
  {
    icon: FiUsers,
    title: "Community Engagement",
    description:
      "Build stronger relationships by participating in relevant conversations and maintaining consistent communication.",
    points: [
      "Audience interaction",
      "Community building",
      "Customer communication",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Twitter Analytics",
    description:
      "Track important performance signals to understand audience response and improve your Twitter marketing strategy.",
    points: [
      "Performance analysis",
      "Audience insights",
      "Growth tracking",
    ],
  },
];

export default function TwitterMarketingServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiMessageCircle />
            Twitter Marketing Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build Conversations Around
            <span className="block text-[#006cb5]">
              Your Brand
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From profile optimization and content creation to audience
            engagement and analytics, we help your business build a consistent
            Twitter presence.
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

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

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
                <FiTrendingUp />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Turn Conversations Into Connections
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Consistent content and active audience communication can help
                  your brand become part of the conversations that matter to
                  your customers.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Conversation Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}