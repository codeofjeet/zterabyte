// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Zterabyte | Digital & Hosting Solutions",
//   description:
//     "Zterabyte provides domain registration, web hosting, email hosting, website development, design and digital marketing solutions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//   lang="en"
//   data-scroll-behavior="smooth"
//   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
// >
//       <body className="min-h-full flex flex-col" >

//         <Header />

//         <main className="flex-1">
//           {children}
//         </main>

//         <Footer />

//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppChat from "@/components/common/WhatsAppChat";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zterabyte | Digital & Hosting Solutions",
  description:
    "Zterabyte provides domain registration, web hosting, email hosting, website development, design and digital marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <WhatsAppChat />
      </body>
    </html>
  );
}