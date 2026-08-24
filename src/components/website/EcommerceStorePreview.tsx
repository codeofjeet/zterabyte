import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiStar,
  FiUser,
} from "react-icons/fi";

const products = [
  {
    name: "Premium Product",
    price: "₹1,499",
  },
  {
    name: "Featured Product",
    price: "₹2,299",
  },
  {
    name: "Popular Product",
    price: "₹999",
  },
];

export default function EcommerceStorePreview() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
            Store Experience
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Give Your Customers a
            <span className="block text-[#006cb5]">
              Better Shopping Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Create an attractive online store where customers can easily
            discover products, compare options and complete purchases.
          </p>

        </div>

        {/* Main Preview */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Store Mockup */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            {/* Store Header */}
            <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-6">

              <div className="text-lg font-black text-[#006cb5]">
                YourStore
              </div>

              <div className="hidden flex-1 items-center rounded-lg border border-slate-200 bg-white px-3 py-2 sm:flex">
                <FiSearch className="text-slate-400" />

                <span className="ml-2 text-xs text-slate-400">
                  Search products...
                </span>
              </div>

              <div className="ml-auto flex items-center gap-3 text-slate-500">

                <FiUser />

                <div className="relative">
                  <FiShoppingBag />

                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#006cb5] text-[9px] font-bold text-white">
                    2
                  </span>
                </div>

              </div>

            </div>

            {/* Category Navigation */}
            <div className="flex gap-5 overflow-x-auto border-b border-slate-100 px-4 py-3 text-xs font-semibold text-slate-500 sm:px-6">
              <span className="whitespace-nowrap text-[#006cb5]">
                All Products
              </span>

              <span className="whitespace-nowrap">
                New Arrivals
              </span>

              <span className="whitespace-nowrap">
                Popular
              </span>

              <span className="whitespace-nowrap">
                Offers
              </span>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 sm:gap-5 sm:p-6">

              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-md sm:p-4"
                >

                  {/* Product Image Placeholder */}
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#eaf6ff]">

                    <div className="h-16 w-16 rounded-2xl bg-[#006cb5]/15 sm:h-20 sm:w-20" />

                    <button
                      type="button"
                      aria-label={`Add ${product.name} to wishlist`}
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition hover:text-[#006cb5]"
                    >
                      <FiHeart className="text-sm" />
                    </button>

                  </div>

                  {/* Product Info */}
                  <div className="mt-3">

                    <div className="flex items-center gap-1 text-xs text-amber-500">
                      <FiStar />
                      <span className="text-slate-400">
                        4.8
                      </span>
                    </div>

                    <h3 className="mt-2 truncate text-sm font-bold text-[#071827]">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between gap-2">

                      <span className="text-sm font-bold text-[#006cb5]">
                        {product.price}
                      </span>

                      <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#006cb5] text-white transition hover:bg-[#004f86]"
                      >
                        <FiShoppingBag className="text-xs" />
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-flex items-center rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              Customer-Focused Design
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
              Turn Visitors Into
              <span className="block text-[#006cb5]">
                Happy Customers
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Every part of your online store can be designed to make
              shopping simple, intuitive and enjoyable for your customers.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              {[
                "Clean product presentation",
                "Simple navigation and search",
                "Easy cart and checkout flow",
                "Mobile-friendly shopping experience",
                "Clear product pricing and information",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#006cb5]" />

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#004f86]"
            >
              Build My Online Store
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}