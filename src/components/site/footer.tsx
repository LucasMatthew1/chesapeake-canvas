import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/west-shore-logo.png.asset.json";

const nav = [
  { label: "About", href: "#about" },
  { label: "Lift Slips", href: "#lift-slips" },
  { label: "Amenities", href: "#amenities" },
  { label: "Marina Life", href: "#marina-life" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#availability" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-5 pb-24 pt-20 text-on-navy sm:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex bg-background px-4 py-3">
              <img
                src={logo.url}
                alt="West Shore Yacht Center"
                width={241}
                height={86}
                loading="lazy"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-navy-muted">
              A boutique lift-slip marina on Back River in Essex, Maryland — premium boat slips and
              seasonal storage minutes from the Chesapeake Bay.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="West Shore Yacht Center on Facebook"
                className="rounded-sm border border-on-navy/25 p-2.5 transition-colors hover:border-sand hover:text-sand"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="West Shore Yacht Center on Instagram"
                className="rounded-sm border border-on-navy/25 p-2.5 transition-colors hover:border-sand hover:text-sand"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <nav>
            <h2 className="eyebrow text-sand">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-on-navy-muted">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-on-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-sand">Marina</h2>
            <ul className="mt-5 space-y-4 text-sm text-on-navy-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" strokeWidth={1.5} />
                <span>
                  West Shore Yacht Center
                  <br />
                  Essex, Maryland 21221
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand" strokeWidth={1.5} />
                <a href="tel:+14105550140" className="transition-colors hover:text-on-navy">
                  (410) 555-0140
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand" strokeWidth={1.5} />
                <a
                  href="mailto:info@westshoreyachtcenter.com"
                  className="transition-colors hover:text-on-navy"
                >
                  info@westshoreyachtcenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-on-navy/12 pt-6 text-xs text-on-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} West Shore Yacht Center. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-on-navy">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-on-navy">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
