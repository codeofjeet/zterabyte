import {
  FiAward,
  FiCheckCircle,
  FiEye,
  FiLayers,
  FiStar,
  FiTarget,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiEye,
    title: "Strong First Impression",
    description:
      "A professional logo helps your business create a clear and memorable first impression with potential customers.",
  },
  {
    icon: FiTarget,
    title: "Clear Brand Identity",
    description:
      "Create a visual identity that communicates your business personality, values and positioning.",
  },
  {
    icon: FiStar,
    title: "Memorable Branding",
    description:
      "A distinctive logo can help customers recognize and remember your business more easily.",
  },
  {
    icon: FiLayers,
    title: "Consistent Brand Usage",
    description:
      "Use your logo consistently across websites, social media, marketing materials and business documents.",
  },
  {
    icon: FiAward,
    title: "Professional Appearance",
    description:
      "A polished visual identity can help your business present a more professional image.",
  },
  {
    icon: FiCheckCircle,
    title: "Ready for Multiple Uses",
    description:
      "Prepare your logo for different digital and print applications with appropriate file formats.",
  },
];

export default function LogoDesignWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiStar />
            Professional Branding
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Your Logo Is More Than
            <span className="block text-[#006cb5]">
              Just a Symbol
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A well-planned logo becomes an important part of your brand
            identity and helps create consistency across your business.
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

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#006cb5]">
                  <FiCheckCircle />
                  Built for your brand
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}