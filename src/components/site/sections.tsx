import { useEffect, useState } from "react";
import {
  Anchor,
  ArrowDown,
  Compass,
  Flame,
  MapPin,
  Navigation,
  Ship,
  Sun,
  Users,
  Waves,
  X,
  Zap,
  Droplets,
  Snowflake,
  Ruler,
} from "lucide-react";
import { CtaLink, Eyebrow, Section } from "./ui";
import { Reveal } from "./reveal";
import hero from "@/assets/hero-marina.jpg";
import liftSlip from "@/assets/lift-slip.jpg";
import aerial from "@/assets/aerial-marina.jpg";
import pool from "@/assets/pool.jpg";
import grilling from "@/assets/grilling.jpg";
import familyBoating from "@/assets/family-boating.jpg";
import sunset from "@/assets/sunset-marina.jpg";
import cleat from "@/assets/detail-cleat.jpg";
import dockDawn from "@/assets/dock-dawn.jpg";
import centerConsole from "@/assets/center-console.jpg";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.15, 90));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep">
      <img
        src={hero}
        alt="Powerboat docked at a Chesapeake Bay marina in Essex, Maryland at golden hour"
        width={1920}
        height={1088}
        className="absolute inset-0 h-[112%] w-full object-cover"
        style={{ transform: `translateY(-${offset}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 md:pb-28">
        <Reveal>
          <p className="eyebrow text-sand">
            Essex, Maryland • Back River • 3 Miles to the Chesapeake Bay
          </p>
          <h1 className="mt-7 max-w-3xl font-display text-[2.6rem] leading-[1.02] text-on-navy sm:text-6xl lg:text-[4.6rem]">
            Your Boat.
            <br />
            Your Water.
            <br />
            <span className="text-sand">Your Place.</span>
          </h1>
          <p className="mt-7 max-w-xl font-display text-lg italic text-on-navy/90 sm:text-xl">
            Premium lift-slip marina living on Maryland's Back River.
          </p>
          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-on-navy-muted">
            Keep your boat protected, ready, and close to the Chesapeake Bay at West Shore Yacht
            Center in Essex, Maryland.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#availability">Check Slip Availability</CtaLink>
            <CtaLink href="#tour" variant="ghost-light">
              Schedule a Marina Tour
            </CtaLink>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 right-5 z-10 hidden flex-col items-center gap-2 text-on-navy/70 transition-colors hover:text-sand sm:right-8 md:flex"
      >
        <span className="eyebrow [writing-mode:vertical-rl]">Discover West Shore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}

/* -------------------------------- Promo bar ------------------------------- */

export function PromoBar() {
  return (
    <div className="border-b border-navy-deep/10 bg-navy px-5 py-6 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex items-center gap-3">
          <Compass className="h-5 w-5 shrink-0 text-sand" strokeWidth={1.25} />
          <span className="eyebrow text-sand">2027 Season Reservations Now Open</span>
        </div>
        <p className="text-sm leading-relaxed text-on-navy md:border-l md:border-on-navy/15 md:pl-6">
          <span className="font-medium">Free winter storage 11/1/26 – 3/31/27</span>
          <span className="text-on-navy-muted"> with reservation for the 2027 season.</span>
        </p>
        <CtaLink href="#lift-slips" variant="ghost-light" className="px-5 py-3">
          Learn More
        </CtaLink>
      </div>
    </div>
  );
}

/* ------------------------------ Introduction ------------------------------ */

export function Intro() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="zoom-media rounded-sm">
          <img
            src={aerial}
            alt="Aerial view of the boutique lift-slip marina on Back River in Essex, Maryland"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow>Welcome to West Shore</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            More Than a Slip.
            <br />
            A Better Way to Boat.
          </h2>
          <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
            West Shore Yacht Center is a boutique lift-slip marina on Back River in Essex, Maryland,
            designed for boat owners who want convenience, protection, and more time on the water.
          </p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            With your boat stored safely above the water when you're not using it, you can spend less
            time worrying about maintenance and more time enjoying the Chesapeake.
          </p>
          <CtaLink href="#difference" variant="outline" className="mt-9">
            Discover West Shore
          </CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ Differentiator ---------------------------- */

const differences = [
  {
    n: "01",
    icon: Ship,
    title: "Protected Storage",
    copy: "Keep your vessel elevated above the water when you're not boating, helping reduce exposure to the elements and marine growth.",
  },
  {
    n: "02",
    icon: Navigation,
    title: "Ready When You Are",
    copy: "Spend less time dealing with traditional dockside storage and more time getting on the water.",
  },
  {
    n: "03",
    icon: Waves,
    title: "Chesapeake Access",
    copy: "Located on Back River with convenient access to the Chesapeake Bay.",
  },
  {
    n: "04",
    icon: Users,
    title: "Boutique Marina Experience",
    copy: "Enjoy a relaxed, welcoming marina environment designed around boating, family, and weekends on the water.",
  },
];

export function Difference() {
  return (
    <Section id="difference" className="bg-navy-deep text-on-navy">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="light">The West Shore Difference</Eyebrow>
        <h2 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl">
          Keep Your Boat Out of the Water.
          <br />
          Keep Your Weekends on the Water.
        </h2>
        <p className="mt-7 text-[0.95rem] leading-relaxed text-on-navy-muted">
          Lift-slip storage keeps your boat raised above the waterline between outings — cleaner
          hulls, less wear, and a vessel that's ready the moment you arrive at the dock.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-on-navy/12 sm:grid-cols-2 lg:grid-cols-4">
        {differences.map((d, i) => (
          <Reveal
            key={d.n}
            delay={i * 70}
            className="group bg-navy-deep p-8 transition-colors duration-500 hover:bg-navy"
          >
            <div className="flex items-center justify-between">
              <d.icon className="h-6 w-6 text-sand" strokeWidth={1.1} />
              <span className="font-display text-sm text-on-navy/35">{d.n}</span>
            </div>
            <h3 className="mt-8 font-display text-xl leading-snug">{d.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-on-navy-muted">{d.copy}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Lift slips ------------------------------ */

const liftFeatures = [
  { icon: Droplets, label: "Water" },
  { icon: Zap, label: "Electricity" },
  { icon: Anchor, label: "Finger-Pier Access" },
  { icon: Sun, label: "Seasonal Options" },
  { icon: Snowflake, label: "Winter Storage" },
  { icon: Ruler, label: "Convenient Boat Access" },
];

export function LiftSlips() {
  return (
    <Section id="lift-slips">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal className="zoom-media order-2 rounded-sm lg:order-1">
          <img
            src={liftSlip}
            alt="Powerboat raised on a boat lift in a lift slip at a Maryland marina"
            width={1280}
            height={1600}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
          <Eyebrow>Lift Slips</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Premium Lift-Slip Storage
          </h2>
          <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
            Designed for boat owners who want the convenience of a marina slip without leaving their
            vessel sitting in the water.
          </p>

          <div className="mt-10 border-y border-border py-8">
            <p className="font-display text-5xl text-navy-deep sm:text-6xl">
              8,000<span className="text-sand">–</span>20,000
              <span className="ml-2 align-middle text-base tracking-[0.18em] text-muted-foreground">
                LBS
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              West Shore Yacht Center accommodates boats requiring lifts from approximately 8,000 to
              20,000 pounds.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {liftFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-sm text-navy-deep">
                <f.icon className="h-4 w-4 shrink-0 text-chesapeake" strokeWidth={1.4} />
                {f.label}
              </li>
            ))}
          </ul>

          <CtaLink href="#availability" className="mt-10">
            Ask About Lift Slip Availability
          </CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Lifestyle ------------------------------- */

const lifestyle = [
  { img: pool, icon: Waves, title: "Swimming Pool", copy: "Relax between adventures." },
  { img: grilling, icon: Users, title: "Outdoor Gathering", copy: "Bring family and friends together." },
  { img: grilling, icon: Flame, title: "Grilling", copy: "Enjoy easy waterfront meals." },
  {
    img: familyBoating,
    icon: Ship,
    title: "Weekend Boating",
    copy: "Get out on the water without the hassle.",
  },
];

export function Lifestyle() {
  return (
    <Section id="amenities" className="bg-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <Reveal>
          <Eyebrow>Marina Life</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Make the Marina Part of the Weekend.
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            Boating isn't just about where you keep your boat. It's about where you spend your time.
          </p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            At West Shore, weekends can mean an afternoon on the water, grilling with friends,
            relaxing by the pool, or spending time with family at the marina.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {lifestyle.map((l, i) => (
          <Reveal key={l.title} delay={i * 70} className="group">
            <div className="zoom-media rounded-sm">
              <img
                src={l.img}
                alt={l.title}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
            <div className="mt-5 flex items-start gap-3">
              <l.icon className="mt-1 h-4 w-4 shrink-0 text-sand" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-lg text-navy-deep">{l.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l.copy}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- Gallery -------------------------------- */

const gallery = [
  { src: hero, alt: "Recreational powerboat at a Chesapeake Bay marina at golden hour", span: "sm:col-span-2 sm:row-span-2" },
  { src: liftSlip, alt: "Boat stored on a lift above the water", span: "" },
  { src: cleat, alt: "Close-up of a polished boat cleat and dock line", span: "" },
  { src: dockDawn, alt: "Marina finger pier at dawn on Back River", span: "sm:col-span-2" },
  { src: pool, alt: "Waterfront swimming pool at the marina", span: "" },
  { src: centerConsole, alt: "Center console boat heading out toward the Chesapeake Bay", span: "" },
  { src: grilling, alt: "Friends gathering and grilling at the marina", span: "sm:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="marina-life">
      <Reveal className="max-w-2xl">
        <Eyebrow>The Gallery</Eyebrow>
        <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
          Chesapeake Days, Back River Evenings.
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.alt}
            type="button"
            onClick={() => setActive(i)}
            className={`zoom-media group relative rounded-sm ${g.span}`}
            aria-label={`View image: ${g.alt}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full rounded-sm object-cover"
            />
            <span className="absolute inset-0 rounded-sm bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/15" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-sm border border-on-navy/30 p-2.5 text-on-navy"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <img
            src={gallery[active]!.src}
            alt={gallery[active]!.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-sm object-contain"
          />
        </div>
      )}
    </Section>
  );
}

