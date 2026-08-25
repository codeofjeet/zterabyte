import {
  FiCheckCircle,
  FiCreditCard,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";

const commerceFeatures = [
  {
    icon: FiShoppingBag,
    title: "Product Management",
    description:
      "Organize products, variants, pricing and collections in a structured Shopify store.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Integration",
    description:
      "Connect suitable payment methods and provide customers with a convenient checkout experience.",
  },
  {
    icon: FiPackage,
    title: "Order Management",
    description:
      "Keep customer orders organized from placement through processing and fulfillment.",
  },
  {
    icon: FiTruck,
    title: "Shipping & Delivery",
    description:
      "Set up shipping options and create a smoother process for getting products to customers.",
  },
  {
    icon: FiUser,
    title: "Customer Management",
    description:
      "Keep customer information and order history organized for better store management.",
  },
  {
    icon: FiCheckCircle,
    title: "Secure Checkout",
    description:
      "Create a clear and trustworthy checkout experience that helps customers complete purchases.",
  },
];

const orderStages = [
  "Customer places order",
  "Payment is confirmed",
  "Order is processed",
  "Product is shipped",
];

export default function ShopifyCommerce() {
  return (
    <section className="overflow-hidden bg-[#071827] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-bold text-[#70c8fa]">
            <FiShoppingBag />
            Shopify Commerce
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Turn Your Shopify Store Into
            <span className="block text-[#38a9f5]">
              A Complete Sales Platform
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Manage products, payments, customers and orders through a
            connected Shopify shopping experience.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Dashboard Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-7">

            <div className="overflow-hidden rounded-2xl bg-white">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Shopify Admin
                  </p>

                  <h3 className="mt-1 text-sm font-bold text-[#071827]">
                    Orders & Sales
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                  <FiShoppingBag />
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">

                <div className="rounded-xl bg-[#eaf6ff] p-3">
                  <p className="text-[10px] text-slate-400">
                    Orders
                  </p>

                  <p className="mt-1 text-lg font-black text-[#071827]">
                    124
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">
                    Products
                  </p>

                  <p className="mt-1 text-lg font-black text-[#071827]">
                    86
                  </p>
                </div>

                <div className="col-span-2 rounded-xl bg-slate-50 p-3 sm:col-span-1">
                  <p className="text-[10px] text-slate-400">
                    Sales
                  </p>

                  <p className="mt-1 text-lg font-black text-[#006cb5]">
                    ₹3.8L
                  </p>
                </div>

              </div>

              {/* Recent Order */}
              <div className="px-4 pb-4">

                <div className="rounded-xl border border-slate-100 p-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] text-slate-400">
                        Recent Order
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#071827]">
                        #ZT-1048
                      </p>
                    </div>

                    <span className="rounded-full bg-[#eaf6ff] px-3 py-1 text-[10px] font-bold text-[#006cb5]">
                      Processing
                    </span>

                  </div>

                  <div className="mt-4 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6fafd] text-[#006cb5]">
                      <FiPackage />
                    </div>

                    <div className="flex-1">
                      <div className="h-2.5 w-3/4 rounded bg-slate-200" />
                      <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                    </div>

                    <span className="text-xs font-bold text-[#071827]">
                      ₹2,499
                    </span>

                  </div>

                </div>

              </div>

              {/* Customer */}
              <div className="px-4 pb-5">

                <div className="flex items-center gap-3 rounded-xl bg-[#f6fafd] p-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#006cb5]">
                    <FiUser />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Customer
                    </p>

                    <p className="text-xs font-bold text-[#071827]">
                      Customer Account
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-flex rounded-full bg-[#006cb5]/15 px-4 py-2 text-sm font-bold text-[#70c8fa]">
              Complete Store Management
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Manage Your Store From
              <span className="block text-[#38a9f5]">
                Products to Delivery
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-400">
              A well-structured Shopify store connects the important parts
              of your online business and makes daily store management easier.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {commerceFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Order Flow */}
        <div className="mt-16">

          <div className="mb-8 text-center">

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Simple Order Journey
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Connect the complete customer journey.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {orderStages.map((stage, index) => (
              <div
                key={stage}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006cb5]/20 text-sm font-black text-[#38a9f5]">
                  0{index + 1}
                </div>

                <p className="mt-4 text-sm font-semibold leading-6 text-slate-300">
                  {stage}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}