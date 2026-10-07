import { site } from "@/lib/site";

const items = [
  "ISO Certified",
  "CE Approved",
  "24/7 Technical Support",
  "Free Consultation",
  "Training Included",
  `${site.claims.models} Models`,
  `${site.claims.countries} Countries`,
  "Worldwide Shipping",
  `Trusted Since ${site.claims.since}`,
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[1.5px] text-white/90 md:px-8">
          <span aria-hidden="true" className="mr-6 text-brand-light md:mr-8">
            ✦
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A slowly scrolling band of trust points under the hero. Pauses on hover. */
export function TrustMarquee() {
  return (
    <section aria-label="Why clinics choose Seductive" className="marquee overflow-hidden bg-night py-5">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
