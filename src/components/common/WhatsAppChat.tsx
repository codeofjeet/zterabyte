import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const phoneNumber = "919119220608";

  const message = encodeURIComponent(
    "Hello Zterabyte, I would like to know more about your services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="group fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Tooltip */}
      <div
        className="
          pointer-events-none
          absolute
          right-[calc(100%+12px)]
          top-1/2
          hidden
          -translate-y-1/2
          whitespace-nowrap
          rounded-xl
          bg-[#071827]
          px-4
          py-2.5
          text-sm
          font-semibold
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
          sm:block
        "
      >
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zterabyte on WhatsApp"
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          shadow-black/20
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
          sm:h-15
          sm:w-15
        "
      >
        {/* Pulse */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            opacity-40
            animate-ping
          "
        />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative z-10 text-[30px] sm:text-[32px]" />
      </a>
    </div>
  );
}