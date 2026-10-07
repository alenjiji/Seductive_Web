import type { Faq as FaqItem } from "@/data/faq";
import { ChevronDownIcon } from "@/components/ui/icons";

/** Native <details> disclosures: keyboard and screen-reader accessible with no JS. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={item.question}
          name="faq"
          open={i === 0}
          className="group rounded-2xl border-2 border-line bg-white shadow-[0_4px_16px_rgb(0_0_0/0.06)] transition-colors open:border-brand/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 md:px-8 md:py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-lg font-bold leading-snug tracking-[-0.3px] text-ink md:text-[22px]">
              {item.question}
            </h3>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand transition-transform duration-300 group-open:rotate-180">
              <ChevronDownIcon size={20} />
            </span>
          </summary>
          <p className="px-6 pb-6 text-[15px] leading-[1.7] text-muted md:px-8 md:pb-7 md:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
