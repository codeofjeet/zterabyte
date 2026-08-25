import {
  FiBell,
  FiCheckCircle,
  FiCreditCard,
  FiLock,
  FiMapPin,
  FiMessageCircle,
  FiSettings,
  FiUser,
} from "react-icons/fi";

const features = [
  {
    icon: FiUser,
    title: "User Authentication",
    description:
      "Create secure registration, login, profile and account management experiences for your app users.",
  },
  {
    icon: FiBell,
    title: "Push Notifications",
    description:
      "Keep users informed with useful notifications for updates, activities, offers and important events.",
  },
  {
    icon: FiSettings,
    title: "API & Backend Integration",
    description:
      "Connect your application with APIs, databases and backend services for dynamic functionality.",
  },
  {
    icon: FiCreditCard,
    title: "Payments & Transactions",
    description:
      "Build suitable payment and transaction flows for applications that require online purchases or payments.",
  },
  {
    icon: FiMapPin,
    title: "Location Features",
    description:
      "Add location-based functionality when your application requires maps, delivery or location services.",
  },
  {
    icon: FiMessageCircle,
    title: "Communication",
    description:
      "Create useful communication features such as messaging, support or customer interaction.",
  },
  {
    icon: FiLock,
    title: "Secure Data",
    description:
      "Follow practical security approaches for user information, application data and API communication.",
  },
  {
    icon: FiCheckCircle,
    title: "Business Dashboard",
    description:
      "Provide useful dashboards and management functionality for monitoring application activity.",
  },
];

export default function MobileAppFeatures() {
  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            App Features & Functionality
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything Your Mobile App
            <span className="block text-[#006cb5]">
              May Need
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build useful mobile functionality around your customers,
            business processes and application requirements.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Mobile Dashboard Preview */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/10 blur-3xl" />

              <div className="relative w-[270px] rounded-[2.7rem] border-[8px] border-[#071827] bg-[#071827] p-2 shadow-2xl sm:w-[290px]">

                <div className="overflow-hidden rounded-[2.1rem] bg-white">

                  {/* App Header */}
                  <div className="bg-[#006cb5] px-5 pb-6 pt-7">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[9px] text-blue-100">
                          Mobile Dashboard
                        </p>

                        <h3 className="mt-1 text-sm font-black text-white">
                          Welcome, User
                        </h3>
                      </div>

                      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">

                        <FiBell />

                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#70c8fa]" />

                      </div>

                    </div>

                  </div>

                  {/* Dashboard */}
                  <div className="p-4">

                    <div className="rounded-2xl bg-[#eaf6ff] p-4">

                      <p className="text-[9px] font-semibold uppercase tracking-wider text-[#006cb5]">
                        Activity
                      </p>

                      <p className="mt-2 text-2xl font-black text-[#071827]">
                        8,420
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        Total application activity
                      </p>

                    </div>

                    {/* Quick Actions */}
                    <div className="mt-4 grid grid-cols-3 gap-2">

                      <div className="flex flex-col items-center rounded-xl border border-slate-100 p-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                          <FiUser />
                        </div>

                        <span className="mt-2 text-[8px] font-semibold text-slate-500">
                          Profile
                        </span>

                      </div>

                      <div className="flex flex-col items-center rounded-xl border border-slate-100 p-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                          <FiCreditCard />
                        </div>

                        <span className="mt-2 text-[8px] font-semibold text-slate-500">
                          Payments
                        </span>

                      </div>

                      <div className="flex flex-col items-center rounded-xl border border-slate-100 p-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                          <FiMapPin />
                        </div>

                        <span className="mt-2 text-[8px] font-semibold text-slate-500">
                          Location
                        </span>

                      </div>

                    </div>

                    {/* Recent Activity */}
                    <div className="mt-4 rounded-xl border border-slate-100 p-4">

                      <div className="flex items-center justify-between">

                        <p className="text-[10px] font-bold text-[#071827]">
                          Recent Activity
                        </p>

                        <span className="text-[9px] font-semibold text-[#006cb5]">
                          View
                        </span>

                      </div>

                      <div className="mt-4 space-y-3">

                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                              <div className="h-3 w-3 rounded-full bg-slate-300" />
                            </div>

                            <div className="flex-1">

                              <div className="h-2 w-3/4 rounded bg-slate-200" />

                              <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />

                            </div>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* Bottom Status */}
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#f6fafd] p-3">

                      <FiCheckCircle className="text-[#006cb5]" />

                      <span className="text-[9px] font-semibold text-slate-500">
                        Connected & ready
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#006cb5]/30 hover:shadow-md sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#071827]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
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