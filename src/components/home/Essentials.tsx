import Link from "next/link";
import { essentials } from "@/data/essentials";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactChooser } from "@/components/ui/ContactChooser";

export function Essentials() {
  return (
    <section aria-labelledby="essentials" className="bg-surface px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          id="essentials"
          label="Clinic Essentials"
          title={
            <>
              Everything Your <span className="text-brand">Treatment Room</span> Needs
            </>
          }
          subtitle="Beyond the machines, we supply the consumables, skincare and small devices that keep your clinic running."
          className="mb-14 md:mb-16"
        />

        <Reveal variant="none">
          <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {essentials.map((group, i) => (
              <div key={group.title} className="flex" style={{ "--i": i } as React.CSSProperties}>
                <article
                  data-glow
                  className="group relative flex w-full flex-col overflow-hidden rounded-2xl border-2 border-line bg-white p-7 shadow-[0_4px_16px_rgb(0_0_0/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_rgb(227_30_63/0.12)] md:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-6 font-display text-[110px] font-bold leading-none text-line transition-colors duration-500 group-hover:text-brand-tint"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mb-2 mt-6 font-display text-[22px] font-bold leading-snug text-ink">{group.title}</h3>
                  <p className="relative mb-6 text-[15px] leading-relaxed text-muted">{group.description}</p>
                  <ul className="relative mt-auto flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium text-ink ring-1 ring-line transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:ring-brand"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="scale">
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 ring-1 ring-line md:flex-row md:p-8">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-bold text-ink md:text-2xl">Stocking up for your clinic?</p>
              <p className="mt-1 text-[15px] text-muted">
                Ask for our latest price list. Volume pricing is available on most consumables.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ContactChooser
                channel="whatsapp"
                message="Hi Seductive, could you send me your latest consumables price list?"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1eb457]"
              >
                <WhatsAppIcon size={18} />
                Request Price List
              </ContactChooser>
              <Link
                href="/contact#inquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-line px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Send an Inquiry
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
