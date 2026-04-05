import type { ReactNode } from "react";
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import WhatsAppStickyButton from "@/components/public/whatsapp-sticky-button";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}