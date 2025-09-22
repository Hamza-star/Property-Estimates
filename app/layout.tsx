import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopLoader from "@/components/TopLoader";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "benny Estimates | Construction Cost Estimation Services",
  description:
    "Get accurate construction cost estimates, quantity takeoffs, and project planning with benny Estimates. Fast, reliable, and affordable services.",
  keywords: [
    "construction estimates",
    "cost estimation",
    "residential estimating",
    "commercial estimating",
    "benny Estimates",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Benny Estimates | Accurate Construction Cost Estimation",
    description:
      "Professional cost estimating services for residential and commercial projects.",
    url: "https://bennyestimates.com", // apna domain yahan dalna
    siteName: "Benny Estimates",
    images: [
      {
        url: "/og-image.png", // ek 1200x630 px image banao
        width: 1200,
        height: 630,
        alt: "Benny Estimates Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benny Estimates | Construction Cost Estimation Services",
    description:
      "Get transparent and precise cost estimates for residential & commercial projects.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // agar Twitter handle hai to add karo
  },
  metadataBase: new URL("https://yourdomain.com"), // apna domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FAFAFA] text-[#15161C]">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Navbar />
        <TopLoader />
        <main className="bg-[#FAFAFA]">{children}</main>
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
