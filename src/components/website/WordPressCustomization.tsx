import {
  FiCheckCircle,
  FiEdit3,
  FiGrid,
  FiImage,
  FiMenu,
  FiSmartphone,
  FiType,
} from "react-icons/fi";

const customizationPoints = [
  {
    icon: FiEdit3,
    title: "Custom Theme Design",
    description:
      "Create a WordPress storefront or business website design that matches your brand and business requirements.",
  },
  {
    icon: FiImage,
    title: "Homepage & Banners",
    description:
      "Design attractive hero banners, promotional sections and visual content areas for your website.",
  },
  {
    icon: FiType,
    title: "Brand Typography",
    description:
      "Use suitable fonts, colors and visual elements to maintain a consistent brand identity.",
  },
  {
    icon: FiGrid,
    title: "Custom Page Layouts",
    description:
      "Create structured layouts for services, products, portfolios, blogs and business information.",
  },
  {
    icon: FiMenu,
    title: "Navigation & Menus",
    description:
      "Build clear navigation structures that help visitors quickly find important website content.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description:
      "Ensure your WordPress website looks and works properly across desktop, tablet and mobile devices.",
  },
];

export default function WordPressCustomization() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            WordPress Design & Customization
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Make Your Website
            <span className="block text-[#006cb5]">
              Truly Your Own
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Your WordPress website should reflect your brand. We customize
            the visual design, page structure and user experience around
            your business.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* Website Preview */}
          <div className="relative">

            <div className="rounded-3xl border border-slate-200 bg-[#f6fafd] p-4 shadow-xl sm:p-6">

              <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">

                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />

                  <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-[10px] text-slate-400">
                    yourbusiness.com
                  </div>

                </div>

                {/* Website Navigation */}
                <div className="flex items-center justify-between px-4 py-4 sm:px-6">

                  <div className="flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                      <FiEdit3 />
                    </div>

                    <span className="text-sm font-black text-[#071827]">
                      YOUR BRAND
                    </span>

                  </div>

                  <div className="hidden items-center gap-5 text-[10px] font-semibold text-slate-400 sm:flex">
                    <span>Home</span>
                    <span>Services</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>

                  <FiMenu className="text-slate-500 sm:hidden" />

                </div>

                {/* Hero */}
                <div className="mx-4 overflow-hidden rounded-2xl bg-[#071827] p-6 sm:mx-6 sm:p-8">

                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#70c8fa]">
                    Professional WordPress Website
                  </span>

                  <h3 className="mt-2 max-w-sm text-xl font-black leading-tight text-white sm:text-2xl">
                    Your Business.
                    <span className="block text-[#38a9f5]">
                      Your Digital Presence.
                    </span>
                  </h3>

                  <p className="mt-3 max-w-sm text-[10px] leading-5 text-slate-400">
                    A custom website experience designed around your
                    business and customers.
                  </p>

                  <div className="mt-5 h-9 w-28 rounded-lg bg-[#006cb5]" />

                </div>

                {/* Content Blocks */}
                <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:p-6">

                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-100 p-2"
                    >

                      <div className="aspect-square rounded-lg bg-[#eaf6ff]" />

                      <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />

                      <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 right-2 flex items-center gap-3 rounded-xl bg-[#006cb5] px-4 py-3 shadow-xl sm:right-6">

              <FiCheckCircle className="text-[#70c8fa]" />

              <div>

                <p className="text-[10px] text-blue-100">
                  Custom WordPress
                </p>

                <p className="text-xs font-bold text-white">
                  Built Around Your Brand
                </p>

              </div>

            </div>

          </div>

          {/* Customization Points */}
          <div>

            <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Design & Branding
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              A Website Designed
              <span className="block text-[#006cb5]">
                Around Your Business
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From your homepage and navigation to individual service
              pages, we can structure the website around your brand,
              content and customers.
            </p>

            {/* Points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {customizationPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-[#071827]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}