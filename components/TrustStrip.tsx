import Reveal from "@/components/Reveal";

const points = [
  { label: "Honest recommendations", detail: "what customers say most" },
  { label: "Fair, reasonable pricing", detail: "mentioned review after review" },
  { label: "Local & independent", detail: "College St, Beaumont" },
  { label: "Trusted by repeat customers", detail: "for years of repairs" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/8 bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-white/8 lg:grid-cols-4 lg:divide-x">
          {points.map((point, i) => (
            <Reveal as="li" key={point.label} delay={i * 70} className="px-2 py-7 text-center lg:px-6 lg:py-9">
              <p className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
                {point.label}
              </p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{point.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
