import {
  FiCheckCircle,
  FiCreditCard,
  FiLock,
  FiPackage,
  FiRefreshCw,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";

const orderSteps = [
  {
    icon: FiShoppingBag,
    title: "Order Placed",
    description: "Customer completes the checkout process.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Confirmed",
    description: "Payment status is securely recorded.",
  },
  {
    icon: FiPackage,
    title: "Order Processing",
    description: "The store team prepares the customer's order.",
  },
  {
    icon: FiTruck,
    title: "Order Delivered",
    description: "Customers can follow the order journey.",
  },
];

const features = [
  "Multiple payment options",
  "Secure checkout experience",
  "Order status management",
  "Customer order history",
  "Payment and order records",
  "Mobile-friendly checkout",
];

export default function EcommercePaymentOrders() {
  return (
    <section className="overflow-hidden bg-[#071827] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-bold text-[#70c8fa]">
            <FiCreditCard />
            Payments & Orders
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Simple Checkout.
            <span className="block text-[#38a9f5]">
              Smooth Order Management.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Give your customers a convenient checkout experience while
            keeping orders, payments and customer information organized.
          </p>

        </div>

        {/* Main Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Checkout Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-7">

            <div className="rounded-2xl bg-white p-5 sm:p-6">

              {/* Checkout Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Secure Checkout
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#071827]">
                    Complete Your Order
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                  <FiLock />
                </div>

              </div>

              {/* Customer */}
              <div className="mt-5 rounded-xl border border-slate-200 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                    <FiUser />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Customer
                    </p>

                    <p className="text-sm font-semibold text-[#071827]">
                      Customer Information
                    </p>
                  </div>

                </div>

              </div>

              {/* Payment */}
              <div className="mt-4 rounded-xl border border-slate-200 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                      <FiCreditCard />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Payment
                      </p>

                      <p className="text-sm font-semibold text-[#071827]">
                        Secure Payment
                      </p>
                    </div>

                  </div>

                  <FiCheckCircle className="text-[#006cb5]" />

                </div>

              </div>

              {/* Total */}
              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#f6fafd] p-4">

                <span className="text-sm font-medium text-slate-500">
                  Total Amount
                </span>

                <span className="text-lg font-black text-[#071827]">
                  ₹3,798
                </span>

              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-[#006cb5] px-5 py-3.5 text-sm font-bold text-white"
              >
                Place Order
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <FiLock />
                Secure checkout experience
              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-flex rounded-full bg-[#006cb5]/15 px-4 py-2 text-sm font-bold text-[#70c8fa]">
              Complete E-Commerce Management
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              From Checkout to
              <span className="block text-[#38a9f5]">
                Successful Delivery
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Your e-commerce platform can connect the complete customer
              journey, from payment and order placement through processing
              and delivery.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="shrink-0 text-[#38a9f5]" />

                  <span className="text-sm text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Order Journey */}
        <div className="mt-16">

          <div className="mb-8 text-center">

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Order Journey
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Keep the complete order process organized.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {orderSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006cb5]/20 text-[#38a9f5]">
                      <Icon />
                    </div>

                    <span className="text-xs font-bold text-[#38a9f5]">
                      0{index + 1}
                    </span>

                  </div>

                  <h4 className="mt-5 font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#38a9f5]/20 bg-[#006cb5]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-start gap-3">

            <FiRefreshCw className="mt-0.5 shrink-0 text-[#38a9f5]" />

            <div>
              <h4 className="font-bold text-white">
                Built for Growing Stores
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                Your store can evolve as products, customers and orders grow.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#70c8fa]">
            <FiCheckCircle />
            Scalable Solution
          </div>

        </div>

      </div>

    </section>
  );
}