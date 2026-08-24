import { business, navigation } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink-950 pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">
              D&thinsp;&amp;&thinsp;S{" "}
              <span className="font-semibold text-white/60">Auto Repair</span>
            </p>
            <p className="mt-2 text-sm text-white/55">
              {business.address.full} ·{" "}
              <a
                href={business.phone.href}
                className="text-white/75 transition-colors hover:text-white"
              >
                {business.phone.display}
              </a>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-white/35">
          © {new Date().getFullYear()} {business.name} · Beaumont, Texas
        </p>
      </div>
    </footer>
  );
}
