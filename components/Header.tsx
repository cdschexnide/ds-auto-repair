"use client";

import { useEffect, useState } from "react";
import { business, navigation } from "@/lib/site-config";
import { PhoneIcon } from "@/components/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled || menuOpen
          ? "bg-ink-950/90 shadow-[0_1px_0_rgba(243,241,237,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          D&thinsp;&amp;&thinsp;S{" "}
          <span className="font-semibold text-white/60">Auto Repair</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.phone.href}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-amber-bright"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone.display}
          </a>
        </nav>

        {/* Mobile: phone shortcut + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phone.href}
            aria-label={`Call ${business.name} at ${business.phone.display}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-amber text-ink-950 transition-colors hover:bg-amber-bright"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/80 transition-colors hover:text-white"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-ink-950/95 backdrop-blur-md transition-[grid-template-rows] duration-300 lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0" aria-label="Mobile">
          <ul className="space-y-1 px-5 pb-6 pt-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={business.phone.href}
                className="flex items-center justify-center gap-2 rounded-md bg-amber px-4 py-3.5 text-base font-semibold text-ink-950"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone.display}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
