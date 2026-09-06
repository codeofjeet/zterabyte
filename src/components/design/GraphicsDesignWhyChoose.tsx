import {
  FiAward,
  FiCheckCircle,
  FiEye,
  FiImage,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiEye,
    title: "Strong Visual Impact",
    description:
      "Create visual content that captures attention and communicates your message clearly to your audience.",
  },
  {
    icon: FiImage,
    title: "Professional Brand Image",
    description:
      "Present your business consistently with polished graphics that match your brand identity.",
  },
  {
    icon: FiTrendingUp,
    title: "Better Marketing",
    description:
      "Use attractive visual content to support campaigns, promotions and digital marketing activities.",
  },
  {
    icon: FiLayers,
    title: "Consistent Branding",
    description:
      "Maintain consistent colors, typography and visual styles across your business materials.",
  },
  {
    icon: FiAward,
    title: "Professional Quality",
    description:
      "Create high-quality graphics suitable for digital platforms, marketing and business communication.",
  },
  {
    icon: FiCheckCircle,
    title: "Multiple Applications",
    description:
      "Use your designs across websites, social media, advertisements, presentations and printed materials.",
  },
];

export default function GraphicsDesignWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiImage />
            Professional Graphics
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Visuals That Help Your
            <span className="block text-[#006cb5]">
              Business Get Noticed
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Professional graphics can help your business communicate
            clearly, build recognition and create a consistent visual
            presence across different platforms.
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
                  Designed for your business
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}