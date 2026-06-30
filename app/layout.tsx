import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Fiscal & Business Services | Création de LLC américaine",
    template: "%s | Fiscal & Business Services",
  },
  description:
    "Accompagnement premium pour créer votre LLC américaine, ouvrir un compte bancaire professionnel US et mettre en place vos solutions de paiement internationales.",
  keywords: [
    "création LLC",
    "LLC américaine",
    "créer une LLC USA",
    "compte bancaire US",
    "Stripe LLC",
    "Mercury LLC",
    "Relay LLC",
    "Wise Business LLC",
    "création société américaine",
    "entreprise américaine",
  ],
  authors: [{ name: "Fiscal & Business Services" }],
  creator: "Fiscal & Business Services",
  publisher: "Fiscal & Business Services",
  metadataBase: new URL("https://fiscalbusinessservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fiscal & Business Services | Création de LLC américaine",
    description:
      "Créez votre LLC américaine avec un accompagnement premium : documents officiels, compte bancaire US, solutions de paiement et suivi personnalisé.",
    url: "https://fiscalbusinessservices.com",
    siteName: "Fiscal & Business Services",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscal & Business Services | Création de LLC américaine",
    description:
      "Accompagnement premium pour créer votre LLC américaine, ouvrir un compte bancaire US et mettre en place vos solutions de paiement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#06111f]">
        {children}
      </body>
    </html>
  );
}