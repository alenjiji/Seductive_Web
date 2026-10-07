"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-brand/10 bg-white/85 shadow-[0_4px_30px_rgb(0_0_0/0.06)] backdrop-blur-xl"
            : "border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[padding] duration-300 md:px-10 xl:px-[60px] ${
            scrolled ? "py-4 md:py-5" : "py-5 md:py-6"
          }`}
        >
          <Link href="/" aria-label="Seductive home" className="relative z-[60] shrink-0">
            <Image
              src="/images/site/logo.webp"
              alt="Seductive Medical & Beauty Equipments"
              width={400}
              height={211}
              preload
              sizes="160px"
              className={`w-auto drop-shadow-[0_2px_8px_rgb(0_0_0/0.1)] transition-all duration-300 ${
                scrolled ? "h-[38px] md:h-[42px]" : "h-[42px] md:h-[64px]"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-12 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                // The red wave only sits behind the links from lg up.
                className={`group relative text-[15px] font-medium tracking-[-0.01em] transition-colors ${
                  overHero
                    ? "text-ink hover:text-brand lg:text-white lg:hover:text-ink lg:aria-[current=page]:text-white"
                    : "text-ink hover:text-brand"
                } aria-[current=page]:text-brand`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full group-aria-[current=page]:w-full ${
                    overHero ? "bg-brand lg:bg-white" : "bg-brand"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-[0_4px_16px_rgb(227_30_63/0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(227_30_63/0.35)] ${
                overHero
                  ? "bg-brand text-white hover:bg-brand-dark lg:bg-white lg:text-brand lg:shadow-[0_4px_16px_rgb(0_0_0/0.15)] lg:hover:bg-white"
                  : "bg-brand text-white hover:bg-brand-dark"
              }`}
            >
              Get Quote
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[60] flex flex-col gap-[5px] p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[2.5px] w-[26px] rounded-full bg-ink transition-all duration-300 ${
                  open && i === 0 ? "translate-x-0 translate-y-[7.5px] rotate-45" : ""
                } ${open && i === 1 ? "opacity-0" : ""} ${
                  open && i === 2 ? "-translate-y-[7.5px] -rotate-45" : ""
                }`}
              />
            ))}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/[.98] backdrop-blur-xl transition-transform duration-400 ease-[cubic-bezier(.4,0,.2,1)] md:hidden ${
          open ? "translate-x-0" : "invisible translate-x-full"
        }`}
        inert={!open}
      >
        <div className="flex flex-col gap-1 px-8 pb-10 pt-[120px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="border-b border-line py-4 font-display text-3xl font-bold text-ink aria-[current=page]:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-xl bg-brand px-6 py-4 text-center text-lg font-semibold text-white shadow-brand"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
