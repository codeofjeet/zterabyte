import {
  FiCheckCircle,
  FiEye,
  FiHeart,
  FiLayout,
  FiMousePointer,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiMousePointer,
    title: "Easy to Use",
    description:
      "Create intuitive interfaces that help users understand your product and complete important actions easily.",
  },
  {
    icon: FiEye,
    title: "Clear Visual Hierarchy",
    description:
      "Organize content, buttons and information so users can quickly understand what matters most.",
  },
  {
    icon: FiHeart,
    title: "Better User Experience",
    description:
      "Design digital experiences around user needs, expectations and real-world interaction patterns.",
  },
  {
    icon: FiLayout,
    title: "Consistent Interface",
    description:
      "Maintain consistent colors, typography, spacing and components throughout your digital product.",
  },
  {
    icon: FiTrendingUp,
    title: "Business-Focused Design",
    description:
      "Connect user experience with your business objectives, conversion goals and customer journey.",
  },
  {
    icon: FiCheckCircle,
    title: "Responsive Experience",
    description:
      "Create interfaces that work comfortably across desktop, tablet and mobile screen sizes.",
  },
];

export default function UIUXDesignWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiHeart />
            User Experience
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Design That Works
            <span className="block text-[#006cb5]">
              For Your Users
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Good UI/UX design combines visual clarity, usability and
            business goals to create digital experiences people enjoy using.
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
                  User-focused design
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}