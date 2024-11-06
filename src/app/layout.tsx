import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compassion Clothing Closet",
  description:
    "Our mission is to gather clothing from various sources so that we can get clothing into the hands of those who need it.",
  icons: [
    {
      rel: "icon",
      url: "/logo.jpeg",
      type: "image/jpeg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
