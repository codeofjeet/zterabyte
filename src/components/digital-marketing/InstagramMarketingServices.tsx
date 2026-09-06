import {
  FiBarChart2,
  FiCamera,
  FiCheckCircle,
  FiEdit3,
  FiHeart,
  FiMessageCircle,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    icon: FiCamera,
    title: "Instagram Profile Optimization",
    description:
      "Create a professional Instagram presence with clear branding, optimized profile information and a strong visual identity.",
    points: [
      "Profile optimization",
      "Brand presentation",
      "Bio & profile strategy",
    ],
  },
  {
    icon: FiEdit3,
    title: "Instagram Content Creation",
    description:
      "Develop engaging content that communicates your brand message and gives your audience a reason to follow and interact.",
    points: [
      "Post content",
      "Creative ideas",
      "Content planning",
    ],
  },
  {
    icon: FiTarget,
    title: "Audience Targeting",
    description:
      "Identify relevant audience groups and create content strategies around their interests, needs and behavior.",
    points: [
      "Audience research",
      "Target audience",
      "Interest-based strategy",
    ],
  },
  {
    icon: FiHeart,
    title: "Instagram Engagement",
    description:
      "Encourage meaningful interaction through content and communication that helps your brand connect with its audience.",
    points: [
      "Audience interaction",
      "Engagement strategy",
      "Community building",
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Brand Communication",
    description:
      "Maintain a consistent brand voice across your Instagram presence and create stronger connections with your followers.",
    points: [
      "Brand messaging",
      "Customer communication",
      "Consistent voice",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Instagram Analytics",
    description:
      "Monitor important performance signals to understand audience behavior and continuously improve your Instagram strategy.",
    points: [
      "Performance analysis",
      "Audience insights",
      "Growth tracking",
    ],
  },
];

export default function InstagramMarketingServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiCamera />
            Instagram Marketing Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Create a Stronger
            <span className="block text-[#006cb5]">
              Instagram Brand
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From profile optimization and creative content to audience
            engagement and analytics, we help your business build a consistent
            Instagram presence.
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
                  Build a Community Around Your Brand
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Instagram works best when great content is combined with
                  consistent communication and genuine audience engagement.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Community Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}