export default function ContactUsPage() {
  return (
    <>
      <div className="col-span-full">
        <h3 id="contact" className="text-3xl font-semibold">
          Contact Us
        </h3>
      </div>
      <div className="col-span-full mb-auto">
        Compassion Clothing Closet
        <br /> P. O. Box 3844
        <br /> Torrance, CA 90510
        <br />
        <br />
        Email:{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:info@compassionclothingcloset.org"
        >
          info@compassionclothingcloset.org
        </a>
      </div>
    </>
  );
}
