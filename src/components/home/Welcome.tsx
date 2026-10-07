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
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="mb-5 inline-block rounded-full border-2 border-brand bg-white px-6 py-2 text-xs font-bold uppercase tracking-[1px] text-brand">
            Welcome to Seductive
          </p>
          <h2
            id="welcome"
            className="mb-6 font-display text-[32px] font-bold leading-[1.2] tracking-[-1px] text-ink md:text-[44px] xl:text-[52px]"
          >
            Let&apos;s find the <span className="text-brand">right machine</span> for your clinic
          </h2>
          <p className="mb-5 max-w-[600px] text-base leading-[1.8] text-muted md:text-lg">
            Since 2009, clinic owners, dermatologists and beauty professionals in 5+ countries
            have trusted us with the equipment behind their treatments.
          </p>
          <p className="mb-10 max-w-[600px] text-base leading-[1.8] text-muted md:text-lg">
            Whether you&apos;re opening your first studio or adding a new service, we&apos;re happy to walk
            you through the options. No pressure, just honest advice from people who know the machines.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={whatsappLink("Hi Seductive! I'd like some advice on equipment for my clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#25d366] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_12px_rgb(37_211_102/0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#1eb457]"
            >
              <WhatsAppIcon size={18} />
              Say Hello on WhatsApp
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
            >
              <PhoneIcon size={17} className="text-brand" />
              or call {site.phone.display}
            </a>
          </div>
        </Reveal>

        <ul className="flex flex-col gap-4">
          {promises.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120}>
              <div className="flex gap-5 rounded-2xl border-2 border-line bg-white p-6 shadow-[0_4px_16px_rgb(0_0_0/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_rgb(227_30_63/0.12)] md:p-7">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon size={24} />
                </span>
                <span>
                  <span className="mb-1.5 block font-display text-xl font-bold text-ink">{title}</span>
                  <span className="block text-[15px] leading-relaxed text-muted">{text}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
