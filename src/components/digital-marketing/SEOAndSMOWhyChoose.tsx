import {
  FiBarChart2,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiShare2,
  FiTarget,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Improve Search Visibility",
    description:
      "Optimize your website so search engines can better understand your content and connect it with relevant searches.",
  },
  {
    icon: FiShare2,
    title: "Strengthen Social Presence",
    description:
      "Improve your social media presence with optimized profiles, engaging content and consistent brand communication.",
  },
  {
    icon: FiTarget,
    title: "Reach Relevant Audiences",
    description:
      "Focus your SEO and social strategies on audiences that are relevant to your products, services and business goals.",
  },
  {
    icon: FiGlobe,
    title: "Build Online Authority",
    description:
      "Develop a stronger digital presence by consistently publishing useful content and maintaining your online channels.",
  },
  {
    icon: FiBarChart2,
    title: "Track Performance",
    description:
      "Monitor important visibility and engagement indicators to understand what is working and where improvements are needed.",
  },
  {
    icon: FiCheckCircle,
    title: "Consistent Brand Presence",
    description:
      "Keep your messaging, visual identity and business information consistent across search and social platforms.",
  },
];

export default function SEOAndSMOWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiGlobe />
            SEO & Social Growth
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Be Found.
            <span className="block text-[#006cb5]">
              Be Recognized.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            SEO and SMO work together to help your business improve search
            visibility, strengthen social presence and reach relevant
            audiences online.
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
                  Visibility focused
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}