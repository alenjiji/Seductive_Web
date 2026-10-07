import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

const productLinks = [
  { href: "/products?category=laser-light", label: "Laser Systems" },
  { href: "/products?category=hifu-machine", label: "HIFU Devices" },
  { href: "/products?category=body-skin", label: "Beauty Equipment" },
  { href: "/products", label: "View All" },
];

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.5px] text-white">{title}</h2>
      {children}
    </div>
  );
}

const linkClass =
  "inline-block text-sm text-white/50 transition-all hover:translate-x-1 hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-night to-[#16161f] pt-16 text-white/80 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-brand before:to-transparent md:pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-[60px]">
        <div className="grid gap-14 border-b border-white/[.08] pb-14 lg:grid-cols-[1.5fr_2fr] lg:gap-24">
          <div className="max-w-sm">
            <Image
              src="/images/site/logo.webp"
              alt="Seductive"
              width={400}
              height={211}
              sizes="100px"
              className="mb-5 h-[50px] w-auto opacity-95 brightness-0 invert"
            />
            <p className="mb-3 font-display text-xl font-semibold leading-snug text-white">
              Transforming Beauty Through Innovation
            </p>
            <p className="text-sm leading-[1.8] text-white/50">
              16 years of excellence in medical aesthetics. Trusted by professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-14">
            <FooterColumn title="Quick Links">
              <ul className="flex flex-col gap-3.5">
                <li><Link href="/" className={linkClass}>Home</Link></li>
                <li><Link href="/products" className={linkClass}>Products</Link></li>
                <li><Link href="/about" className={linkClass}>About Us</Link></li>
              </ul>
            </FooterColumn>
            <FooterColumn title="Products">
              <ul className="flex flex-col gap-3.5">
                {productLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={linkClass}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
            <FooterColumn title="Connect">
              <ul className="mb-7 flex flex-col gap-3.5">
                <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
              </ul>
              <dl className="flex gap-8">
                {[
                  [site.claims.countries, "Countries"],
                  [site.claims.models, "Models"],
                ].map(([num, label]) => (
                  <div key={label} className="flex flex-col-reverse gap-1">
                    <dt className="text-[11px] uppercase tracking-[0.5px] text-white/40">{label}</dt>
                    <dd className="font-display text-2xl font-bold leading-none text-brand">{num}</dd>
                  </div>
                ))}
              </dl>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-center text-[13px] text-white/40 sm:flex-row">
          <p>
            © <CopyrightYear /> Seductive. All rights reserved.
          </p>
          <p className="text-xs">ISO Certified • CE Approved</p>
        </div>
      </div>
    </footer>
  );
}
