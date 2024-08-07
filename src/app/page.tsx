"use client";

import { motion } from "framer-motion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Home() {
  return (
    <div className="w-full grid grid-cols-2 gap-5 max-w-screen-lg mx-auto py-20 px-8 pb-40">
      <div
        className="col-span-full flex relative justify-center rounded-lg items-center p-20"
        style={{ background: "left / cover url(/donation.png)" }}
      >
        <motion.div
          initial={{ opacity: 0, rotateY: "-94deg" }}
          animate={{ opacity: 1, rotateY: "0deg" }}
          className="p-4 mb-20 relative rounded-lg shadow-lg bg-white opening-animation mx-auto flex justify-center items-center duration-150 card-animation"
        >
          <img
            src="/ccc.png"
            className="max-h-[300px] min-h-[300px] aspect-square object-cover object-center"
            alt="logo"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute left-0 -bottom-12 px-3 py-2 rounded bg-white font-medium hover:bg-gray-100 duration-100 hover:text-blue-700"
          >
            <a href="/#contact">Contact Us</a>
          </motion.div>
        </motion.div>
      </div>
      <div className="col-span-full mt-20">
        <h3 className="text-xl font-medium">Our Story</h3>
      </div>
      <div className="col-span-2 flex flex-col gap-10 min-h-[80vh] justify-center text-3xl lg:text-5xl/tight">
        We have so many resources in our country and one of those resources is
        an abundance of clothing.
        <div className="w-full min-h-[400px] bg-gray-100 rounded mb-auto"></div>
      </div>
      <div className="col-span-2 flex flex-col gap-10 min-h-screen justify-center text-3xl lg:text-5xl/tight">
        Sometimes sadly, clothes are thrown out because a store may not be able
        to sell them and they want to get rid of excess inventory.
        <div className="w-full min-h-[400px] bg-gray-100 rounded"></div>
      </div>
      <div className="col-span-2 text-3xl lg:text-5xl/tight my-20 min-h-[80vh]">
        <motion.div
          className="sticky top-1/4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ margin: "-100px", amount: "all" }}
        >
          Wouldn’t it be nice to be able to put some of the “excess” clothing
          our country has into the hands of those who really need them, the
          unhoused or underserved families who may not be able afford much
          clothing for their families?
        </motion.div>
      </div>
      <div className="col-span-2 text-2xl text-center p-10 m-20 border border-gray-200 rounded-lg shadow-sm duration-200 hover:shadow-xl">
        Our mission is to gather clothing from various sources so that we can
        get clothing into the hands of those who need it.
        <div className="flex justify-center items-center gap-2 my-10 relative">
          <div className="w-full min-h-[400px] bg-gray-100 rounded"></div>
          <div className="bg-white flex items-center justify-center scale-[-1] rounded h-8 w-8 absolute left-2 top-1/2 -translate-y-1/2 border border-gray-100 duration-100 hover:border-gray-300">
            {"‣"}
          </div>
          <div className="bg-white flex items-center justify-center rounded h-8 w-8 absolute right-2 top-1/2 -translate-y-1/2 border border-gray-100 duration-100 hover:border-gray-300">
            {"‣"}
          </div>
        </div>
        Our focus will be the unhoused and underserved in the Los Angeles area.
      </div>
      <div className="col-span-2">
        In the Bible it says in James 2:15-16, If a brother or sister is without
        clothes and one of you says to them, &quot;Go in peace, be warmed and be
        filled,&quot; and yet you do not give them what is necessary for their
        body, what use is that? Let&apos;s do what we can to provide the
        necessary clothing to those who have a need!
      </div>
      <div className="col-span-full mt-20">
        <h3 id="contact" className="text-xl font-medium">
          Contact Us
        </h3>
      </div>
      <div className="col-span-2">
        Compassion Clothing Closet
        <br /> P. O. Box 3844
        <br /> Torrance, CA 90510
        <br />
        <br />
        Email:{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:compassionclothingcloset@gmail.com"
        >
          compassionclothingcloset@gmail.com
        </a>
      </div>
    </div>
  );
}
