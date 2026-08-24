import Image from "next/image";
import { business } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, StarIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-dvh items-center overflow-hidden">
      {/* Backdrop — swap /images/hero-engine.jpg for a real shop photo later */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-engine.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-drift object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
              Independent Auto Repair · Beaumont, Texas
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Honest auto repair.
              <br />
              Fair prices.
              <br />
              <span className="text-amber-bright">No runaround.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              D&thinsp;&amp;&thinsp;S Auto Repair provides dependable automotive
              repair and maintenance for drivers in Beaumont — with straight
              answers about what your vehicle needs, and what it doesn&rsquo;t.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={business.phone.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-amber px-7 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-amber/20 transition-all duration-200 hover:bg-amber-bright hover:shadow-amber/30"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone.display}
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:bg-white/10"
              >
                <MapPinIcon className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-3 text-sm text-white/70">
              <span className="flex items-center gap-1 text-amber-bright" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">
                  {business.rating.label}
                </strong>{" "}
                {business.rating.context}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
