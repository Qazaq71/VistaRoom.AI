import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./developer.css";
import DeveloperLayout from "./components/DeveloperLayout";

export const metadata: Metadata = {
  title: "Developer Studio",
  description: "Internal development workspace for VisataRoom AI.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DeveloperLayout>{children}</DeveloperLayout>;
}
