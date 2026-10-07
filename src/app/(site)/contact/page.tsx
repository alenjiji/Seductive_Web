import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormFromUrl } from "@/components/contact/ContactForm";
import { Faq } from "@/components/contact/Faq";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  HeadsetIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { faqs } from "@/data/faq";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Seductive about medical aesthetic and dental equipment: call +971 52 524 8785, email admin@seductive.ae or message us on WhatsApp. Replies within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const stats = [
  { icon: HeadsetIcon, value: "24/7", label: "Support" },
  { icon: GlobeIcon, value: site.claims.countries, label: "Countries" },
  { icon: ClockIcon, value: "<24h", label: "Response" },
];

const methods = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: site.phone.display,
    href: site.phone.href,
    description: "Call us directly for immediate assistance",
    tone: "bg-brand/10 text-brand",
    external: false,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    description: "Send us your detailed inquiries",
    tone: "bg-blue-500/10 text-blue-600",
    external: false,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: site.whatsapp.display,
    href: `https://wa.me/${site.whatsapp.number}`,
    description: "Chat with us for quick responses",
    tone: "bg-[#25d366]/10 text-[#128c4a]",
    external: true,
  },
];

const reasons = [
  "16+ Years Experience",
  "60+ Countries Served",
  "ISO & CE Certified",
  "24/7 Technical Support",
  "Free Consultation",
  "Worldwide Shipping",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-block rounded-full border-2 border-brand bg-white px-6 py-2 text-xs font-bold uppercase tracking-[1px] text-brand">
      {children}
    </p>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-brand-tint px-4 pb-16 pt-[120px] sm:px-6 md:px-10 md:pb-24 md:pt-[170px] xl:px-[60px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-48 size-[600px] animate-blob rounded-full bg-[radial-gradient(circle,var(--color-brand),transparent)] opacity-10" />
          <div className="absolute -bottom-36 -left-24 size-[400px] animate-blob rounded-full bg-[radial-gradient(circle,var(--color-brand-light),transparent)] opacity-10 [animation-direction:reverse] [animation-duration:25s]" />
          <div className="absolute left-1/2 top-[40%] size-[300px] animate-blob rounded-full bg-[radial-gradient(circle,var(--color-brand),transparent)] opacity-10 [animation-duration:15s]" />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 xl:grid-cols-2 xl:gap-20">
          <div>
            <p className="mb-8 inline-flex animate-fade items-center gap-2 rounded-full border-2 border-line bg-white px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_12px_rgb(0_0_0/0.05)]">
              <span className="size-2 animate-pulse-dot rounded-full bg-brand" />
              Let&apos;s Talk
            </p>
            <h1 className="mb-6 animate-slide-up font-display text-[32px] font-bold leading-[1.15] tracking-[-1px] text-ink sm:text-4xl md:mb-7 md:text-5xl xl:text-[64px]">
              Start Your Journey to <span className="text-brand">Success</span>
            </h1>
            <p className="mb-10 max-w-[540px] animate-slide-up text-base leading-[1.8] text-muted [animation-delay:.2s] md:text-lg">
              Connect with our experts today and discover how our advanced medical beauty equipment
              can transform your business and elevate your services to new heights.
            </p>
            <dl className="flex animate-fade justify-between gap-3 [animation-delay:.4s] sm:justify-start sm:gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-1 flex-col items-center gap-2 text-center sm:flex-none sm:flex-row sm:gap-3 sm:text-left">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand sm:size-12">
                    <Icon size={22} />
                  </span>
                  <div className="flex flex-col-reverse">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.5px] text-muted sm:text-xs">{label}</dt>
                    <dd className="font-display text-xl font-bold leading-none text-brand sm:text-2xl">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <ul className="flex animate-fade flex-col gap-4 [animation-delay:.4s] md:gap-5">
            {methods.map(({ icon: Icon, label, value, href, description, tone, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-[20px] border-2 border-line bg-white p-5 shadow-[0_8px_24px_rgb(0_0_0/0.06)] transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-1 before:origin-top before:scale-y-0 before:bg-brand before:transition-transform hover:translate-x-2 hover:border-brand hover:shadow-[0_16px_48px_rgb(227_30_63/0.15)] hover:before:scale-y-100 sm:gap-5 md:p-8"
                >
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:size-14 md:size-[72px] ${tone}`}>
                    <Icon size={26} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-[1px] text-muted">{label}</span>
                    <span className="mb-1.5 block break-words text-base font-bold text-ink transition-colors group-hover:text-brand md:text-xl">
                      {value}
                    </span>
                    <span className="block text-[13px] leading-normal text-muted md:text-sm">{description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form + sidebar */}
      <section id="inquiry" className="scroll-mt-[var(--nav-h)] bg-surface px-4 py-16 sm:px-6 md:px-10 md:py-24 xl:px-[60px] xl:py-[120px]">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 xl:grid-cols-[1.5fr_1fr] xl:gap-14">
          <div className="relative rounded-3xl border-2 border-line bg-white p-5 shadow-[0_8px_32px_rgb(0_0_0/0.08)] sm:p-8 md:p-14">
            <header className="mb-10">
              <SectionLabel>Send Message</SectionLabel>
              <h2 className="mb-4 font-display text-[28px] font-bold leading-tight tracking-[-1px] text-ink md:text-[42px]">
                How Can We <span className="text-brand">Help You?</span>
              </h2>
              <p className="leading-relaxed text-muted">
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </p>
            </header>
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
            </Suspense>
          </div>

          <aside className="flex flex-col gap-6 xl:sticky xl:top-[calc(var(--nav-h)+24px)]">
            <div className="rounded-2xl border-2 border-line bg-white p-6 shadow-[0_4px_16px_rgb(0_0_0/0.06)] md:p-10">
              <h2 className="mb-6 font-display text-2xl font-bold text-ink">Why Choose Us?</h2>
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3 text-[15px] font-semibold text-ink">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <CheckIcon size={13} />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white md:p-10">
              <h2 className="mb-6 font-display text-2xl font-bold">Visit Our Office</h2>
              <div className="flex gap-4">
                <MapPinIcon size={22} className="mt-1 shrink-0" />
                <div>
                  <address className="mb-5 text-[15px] not-italic leading-[1.8] text-white/95">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </address>
                  <a
                    href={site.maps.place}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold transition-all hover:translate-x-1 hover:bg-white/30"
                  >
                    Get Directions
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section aria-labelledby="location" className="bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24 xl:px-[60px] xl:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center md:mb-14">
            <SectionLabel>Find Us</SectionLabel>
            <h2 id="location" className="font-display text-[28px] font-bold tracking-[-1px] text-ink md:text-[42px]">
              Our <span className="text-brand">Location</span>
            </h2>
          </div>
          <div className="overflow-hidden rounded-3xl border-2 border-line shadow-[0_30px_60px_rgb(0_0_0/0.15)]">
            <iframe
              src={site.maps.embed}
              title="Map showing the Seductive office at UNIGROVE Business Center, Al Garhoud, Dubai"
              className="block h-[320px] w-full border-0 md:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="bg-surface px-4 py-16 sm:px-6 md:px-10 md:py-24 xl:px-[60px] xl:py-[120px]">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-12 text-center md:mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 id="faq" className="mb-4 font-display text-[28px] font-bold tracking-[-1px] text-ink md:text-[42px]">
              Frequently Asked <span className="text-brand">Questions</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-muted md:text-lg">
              Find answers to common questions about our products and services
            </p>
          </div>
          <Faq items={faqs} />
          <p className="mt-10 text-center text-muted">
            Still have a question?{" "}
            <a
              href={whatsappLink("Hi Seductive, I have a question about your equipment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