/* ------------------------------ Why West Shore ---------------------------- */

const reasons = [
  { n: "01", label: "All Lift-Slip Marina" },
  { n: "02", label: "Convenient Chesapeake Bay Access" },
  { n: "03", label: "Boat Protection & Convenience" },
  { n: "04", label: "Boutique, Family-Friendly Atmosphere" },
  { n: "05", label: "Seasonal & Winter Storage Options" },
];

export function WhyWestShore() {
  return (
    <Section className="bg-shell">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="zoom-media rounded-sm">
          <img
            src={centerConsole}
            alt="Boats kept on lifts at a boutique Essex, Maryland marina"
            width={1200}
            height={1500}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
        </Reveal>
        <Reveal delay={70}>
          <Eyebrow>Why West Shore</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Why Boat Owners Choose West Shore
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {reasons.map((r) => (
              <li key={r.n} className="group flex items-baseline gap-6 py-6 transition-colors">
                <span className="font-display text-sm text-sand">{r.n}</span>
                <span className="font-display text-xl text-navy-deep transition-colors group-hover:text-chesapeake sm:text-2xl">
                  {r.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Location -------------------------------- */

export function Location() {
  return (
    <Section id="location">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Location</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Close to the Bay.
            <br />
            Away From the Hassle.
          </h2>
          <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
            Located on Back River in Essex, Maryland, West Shore Yacht Center puts you approximately
            three miles from the Chesapeake Bay — convenient access for Chesapeake Bay boating and an
            easy drive from Baltimore and Baltimore County.
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3">
            {[
              ["Essex", "Maryland"],
              ["Back", "River"],
              ["3 Miles", "To the Bay"],
            ].map(([a, b]) => (
              <div key={a} className="bg-background px-5 py-6">
                <dt className="font-display text-2xl text-navy-deep">{a}</dt>
                <dd className="eyebrow mt-1 text-muted-foreground">{b}</dd>
              </div>
            ))}
          </dl>
          <CtaLink
            href="https://www.google.com/maps/search/?api=1&query=Essex+Maryland+Back+River+marina"
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="mt-9"
          >
            Get Directions
          </CtaLink>
        </Reveal>

        <Reveal delay={80} className="relative min-h-[340px] overflow-hidden rounded-sm bg-navy">
          <iframe
            title="Map of West Shore Yacht Center in Essex, Maryland"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-76.475%2C39.29%2C-76.40%2C39.34&amp;layer=mapnik"
            className="absolute inset-0 h-full w-full grayscale-[35%]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-sm bg-navy-deep/90 px-4 py-3 text-on-navy">
            <MapPin className="h-4 w-4 text-sand" strokeWidth={1.5} />
            <span className="eyebrow">Essex, Maryland • Back River</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------- Tour banner ------------------------------ */

export function TourBanner() {
  return (
    <section id="tour" className="relative overflow-hidden">
      <img
        src={sunset}
        alt="Sunset over a Maryland marina with boats along the docks"
        width={1920}
        height={1008}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative mx-auto w-full max-w-3xl px-5 py-28 text-center sm:px-8 md:py-36">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.08] text-on-navy sm:text-5xl">
            See West Shore for Yourself.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-on-navy-muted">
            Come take a tour of the marina and discover a better way to store and enjoy your boat.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink href="#availability">Schedule a Tour</CtaLink>
            <CtaLink href="#availability" variant="ghost-light">
              Contact Us
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  {
    q: "What size boats can West Shore accommodate?",
    a: "Our lift slips accommodate boats requiring lifts from approximately 8,000 to 20,000 pounds — most recreational powerboats, cruisers, sport boats, and mid-size yachts.",
  },
  {
    q: "What is a lift slip?",
    a: "A lift slip is a marina slip equipped with a boat lift, so your vessel can be raised out of the water and held above the waterline whenever it isn't in use.",
  },
  {
    q: "What are the benefits of keeping my boat out of the water?",
    a: "Storing your boat above the water helps reduce exposure to the elements and marine growth, keeps the hull cleaner, and makes launching quick and simple when you arrive.",
  },
  {
    q: "How close is West Shore to the Chesapeake Bay?",
    a: "We're on Back River in Essex, Maryland — approximately three miles from the Chesapeake Bay.",
  },
  {
    q: "Do you offer seasonal storage?",
    a: "Yes. Seasonal and annual lift-slip options are available, subject to availability.",
  },
  {
    q: "Do you offer winter storage?",
    a: "Yes. Winter storage is available, and free winter storage from 11/1/26 – 3/31/27 is included with a 2027 season reservation.",
  },
  {
    q: "What amenities are available at the marina?",
    a: "Lift slips with water and electricity, finger-pier access, a swimming pool, outdoor gathering and grilling areas, and waterfront access in a family-friendly setting.",
  },
  {
    q: "Can I schedule a marina tour?",
    a: "Absolutely. Send us an inquiry and we'll arrange a convenient time to walk the docks with you.",
  },
  {
    q: "How do I check lift-slip availability?",
    a: "Complete the availability form with your boat details and preferred storage option, and our team will follow up with current openings and next steps.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Good to Know
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            Still curious about boat slips or storage in Essex, Maryland? Reach out and we'll answer
            personally.
          </p>
        </Reveal>

        <Reveal delay={70} className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-navy-deep sm:text-xl">{f.q}</span>
                  <span
                    className={`mt-1.5 shrink-0 text-sand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <p className="min-h-0 pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

export function FinalCta() {
  return (
    <Section className="bg-navy-deep text-center text-on-navy">
      <Reveal className="mx-auto max-w-2xl">
        <Compass className="mx-auto h-7 w-7 text-sand" strokeWidth={1} />
        <h2 className="mt-8 font-display text-4xl leading-[1.08] sm:text-5xl">
          Your Boat Deserves a Better Home.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-on-navy-muted">
          Premium lift-slip storage. Chesapeake access. A marina built around the boating lifestyle.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaLink href="#availability">Check Slip Availability</CtaLink>
          <CtaLink href="#tour" variant="ghost-light">
            Schedule a Tour
          </CtaLink>
        </div>
      </Reveal>
    </Section>
  );
}
