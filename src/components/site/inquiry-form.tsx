import { useState } from "react";
import { toast } from "sonner";
import { Eyebrow, CtaButton, Section } from "./ui";
import { Reveal } from "./reveal";

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-chesapeake";
const labelClass = "eyebrow mb-2 block text-navy-deep/70";

export function InquirySection() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name) next['name'] = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) next['email'] = "Please enter a valid email.";
    if (phone.replace(/\D/g, "").length < 10) next['phone'] = "Please enter a valid phone number.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    e.currentTarget.reset();
    toast.success("Thank you — your inquiry is on its way.", {
      description: "We'll get back to you with availability and next steps.",
    });
  };

  return (
    <Section id="availability" className="bg-shell">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Slip Availability</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-navy-deep sm:text-5xl">
            Ready for Your Next Season on the Water?
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Tell us about your boat and what you're looking for. Our team will help you determine the
            best available lift-slip option at our Essex, Maryland marina.
          </p>
          <dl className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
            <div>
              <dt className="eyebrow text-navy-deep/60">Lift Capacity</dt>
              <dd className="mt-1 text-navy-deep">Approximately 8,000 – 20,000 lbs</dd>
            </div>
            <div>
              <dt className="eyebrow text-navy-deep/60">Location</dt>
              <dd className="mt-1 text-navy-deep">Back River • Essex, Maryland</dd>
            </div>
            <div>
              <dt className="eyebrow text-navy-deep/60">Storage Options</dt>
              <dd className="mt-1 text-navy-deep">Seasonal • Annual • Winter</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-sm border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="name">
                  Name *
                </label>
                <input id="name" name="name" className={inputClass} placeholder="Full name" />
                {errors['name'] && <p className="mt-2 text-xs text-destructive">{errors['name']}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email *
                </label>
                <input id="email" name="email" type="email" className={inputClass} placeholder="you@email.com" />
                {errors['email'] && <p className="mt-2 text-xs text-destructive">{errors['email']}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone *
                </label>
                <input id="phone" name="phone" className={inputClass} placeholder="(410) 555-0140" />
                {errors['phone'] && <p className="mt-2 text-xs text-destructive">{errors['phone']}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="make">
                  Boat Make
                </label>
                <input id="make" name="make" className={inputClass} placeholder="e.g. Sea Ray" />
              </div>
              <div>
                <label className={labelClass} htmlFor="model">
                  Boat Model
                </label>
                <input id="model" name="model" className={inputClass} placeholder="e.g. Sundancer 320" />
              </div>
              <div>
                <label className={labelClass} htmlFor="length">
                  Boat Length
                </label>
                <input id="length" name="length" className={inputClass} placeholder="e.g. 32 ft" />
              </div>
              <div>
                <label className={labelClass} htmlFor="weight">
                  Boat Weight
                </label>
                <input id="weight" name="weight" className={inputClass} placeholder="e.g. 14,000 lbs" />
              </div>
              <div>
                <label className={labelClass} htmlFor="storage">
                  Preferred Storage
                </label>
                <select id="storage" name="storage" className={inputClass} defaultValue="Seasonal">
                  <option>Seasonal</option>
                  <option>Annual</option>
                  <option>Winter</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="interest">
                  I'm Interested In
                </label>
                <select id="interest" name="interest" className={inputClass} defaultValue="Lift Slip">
                  <option>Lift Slip</option>
                  <option>Marina Tour</option>
                  <option>General Information</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us what you're looking for this season."
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton type="submit">Check Availability</CtaButton>
              <p className="text-xs text-muted-foreground">
                We'll get back to you with availability and next steps.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
