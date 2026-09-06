export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": "https://www.zterabyte.com/#localbusiness",

    name: "ZTERABYTE",

    url: "https://www.zterabyte.com",

    logo: "https://www.zterabyte.com/logo.png",

    image: "https://www.zterabyte.com/logo.png",

    description:
      "ZTERABYTE provides domain registration, web hosting, email hosting, website development, eCommerce development, design and digital marketing services.",

    telephone: "+919119220608",

    priceRange: "₹4999",

    address: {
      "@type": "PostalAddress",
      streetAddress: "1234, Basant Vihar, Aklank Public School",
      addressLocality: "Kota",
      addressRegion: "Rajasthan",
      postalCode: "324009",
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Kota",
      },
      {
        "@type": "State",
        name: "Rajasthan",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],

    sameAs: [
      "https://www.facebook.com/zterabyte",
      "https://www.instagram.com/zterabyte",
      "https://x.com/zterabyte_in",
      "https://www.youtube.com/@zterabyte",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}