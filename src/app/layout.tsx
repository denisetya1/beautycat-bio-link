import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeautyCat - Queen of Skincare",
  description: "Skincare terbaik dengan harga murah! Temukan rangkaian produk perawatan kulit yang terjangkau untuk tampil lebih cantik dan sehat.",
  keywords: "skin care, kosmetik, perawatan kulit, produk kualitas terbaik, tips dan saran perawatan, jenis kulit unik, solusi perawatan kulit, kecantikan kulit, perawatan wajah, produk kecantikan, perawatan kulit alami",
  openGraph: {
    title: "BeautyCat - Queen of Skincare",
    description: "Skincare terbaik dengan harga murah! Temukan rangkaian produk perawatan kulit yang terjangkau untuk tampil lebih cantik dan sehat.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="block w-full h-full bg-violet-500">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
