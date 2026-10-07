import Link from "next/link";
import { ArrowRightIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";

const channels = [
  { icon: PhoneIcon, label: "Call us", value: site.phone.display, href: site.phone.href, external: false },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: site.whatsapp.display,
    href: whatsappLink("Hi Seductive! I'd like to know more about your equipment."),
    external: true,
  },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
];

export function ClosingInvite() {
  return (
    <section aria-labelledby="invite" className="bg-white px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <Reveal>
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-white md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-32 size-96 rounded-full bg-white/10" />
          <div aria-hidden="true" className="absolute -bottom-40 left-1/3 size-80 rounded-full bg-white/[.06]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[1px] text-white/80">We&apos;re here to help</p>
              <h2
                id="invite"
                className="mb-5 font-display text-[32px] font-bold leading-[1.15] tracking-[-1px] md:text-5xl"
              >
                We&apos;d love to hear about your clinic
              </h2>
              <p className="mb-9 max-w-xl text-base leading-[1.8] text-white/85 md:text-lg">
                Tell us about the treatments you offer and where you&apos;re based. We&apos;ll reply within 24
                hours with recommendations and a quote tailored to you.
              </p>
              <Link
                href="/contact#inquiry"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[15px] font-semibold text-brand shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                Get a Free Quote
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="flex flex-col gap-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/20 md:p-5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[1px] text-white/70">{label}</span>
                      <span className="block truncate text-base font-bold md:text-lg">{value}</span>
                    </span>
                    <ArrowRightIcon className="shrink-0 opacity-70 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
