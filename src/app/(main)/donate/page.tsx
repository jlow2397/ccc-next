import Link from "next/link";
import { STRIPE_DONATE_URL } from "../../constants";
import UseCarousel from "./use-carousel";

const gridBg =
  "absolute z-[-1] inset-0 h-full w-full rounded-xl bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]";

const uses = [
  {
    title: "Shipping donated clothing",
    description:
      "Stores and partners donate excess clothing, and your gift helps cover the shipping costs to get those boxes to us.",
    photo: "/2025_events/08-2025_2.jpeg",
  },
  {
    title: "Distribution events",
    description:
      "Canopies, tables and supplies let us set up in neighborhoods around Los Angeles and hand out clothing in person.",
    photo: "/2025_events/12-2025_3.jpeg",
  },
  {
    title: "Seasonal essentials",
    description:
      "Warm layers, socks and blankets for the colder months, when the need is greatest for those without housing.",
    photo: "/2024_events/12-2024_3.jpeg",
  },
  {
    title: "Keeping things running",
    description:
      "Administrative expenses that keep our team organized, so more clothing reaches people who need it.",
    photo: "/2026_events/10-2026_3.jpeg",
  },
];

function DonateButton() {
  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <a
        href={STRIPE_DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-8 rounded-lg bg-slate-900 hover:bg-slate-700 text-white text-lg font-semibold shadow-lg hover:shadow-md duration-150"
      >
        Donate now
      </a>
      <span className="flex items-center gap-1.5 text-xs text-gray-500">
        Powered by
        <img
          src="/stripe-logo.png"
          alt="Stripe"
          className="h-3.5 w-auto opacity-50 mix-blend-multiply"
        />
      </span>
    </div>
  );
}

export default function DonatePage() {
  return (
    <>
      <div className="col-span-full flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-[2.5rem] leading-[1.1] font-semibold tracking-tight mb-6">
            Help us get clothing to those who need it
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We rely on financial contributions to cover the costs behind every
            clothing donation we receive and hand out. No contribution is too
            small, and we appreciate any gift you would like to make.
          </p>
          <DonateButton />
        </div>
        <div className="relative w-full md:w-1/2 min-h-[300px]">
          <div className="absolute top-0 right-0 p-3 bg-white rounded shadow-md rotate-3 w-3/4">
            <img
              src="/2025_events/12-2025_4.jpeg"
              alt="Volunteers at a Compassion Clothing Closet clothing table"
              className="rounded w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-3 bg-white rounded shadow-md -rotate-3 w-2/3">
            <img
              src="/2026_events/10-2026_2.jpeg"
              alt="Volunteers handing out clothing at an evening event"
              className="rounded w-full"
            />
          </div>
        </div>
      </div>

      <div className="col-span-full mt-6 border rounded-xl relative p-4 md:p-8">
        <div className={gridBg} />
        <h2 className="inline-block px-4 py-2 mb-4 rounded-lg bg-white border border-gray-300 text-black text-base font-semibold shadow-sm">
          Where your donation goes
        </h2>
        <UseCarousel uses={uses} />
      </div>

      <div className="col-span-full mt-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="md:max-w-md">
          <h2 className="text-2xl font-semibold mb-3">
            Put clothing in someone&apos;s hands
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Compassion Clothing Closet is a 501(c)(3) nonprofit. Prefer to give
            by check? Mail it to the address in our{" "}
            <Link
              href="/about-us#contact"
              className="text-blue-600 hover:underline"
            >
              contact info
            </Link>
            .
          </p>
        </div>
        <DonateButton />
      </div>
    </>
  );
}
