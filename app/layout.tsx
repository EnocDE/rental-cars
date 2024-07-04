import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Rental Cars",
  description: "Administrador de rental cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#000" />
        {children}
      </body>
    </html>
  );
}
