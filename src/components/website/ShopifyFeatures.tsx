import {
  FiBarChart2,
  FiCheckCircle,
  FiCreditCard,
  FiEdit3,
  FiFilter,
  FiPackage,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const features = [
  {
    icon: FiPackage,
    title: "Product & Collection Management",
    description:
      "Organize products, variants and collections so customers can browse your store easily.",
  },
  {
    icon: FiEdit3,
    title: "Theme Customization",
    description:
      "Customize your Shopify storefront to match your brand identity, content and business goals.",
  },
  {
    icon: FiShoppingCart,
    title: "Cart & Checkout",
    description:
      "Create a smooth shopping journey from adding products to the cart through checkout.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Integration",
    description:
      "Connect suitable payment methods to provide customers with a convenient checkout experience.",
  },
  {
    icon: FiSearch,
    title: "Product Search",
    description:
      "Help customers quickly discover products using a clear and useful search experience.",
  },
  {
    icon: FiFilter,
    title: "Filters & Categories",
    description:
      "Make large product catalogs easier to explore with categories and filtering options.",
  },
  {
    icon: FiBarChart2,
    title: "Store Analytics",
    description:
      "Use useful store insights to understand products, orders and overall business performance.",
  },
  {
    icon: FiCheckCircle,
    title: "Order Management",
    description:
      "Keep orders organized and make day-to-day store management easier for your business.",
  },
];

export default function ShopifyFeatures() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Shopify Store Features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Powerful Features for Your
            <span className="block text-[#006cb5]">
              Shopify Store
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build a flexible Shopify storefront with the features your
            customers need and the tools your business needs to manage
            online sales.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT VISUAL */}
          <div className="relative">

            <div className="rounded-3xl bg-[#071827] p-5 shadow-xl sm:p-7">

              {/* Dashboard */}
              <div className="overflow-hidden rounded-2xl bg-white">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Shopify Admin
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-[#071827]">
                      Store Overview
                    </h3>
                  </div>

                  <div className="h-9 w-9 rounded-lg bg-[#eaf6ff]" />

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">

                  <div className="rounded-xl bg-[#eaf6ff] p-3">
                    <p className="text-[10px] text-slate-400">
                      Products
                    </p>

                    <p className="mt-1 text-lg font-black text-[#071827]">
                      128
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">
                      Orders
                    </p>

                    <p className="mt-1 text-lg font-black text-[#071827]">
                      86
                    </p>
                  </div>

                  <div className="col-span-2 rounded-xl bg-slate-50 p-3 sm:col-span-1">
                    <p className="text-[10px] text-slate-400">
                      Revenue
                    </p>

                    <p className="mt-1 text-lg font-black text-[#006cb5]">
                      ₹2.4L
                    </p>
                  </div>

                </div>

                {/* Chart */}
                <div className="px-4 pb-4">

                  <div className="rounded-xl border border-slate-100 p-4">

                    <div className="flex items-center justify-between">

                      <p className="text-xs font-bold text-[#071827]">
                        Store Performance
                      </p>

                      <FiBarChart2 className="text-[#006cb5]" />

                    </div>

                    <div className="mt-5 flex h-28 items-end gap-2">

                      <div className="h-[35%] flex-1 rounded-t bg-[#dbeeff]" />
                      <div className="h-[50%] flex-1 rounded-t bg-[#c5e6fa]" />
                      <div className="h-[42%] flex-1 rounded-t bg-[#a9daf7]" />
                      <div className="h-[68%] flex-1 rounded-t bg-[#70c8fa]" />
                      <div className="h-[58%] flex-1 rounded-t bg-[#38a9f5]" />
                      <div className="h-[82%] flex-1 rounded-t bg-[#006cb5]" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-2 rounded-xl bg-[#006cb5] px-4 py-3 shadow-xl sm:right-5">

              <p className="text-[10px] text-blue-100">
                Store Management
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                Simple & Organized
              </p>

            </div>

          </div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}