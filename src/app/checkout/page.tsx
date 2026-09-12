import { Metadata } from "next";
import { CheckoutPageView } from "@/components/checkout/CheckoutPageView";

export const metadata: Metadata = {
  title: "Checkout — An Gha Archival Catalogue",
  description:
    "Complete your archival garment order with secure carbon-neutral delivery and atelier provenance packaging.",
};

export default function CheckoutPage() {
  return <CheckoutPageView />;
}
