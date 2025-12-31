import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";

const ibmPlex = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MOTOGNA Tech Studio | Configurable Software & Web Development",
  description: "We build scalable digital solutions for businesses in Austria and beyond. Configurable software, modern websites, and product-grade design.",
  keywords: "software development, web development, Austria, configurable software, UI/UX design, business software",
  authors: [{ name: "Alex Daniel Motogna" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "MOTOGNA Tech Studio",
    description: "Configurable software, modern websites, and product-grade design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlex.className} antialiased`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
