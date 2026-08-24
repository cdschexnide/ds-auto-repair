/**
 * Single source of truth for all business facts shown on the site.
 *
 * Everything here has been kept to verifiable, publicly listed information.
 * When the owner confirms or corrects a detail, change it here - nothing
 * else in the codebase hard-codes business facts.
 */

export const business = {
  name: "D & S Auto Repair",
  shortName: "D & S",
  ownerFirstName: "David",
  phone: {
    display: "(409) 466-9350",
    tel: "+14094669350",
    href: "tel:+14094669350",
  },
  address: {
    street: "6566 College St",
    city: "Beaumont",
    state: "TX",
    zip: "77707",
    full: "6566 College St, Beaumont, TX 77707",
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=D%20%26%20S%20Auto%20Repair%2C%206566%20College%20St%2C%20Beaumont%2C%20TX%2077707",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=D%20%26%20S%20Auto%20Repair%2C%206566%20College%20St%2C%20Beaumont%2C%20TX%2077707",
  /**
   * Aggregate rating as commonly listed across public review sources.
   * Deliberately no review count - counts drift and aggregators disagree.
   * Update the number here if listings change.
   */
  rating: {
    value: "4.8",
    label: "4.8 average rating",
    context: "across public reviews",
  },
} as const;

/**
 * Business hours.
 * TODO(owner): Verify Friday closing time - public listings disagree
 * (some say 5:00 PM, some say 3:00 PM). Until confirmed we show
 * "Call for hours" for Friday rather than guessing.
 */
export const hours: { day: string; value: string; note?: string }[] = [
  { day: "Monday", value: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", value: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", value: "8:00 AM – 5:00 PM" },
  { day: "Thursday", value: "8:00 AM – 5:00 PM" },
  { day: "Friday", value: "Call for hours", note: "unverified" },
  { day: "Saturday", value: "Closed" },
  { day: "Sunday", value: "Closed" },
];

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why D&S", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  title: string;
  description: string;
  /** Key of the SVG icon rendered by ServiceIcon. */
  icon: "diagnostics" | "ac" | "brakes" | "maintenance" | "general";
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Diagnostics & Repair",
    description:
      "Check-engine lights, warning lamps, and problems that are hard to pin down. We troubleshoot what's actually wrong before anything gets replaced.",
    icon: "diagnostics",
    featured: true,
  },
  {
    title: "A/C Service",
    description:
      "Air-conditioning diagnosis and repair, because a Texas summer without cold air isn't an option.",
    icon: "ac",
  },
  {
    title: "Brake Service",
    description:
      "Brake inspection, diagnosis, maintenance, and repair to keep you stopping the way you should.",
    icon: "brakes",
  },
  {
    title: "Tune-Ups & Maintenance",
    description:
      "Oil changes, tune-ups, and the routine upkeep that keeps a vehicle dependable mile after mile.",
    icon: "maintenance",
  },
  {
    title: "General Auto Repair",
    description:
      "Day-to-day mechanical repairs for cars and trucks across the Beaumont area.",
    icon: "general",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  detail?: string;
  featured?: boolean;
};

/**
 * Excerpts from genuine public customer reviews. Do not edit wording
 * without checking the original review - these are real customers.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Honest and hardworking. He cares about his customers, does the work right, and charges a reasonable price.",
    author: "Kim Dean",
    detail: "Public customer review",
    featured: true,
  },
  {
    quote: "Fast service and reasonable repair prices.",
    author: "Katie Baird",
    detail: "Public customer review",
  },
  {
    quote: "It cost less than I expected. He is honest and fair.",
    author: "Teresa Smith-Miles",
    detail: "Public customer review",
  },
  {
    quote: "Quick, inexpensive, and quality work!",
    author: "Bessie Perez",
    detail: "Public customer review",
  },
];

export const whyPoints = [
  {
    title: "Honest Recommendations",
    description:
      "Customers consistently say the same thing: David tells you what your vehicle actually needs, and what it doesn't.",
    icon: "handshake",
  },
  {
    title: "Fair, Reasonable Pricing",
    description:
      "Review after review mentions repair costs that came in reasonable, and sometimes lower than the customer expected.",
    icon: "tag",
  },
  {
    title: "Clear Communication",
    description:
      "You'll hear from the shop before extra work happens, not after. No surprises on the invoice.",
    icon: "chat",
  },
  {
    title: "Quality Work",
    description:
      "Repeat customers have trusted D & S with their vehicles for years. That kind of loyalty is earned one repair at a time.",
    icon: "wrench",
  },
] as const;

export const seo = {
  title: "D & S Auto Repair | Auto Repair in Beaumont, TX",
  description:
    "Dependable auto repair in Beaumont, Texas. D & S Auto Repair on College Street handles diagnostics, A/C service, brakes, tune-ups, and general maintenance. Call (409) 466-9350.",
} as const;
