import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { InquirySection } from "@/components/site/inquiry-form";
import {
  Difference,
  Faq,
  FinalCta,
  Gallery,
  Hero,
  Intro,
  Lifestyle,
  LiftSlips,
  Location,
  PromoBar,
  TourBanner,
  WhyWestShore,
} from "@/components/site/sections";

const title = "West Shore Yacht Center | Lift Slips & Boat Storage in Essex, MD";
const description =
  "Boutique lift-slip marina on Back River in Essex, Maryland. Premium boat slips, seasonal and winter storage for 8,000–20,000 lb boats, 3 miles from the Chesapeake Bay.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "West Shore Yacht Center",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Essex",
            addressRegion: "MD",
            postalCode: "21221",
            addressCountry: "US",
          },
          telephone: "+1-410-555-0140",
          email: "info@westshoreyachtcenter.com",
          areaServed: "Baltimore County, Maryland",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <PromoBar />
        <Intro />
        <Difference />
        <LiftSlips />
        <Lifestyle />
        <Gallery />
        <WhyWestShore />
        <Location />
        <TourBanner />
        <InquirySection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
