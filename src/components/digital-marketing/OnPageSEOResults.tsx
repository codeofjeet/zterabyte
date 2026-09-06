import {
  FiCheckCircle,
  FiFileText,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Better Search Visibility",
    description:
      "Well-optimized pages make it easier for search engines to understand your content and its relevance to user searches.",
  },
  {
    icon: FiTarget,
    title: "Relevant Keyword Focus",
    description:
      "Align each important page with relevant keywords and search intent to create a more focused SEO strategy.",
  },
  {
    icon: FiUsers,
    title: "Better User Experience",
    description:
      "Clear headings, useful content and logical page structure make your website easier for visitors to understand and navigate.",
  },
  {
    icon: FiFileText,
    title: "Stronger Content",
    description:
      "Improve the quality and structure of your website content so important information is clear and easy to discover.",
  },
  {
    icon: FiZap,
    title: "SEO-Friendly Structure",
    description:
      "Create cleaner page-level technical elements that support accessibility, usability and search engine understanding.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term SEO Foundation",
    description:
      "Build a stronger on-page foundation that can support your website as your content and digital presence continue to grow.",
  },
];

const highlights = [
  {
    value: "TITLE",
    label: "Meta Optimization",
  },
  {
    value: "CONTENT",
    label: "Page Relevance",
  },
  {
    value: "LINKS",
    label: "Internal Structure",
  },
  {
    value: "UX",
    label: "User Experience",
  },
];

export default function OnPageSEOResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiTrendingUp />
            SEO Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build Better Pages for
            <span className="block text-[#006cb5]">
              Search & Your Visitors
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Effective on-page SEO improves more than keywords. It creates
            clearer content, stronger page structure and a better foundation
            for your website&apos;s search presence.
          </p>

        </div>

        {/* Benefit Cards */}
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

        {/* SEO Highlights */}
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

        {/* Bottom Message */}
        <div className="mt-10 rounded-2xl bg-[#071827] p-6 sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38a9f5]">
                On Page SEO
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Optimize the pages that represent your business.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                A strong SEO foundation starts with useful content, logical
                structure and carefully optimized page elements.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-[#70c8fa]">
              <FiCheckCircle />
              SEO Ready
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}