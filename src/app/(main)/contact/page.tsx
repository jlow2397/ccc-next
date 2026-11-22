import { redirect } from "next/navigation";

// Contact info now lives in a card on the About Us page.
export default function ContactUsPage() {
  redirect("/about-us#contact");
}
