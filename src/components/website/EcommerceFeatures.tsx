import {
  FiShoppingCart,
  FiCreditCard,
  FiPackage,
  FiUsers,
  FiSearch,
  FiBarChart2,
  FiSmartphone,
  FiSettings,
} from "react-icons/fi";

const features = [
  {
    icon: FiShoppingCart,
    title: "Shopping Cart",
    description:
      "Give customers an easy way to add products, review their selections and continue smoothly toward checkout.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Integration",
    description:
      "Connect your store with suitable online payment solutions for a convenient checkout experience.",
  },
  {
    icon: FiPackage,
    title: "Order Management",
    description:
      "Manage customer orders, order status and fulfillment from an organized administration system.",
  },
  {
    icon: FiUsers,
    title: "Customer Management",
    description:
      "Keep customer information organized and provide customers with a convenient account experience.",
  },
  {
    icon: FiSearch,
    title: "Product Search & Filters",
    description:
      "Help customers quickly find the right products using search, categories and useful filtering options.",
  },
  {
    icon: FiBarChart2,
    title: "Sales & Reports",
    description:
      "Understand your store performance with useful sales, order and business reporting tools.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Shopping",
    description:
      "Provide a smooth shopping experience for customers browsing and purchasing from mobile devices.",
  },
  {
    icon: FiSettings,
    title: "Easy Store Management",
    description:
      "Manage products, categories, inventory and other important store settings from one convenient place.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Powerful Features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything Your Online
            <span className="block text-[#006cb5]">
              Store Needs
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build a complete online shopping platform with the tools
            customers expect and the management features your business needs.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}