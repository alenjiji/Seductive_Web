import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";

type Props = {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

/**
 * Red pill label + Playfair title, as on the legacy home page. On scroll the label pops in,
 * the title rises word by word and the subtitle follows.
 */
export function SectionHeader({ label, title, subtitle, align = "center", id, className = "" }: Props) {
  const centered = align === "center";
  return (
    <Reveal variant="none" className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className="pop mb-5 inline-block rounded-full border-2 border-brand bg-white px-6 py-2 text-xs font-bold uppercase tracking-[1px] text-brand">
        {label}
      </p>
      <h2
        id={id}
        className="mb-4 font-display text-[32px] font-bold leading-[1.2] tracking-[-1px] text-ink md:text-[44px] xl:text-[52px]"
      >
        <SplitWords>{title}</SplitWords>
      </h2>
      {subtitle && (
        <p className={`rise-late text-base leading-relaxed text-muted md:text-lg ${centered ? "mx-auto max-w-[600px]" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
