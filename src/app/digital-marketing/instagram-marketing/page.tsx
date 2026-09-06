import InstagramMarketingHero from "@/components/digital-marketing/InstagramMarketingHero";
import InstagramMarketingServices from "@/components/digital-marketing/InstagramMarketingServices";
import InstagramMarketingProcess from "@/components/digital-marketing/InstagramMarketingProcess";
import InstagramMarketingResults from "@/components/digital-marketing/InstagramMarketingResults";
import InstagramMarketingCTA from "@/components/digital-marketing/InstagramMarketingCTA";

export default function InstagramMarketingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <InstagramMarketingHero />
      <InstagramMarketingServices />
      <InstagramMarketingProcess />
      <InstagramMarketingResults />
      <InstagramMarketingCTA />

    </main>
  );
}