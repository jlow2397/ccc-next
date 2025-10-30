export default function ContactUsPage() {
  return (
    <>
      <div className="col-span-full">
        <h3 id="contact" className="text-3xl font-semibold">
          Contact Us
        </h3>
      </div>
      <div className="col-span-full mb-auto">
        Email:{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:info@compassionclothingcloset.org"
        >
          info@compassionclothingcloset.org
        </a>
        <br />
        <br />
        If you have any issues with donating online or would like to donate via
        check, please email us and we can assist you further. Thank you for your
        interest and support.
      </div>
    </>
  );
}
