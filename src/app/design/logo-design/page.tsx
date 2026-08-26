import LogoDesignHero from "@/components/design/LogoDesignHero";
import LogoDesignWhyChoose from "@/components/design/LogoDesignWhyChoose";
import LogoDesignProcess from "@/components/design/LogoDesignProcess";
import LogoDesignDeliverables from "@/components/design/LogoDesignDeliverables";
import LogoDesignCTA from "@/components/design/LogoDesignCTA";

export default function LogoDesignPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <LogoDesignHero />
      <LogoDesignWhyChoose />
      <LogoDesignProcess />
      <LogoDesignDeliverables />
      <LogoDesignCTA />

    </main>
  );
}