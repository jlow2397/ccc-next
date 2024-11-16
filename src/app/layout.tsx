import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compassion Clothing Closet",
  description:
    "Our mission is to gather clothing from various sources so that we can get clothing into the hands of those who need it.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarGutter: "stable" }}>
      <body className={inter.className}>
        <nav className="sticky top-0 left-0 right-0 py-3 z-50 bg-white">
          <div className="max-w-screen-lg px-8 mx-auto w-full flex items-center gap-5">
            <Link
              href={"/"}
              className="font-medium text-black hover:text-gray-700"
            >
              Our Mission
            </Link>
            <Link
              href={"/about-us"}
              className="font-medium text-black hover:text-gray-700"
            >
              About Us
            </Link>
            <Link
              href={"/contact"}
              className="font-medium text-black hover:text-gray-700"
            >
              Contact
            </Link>
            <Link
              href={"/donate"}
              className="font-medium text-black hover:text-gray-700"
            >
              Donate
            </Link>
          </div>
        </nav>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10 max-w-screen-lg mx-auto py-20 px-8 pb-40">
          {children}
        </div>
      </body>
    </html>
  );
}
