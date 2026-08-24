import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  "Android application development",
  "iOS application development",
  "Cross-platform development",
  "User-friendly interfaces",
  "API and backend integration",
  "Scalable mobile solutions",
];

export default function MobileApplicationPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
              <FiSmartphone className="text-3xl" />
            </div>

            <span className="mt-6 inline-flex rounded-full border border-[#38a9f5]/30 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              Mobile Application Development
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Mobile Apps That
              <span className="block text-[#38a9f5]">
                Connect Your Business
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Build powerful and user-friendly mobile applications that
              help your business connect with customers wherever they are.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
              >
                Start Your App Project
                <FiArrowRight />
              </Link>

              <Link
                href="/website-development"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Development Services
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Visual */}
            <div className="order-2 lg:order-1">

              <div className="mx-auto max-w-sm rounded-[2.5rem] border-8 border-[#071827] bg-[#071827] p-3 shadow-2xl">

                <div className="overflow-hidden rounded-[2rem] bg-white">

                  <div className="flex items-center justify-between bg-[#006cb5] px-5 py-4">
                    <span className="text-sm font-bold text-white">
                      Your App
                    </span>

                    <FiSmartphone className="text-white" />
                  </div>

                  <div className="space-y-4 p-5">

                    <div className="h-28 rounded-2xl bg-[#eaf6ff]" />

                    <div className="h-4 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-full rounded bg-slate-100" />
                    <div className="h-3 w-5/6 rounded bg-slate-100" />

                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <div className="h-16 rounded-xl bg-[#f1f5f9]" />
                      <div className="h-16 rounded-xl bg-[#f1f5f9]" />
                    </div>

                    <div className="h-11 rounded-xl bg-[#006cb5]" />

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="order-1 lg:order-2">

              <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
                Mobile Solutions
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
                Build Apps Your
                <span className="block text-[#006cb5]">
                  Customers Will Love
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We can create mobile applications designed around your
                business requirements, customers and workflows.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                    <span className="text-sm font-medium text-[#071827]">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-5">

          <div className="rounded-3xl bg-[#071827] px-6 py-12 text-center sm:px-10">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
              <FiCode />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Have a Mobile App Idea?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Let's discuss your requirements and turn your idea into
              a professional mobile application.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
            >
              Discuss Your App
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}