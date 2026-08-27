import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiGlobe,
    title: "Build Online Visibility",
    description:
      "Improve your online presence so potential customers can discover your business across search engines and digital channels.",
  },
  {
    icon: FiTarget,
    title: "Reach the Right Audience",
    description:
      "Connect your products and services with relevant audiences using targeted digital marketing strategies.",
  },
  {
    icon: FiSearch,
    title: "Improve Search Presence",
    description:
      "Use SEO-focused strategies to help your website become more visible for relevant searches.",
  },
  {
    icon: FiTrendingUp,
    title: "Support Business Growth",
    description:
      "Create digital campaigns that support awareness, customer engagement and long-term business growth.",
  },
  {
    icon: FiBarChart2,
    title: "Measure Performance",
    description:
      "Track important campaign metrics and use performance insights to improve your marketing strategy.",
  },
  {
    icon: FiCheckCircle,
    title: "Build Brand Awareness",
    description:
      "Maintain a consistent digital presence that helps customers recognize and remember your business.",
  },
];

export default function DigitalMarketingWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiTrendingUp />
            Digital Growth
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Your Online Presence
            <span className="block text-[#006cb5]">
              Into Business Opportunities
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A strong digital marketing strategy helps your business become
            more visible, reach relevant customers and build a stronger
            online presence.
          </p>

        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Growth-focused strategy
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}