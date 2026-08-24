import { business, testimonials } from "@/lib/site-config";
import { QuoteIcon, StarIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Reviews() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const rest = testimonials.filter((t) => t !== featured);

  return (
    <section id="reviews" className="bg-paper-warm text-[color:var(--text-dark)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-deep">
                Customer Reviews
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                What drivers say about D&thinsp;&amp;&thinsp;S
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm text-[color:var(--text-dark-muted)]">
              <span className="flex items-center gap-0.5 text-amber-deep" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[color:var(--text-dark)]">
                  {business.rating.label}
                </strong>{" "}
                {business.rating.context}
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          {/* Featured review */}
          <Reveal>
            <figure className="flex h-full flex-col justify-between rounded-xl bg-ink-900 p-8 sm:p-10">
              <div>
                <QuoteIcon className="h-9 w-9 text-amber" />
                <blockquote className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-amber font-display text-sm font-bold text-ink-950"
                  aria-hidden="true"
                >
                  {featured.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {featured.author}
                  </span>
                  <span className="block text-xs text-white/55">{featured.detail}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {rest.map((review, i) => (
              <Reveal key={review.author} delay={i * 90}>
                <figure className="rounded-xl border border-[color:var(--line-light)] bg-white p-6 shadow-sm">
                  <blockquote className="text-sm leading-relaxed text-[color:var(--text-dark)] sm:text-base">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-baseline gap-2 text-xs">
                    <span className="font-semibold text-[color:var(--text-dark)]">
                      {review.author}
                    </span>
                    <span className="text-[color:var(--text-dark-muted)]">
                      · {review.detail}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-xs text-[color:var(--text-dark-muted)]">
            Excerpts from public customer reviews of D&thinsp;&amp;&thinsp;S Auto Repair.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
