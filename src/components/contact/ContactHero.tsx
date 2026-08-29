import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Head Office",
    text: (
      <>
        1234, Basant Vihar,
        <br />
        Dadabari, Kota,
        <br />
        Rajasthan 324009
      </>
    ),
  },
  {
    icon: FiMail,
    title: "Email Support",
    text: "info@zterabyte.com",
  },
  {
    icon: FiPhone,
    title: "Let's Talk",
    text: "+91-9119220608",
  },
  {
    icon: FiClock,
    title: "Office Hours",
    text: (
      <>
        Monday – Saturday
        <br />
        9:00 AM – 8:00 PM
      </>
    ),
  },
];

export default function ContactHero() {
  return (
    <section
      id="contact-information"
      className="relative overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24"
    >
      {/* Soft Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#dbeeff] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#eaf6ff] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#006cb5]/20 bg-white px-4 py-2 text-sm font-bold text-[#006cb5] shadow-sm">
            <FiMapPin />
            Our Office
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#071827] sm:text-4xl lg:text-5xl">
            We Are Here To
            <span className="text-[#006cb5]"> Help You</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Whether you have a question, project idea or business requirement,
            our team is ready to help you find the right digital solution.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">

          {/* LEFT - CONTACT INFORMATION */}
          <div className="grid gap-4 sm:grid-cols-2">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-base font-bold text-[#071827]">
                    {item.title}
                  </h3>

                  {/* Information */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

          {/* RIGHT - MAP */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-lg">

            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">

              <iframe
                title="Zterabyte Office Location"
                src="https://www.google.com/maps?q=ZTERABYTE,+1234,+Basant+Vihar,+Dadabari,+Kota,+Rajasthan+324009&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Label */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#071827]">
                      Zterabyte Office
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Basant Vihar, Dadabari, Kota
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}