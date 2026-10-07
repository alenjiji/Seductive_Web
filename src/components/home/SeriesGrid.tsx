import Link from "next/link";
import { series } from "@/data/series";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export function SeriesGrid() {
  return (
    <section aria-labelledby="series" className="bg-surface px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeader
            id="series"
            label="Our Product Series"
            title={
              <>
                {site.claims.series} Revolutionary <span className="text-brand">Product Series</span>
              </>
            }
            subtitle="Cutting-edge solutions designed to transform aesthetic medicine"
            className="mb-14 md:mb-20"
          />
        </Reveal>
        <Reveal>
          <ul className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-divider ring-1 ring-divider md:grid-cols-3 xl:grid-cols-4">
            {series.map((item) => (
              <li key={item.title} className="flex">
                <Link
                  href={item.href}
                  className="group relative flex min-h-[112px] w-full flex-col items-center justify-center gap-2 bg-white px-4 py-8 text-center transition-all duration-300 hover:z-10 hover:bg-surface hover:shadow-[0_8px_24px_rgb(227_30_63/0.12)] md:min-h-[140px] md:px-8 md:py-12"
                >
                  <span className="text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand md:text-[15px]">
                    {item.title}
                  </span>
                  <ArrowRightIcon
                    size={16}
                    className="text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="text-center">
          <Link
            href="/products"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-brand px-11 py-5 text-base font-semibold text-white shadow-[0_8px_24px_rgb(227_30_63/0.3)] transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_12px_32px_rgb(227_30_63/0.4)] sm:w-auto"
          >
            View All Products
            <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
