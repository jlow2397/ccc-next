"use client";

import Link from "next/link";
import EventGallery from "./event-gallery";
import { eventYears } from "./events";

export default function Home() {
  return (
    <>
      {/* -mt-20 cancels the layout's top padding so the hero starts right under the nav */}
      <div className="col-span-full -mt-20">
        <div className="w-full h-full min-h-[400px] relative pt-12 pb-8">
          {/* White wash: solid under the nav, then a radial glow behind the content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-[-2] inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(to_bottom,white,transparent_35%),radial-gradient(ellipse_65%_52%_at_50%_45%,white_35%,rgba(255,255,255,0.85)_55%,transparent_100%)]"
          />
          {/* Grid starts below the nav area and fades out toward every edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-[-1] top-20 bottom-0 left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 55%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 55%, transparent)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="flex flex-col md:flex-row h-full w-full py-10 justify-between items-center">
            <div className="md:max-w-[50%]">
              <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight mb-6">
                Compassion Clothing Closet
              </h1>
              <div className="text-lg md:text-xl text-gray-700 leading-[1.75] font-normal pr-5 mb-10">
                On a mission to gather clothing and put it in the hands of those
                in need.
              </div>
              <Link
                href="/donate"
                className="inline-block py-2 px-5 rounded-lg bg-slate-900 hover:bg-slate-700 text-white font-semibold shadow-lg hover:shadow-md duration-150"
              >
                Donate Here
              </Link>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full md:w-1/2">
              <div className="z-10 absolute bottom-2 left-2 p-4 bg-white rounded shadow-md -rotate-3 hover:rotate-0 duration-300">
                <img
                  src="/2024_events/12-2024_2.jpeg"
                  className="max-w-[220px] rounded"
                />
              </div>
              <div className="invisible sm:visible absolute top-2 right-0 p-4 bg-white rounded shadow-md rotate-3 hover:rotate-0 duration-300">
                <img
                  src="/beacon_light_1.jpg"
                  className="max-w-[300px] rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full w-full max-w-[800px] mx-auto mt-10 -mb-5">
        <h3 id="contact" className="text-3xl font-semibold">
          Our Mission
        </h3>
      </div>
      <div className="col-span-full w-full max-w-[800px] mx-auto text-lg md:text-xl leading-relaxed">
        We have so many resources in our country and one of those resources is
        an abundance of clothing.
        <br />
        <br />
        Sometimes sadly, clothes are thrown out because a store may not be able
        to sell them and they want to get rid of excess inventory.
      </div>
      <div className="col-span-full grid md:grid-cols-2 bg-white border rounded-xl overflow-hidden shadow-sm">
        {/* Photos on a grid that fades into the white card (rightward on desktop, downward on mobile) */}
        <div className="relative min-h-[360px] md:min-h-[400px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent)] [mask-image:linear-gradient(to_bottom,black_60%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,black_55%,transparent)] md:[mask-image:linear-gradient(to_right,black_55%,transparent)]"
          />
          <div className="absolute bottom-6 left-4 p-4 bg-white rounded shadow-md -rotate-3 hover:rotate-0 duration-300 w-[55%] max-w-[240px]">
            <img
              src="/2024_events/12-2024_11.jpeg"
              alt="Volunteer sorting clothing at a table"
              className="w-full rounded"
            />
          </div>
          <div className="absolute top-6 right-4 md:right-0 p-4 bg-white rounded shadow-md rotate-3 hover:rotate-0 duration-300 w-[60%] max-w-[270px]">
            <img
              src="/2024_events/12-2024_7.jpeg"
              alt="Volunteers handing out clothing under a canopy"
              className="w-full rounded"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 p-6 md:p-10 text-lg md:text-xl font-normal leading-relaxed">
          <p>
            Wouldn’t it be nice to be able to put some of the “excess” clothing
            our country has into the hands of those who really need them, the
            unhoused or underserved families who may not be able to afford much
            clothing for their families?
          </p>
          <p>
            Our focus will be the unhoused and underserved in the Los Angeles
            area.
          </p>
        </div>
      </div>
      <div className="col-span-full w-full max-w-[800px] mx-auto text-lg md:text-xl leading-relaxed">
        In the Bible it says in James 2:15-16, &quot;If a brother or sister is
        without clothes and one of you says to them, &lsquo;Go in peace, be
        warmed and be filled,&rsquo; and yet you do not give them what is
        necessary for their body, what use is that?&quot;
        <br />
        <br />
        Let&apos;s do what we can to provide the necessary clothing to those who
        have a need!
      </div>
      <EventGallery years={eventYears} />
      {/* TODO: add some cta */}
    </>
  );
}
