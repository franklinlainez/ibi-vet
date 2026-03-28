import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://ibivet.example"),
  title: {
    default: "IBI Vet | Compassionate Care for Pets",
    template: "%s | IBI Vet",
  },
  description:
    "Promotional website for IBI Vet, a local veterinary clinic providing preventive care, diagnostics, and urgent support for pets.",
  applicationName: "IBI Vet",
  keywords: [
    "veterinary clinic",
    "local vet",
    "pet wellness",
    "pet vaccination",
    "animal hospital",
  ],
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IBI Vet | Compassionate Care for Pets",
    description:
      "Friendly and modern veterinary care for dogs and cats. Same-day visits, preventive plans, and family-focused support.",
    url: "/",
    siteName: "IBI Vet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IBI Vet | Compassionate Care for Pets",
    description:
      "Local veterinary clinic with preventive plans, diagnostics, and urgent pet care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ibi_vet_logo.svg",
  },
};

export const viewport = {
  themeColor: "#0f766e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
