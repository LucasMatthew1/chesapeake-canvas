import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/west-shore-logo.png";
import { CtaLink } from "./ui";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Lift Slips", href: "#lift-slips" },
  { label: "Amenities", href: "#amenities" },
  { label: "Marina Life", href: "#marina-life" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-background/95 shadow-[var(--shadow-header)] backdrop-blur-sm"
            : "bg-gradient-to-b from-navy-deep/55 to-transparent",
        )}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center" aria-label="West Shore Yacht Center home">
            <img
              src={logo}
              alt="West Shore Yacht Center"
              width={241}
              height={86}
              className={cn(
                "h-11 w-auto transition-all duration-500 lg:h-12",
                solid ? "" : "brightness-0 invert",
              )}
            />
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 xl:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "eyebrow relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-sand after:transition-transform after:duration-300 hover:after:scale-x-100",
                    solid ? "text-navy-deep/80 hover:text-navy-deep" : "text-on-navy/85 hover:text-on-navy",
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#tour"
                className={cn(
                  "eyebrow transition-colors",
                  solid ? "text-navy-deep/70 hover:text-chesapeake" : "text-on-navy/80 hover:text-sand",
                )}
              >
                Schedule a Tour
              </a>
              <CtaLink href="#availability" className="px-5 py-3">
                Check Slip Availability
              </CtaLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "shrink-0 rounded-sm border p-2.5 transition-colors xl:hidden",
                solid ? "border-navy-deep/20 text-navy-deep" : "border-on-navy/35 text-on-navy",
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-navy-deep transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <img
            src={logo.url}
            alt="West Shore Yacht Center"
            width={241}
            height={86}
            className="h-11 w-auto brightness-0 invert"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-sm border border-on-navy/30 p-2.5 text-on-navy"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col px-5 pt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-on-navy/10 py-4 font-display text-2xl text-on-navy"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <CtaLink href="#availability" onClick={() => setOpen(false)}>
              Check Slip Availability
            </CtaLink>
            <CtaLink href="#tour" variant="ghost-light" onClick={() => setOpen(false)}>
              Schedule a Tour
            </CtaLink>
          </div>
        </nav>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-deep/10 bg-background/95 p-3 backdrop-blur-sm lg:hidden">
        <CtaLink href="#availability" className="w-full">
          Check Availability
        </CtaLink>
      </div>
    </>
  );
}
