"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      src="https://embed.tawk.to/695a7cdab1e0d21980f0b748/1je4nfe74"
      crossOrigin="anonymous"
    />
  );
}