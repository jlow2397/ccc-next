"use client";

export default function Home() {
  return (
    <>
      <div className="col-span-full">
        <div className="border w-full h-full min-h-[400px] rounded-xl relative">
          <div className="absolute z-[-1] inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="flex flex-col md:flex-row h-full w-full py-10 px-10 justify-between items-center">
            <div className="md:max-w-[50%]">
              <h1 className="text-4xl leading-tight font-medium mb-5">
                Compassion Clothing Closet
              </h1>
              <div className="text-gray-800 leading-relaxed font-normal pr-5 mb-12">
                On a mission to gather clothing from various sources so that we
                can get clothing into the hands of those who need it.
              </div>
              <a
                href="https://donate.stripe.com/00g5nmgxY8S3aB2000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded bg-slate-50 hover:bg-slate-100 shadow-lg hover:shadow-md border border-slate-200 duration-150 font-medium"
              >
                Donate Here
              </a>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full md:w-1/2">
              <div className="absolute bottom-2 left-2 p-4 bg-white rounded shadow-md -rotate-3 hover:rotate-0 duration-300">
                <img src="/donation.png" className="max-w-[220px] rounded" />
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
      <div className="col-span-full mt-10">
        <h3 id="contact" className="text-2xl">
          Our Mission
        </h3>
      </div>
      <div className="col-span-full">
        We have so many resources in our country and one of those resources is
        an abundance of clothing.
        <br />
        <br />
        Sometimes sadly, clothes are thrown out because a store may not be able
        to sell them and they want to get rid of excess inventory.
        <br />
        <br />
        Wouldn’t it be nice to be able to put some of the “excess” clothing our
        country has into the hands of those who really need them, the unhoused
        or underserved families who may not be able afford much clothing for
        their families?
        <br />
        <br />
        Our focus will be the unhoused and underserved in the Los Angeles area.
        <br />
        <br />
        In the Bible it says in James 2:15-16, &quot;If a brother or sister is
        without clothes and one of you says to them, &lsquo;Go in peace, be
        warmed and be filled,&rsquo; and yet you do not give them what is
        necessary for their body, what use is that?&quot;
        <br />
        <br />
        Let&apos;s do what we can to provide the necessary clothing to those who
        have a need!
      </div>
    </>
  );
}
