import Image from "next/image";
import { business, hours } from "@/lib/site-config";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Location() {
  return (
    <section id="location" className="bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-bright">
            Location &amp; Hours
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            On College Street, in the heart of Beaumont
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Map-style panel */}
          <Reveal>
            <div className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-xl bg-ink-900">
              <Image
                src="/images/tool-wall.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-ink-950/30" />
              <div id="contact" className="relative p-8 sm:p-10">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber text-ink-950">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {business.name}
                </h3>
                <address className="mt-2 text-base not-italic leading-relaxed text-white/75">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </address>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-amber-bright"
                  >
                    <MapPinIcon className="h-4 w-4" />
                    Get Directions
                  </a>
                  <a
                    href={business.phone.href}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/50"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {business.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-white/10 bg-ink-900 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-ink-800 text-amber-bright">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  Shop Hours
                </h3>
              </div>
              <dl className="mt-6 divide-y divide-white/8">
                {hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-sm font-medium text-white/75">{row.day}</dt>
                    <dd
                      className={`text-sm tabular-nums ${
                        row.value === "Closed"
                          ? "text-white/40"
                          : row.note
                            ? "text-amber-bright"
                            : "text-white"
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                Friday hours vary, so give us a quick call at{" "}
                <a
                  href={business.phone.href}
                  className="font-medium text-white/70 underline decoration-white/30 underline-offset-2 hover:text-white"
                >
                  {business.phone.display}
                </a>{" "}
                before heading over.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
