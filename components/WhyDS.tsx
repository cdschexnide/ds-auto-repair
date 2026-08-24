import Image from "next/image";
import { whyPoints } from "@/lib/site-config";
import { WhyIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function WhyDS() {
  return (
    <section id="why" className="bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <figure className="relative overflow-hidden rounded-xl">
              {/* Placeholder - replace with a real photo of the shop or David at work */}
              <Image
                src="/images/mechanic-working.jpg"
                alt="Mechanic leaning over an engine bay in a repair shop"
                width={900}
                height={1150}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <figcaption className="absolute bottom-4 left-4 rounded-md bg-ink-950/80 px-4 py-2.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
                Serving Beaumont-area drivers from College Street
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-bright">
                Why D&thinsp;&amp;&thinsp;S
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A reputation built one repair at a time
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                The best evidence for a mechanic isn&rsquo;t on a website.
                It&rsquo;s what customers say when they leave the shop. Here&rsquo;s
                what they keep saying about David.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {whyPoints.map((point, i) => (
                <Reveal as="li" key={point.title} delay={i * 80}>
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-ink-800 text-amber-bright">
                    <WhyIcon name={point.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold tracking-tight text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {point.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
