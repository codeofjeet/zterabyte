import {
  FiBarChart2,
  FiCheckCircle,
  FiEdit3,
  FiHeart,
  FiMail,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiUsers,
    title: "Better Audience Engagement",
    description:
      "Stay connected with your audience through useful, relevant and well-timed email communication.",
  },
  {
    icon: FiTarget,
    title: "Targeted Communication",
    description:
      "Reach specific audience segments with messages that are more relevant to their interests and needs.",
  },
  {
    icon: FiHeart,
    title: "Stronger Customer Relationships",
    description:
      "Build ongoing relationships by keeping your brand consistently connected with existing and potential customers.",
  },
  {
    icon: FiEdit3,
    title: "Consistent Brand Messaging",
    description:
      "Maintain a professional and recognizable brand voice across your email campaigns and customer communication.",
  },
  {
    icon: FiMail,
    title: "Direct Customer Reach",
    description:
      "Communicate directly with your audience through a channel that supports regular customer interaction.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Marketing Growth",
    description:
      "Build an email marketing foundation that can support customer engagement and business growth over time.",
  },
];

const highlights = [
  {
    value: "AUDIENCE",
    label: "Targeted Reach",
  },
  {
    value: "CONTENT",
    label: "Relevant Messaging",
  },
  {
    value: "ENGAGEMENT",
    label: "Customer Interaction",
  },
  {
    value: "GROWTH",
    label: "Long-Term Value",
  },
];

export default function EmailMarketingResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Email Marketing Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build Relationships That
            <span className="block text-[#006cb5]">
              Create Business Value
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A strategic email marketing approach helps you stay connected with
            your audience, deliver relevant messages and create opportunities
            for long-term customer engagement.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <FiCheckCircle className="text-lg text-[#b9ddf4]" />

                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (
            <div
              key={item.value}
              className="rounded-2xl border border-[#dbeeff] bg-white px-5 py-6 text-center shadow-sm"
            >

              <p className="text-xl font-black text-[#006cb5] sm:text-2xl">
                {item.value}
              </p>

              <p className="mt-2 text-xs font-semibold text-slate-500">
                {item.label}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl bg-[#071827] p-6 sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38a9f5]">
                Email Marketing
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Keep your brand connected with your audience.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Consistent communication, relevant content and targeted
                campaigns can help turn your email audience into a valuable
                long-term business relationship.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-[#70c8fa]">
              <FiCheckCircle />
              Audience Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}