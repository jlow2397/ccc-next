import Link from "next/link";

export default function DonatePage() {
  return (
    <>
      <div className="col-span-full">
        <h3 id="contact" className="text-2xl">
          Donate
        </h3>
      </div>
      <div className="col-span-full">
        If you would like to join us in this cause, we do need financial
        contributions to help pay for administrative expenses such as shipping
        costs associated with the clothing donations we receive.
        <br />
        <br />
        No contribution is too small as we appreciate any gift you would like to
        make. You can donate online here or send a check to our address located
        on the{" "}
        <Link href={"/contact"} className="text-blue-500 hover:underline">
          Contact
        </Link>{" "}
        tab.
        <br />
        <br />
        <br />
        <a
          href="https://donate.stripe.com/00g5nmgxY8S3aB2000"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded bg-slate-50 hover:bg-slate-100 shadow-lg hover:shadow-md border border-slate-200 duration-150 font-medium"
        >
          Donate Here
        </a>
      </div>
    </>
  );
}
