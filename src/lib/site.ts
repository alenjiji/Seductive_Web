export const site = {
  name: "Seductive",
  title: "Seductive Medical & Beauty Equipment",
  description:
    "Medical aesthetics and dental equipment manufacturer trusted since 2009: 40+ models across laser, HIFU, body sculpting, facial and dental ranges, shipped to 60+ countries.",
  // TODO(owner): confirm the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://seductive.ae",
  phone: { display: "+971 52 524 8785", href: "tel:+971525248785" },
  email: "admin@seductive.ae",
  whatsapp: { display: "+91 965 639 8483", number: "919656398483" },
  address:
    "Office No.57, 4th Floor, UNIGROVE Business Center, Al Gaizi Plaza, Al Garhoud, Dubai – UAE",
  claims: {
    since: 2009,
    years: "16+",
    countries: "60+",
    models: "40+",
    series: 14,
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
