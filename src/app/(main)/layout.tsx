"use client";

import NavComponent from "../nav";

const positioningClasses = "max-w-screen-lg px-8 mx-auto";

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavComponent />
      <div className="min-h-[calc(100dvh-108px)]">
        <div
          className={
            "w-full grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10 py-20 pb-40  " +
            positioningClasses
          }
        >
          {children}
        </div>
      </div>
      <footer className="w-full mt-auto bg-slate-50 min-h-12">
        <div
          className={
            "flex justify-between text-gray-700 py-4 " + positioningClasses
          }
        >
          <div className="flex text-xs flex-col gap-1">
            Compassion Clothing Closet, 2024
            <div className="text-gray-500">a 501(c)(3) non profit</div>
          </div>
        </div>
      </footer>
    </>
  );
}
