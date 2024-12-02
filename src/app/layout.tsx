import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "../contexts/AppContext";
import Header from "../components/Header";
import { InvestmentProvider } from "@/contexts/InvestmentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investment Portfolio Tracker",
  description: "Track and manage your investments with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <InvestmentProvider>
          <AppProvider>
            <Header />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </main>
          </AppProvider>
        </InvestmentProvider>
      </body>
    </html>
  );
}
