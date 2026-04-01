import type { ReactNode } from "react";
import Navbar from "@/components/public/navbar";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}