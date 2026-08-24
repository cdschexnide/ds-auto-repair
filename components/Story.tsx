"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

/**
 * Full-bleed visual section with restrained parallax: the image drifts
 * slightly slower than the page while the section crosses the viewport.
 * Disabled by prefers-reduced-motion (globals.css pins .parallax-img).
 */
export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      const img = imgRef.current;
      if (!section || !img) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      // -1 (below viewport) .. 1 (above viewport)
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
      img.style.transform = `translateY(${(-progress * 6).toFixed(2)}%) scale(1.15)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24 sm:min-h-[80vh]"
      aria-label="Our approach to repair"
    >
      <div ref={imgRef} className="parallax-img absolute inset-0 -z-10 will-change-transform">
        <Image
          src="/images/story-hands.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-ink-950/70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="mb-6 block h-px w-16 bg-amber" aria-hidden="true" />
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Straight answers.
              <br />
              Quality repairs.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              When something is wrong with your vehicle, you should be able to
              understand what needs fixing and why. That&rsquo;s how
              D&thinsp;&amp;&thinsp;S has always worked — explain it plainly, fix
              it right, charge a fair price.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
