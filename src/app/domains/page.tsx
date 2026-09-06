import DomainHero from "@/components/domain/DomainHero";
import DomainServices from "@/components/domain/DomainServices";
import DomainExtensions from "@/components/domain/DomainExtensions";
import DomainWhyChoose from "@/components/domain/DomainWhyChoose";
import DomainTransfer from "@/components/domain/DomainTransfer";
import DomainSecurity from "@/components/domain/DomainSecurity";
import DomainCTA from "@/components/domain/DomainCTA";

export default function DomainsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <DomainHero />
      <DomainServices />
      <DomainExtensions />
      <DomainWhyChoose />
      <DomainTransfer />
      <DomainSecurity />
      <DomainCTA />
    </main>
  );
}