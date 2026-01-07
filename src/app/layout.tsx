import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Hub | One Payment, Forever",
  description: "Stop renting your bio link. Create a stunning, customizable page to showcase everything you do. Pay once, own it for life.",
  openGraph: {
    title: "Link Hub | One Payment, Forever",
    description: "Stop renting your bio link. Pay once, own it for life.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Hub | One Payment, Forever",
    description: "Stop renting your bio link. Pay once, own it for life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
