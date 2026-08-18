import {
  FiStar,
  FiMessageCircle,
} from "react-icons/fi";

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
    message:
      "Zterabyte provided a smooth and professional experience. Their team understood our requirements and helped us with the right digital solution.",
  },
  {
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    message:
      "We were looking for a reliable technology partner and found the support and service very helpful throughout our project.",
  },
  {
    name: "Client Name",
    role: "Business Manager",
    company: "Company Name",
    message:
      "From website development to digital services, the overall experience was professional and focused on our business requirements.",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            <FiMessageCircle />
            Client Experiences
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            What Our Clients
            <span className="block text-[#006cb5]">
              Say About Us
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We believe successful projects are built on understanding,
            communication and long-term relationships.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="group relative rounded-3xl border border-slate-200 bg-[#f6fafd] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:bg-white hover:shadow-xl sm:p-8"
            >

              {/* Quote Icon */}
             <div className="absolute right-7 top-7 text-5xl font-bold text-[#006cb5]/10 transition group-hover:text-[#006cb5]/20">
                "
            </div>

              {/* Stars */}
              <div className="flex gap-1 text-[#006cb5]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className="fill-current text-sm"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="relative mt-6 text-sm leading-7 text-slate-600">
                “{testimonial.message}”
              </p>

              {/* Client */}
              <div className="mt-7 flex items-center gap-4 border-t border-slate-200 pt-6">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006cb5] font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>

                  <p className="font-bold text-[#071827]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}