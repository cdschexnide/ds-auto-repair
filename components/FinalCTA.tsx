import { business } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="border-t border-white/8 bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Something not sounding right?
            <br />
            <span className="text-amber-bright">Give David a call.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Straight answers about what your vehicle needs, before any work
            happens. That&rsquo;s the D&thinsp;&amp;&thinsp;S way.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={business.phone.href}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-amber px-8 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-amber/15 transition-colors duration-200 hover:bg-amber-bright sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {business.phone.display}
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-md border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-white/50 sm:w-auto"
            >
              <MapPinIcon className="h-5 w-5" />
              {business.address.full}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
