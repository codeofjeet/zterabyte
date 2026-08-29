import {
  FiBarChart2,
  FiCheckCircle,
  FiFileText,
  FiGrid,
  FiSearch,
  FiShoppingBag,
  FiTag,
} from "react-icons/fi";

const services = [
  {
    icon: FiShoppingBag,
    title: "Product Page Optimization",
    description:
      "Optimize product pages with clear content, relevant keywords and structured information to improve search visibility.",
    points: [
      "Product titles",
      "Product descriptions",
      "Search-focused content",
    ],
  },
  {
    icon: FiSearch,
    title: "eCommerce Keyword Strategy",
    description:
      "Identify relevant commercial and product-focused search terms that can connect your store with potential customers.",
    points: [
      "Product keywords",
      "Commercial intent",
      "Search opportunities",
    ],
  },
  {
    icon: FiTag,
    title: "Category Optimization",
    description:
      "Improve category pages so search engines and shoppers can clearly understand the products and topics covered by your store.",
    points: [
      "Category content",
      "Keyword targeting",
      "Better page structure",
    ],
  },
  {
    icon: FiFileText,
    title: "Product Content",
    description:
      "Create useful and informative product content that answers customer questions and supports stronger organic visibility.",
    points: [
      "Unique content",
      "Customer-focused information",
      "Content quality",
    ],
  },
  {
    icon: FiGrid,
    title: "Store Structure",
    description:
      "Develop a logical website structure that makes it easier for shoppers and search engines to discover important products and categories.",
    points: [
      "Navigation structure",
      "Internal linking",
      "Product discovery",
    ],
  },
  {
    icon: FiBarChart2,
    title: "eCommerce SEO Tracking",
    description:
      "Monitor important SEO and organic search signals to identify opportunities and continuously improve your online store.",
    points: [
      "Organic visibility",
      "Keyword performance",
      "SEO insights",
    ],
  },
];

export default function EcommerceSEOServices() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiShoppingBag />
            eCommerce SEO Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Optimize Your Store
            <span className="block text-[#006cb5]">
              For Search & Shoppers
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We optimize the key areas of your online store to improve product
            discoverability, search visibility and the overall shopping
            experience.
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
                <FiSearch />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071827]">
                  Make Every Product Easier to Discover
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  From product pages and categories to internal links and
                  content, every part of your store can contribute to better
                  organic visibility.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#006cb5]">
              <FiCheckCircle />
              Store Focused
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}