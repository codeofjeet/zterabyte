import {
  FiBarChart2,
  FiCamera,
  FiCheckCircle,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiCamera,
    title: "Stronger Visual Brand",
    description:
      "Create a consistent Instagram presence that communicates your brand identity through engaging visual content.",
  },
  {
    icon: FiUsers,
    title: "Reach Relevant Audiences",
    description:
      "Focus your content strategy on people who are relevant to your business, products and services.",
  },
  {
    icon: FiHeart,
    title: "Higher Audience Engagement",
    description:
      "Encourage likes, reactions and meaningful interactions through content designed around your audience.",
  },
  {
    icon: FiMessageCircle,
    title: "Stronger Customer Connections",
    description:
      "Use Instagram as a communication channel to build relationships and maintain regular interaction with your followers.",
  },
  {
    icon: FiShare2,
    title: "Greater Content Reach",
    description:
      "Create useful and engaging content that gives your audience opportunities to share your brand with others.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Brand Growth",
    description:
      "Use performance insights to understand what works and improve your Instagram marketing strategy over time.",
  },
];

const highlights = [
  {
    value: "VISIBILITY",
    label: "Brand Awareness",
  },
  {
    value: "ENGAGEMENT",
    label: "Audience Interaction",
  },
  {
    value: "CONTENT",
    label: "Visual Communication",
  },
  {
    value: "GROWTH",
    label: "Long-Term Presence",
  },
];

export default function InstagramMarketingResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Instagram Marketing Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Instagram Attention
            <span className="block text-[#006cb5]">
              Into Brand Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A strategic Instagram presence can help your business increase
            visibility, connect with relevant audiences and build stronger
            relationships through consistent content.
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
                Instagram Marketing
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Create content people want to engage with.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                A strong visual identity, consistent content and meaningful
                audience interaction can turn your Instagram profile into a
                valuable marketing channel.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-[#70c8fa]">
              <FiCheckCircle />
              Community Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}