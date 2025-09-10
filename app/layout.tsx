import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ecommerce test app",
  description: "Generated with Next by Ger Espinosa based on PedroTech video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'flex min-h-full flex-col bg-white'}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-4">
        {children}
        </main>
      </body>
    </html>
  );
}
