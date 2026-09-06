import {
  FiBarChart2,
  FiCheckCircle,
  FiEye,
  FiGrid,
  FiSearch,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Better Product Visibility",
    description:
      "Improve the chances of your products being discovered when customers search for relevant products online.",
  },
  {
    icon: FiShoppingBag,
    title: "More Relevant Shoppers",
    description:
      "Target product and commercial search terms that connect your store with people who are actively looking to buy.",
  },
  {
    icon: FiTarget,
    title: "Stronger Keyword Targeting",
    description:
      "Build a focused keyword strategy around products, categories and customer search intent.",
  },
  {
    icon: FiGrid,
    title: "Better Store Structure",
    description:
      "Create a logical relationship between products, categories and content so shoppers and search engines can navigate your store more easily.",
  },
  {
    icon: FiEye,
    title: "Improved Organic Reach",
    description:
      "Expand your store's presence across relevant organic searches and create more opportunities for potential customers to discover your products.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Store Growth",
    description:
      "Build a stronger SEO foundation that can continue supporting your online store as products and content grow.",
  },
];

const highlights = [
  {
    value: "PRODUCTS",
    label: "Product Visibility",
  },
  {
    value: "KEYWORDS",
    label: "Search Targeting",
  },
  {
    value: "STORE",
    label: "SEO Structure",
  },
  {
    value: "GROWTH",
    label: "Organic Reach",
  },
];

export default function EcommerceSEOResults() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiBarChart2 />
            eCommerce SEO Benefits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn Product Searches Into
            <span className="block text-[#006cb5]">
              More Opportunities
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A well-optimized online store can make your products easier to
            discover, help attract relevant shoppers and create a stronger
            foundation for organic growth.
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
                eCommerce SEO
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Make your products easier to discover.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                From product pages and categories to keywords and store
                structure, every element can contribute to better organic
                visibility.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-[#70c8fa]">
              <FiCheckCircle />
              Store Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}