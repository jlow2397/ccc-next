import type { EventYear } from "./events";

const tilts = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];

export default function EventGallery({ years }: { years: EventYear[] }) {
  return (
    <section className="col-span-full p-6 md:p-10 border w-full rounded-xl relative">
      <div className="absolute z-[-1] inset-0 h-full w-full rounded-xl bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <h3 className="text-3xl font-semibold mb-8">Our Events</h3>
      <div className="flex flex-col gap-6">
        {years.map(({ year, photos }) => (
          <div key={year}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 rounded-full bg-slate-800 text-white text-sm font-semibold tracking-wide shadow-sm">
                {year}
              </span>
              <div className="h-px flex-1 bg-slate-300" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {photos.map((src, i) => (
                <div
                  key={src}
                  className={`relative p-3 bg-white rounded shadow-md ${tilts[i % tilts.length]} hover:rotate-0 hover:scale-125 hover:z-10 duration-150`}
                >
                  <img
                    src={src}
                    alt={`Compassion Clothing Closet ${year} event`}
                    loading="lazy"
                    className="rounded w-full aspect-[4/3] object-cover object-[center_30%]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
