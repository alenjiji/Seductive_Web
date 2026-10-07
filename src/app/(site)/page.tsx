import type { Metadata } from "next";
import { ClosingInvite } from "@/components/home/ClosingInvite";
import { Essentials } from "@/components/home/Essentials";
import { Facility } from "@/components/home/Facility";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Process } from "@/components/home/Process";
import { SeriesGrid } from "@/components/home/SeriesGrid";
import { Welcome } from "@/components/home/Welcome";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: [{ url: "/images/home/hero-2in1.webp", alt: "Seductive 2-in-1 diode laser" }] },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.title,
  url: site.url,
  logo: new URL("/images/site/logo.webp", site.url).toString(),
  email: site.email,
  telephone: site.phone.href.replace("tel:", ""),
  foundingDate: String(site.claims.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No.57, 4th Floor, UNIGROVE Business Center, Al Gaizi Plaza, Al Garhoud",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\u003c") }}
      />
      <Hero />
      <Welcome />
      <NewArrivals />
      <SeriesGrid />
      <FeaturedProducts />
      <Essentials />
      <Process />
      <Facility />
      <ClosingInvite />
    </>
  );
}
