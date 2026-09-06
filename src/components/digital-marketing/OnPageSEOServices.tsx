import {
  FiBarChart2,
  FiCheckCircle,
  FiCode,
  FiFileText,
  FiGlobe,
  FiHash,
  FiImage,
  FiSearch,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "Keyword Optimization",
    description:
      "Identify and strategically use relevant keywords throughout your pages while keeping the content natural and useful.",
    points: [
      "Primary keywords",
      "Search intent",
      "Keyword placement",
    ],
  },
  {
    icon: FiFileText,
    title: "Content Optimization",
    description:
      "Improve page content so it provides clear value to visitors while making the topic easier for search engines to understand.",
    points: [
      "Useful content",
      "Content structure",
      "Readability",
    ],
  },
  {
    icon: FiHash,
    title: "Title & Meta Optimization",
    description:
      "Create meaningful page titles and meta descriptions that clearly communicate the purpose of each page.",
    points: [
      "SEO titles",
      "Meta descriptions",
      "Search snippets",
    ],
  },
  {
    icon: FiCode,
    title: "Technical Page Structure",
    description:
      "Improve important page-level technical elements and structure to create a cleaner search-friendly website.",
    points: [
      "Heading structure",
      "HTML elements",
      "Internal structure",
    ],
  },
  {
    icon: FiImage,
    title: "Image Optimization",
    description:
      "Optimize website images and supporting information to improve usability, accessibility and page performance.",
    points: [
      "Image descriptions",
      "File optimization",
      "Accessibility",
    ],
  },
  {
    icon: FiGlobe,
    title: "Internal Linking",
    description:
      "Create meaningful connections between related pages to help users navigate your website and discover useful content.",
    points: [
      "Relevant links",
      "Page relationships",
      "Navigation flow",
    ],
  },
];

export default function OnPageSEOServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            On Page SEO Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Every Page Has a Role
            <span className="block text-[#006cb5]">
              In Your Search Strategy
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We optimize the important elements of your website pages to make
            your content clearer, more useful and easier for search engines
            to understand.
          </p>

        </div>

        {/* Services */}
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
                <FiSearch />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Search Engine Friendly Pages
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  From content and keywords to technical page elements, every
                  important detail contributes to a stronger on-page SEO
                  foundation.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Page Optimized
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}