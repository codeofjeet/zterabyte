import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiMail,
  FiSend,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    icon: FiTarget,
    title: "Email Campaign Strategy",
    description:
      "Plan targeted email campaigns around your business goals, audience needs and customer journey.",
    points: [
      "Campaign planning",
      "Audience targeting",
      "Goal-focused strategy",
    ],
  },
  {
    icon: FiEdit3,
    title: "Email Content Creation",
    description:
      "Create clear and engaging email content designed to communicate your message and encourage customer action.",
    points: [
      "Email copywriting",
      "Compelling messaging",
      "Call-to-action content",
    ],
  },
  {
    icon: FiUsers,
    title: "Audience Segmentation",
    description:
      "Organize your audience into relevant groups so campaigns can deliver more personalized and useful messages.",
    points: [
      "Customer segments",
      "Targeted campaigns",
      "Personalized messaging",
    ],
  },
  {
    icon: FiSend,
    title: "Campaign Management",
    description:
      "Manage email campaigns from planning and scheduling through delivery and ongoing optimization.",
    points: [
      "Campaign scheduling",
      "Email distribution",
      "Campaign management",
    ],
  },
  {
    icon: FiMail,
    title: "Customer Engagement",
    description:
      "Use strategic email communication to maintain relationships and keep your audience connected with your brand.",
    points: [
      "Customer communication",
      "Brand engagement",
      "Relationship building",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Performance Tracking",
    description:
      "Monitor important campaign signals and use performance insights to continuously improve your email marketing.",
    points: [
      "Campaign analytics",
      "Engagement insights",
      "Performance improvement",
    ],
  },
];

export default function EmailMarketingServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiMail />
            Email Marketing Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Reach the Right People
            <span className="block text-[#006cb5]">
              With the Right Message
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build meaningful customer communication with strategic campaigns,
            engaging content, targeted audiences and measurable performance.
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
                <FiSend />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Turn Your Email List Into a Business Asset
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Consistent, relevant and well-planned email communication can
                  help your brand stay connected with its audience.
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