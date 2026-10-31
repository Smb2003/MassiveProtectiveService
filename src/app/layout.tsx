import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/provider";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Massive Protective Services (MPS) | Armed Security & Executive Protection",
  description:
    "A licensed private security firm headquartered in Delray Beach — serving estates, executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties. FDACS License B1400200. Zero unarmed guards.",
  keywords: [
    "Massive Protective Services",
    "Executive Protection Palm Beach",
    "Armed Security Miami-Dade",
    "Estate Security Broward",
    "Florida Class G Armed Guards",
    "FDACS License B1400200",
    "Chapter 493 Florida Statutes",
    "Tactical Luxury Security",
    "Celebrity Protection Florida",
    "Art Basel Security",
  ],
  authors: [{ name: "Massive Protective Services" }],
  creator: "Massive Protective Services",
  publisher: "Massive Protective Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Massive Protective Services | Sovereign Armed Protection",
    description:
      "100% Class G Armed Operators. Zero unarmed guards. Zero subcontracting. Regulated under Chapter 493, Florida Statutes. FDACS License B1400200.",
    type: "website",
    locale: "en_US",
    siteName: "Massive Protective Services",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen max-w-[100vw] overflow-x-clip flex flex-col bg-[#0A0A0A] text-[#F5F5F7]">
        <StoreProvider>
          <ErrorBoundary>
            {/* Global Tactical Header with Blur Backdrop */}
            <Header />

            {/* Main Application Content Container with Zero-Horizontal-Overflow */}
            <main
              id="main-content"
              className="flex-1 w-full max-w-[100vw] overflow-x-clip flex flex-col"
            >
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>

            {/* Global Chapter 493 Statutory Footer */}
            <Footer />
          </ErrorBoundary>
        </StoreProvider>
      </body>
    </html>
  );
}
