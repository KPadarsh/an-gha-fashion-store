import { Metadata } from "next";
import { SignUpView } from "@/components/auth/SignUpView";

export const metadata: Metadata = {
  title: "Create Atelier Dossier — An Gha Archival Catalogue",
  description:
    "Enroll for priority dispatches, private lookbooks, and archival garment services.",
};

export default function SignUpPage() {
  return <SignUpView />;
}
