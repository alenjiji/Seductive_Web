import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";

type Props = {
  title?: string;
  text?: string;
  whatsappMessage?: string;
};

export function InquiryBand({
  title = "Need Help Choosing the Right Equipment?",
  text = "Our team of experts is ready to help you find the perfect solution for your business needs",
  whatsappMessage = "Hi Seductive, I'd like help choosing the right equipment for my clinic.",
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-center text-white md:px-12 md:py-16">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-72 rounded-full bg-white/10 md:size-96"
      />
      <div aria-hidden="true" className="absolute -bottom-32 -left-16 size-72 rounded-full bg-white/[.06]" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.5px] md:text-[32px] md:leading-tight">
          {title}
        </h2>
        <p className="mb-8 text-base leading-[1.7] text-white/85 md:text-[17px]">{text}</p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[15px] font-semibold text-brand shadow-lg transition-all hover:-translate-y-0.5"
          >
            Request Full Catalog
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/40 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          Or call{" "}
          <a href={site.phone.href} className="font-semibold text-white underline-offset-4 hover:underline">
            {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
