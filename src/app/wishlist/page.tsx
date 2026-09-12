import { Metadata } from "next";
import { WishlistPageView } from "@/components/wishlist/WishlistPageView";

export const metadata: Metadata = {
  title: "Curated Wishlist — An Gha Archival Catalogue",
  description:
    "Your private archive of reserved silhouettes, tactile materials, and curated sartorial monographs.",
};

export default function WishlistPage() {
  return <WishlistPageView />;
}
