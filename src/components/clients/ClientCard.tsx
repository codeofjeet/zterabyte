import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import type { Client } from "@/data/clients";

type ClientCardProps = {
  client: Client;
};

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        border border-slate-200 bg-white p-6
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:border-[#b9ddf3]
        hover:shadow-xl hover:shadow-[#006cb5]/10
      "
    >
      {/* Logo */}
      <div className="flex h-28 items-center justify-center rounded-xl bg-[#f6fafd] p-5">
        <div className="relative h-20 w-full">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Company */}
      <div className="mt-6">
        <h2 className="text-lg font-extrabold text-[#071827] transition-colors group-hover:text-[#006cb5]">
          {client.name}
        </h2>

        {/* Service */}
        <div className="mt-3 flex items-center gap-2">
          <FiCheckCircle className="shrink-0 text-[#006cb5]" />

          <span className="text-sm font-bold text-[#006cb5]">
            {client.service}
          </span>
        </div>

        {/* Description */}
        {/* <p className="mt-4 text-sm leading-6 text-slate-600">
          {client.description}
        </p> */}
      </div>
    </article>
  );
}