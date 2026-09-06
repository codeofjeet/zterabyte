import {
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSmartphone,
    title: "Mobile-First Experience",
    description:
      "Give customers a smooth shopping experience on smartphones and tablets.",
  },
  {
    icon: FiZap,
    title: "Fast Product Browsing",
    description:
      "Keep product discovery simple and efficient so customers can find what they need quickly.",
  },
  {
    icon: FiSearch,
    title: "Easy Product Discovery",
    description:
      "Use search, categories and filters to help customers discover products with less effort.",
  },
  {
    icon: FiShoppingBag,
    title: "Simple Checkout",
    description:
      "Create a clean checkout journey that reduces unnecessary steps for customers.",
  },
  {
    icon: FiHeart,
    title: "Better Customer Experience",
    description:
      "Build an online store that is easy to understand, navigate and use.",
  },
  {
    icon: FiTrendingUp,
    title: "Business Growth",
    description:
      "Create a scalable shopping platform that can support your business as it grows.",
  },
];

const highlights = [
  {
    icon: FiClock,
    title: "Always Available",
    description:
      "Your online store can allow customers to browse products whenever they want.",
  },
  {
    icon: FiZap,
    title: "Smooth Experience",
    description:
      "A clean and responsive interface makes shopping more convenient.",
  },
  {
    icon: FiTrendingUp,
    title: "Ready to Grow",
    description:
      "Your store can expand with new products, customers and business needs.",
  },
];

export default function EcommerceMobileBenefits() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiSmartphone />
            Mobile Shopping
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Built for Customers
            <span className="block text-[#006cb5]">
              On Every Device
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Your customers should be able to discover products, make
            decisions and complete purchases comfortably from any device.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Mobile Preview */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

              {/* Phone */}
              <div className="relative w-[260px] rounded-[2.5rem] border-[8px] border-[#071827] bg-[#071827] p-2 shadow-2xl sm:w-[280px]">

                <div className="overflow-hidden rounded-[2rem] bg-white">

                  {/* Phone Header */}
                  <div className="flex items-center justify-between bg-[#006cb5] px-4 py-4">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white">
                        <FiShoppingBag />
                      </div>

                      <span className="text-sm font-bold text-white">
                        Store
                      </span>

                    </div>

                    <FiSearch className="text-white" />

                  </div>

                  {/* Search */}
                  <div className="px-4 pt-4">

                    <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">

                      <FiSearch className="text-xs text-slate-400" />

                      <span className="text-[10px] text-slate-400">
                        Search products
                      </span>

                    </div>

                  </div>

                  {/* Product */}
                  <div className="p-4">

                    <div className="flex aspect-square items-center justify-center rounded-2xl bg-[#eaf6ff]">

                      <div className="h-24 w-24 rounded-3xl bg-[#006cb5]/15" />

                    </div>

                    <div className="mt-4 flex items-center gap-1 text-xs text-[#006cb5]">
                      <FiHeart />
                      <span>Popular Product</span>
                    </div>

                    <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />

                    <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-sm font-bold text-[#071827]">
                        ₹1,499
                      </span>

                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5] text-white"
                        aria-label="Add product to cart"
                      >
                        <FiShoppingBag className="text-sm" />
                      </button>

                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="grid grid-cols-3 border-t border-slate-100 py-3 text-center">

                    <div className="text-[#006cb5]">
                      <FiShoppingBag className="mx-auto" />
                      <span className="mt-1 block text-[9px]">
                        Store
                      </span>
                    </div>

                    <div className="text-slate-400">
                      <FiHeart className="mx-auto" />
                      <span className="mt-1 block text-[9px]">
                        Wishlist
                      </span>
                    </div>

                    <div className="text-slate-400">
                      <FiSearch className="mx-auto" />
                      <span className="mt-1 block text-[9px]">
                        Search
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Benefits */}
          <div>

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Customer Experience
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              Make Shopping
              <span className="block text-[#006cb5]">
                Simple & Convenient
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A successful e-commerce website needs more than attractive
              products. It needs an experience that makes customers
              comfortable throughout their shopping journey.
            </p>

            {/* Benefit Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-[#071827]">
                      {benefit.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {benefit.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#dbeeff] bg-[#f6fafd] p-5"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                  <Icon />
                </div>

                <div>

                  <h4 className="font-bold text-[#071827]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}