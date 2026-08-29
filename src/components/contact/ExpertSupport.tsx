import {
  FiArrowRight,
  FiBookOpen,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

const supportOptions = [
  {
    icon: FiMessageCircle,
    title: "WhatsApp Support",
    description:
      "Reliable customer support providing timely assistance, guidance and experience.",
    button: "Chat on WhatsApp",
    href: "https://wa.me/919119220608",
    external: true,
  },
  {
    icon: FiMail,
    title: "Email Support",
    description:
      "Contact our team by email for business enquiries, project discussions and digital solutions.",
    button: "Send Email",
    href: "mailto:info@zterabyte.com",
    external: false,
  },
  {
    icon: FiPhone,
    title: "Call Support",
    description:
      "Speak directly with our team for prompt, reliable and personalized assistance.",
    button: "Call Now",
    href: "tel:+919119220608",
    external: false,
  },
];

export default function ExpertSupport() {
  return (
    <section className="relative overflow-hidden bg-[#eaf6ff] py-16 sm:py-20 lg:py-24">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-[#eaf6ff] blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#dbeeff] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            <FiMessageCircle />
            Need More Help?
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Get Expert Support
            <span className="block text-[#006cb5]">
              When You Need It
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose the support option that works best for you. Our team is
            available to discuss your requirements and help you find the
            right solution.
          </p>

        </div>

        {/* Support Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-xl sm:p-8"
              >

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                  <Icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#071827]">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  {option.description}
                </p>

                {/* Button */}
                <a
                  href={option.href}
                  {...(option.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0086dc]"
                >
                  {option.button}
                  <FiArrowRight />
                </a>

              </div>
            );
          })}

        </div>

        {/* Bottom Support Note */}
        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-[#dbeeff] bg-[#f6fafd] px-5 py-4 text-center">

          <FiBookOpen className="shrink-0 text-[#006cb5]" />

          <p className="text-sm font-medium text-slate-600">
            Monday – Saturday, 9:00 AM – 8:00 PM
          </p>

        </div>

      </div>
    </section>
  );
}