import { Metadata } from "next";
import { SignInView } from "@/components/auth/SignInView";

export const metadata: Metadata = {
  title: "Client Sign In — An Gha Archival Catalogue",
  description:
    "Access your private client dossier, saved archival curation, bespoke fitting records, and seasonal private previews.",
};

export default function SignInPage() {
  return <SignInView />;
}
