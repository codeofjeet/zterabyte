import {
  FiBarChart2,
  FiCheckCircle,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiThumbsUp,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiThumbsUp,
    title: "Stronger Brand Presence",
    description:
      "Build a professional and recognizable Facebook presence that keeps your brand visible to your target audience.",
  },
  {
    icon: FiUsers,
    title: "Reach the Right Audience",
    description:
      "Focus your content and campaigns on audience groups that are relevant to your business and marketing goals.",
  },
  {
    icon: FiHeart,
    title: "Higher Engagement",
    description:
      "Create content that encourages likes, reactions and meaningful interaction with your audience.",
  },
  {
    icon: FiMessageCircle,
    title: "Better Customer Connection",
    description:
      "Use Facebook as a communication channel to stay connected with customers and build stronger relationships.",
  },
  {
    icon: FiShare2,
    title: "Greater Content Reach",
    description:
      "Create shareable and useful content that can help extend your brand's visibility across the platform.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Growth",
    description:
      "Use performance insights to understand what works and continuously improve your Facebook marketing strategy.",
  },
];

const highlights = [
  {
    value: "REACH",
    label: "Audience Visibility",
  },
  {
    value: "ENGAGE",
    label: "Customer Interaction",
  },
  {
    value: "CONTENT",
    label: "Brand Communication",
  },
  {
    value: "GROWTH",
    label: "Long-Term Presence",
  },
];

export default function FacebookMarketingResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            Facebook Marketing Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Facebook Engagement
            <span className="block text-[#006cb5]">
              Into Brand Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A consistent Facebook marketing strategy can help your business
            strengthen its online presence, engage the right audience and
            create meaningful customer connections.
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
                Facebook Marketing
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Build conversations around your brand.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Consistent content, meaningful engagement and audience-focused
                campaigns can help turn your Facebook presence into a valuable
                marketing channel.
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