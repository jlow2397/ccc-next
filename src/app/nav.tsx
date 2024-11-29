"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const positioningClasses = "max-w-screen-lg px-8 mx-auto";

export default function NavComponent() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 left-0 right-0 py-3 z-50 bg-white">
      <div
        className={
          "w-full flex items-center gap-5 text-sm " + positioningClasses
        }
      >
        <Link
          href={"/"}
          className={
            "font-medium text-gray-500 hover:text-gray-700" +
            (pathname === "/" ? " !text-gray-900" : "")
          }
        >
          Our Mission
        </Link>
        <Link
          href={"/about-us"}
          className={
            "font-medium text-gray-500 hover:text-gray-700" +
            (pathname === "/about-us" ? " !text-gray-900" : "")
          }
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          className={
            "font-medium text-gray-500 hover:text-gray-700" +
            (pathname === "/contact" ? " !text-gray-900" : "")
          }
        >
          Contact
        </Link>
        <Link
          href={"/donate"}
          className={
            "font-medium text-gray-500 hover:text-gray-700" +
            (pathname === "/donate" ? " !text-gray-900" : "")
          }
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
