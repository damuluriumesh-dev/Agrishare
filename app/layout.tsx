import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BottomNav } from "@/components/layout/bottom-nav";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KisanRent — Rent Modern Farm Equipment Near You",
  description:
    "India's trusted agricultural equipment sharing platform. Rent tractors, harvesters, seeders, and water pumps directly from verified village owners. Affordable, insured, and transparent.",
  keywords: [
    "farm equipment rental India",
    "tractor rental near me",
    "kisan rent",
    "harvester rental",
    "rotavator rental",
    "agricultural machinery sharing",
    "rural equipment rental",
  ],
  openGraph: {
    title: "KisanRent — Affordable Farm Equipment Sharing",
    description:
      "Rent reliable tractors, harvesters, and tools from verified owners right in your district.",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/language-context";
import { AuthProvider } from "@/context/auth-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF7] text-stone-900 dark:bg-[#111311] dark:text-stone-100 pb-16 md:pb-0">
        <AuthProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BottomNav />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
