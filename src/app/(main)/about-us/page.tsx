type Person = {
  name: string;
  title: string;
  photo: string;
  photoPosition: string;
  bio: string[];
};

const board: Person[] = [
  {
    name: "Helen Low",
    title: "Founder and CEO",
    photo: "/profiles/helen.png",
    photoPosition: "object-center",
    bio: [
      "Helen Low has worked in the accounting/finance sector for 30+ years. She has a passion to initiate and start projects to meet needs that she sees around her. She had this idea of starting a nonprofit to provide clothing to the homeless and underserved communities years ago. After receiving her MBA degree in 2019, she has been formulating ideas and doing research to start this nonprofit. She has an affinity for clothes, of course, and it gives her great joy to see the happy faces of those who receive new clothes that are very much appreciated!",
      "Helen earned a BBA degree in Accounting from Texas A&M University and an MBA degree from University of California Irvine, Paul Merage School of Business.",
    ],
  },
  {
    name: "Nicole Chang",
    title: "CFO and Founding Board Member",
    photo: "/profiles/nicole.png",
    photoPosition: "object-top",
    bio: [
      "Nicole is an experienced commercial real estate executive, bringing a wealth of knowledge in strategic planning, finance, and operational efficiency. She has a strong passion for supporting underserved communities and is committed to leveraging her expertise to help the organization grow and operate effectively. Outside of her work, Nicole spends time with her family and loves to travel.",
      "Nicole earned a B.S. degree from California State Polytechnic University, Pomona and an MBA degree from University of Southern California, Marshall School of Business.",
    ],
  },
  {
    name: "Arly Capuyan",
    title: "Secretary and Founding Board Member",
    photo: "/profiles/arly.png",
    photoPosition: "object-bottom",
    bio: [
      "Arly Capuyan is from the Philippines and has worked as a Pharmacy Technician for almost 8 years now. She is a member of Bread of Life Church in Torrance and is actively involved in different ministries through her church including helping at Beacon Light Missions (ministry to the homeless) in Wilmington, CA.",
      "She has the heart to serve and help where help is needed. She often displays a heartfelt smile when she knows she's being used as an ambassador to show others the love of Jesus.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="w-full col-span-full text-2xl">
        <div className="md:w-3/4">
          The Compassion Clothing Closet Board of Directors consists of 3
          members of the Bread of Life Church in Torrance, CA.
        </div>
      </div>

      <div className="col-span-full bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-200">
        {board.map((person) => (
          <div
            key={person.name}
            className="flex flex-col sm:flex-row gap-6 p-5 md:p-8"
          >
            <img
              src={person.photo}
              alt={person.name}
              className={`w-full sm:w-48 shrink-0 self-start aspect-[4/5] rounded-lg object-cover ${person.photoPosition}`}
            />
            <div>
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <div className="text-sm font-medium text-gray-600 mb-4">
                {person.title}
              </div>
              <div className="flex flex-col gap-4 text-gray-800 leading-relaxed">
                {person.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="contact"
        className="col-span-full scroll-mt-24 p-5 md:p-8 bg-slate-100 rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <address className="not-italic text-gray-800 leading-relaxed shrink-0">
            Compassion Clothing Closet
            <br />
            P.O. Box 3844
            <br />
            Torrance, CA 90510
            <br />
            <a
              className="text-blue-600 hover:underline break-all"
              href="mailto:info@compassionclothingcloset.org"
            >
              info@compassionclothingcloset.org
            </a>
          </address>
          <p className="text-gray-600 leading-relaxed">
            If you have any issues with donating online or would like to donate
            via check, please email us and we can assist you further. Thank you
            for your interest and support.
          </p>
        </div>
      </div>
    </>
  );
}
