import {
  FiCheckCircle,
  FiCloud,
  FiLock,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSmartphone,
    title: "Android & iOS Apps",
    description:
      "Build mobile applications that provide a consistent experience across modern smartphones and platforms.",
  },
  {
    icon: FiZap,
    title: "Smooth Performance",
    description:
      "Create responsive application experiences with clean interfaces and performance-focused development.",
  },
  {
    icon: FiTrendingUp,
    title: "Business-Focused Features",
    description:
      "Develop functionality around your business processes, customers and specific application requirements.",
  },
  {
    icon: FiCloud,
    title: "API & Backend Integration",
    description:
      "Connect mobile applications with APIs, databases and backend services to deliver dynamic functionality.",
  },
  {
    icon: FiLock,
    title: "Secure Application",
    description:
      "Follow practical security considerations for application data, authentication and API communication.",
  },
  {
    icon: FiCheckCircle,
    title: "Scalable Architecture",
    description:
      "Structure applications so new features and improvements can be added as your business grows.",
  },
];

export default function MobileAppWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiSmartphone />
            Mobile App Development
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Build an App Around
            <span className="block text-[#006cb5]">
              Your Business Goals
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We create mobile applications with a focus on usability,
            functionality, performance and the needs of your customers.
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
                  Business-ready solution
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}