import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "sand" | "outline" | "navy" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  sand: "bg-sand text-navy-deep hover:bg-sand/90 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_oklch(0.782_0.084_84/0.35)]",
  navy: "bg-navy-deep text-on-navy hover:bg-ocean hover:-translate-y-0.5",
  outline:
    "border border-navy-deep/25 text-navy-deep hover:border-navy-deep hover:bg-navy-deep hover:text-on-navy",
  "ghost-light":
    "border border-on-navy/35 text-on-navy hover:bg-on-navy hover:text-navy-deep hover:-translate-y-0.5",
};

export function CtaLink({
  variant = "sand",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "sand",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({
  children,
  tone = "navy",
  className,
}: {
  children: ReactNode;
  tone?: "navy" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow",
        tone === "light" ? "text-sand" : "text-chesapeake",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 md:py-28 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
