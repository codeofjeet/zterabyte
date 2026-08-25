import {
  FiActivity,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLock,
  FiShield,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";

const testingFeatures = [
  {
    icon: FiShield,
    title: "Application Security",
    description:
      "Follow practical security considerations for user accounts, application data and API communication.",
  },
  {
    icon: FiLock,
    title: "Secure Authentication",
    description:
      "Implement appropriate login, registration and authentication flows for your application's requirements.",
  },
  {
    icon: FiSmartphone,
    title: "Device Compatibility",
    description:
      "Check important screens and interactions across different mobile devices and screen sizes.",
  },
  {
    icon: FiActivity,
    title: "Performance Testing",
    description:
      "Evaluate important application interactions and focus on creating a smooth user experience.",
  },
  {
    icon: FiCode,
    title: "API Testing",
    description:
      "Verify communication between the mobile application and connected backend services.",
  },
  {
    icon: FiTool,
    title: "Bug Fixing",
    description:
      "Identify and resolve important issues before the application is prepared for release.",
  },
];

const checks = [
  "Authentication",
  "API connectivity",
  "Device compatibility",
  "Performance",
];

export default function MobileAppSecurity() {
  return (
    <section className="overflow-hidden bg-[#071827] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-bold text-[#70c8fa]">
            <FiShield />
            Testing & Security
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Test Before You
            <span className="block text-[#38a9f5]">
              Launch
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A mobile application should be tested across important
            functionality, devices and connected services before release.
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Testing Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-7">

            <div className="overflow-hidden rounded-2xl bg-white">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Application Testing
                  </p>

                  <h3 className="mt-1 text-sm font-bold text-[#071827]">
                    Release Readiness
                  </h3>

                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                  <FiCpu />
                </div>

              </div>

              {/* Status */}
              <div className="p-4 sm:p-5">

                <div className="rounded-xl bg-[#eaf6ff] p-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Test Status
                      </p>

                      <p className="mt-1 text-sm font-black text-[#071827]">
                        Ready for Review
                      </p>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#006cb5]">
                      <FiCheckCircle />
                    </div>

                  </div>

                </div>

                {/* Test Items */}
                <div className="mt-4 space-y-3">

                  {[
                    {
                      icon: FiLock,
                      title: "Authentication",
                    },
                    {
                      icon: FiCode,
                      title: "API Connection",
                    },
                    {
                      icon: FiSmartphone,
                      title: "Device Testing",
                    },
                    {
                      icon: FiActivity,
                      title: "Performance",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                      >

                        <div className="flex items-center gap-3">

                          <Icon className="text-[#006cb5]" />

                          <span className="text-xs font-semibold text-[#071827]">
                            {item.title}
                          </span>

                        </div>

                        <span className="flex items-center gap-1 rounded-full bg-[#eaf6ff] px-3 py-1 text-[9px] font-bold text-[#006cb5]">
                          <FiCheckCircle />
                          Checked
                        </span>

                      </div>
                    );
                  })}

                </div>

                {/* Progress */}
                <div className="mt-4 rounded-xl bg-slate-50 p-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold text-slate-500">
                      Test Coverage
                    </span>

                    <span className="text-sm font-black text-[#006cb5]">
                      94%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div className="h-full w-[94%] rounded-full bg-[#006cb5]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Features */}
          <div>

            <span className="inline-flex rounded-full bg-[#006cb5]/15 px-4 py-2 text-sm font-bold text-[#70c8fa]">
              Quality Assurance
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Check the Important
              <span className="block text-[#38a9f5]">
                Parts Before Release
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Testing helps identify problems early and gives your team
              greater confidence before making the application available
              to customers.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {testingFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006cb5]/20 text-[#38a9f5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Checks */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {checks.map((check, index) => (
            <div
              key={check}
              className="flex items-center gap-3 rounded-2xl border border-[#38a9f5]/15 bg-[#006cb5]/10 p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#006cb5]/20 text-sm font-black text-[#70c8fa]">
                0{index + 1}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                {check}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}