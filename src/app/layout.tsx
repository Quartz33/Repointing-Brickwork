import type { Metadata } from "next";
import { Barlow, Staatliches, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";


const barlow = Barlow({
   weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches"
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Repointing Brickwork",
  description: "Professional brick repointing and restoration services across the Isle of Wight. We specialise in repairing, restoring, and protecting brickwork for homes and businesses, delivering durable results with expert craftsmanship.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} ${staatliches.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
