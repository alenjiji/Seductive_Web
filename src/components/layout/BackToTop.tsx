"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ui/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  // Product pages have their own sticky CTA bar on small screens.
  const hasCtaBar = usePathname().startsWith("/products/");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-6 right-6 z-30 flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgb(227_30_63/0.3)] transition-all duration-300 hover:-translate-y-1 md:bottom-8 md:right-8 md:size-[52px] ${hasCtaBar ? "max-lg:hidden" : ""} ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon size={20} />
    </button>
  );
}
