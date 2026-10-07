import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Timings and terms from the Contact page FAQ.
const steps = [
  {
    title: "Tell us about your clinic",
    text: "Share the treatments you offer or plan to offer. A call, a WhatsApp message or the contact form all work.",
  },
  {
    title: "Get honest advice & a quote",
    text: "Our specialists recommend the right configuration and reply with a tailored quote within 24 hours.",
  },
  {
    title: "Fast worldwide delivery",
    text: "Standard delivery in 7-15 business days after order confirmation, with express shipping available.",
  },
  {
    title: "Training & ongoing support",
    text: "Training materials, video tutorials, 24/7 technical support and a standard 1-2 year warranty.",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process" className="bg-white px-6 py-20 md:px-10 md:py-28 xl:px-[60px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeader
            id="process"
            label="How It Works"
            title={
              <>
                From First Hello to <span className="text-brand">First Treatment</span>
              </>
            }
            subtitle="Buying professional equipment should feel simple. Here's what to expect when you reach out."
            className="mb-14 md:mb-20"
          />
        </Reveal>
        <ol className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 xl:block"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
                <span className="relative mb-6 flex size-14 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-white shadow-brand ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mb-3 font-display text-[22px] font-bold leading-snug text-ink">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
