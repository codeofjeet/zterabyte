import {
  FiCheckCircle,
  FiCreditCard,
  FiLayout,
  FiPackage,
  FiSettings,
  FiSmartphone,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiLayout,
    title: "Professional Shopify Design",
    description:
      "Create a clean, modern storefront that represents your brand and gives customers a strong first impression.",
  },
  {
    icon: FiSettings,
    title: "Store Customization",
    description:
      "Customize your Shopify store layout, sections and features according to your products and business requirements.",
  },
  {
    icon: FiPackage,
    title: "Products & Collections",
    description:
      "Organize products, categories and collections so customers can easily browse and discover what you sell.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Integration",
    description:
      "Configure suitable payment solutions and create a smooth checkout experience for your customers.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Responsive",
    description:
      "Give customers a consistent shopping experience across smartphones, tablets and desktop devices.",
  },
  {
    icon: FiCheckCircle,
    title: "Easy Store Management",
    description:
      "Build an organized Shopify setup that makes it easier to manage products, orders and day-to-day store operations.",
  },
];

export default function ShopifyWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Shopify Development
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything You Need for a
            <span className="block text-[#006cb5]">
              Successful Shopify Store
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We create Shopify stores that combine professional design,
            useful features and a simple shopping experience for your
            customers.
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

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Shopify-ready solution
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}