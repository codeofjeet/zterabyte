import {
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiLock,
  FiMonitor,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiMonitor,
    title: "Responsive Design",
    description:
      "Your website will provide a professional experience across desktops, tablets and mobile devices.",
  },
  {
    icon: FiZap,
    title: "Fast Performance",
    description:
      "We focus on clean development and optimized assets to provide a fast and smooth website experience.",
  },
  {
    icon: FiCode,
    title: "Modern Development",
    description:
      "We use modern development technologies and practices to build scalable websites.",
  },
  {
    icon: FiLock,
    title: "Secure Website",
    description:
      "Security is considered throughout the development process to help protect your website and business.",
  },
  {
    icon: FiLayers,
    title: "Scalable Solutions",
    description:
      "Your website can be structured so that new features and functionality can be added as your business grows.",
  },
  {
    icon: FiCheckCircle,
    title: "Business Focused",
    description:
      "We build websites around your business objectives, customers and the actions you want visitors to take.",
  },
];

export default function WhyChooseWebsite() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Why Choose Zterabyte
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl">
              More Than Just a Website.
              <span className="block text-[#006cb5]">
                We Build Digital Experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A successful website should do more than look attractive.
              It should represent your brand, provide a great user
              experience and support your business goals.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Professional and modern design",
                "Mobile-first responsive development",
                "Performance-focused implementation",
                "Easy future expansion",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="shrink-0 text-lg text-[#006cb5]" />

                  <span className="text-sm font-medium text-[#071827] sm:text-base">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* RIGHT BENEFITS */}
          <div className="grid gap-4 sm:grid-cols-2">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-slate-200 bg-[#f8fbfe] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b9def5] hover:bg-white hover:shadow-lg sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {benefit.description}
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