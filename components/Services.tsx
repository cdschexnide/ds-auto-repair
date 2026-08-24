import Image from "next/image";
import { business, services } from "@/lib/site-config";
import { PhoneIcon, ServiceIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [featured, ...rest] = [
    ...services.filter((s) => s.featured),
    ...services.filter((s) => !s.featured),
  ];

  return (
    <section id="services" className="bg-paper text-[color:var(--text-dark)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-deep">
            Services
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The work that keeps Beaumont driving
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--text-dark-muted)]">
            From figuring out a stubborn check-engine light to routine
            maintenance, D&thinsp;&amp;&thinsp;S handles the repairs everyday
            drivers actually need.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured card — diagnostics, with imagery */}
          <Reveal className="md:col-span-2 lg:col-span-1">
            <article className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-xl bg-ink-900">
              <Image
                src="/images/service-oil-change.jpg"
                alt="Mechanic adding oil to an engine during routine service"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-ink-950/10" />
              <div className="relative p-7">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber text-ink-950">
                  <ServiceIcon name={featured.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {featured.description}
                </p>
              </div>
            </article>
          </Reveal>

          {rest.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 90}>
              <article className="group h-full rounded-xl border border-[color:var(--line-light)] bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-paper-warm text-amber-deep transition-colors duration-300 group-hover:bg-amber group-hover:text-ink-950">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-dark-muted)]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}

          {/* CTA card completes the grid */}
          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-between rounded-xl bg-ink-900 p-7">
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  Not sure what&rsquo;s wrong?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Describe what your vehicle is doing and we&rsquo;ll tell you
                  where to start. A phone call costs nothing.
                </p>
              </div>
              <a
                href={business.phone.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-amber-bright"
              >
                <PhoneIcon className="h-4 w-4" />
                {business.phone.display}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
