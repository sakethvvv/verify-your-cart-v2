import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Verify Your Cart | AI-Powered E-commerce Fraud Detection",
  description: "Protect yourself from online shopping scams. Use our AI engine to verify product listings, seller ratings, and review authenticity on Amazon, Flipkart, and more.",
  keywords: "ecommerce fraud detection, fake product checker, amazon scam guide, flipkart fraud check, online shopping safety, AI scam detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
