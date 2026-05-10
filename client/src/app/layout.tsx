import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Verify Your Cart | AI-Powered E-commerce Fraud Detection",
    template: "%s | Verify Your Cart"
  },
  description: "Protect yourself from online shopping scams. Use our AI engine to verify product listings, seller ratings, and review authenticity on Amazon, Flipkart, and more.",
  keywords: ["ecommerce fraud detection", "fake product checker", "amazon scam guide", "flipkart fraud check", "online shopping safety", "AI scam detection", "verify your cart"],
  authors: [{ name: "Saketh V" }],
  creator: "Saketh V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://verify-your-cart-v2.vercel.app",
    title: "Verify Your Cart | AI-Powered E-commerce Fraud Detection",
    description: "Detect fake reviews and e-commerce scams in seconds with our advanced neural engine.",
    siteName: "Verify Your Cart",
    images: [
      {
        url: "/blog-hero.png",
        width: 1200,
        height: 630,
        alt: "Verify Your Cart - AI Fraud Detection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify Your Cart | AI-Powered E-commerce Fraud Detection",
    description: "Detect fake reviews and e-commerce scams in seconds with our advanced neural engine.",
    images: ["/blog-hero.png"],
    creator: "@sakethvvv"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "y-your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Verify Your Cart",
    "url": "https://verify-your-cart-v2.vercel.app",
    "description": "AI-powered e-commerce fraud detection tool.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Saketh V"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
