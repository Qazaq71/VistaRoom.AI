import type { ReactNode } from "react";
import "./developer.css";
import DeveloperLayout from "./components/DeveloperLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <DeveloperLayout>{children}</DeveloperLayout>;
}
