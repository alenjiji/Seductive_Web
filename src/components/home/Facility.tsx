import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { value: "7,000 m²", label: "Self-owned manufacturing facility" },
  { value: "50+", label: "Experienced professionals" },
  { value: "10", label: "R&D engineers" },
  { value: "ISO · CE", label: "Certified quality" },
];

export function Facility() {
  return (
    <section
      aria-labelledby="facility"
      className="relative overflow-hidden bg-gradient-to-br from-night to-[#16161f] px-6 py-20 text-white md:px-10 md:py-24 xl:px-[60px]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgb(227_30_63/0.25),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[1px] text-brand-light">Built by us</p>
          <h2
            id="facility"
            className="mb-5 font-display text-[32px] font-bold leading-[1.2] tracking-[-1px] md:text-[44px]"
          >
            Made in our own <span className="text-brand-light">modernized factory</span>
          </h2>
          <p className="text-base leading-[1.8] text-white/70 md:text-lg">
            Our self-owned facility and in-house R&amp;D team mean consistent quality, and a support team
            that knows every machine we ship, from the first install to the thousandth treatment.
          </p>
        </Reveal>
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse bg-night/60 p-6 md:p-8">
                <dt className="mt-2 text-[13px] leading-snug text-white/60 md:text-sm">{fact.label}</dt>
                <dd className="font-display text-3xl font-bold text-brand-light md:text-4xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
