import Image from "next/image";
import { GraduationIcon, HeadsetIcon, PhoneIcon, ShieldIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";

const promises = [
  {
    icon: ShieldIcon,
    title: "Free consultation",
    text: "Tell us your treatments and budget, and we'll help you compare the right models.",
  },
  {
    icon: GraduationIcon,
    title: "Training included",
    text: "Training materials, video tutorials and technical support from day one.",
  },
  {
    icon: HeadsetIcon,
    title: "Support that answers",
    text: "24/7 technical support, with replies to every inquiry within 24 hours.",
  },
];

export function Welcome() {
  return (
    <section aria-labelledby="welcome" className="bg-surface px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_rgb(0_0_0/0.12)]">
            <Image
              src="/images/home/treatment.webp"
              alt="Diode laser hair removal treatment in a clinic"
              width={1400}
              height={641}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="aspect-[4/3] w-full object-cover object-[30%_50%] sm:aspect-[16/10]"
            />
          </div>
          <div className="relative -mt-12 ml-auto mr-4 max-w-[320px] rounded-2xl bg-white p-5 shadow-[0_20px_40px_rgb(0_0_0/0.12)] sm:absolute sm:-bottom-8 sm:right-6 sm:mt-0 sm:mr-0">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[1px] text-brand">Say hello</p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Questions about a machine? Our specialists are a message away.
            </p>
            <div className="flex gap-2">
              <a
                href={whatsappLink("Hi Seductive! I'd like some advice on equipment for my clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1eb457]"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
              <a
                href={site.phone.href}
                aria-label={`Call ${site.phone.display}`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-line px-3 text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <PhoneIcon size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-5 inline-block rounded-full border-2 border-brand bg-white px-6 py-2 text-xs font-bold uppercase tracking-[1px] text-brand">
            Welcome to Seductive
          </p>
          <h2
            id="welcome"
            className="mb-6 font-display text-[32px] font-bold leading-[1.2] tracking-[-1px] text-ink md:text-[44px]"
          >
            Let&apos;s find the <span className="text-brand">right machine</span> for your clinic
          </h2>
          <p className="mb-5 text-base leading-[1.8] text-muted md:text-lg">
            Since 2009, clinic owners, dermatologists and beauty professionals in more than 60 countries
            have trusted us with the equipment behind their treatments.
          </p>
          <p className="mb-10 text-base leading-[1.8] text-muted md:text-lg">
            Whether you&apos;re opening your first studio or adding a new service, we&apos;re happy to walk
            you through the options. No pressure, just honest advice from people who know the machines.
          </p>
          <ul className="space-y-6">
            {promises.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-card ring-1 ring-line">
                  <Icon size={22} />
                </span>
                <span>
                  <span className="mb-1 block font-display text-lg font-bold text-ink">{title}</span>
                  <span className="block text-[15px] leading-relaxed text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
