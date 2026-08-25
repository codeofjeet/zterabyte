import {
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const conversionFeatures = [
  {
    icon: FiSmartphone,
    title: "Mobile-First Shopping",
    description:
      "Make browsing and purchasing comfortable for customers using smartphones and tablets.",
  },
  {
    icon: FiZap,
    title: "Fast Store Experience",
    description:
      "Keep the storefront clean and efficient so customers can move through the shopping journey easily.",
  },
  {
    icon: FiSearch,
    title: "Easy Product Discovery",
    description:
      "Use clear navigation, search and product organization to help visitors find products quickly.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversion-Focused Layout",
    description:
      "Place important product information and actions where customers can easily notice them.",
  },
  {
    icon: FiStar,
    title: "Trust-Building Elements",
    description:
      "Use reviews, clear information and professional presentation to help build customer confidence.",
  },
  {
    icon: FiShoppingBag,
    title: "Simple Shopping Journey",
    description:
      "Reduce unnecessary complexity from product discovery through cart and checkout.",
  },
];

const journey = [
  "Discover products",
  "Explore product details",
  "Add to cart",
  "Complete purchase",
];

export default function ShopifyConversion() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiTrendingUp />
            Mobile & Conversion Optimization
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Turn More Visitors Into
            <span className="block text-[#006cb5]">
              Happy Customers
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Create a Shopify shopping experience that is easy to use,
            mobile-friendly and designed around your customers.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Mobile Preview */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

              <div className="relative w-[260px] rounded-[2.5rem] border-[8px] border-[#071827] bg-[#071827] p-2 shadow-2xl sm:w-[280px]">

                <div className="overflow-hidden rounded-[2rem] bg-white">

                  {/* Store Header */}
                  <div className="flex items-center justify-between bg-[#006cb5] px-4 py-4">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white">
                        <FiShoppingBag />
                      </div>

                      <span className="text-sm font-bold text-white">
                        Your Store
                      </span>

                    </div>

                    <FiSearch className="text-white" />

                  </div>

                  {/* Product */}
                  <div className="p-4">

                    <div className="relative flex aspect-square items-center justify-center rounded-2xl bg-[#eaf6ff]">

                      <div className="h-24 w-24 rounded-3xl bg-[#006cb5]/15" />

                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                        <FiHeart className="text-sm" />
                      </div>

                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-1 text-xs text-[#006cb5]">

                      <FiStar />

                      <FiStar />

                      <FiStar />

                      <FiStar />

                      <FiStar />

                      <span className="ml-1 text-slate-400">
                        4.9
                      </span>

                    </div>

                    <h3 className="mt-2 text-sm font-bold text-[#071827]">
                      Featured Product
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Professional product presentation
                    </p>

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-lg font-black text-[#006cb5]">
                        ₹1,999
                      </span>

                      <button
                        type="button"
                        aria-label="Add product to cart"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5] text-white"
                      >
                        <FiShoppingBag className="text-sm" />
                      </button>

                    </div>

                  </div>

                  {/* Trust */}
                  <div className="border-t border-slate-100 px-4 py-4">

                    <div className="flex items-center gap-2">

                      <FiCheckCircle className="text-[#006cb5]" />

                      <span className="text-[10px] font-semibold text-slate-500">
                        Secure shopping experience
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Features */}
          <div>

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Customer-Focused Store
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              Make Every Step of the
              <span className="block text-[#006cb5]">
                Shopping Journey Simple
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A well-designed Shopify store helps customers move naturally
              from discovering a product to completing their purchase.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {conversionFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-[#071827]">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Customer Journey */}
        <div className="mt-14 rounded-3xl bg-[#f6fafd] p-6 sm:p-8">

          <div className="text-center">

            <h3 className="text-2xl font-bold text-[#071827] sm:text-3xl">
              Simple Customer Journey
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Make it easy for customers to move from discovery to purchase.
            </p>

          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {journey.map((item, index) => (
              <div
                key={item}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf6ff] text-sm font-black text-[#006cb5]">
                  0{index + 1}
                </div>

                <h4 className="mt-4 text-sm font-bold text-[#071827]">
                  {item}
                </h4>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Customer-focused
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#dbeeff] bg-[#eaf6ff] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

          <div>

            <h3 className="text-xl font-bold text-[#071827]">
              Ready to improve your Shopify store?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Let's create a shopping experience designed around your
              customers and business goals.
            </p>

          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#004f86]"
          >
            Discuss Your Store
            <FiArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}