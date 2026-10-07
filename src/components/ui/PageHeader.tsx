import { SplitWords } from "./SplitWords";

type Props = {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHeader({ badge, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-14 pt-[140px] text-center md:px-[60px] md:pb-16 md:pt-[180px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgb(227_30_63/0.05)_0%,transparent_70%)] [clip-path:ellipse(80%_60%_at_70%_20%)]"
      />
      <div className="relative mx-auto max-w-[800px]">
        <p className="mb-6 inline-flex animate-pop-in items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-[1px] text-ink">
          <span className="size-2 animate-pulse-dot rounded-full bg-brand" />
          {badge}
        </p>
        <h1
          style={{ "--split-delay": "0.1s" } as React.CSSProperties}
          className="split-load mb-5 font-display text-4xl font-bold leading-[1.2] tracking-[-1px] text-ink md:text-[44px] xl:text-[56px]"
        >
          <SplitWords>{title}</SplitWords>
        </h1>
        <p className="mx-auto max-w-[600px] animate-rise-in text-base leading-[1.7] text-muted [--rise-delay:.45s] md:text-lg">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
