import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowRightIcon, BadgeIcon, HeadsetIcon, ShieldIcon } from "@/components/ui/icons";

const stats = [
  { value: 5, label: "Countries" },
  { value: 16, label: "Years" },
  { value: 40, label: "Models" },
  { value: 14, label: "Series" },
];

const floatingCards = [
  { icon: ShieldIcon, title: "ISO Certified", text: "Quality Assured", position: "left-0 top-[8%] lg:-left-[10%] lg:top-[10%]", delay: "" },
  { icon: BadgeIcon, title: "CE Approved", text: "EU Standards", position: "right-0 top-[46%] lg:-right-[8%] lg:top-1/2", delay: "[animation-delay:1s]" },
  { icon: HeadsetIcon, title: "24/7 Support", text: "Always Available", position: "bottom-[22%] left-[4%] lg:-left-[12%] lg:bottom-[24%]", delay: "[animation-delay:2s]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white lg:min-h-screen">
      {/* Legacy red wave, desktop only: on small screens it sits behind the image instead. */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
        <div className="absolute -right-[5%] -top-[10%] h-[120%] w-[105%] rounded-l-[50%] bg-gradient-to-br from-brand to-brand-dark opacity-95" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[60%] w-full rounded-t-[50%] bg-white opacity-10" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 pb-16 pt-[120px] md:px-10 lg:min-h-screen lg:grid-cols-2 lg:gap-20 lg:pb-20 lg:pt-[140px] xl:px-[60px]">
        <div>
          <p className="mb-8 inline-flex animate-fade items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-[13px] font-semibold text-ink">
            <span className="size-2 animate-pulse-dot rounded-full bg-brand" />
            Trusted Since 2009
          </p>
          <h1 className="mb-7 animate-slide-up font-display text-[40px] font-bold leading-[1.12] tracking-[-1px] text-ink sm:text-5xl lg:text-[56px] xl:text-[68px]">
            Redefining Beauty Through <span className="text-brand">Innovation</span>
          </h1>
          <p className="mb-10 max-w-[540px] animate-slide-up text-base leading-[1.8] text-muted [animation-delay:.2s] md:text-lg">
            Experience the pinnacle of medical aesthetics technology with our comprehensive range of 40+
            advanced devices, transforming beauty standards across 5+ countries.
          </p>
          <div className="mb-12 flex animate-slide-up flex-col gap-3 [animation-delay:.4s] sm:flex-row sm:gap-4 lg:mb-14">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand-hover"
            >
              Explore Products
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-line bg-white px-8 py-4 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              Contact Us
            </Link>
          </div>
          <dl className="grid animate-fade grid-cols-4 [animation-delay:.6s] sm:flex sm:items-center sm:gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <span aria-hidden="true" className="hidden h-10 w-px bg-line sm:block" />}
                <div className="flex flex-col-reverse text-center">
                  <dt className="mt-2 text-[11px] font-semibold uppercase tracking-[0.5px] text-muted sm:text-[13px]">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-[28px] font-bold leading-none text-brand sm:text-4xl">
                    <CountUp to={stat.value} />
                    <span className="text-xl sm:text-2xl">+</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] animate-fade [animation-delay:.4s] lg:max-w-[540px]">
          {/* Small screens: a red panel behind the frame stands in for the wave. */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-6 -bottom-6 top-12 rounded-[40px] bg-gradient-to-br from-brand to-brand-dark lg:hidden"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#202020] shadow-[0_30px_60px_rgb(0_0_0/0.15)] lg:aspect-auto lg:h-[600px]">
            <Image
              src="/images/home/hero-2in1.webp"
              alt="Seductive 2-in-1 diode laser and Nd:YAG laser platform"
              fill
              preload
              sizes="(min-width: 1024px) 540px, 420px"
              className="object-cover object-[50%_30%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
            <Link
              href="/products/2-in-1-diode-nd-yag-laser"
              className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-5 py-4 text-white ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[1px] text-brand-light">New arrival</span>
                <span className="block font-display text-lg font-bold">2-in-1 Diode + Nd:YAG Laser</span>
              </span>
              <ArrowRightIcon size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {floatingCards.map(({ icon: Icon, title, text, position, delay }) => (
            <div
              key={title}
              className={`absolute hidden animate-float items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_20px_40px_rgb(0_0_0/0.15)] sm:flex ${position} ${delay}`}
            >
              <Icon size={28} className="shrink-0 text-brand" />
              <div>
                <p className="text-[15px] font-bold leading-tight text-ink">{title}</p>
                <p className="text-xs text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
