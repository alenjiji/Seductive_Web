import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";

const facts: { value: React.ReactNode; label: string }[] = [
  { value: <><CountUp to={7000} grouped /> m²</>, label: "Self-owned manufacturing facility" },
  { value: <><CountUp to={50} />+</>, label: "Experienced professionals" },
  { value: <CountUp to={10} />, label: "R&D engineers" },
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
        className="absolute -right-40 -top-40 size-[520px] animate-blob rounded-full bg-[radial-gradient(circle,rgb(227_30_63/0.25),transparent_70%)] [animation-duration:24s]"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal variant="none">
          <p className="pop mb-5 inline-block text-xs font-bold uppercase tracking-[1px] text-brand-light">Built by us</p>
          <h2
            id="facility"
            className="mb-5 font-display text-[32px] font-bold leading-[1.2] tracking-[-1px] md:text-[44px]"
          >
            <SplitWords>
              Made in our own <span className="text-brand-light">modernized factory</span>
            </SplitWords>
          </h2>
          <p className="rise-late text-base leading-[1.8] text-white/70 md:text-lg">
            Our self-owned facility and in-house R&amp;D team mean consistent quality, and a support team
            that knows every machine we ship, from the first install to the thousandth treatment.
          </p>
        </Reveal>
        <Reveal variant="none">
          <dl className="stagger grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                style={{ "--i": i } as React.CSSProperties}
                className="flex flex-col-reverse bg-night/60 p-6 transition-colors duration-300 hover:bg-night/30 md:p-8"
              >
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
