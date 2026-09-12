import type { Metadata } from "next";
import { OrderConfirmationPageView } from "@/components/order-confirmation/OrderConfirmationPageView";

export const metadata: Metadata = {
  title: "Order Confirmation — An Gha Archival Catalogue",
  description: "Archival receipt and order trajectory for your bespoke An Gha pieces.",
};

export default function OrderConfirmationPage() {
  return <OrderConfirmationPageView />;
}
