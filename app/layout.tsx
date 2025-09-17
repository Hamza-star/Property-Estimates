import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

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
  title: "Bunny Estimates",
  description: "Accurate estimates, happy clients.",
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
        <main className="bg-[#FAFAFA]">{children}</main>
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
