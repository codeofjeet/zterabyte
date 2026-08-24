import EcommerceWhyChoose from "@/components/website/EcommerceWhyChoose";
import EcommerceFeatures from "@/components/website/EcommerceFeatures";
import EcommerceStorePreview from "@/components/website/EcommerceStorePreview";
import EcommercePaymentOrders from "@/components/website/EcommercePaymentOrders";
import EcommerceMobileBenefits from "@/components/website/EcommerceMobileBenefits";
import EcommerceCTA from "@/components/website/EcommerceCTA";

export default function EcommerceWebsitePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <section className="bg-[#071827] py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-[#38a9f5]">
            Website Development
          </span>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            E-Commerce Website Development
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
            Build a powerful online store that makes it easy for
            customers to discover, purchase and manage products.
          </p>

        </div>
      </section>
      <EcommerceWhyChoose />
      <EcommerceFeatures />
      <EcommerceStorePreview />
      <EcommercePaymentOrders />
      <EcommerceMobileBenefits />
      <EcommerceCTA />

    </main>
  );
}