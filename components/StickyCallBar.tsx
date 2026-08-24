"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon } from "@/components/icons";

/**
 * Mobile-only bar pinned to the bottom of the viewport.
 * Appears once the visitor scrolls past the hero so it never
 * competes with the hero's own CTAs.
 */
export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={business.phone.href}
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-amber px-4 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-bright"
        >
          <PhoneIcon className="h-4 w-4" />
          Call D&thinsp;&amp;&thinsp;S
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
        >
          <MapPinIcon className="h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
