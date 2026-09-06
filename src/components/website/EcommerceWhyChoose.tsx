import {
  FiCheckCircle,
  FiLayout,
  FiShoppingCart,
  FiSmartphone,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiLayout,
    title: "Professional Store Design",
    description:
      "Create a modern and attractive online store that builds trust and gives customers a smooth shopping experience.",
  },
  {
    icon: FiShoppingCart,
    title: "Easy Shopping Experience",
    description:
      "Simple navigation, product discovery and checkout experiences designed to help customers complete purchases easily.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Responsive",
    description:
      "Your online store works smoothly across mobile phones, tablets, laptops and desktop devices.",
  },
  {
    icon: FiShield,
    title: "Secure Shopping",
    description:
      "Build a reliable shopping environment with secure customer, order and payment handling.",
  },
  {
    icon: FiTrendingUp,
    title: "Business Growth",
    description:
      "Create an e-commerce platform that can grow with your products, customers and business requirements.",
  },
  {
    icon: FiCheckCircle,
    title: "Easy Management",
    description:
      "Manage products, categories, orders and customers through an organized administration system.",
  },
];

export default function EcommerceWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            E-Commerce Solutions
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-[#006cb5]">
              Sell Online Successfully
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We build e-commerce websites that combine professional design,
            simple shopping experiences and powerful business functionality.
          </p>

        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Small indicator */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Built for your business
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}