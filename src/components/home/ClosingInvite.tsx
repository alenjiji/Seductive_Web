import Link from "next/link";
import { ArrowRightIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { ContactChooser } from "@/components/ui/ContactChooser";
import { site } from "@/lib/site";

const numbers = site.lines.map((line) => `${line.region} ${line.display}`);

const channels = [
  { icon: PhoneIcon, label: "Call us", values: numbers, channel: "call" },
  { icon: WhatsAppIcon, label: "WhatsApp", values: numbers, channel: "whatsapp" },
  { icon: MailIcon, label: "Email", values: [site.email], href: `mailto:${site.email}` },
] as const;

const channelClass =
  "group flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/20 md:p-5";

export function ClosingInvite() {
  return (
    <section aria-labelledby="invite" className="bg-white px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <Reveal variant="scale">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-white md:px-16 md:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-32 size-96 animate-blob rounded-full bg-white/10" />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/3 size-80 animate-blob rounded-full bg-white/[.06] [animation-direction:reverse] [animation-duration:26s]"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[1px] text-white/80">We&apos;re here to help</p>
              <h2
                id="invite"
                className="mb-5 font-display text-[32px] font-bold leading-[1.15] tracking-[-1px] md:text-5xl"
              >
                <SplitWords>We&apos;d love to hear about your clinic</SplitWords>
              </h2>
              <p className="rise-late mb-9 max-w-xl text-base leading-[1.8] text-white/85 md:text-lg">
                Tell us about the treatments you offer and where you&apos;re based. We&apos;ll reply within 24
                hours with recommendations and a quote tailored to you.
              </p>
              <Link
                href="/contact#inquiry"
                className="rise-late group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[15px] font-semibold text-brand shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                Get a Free Quote
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="stagger flex flex-col gap-3">
              {channels.map((item, i) => {
                const { icon: Icon, label, values } = item;
                const body = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[1px] text-white/70">{label}</span>
                      {values.map((value) => (
                        <span key={value} className="block truncate text-[15px] font-bold md:text-base">
                          {value}
                        </span>
                      ))}
                    </span>
                    <ArrowRightIcon className="shrink-0 opacity-70 transition-transform group-hover:translate-x-1" />
                  </>
                );
                return (
                  <li key={label} style={{ "--i": i + 2 } as React.CSSProperties}>
                    {"channel" in item ? (
                      <ContactChooser channel={item.channel} className={channelClass}>
                        {body}
                      </ContactChooser>
                    ) : (
                      <a href={item.href} className={channelClass}>
                        {body}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
