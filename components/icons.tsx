import type { Service } from "@/lib/site-config";

type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.94 6.26 6.87.82-5.08 4.7 1.35 6.78L12 17.18l-6.08 3.38 1.35-6.78-5.08-4.7 6.87-.82L12 2z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 8c-3.3 0-6 2.7-6 6v6h6v-6H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm10 0c-3.3 0-6 2.7-6 6v6h6v-6h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
    </svg>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ServiceIcon({
  name,
  className = "h-7 w-7",
}: IconProps & { name: Service["icon"] }) {
  switch (name) {
    case "diagnostics":
      // Gauge / engine-check
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M12 4a9 9 0 0 0-9 9c0 2.4.94 4.6 2.47 6.2h13.06A8.97 8.97 0 0 0 21 13a9 9 0 0 0-9-9z" />
          <path d="M12 13l3.5-3.5" />
          <circle cx="12" cy="13" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "ac":
      // Snowflake
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M12 2v20M4 6l16 12M20 6L4 18" />
          <path d="M12 2l-2 2.5M12 2l2 2.5M12 22l-2-2.5M12 22l2-2.5" />
        </svg>
      );
    case "brakes":
      // Brake disc
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
        </svg>
      );
    case "maintenance":
      // Oil drop over line
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M12 3s5.5 6 5.5 10a5.5 5.5 0 1 1-11 0C6.5 9 12 3 12 3z" />
          <path d="M4 21h16" />
        </svg>
      );
    case "general":
      // Wrench
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.9L3 17.9a2 2 0 1 0 2.8 2.8l5.7-5.7a4.5 4.5 0 0 0 5.9-6l-3 3-2.8-.7-.7-2.8 3-3z" />
        </svg>
      );
  }
}

export function WhyIcon({
  name,
  className = "h-6 w-6",
}: IconProps & { name: string }) {
  switch (name) {
    case "handshake":
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M11 17l-1.5 1.5a2 2 0 0 1-3-3" />
          <path d="M13.5 15.5l-2 2a2 2 0 0 1-3-3l2-2" />
          <path d="M2 8l4-4 5 1 4.5-1L20 7l2 1-3 7-2.5-.5" />
          <path d="M11 5L7.5 8.5a2 2 0 0 0 3 3L13 9l4 3.5" />
        </svg>
      );
    case "tag":
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M20.6 13.4L11 3.8A2 2 0 0 0 9.6 3H4a1 1 0 0 0-1 1v5.6c0 .53.21 1.04.59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.6-4.6a2 2 0 0 0 0-2.6z" />
          <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chat":
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z" />
          <path d="M8 11h8M8 14h5" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={className} viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
          <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.9L3 17.9a2 2 0 1 0 2.8 2.8l5.7-5.7a4.5 4.5 0 0 0 5.9-6l-3 3-2.8-.7-.7-2.8 3-3z" />
        </svg>
      );
    default:
      return null;
  }
}
