"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Lenis from "lenis";

const HEADING = "Your stock. Our floor.";
const SUBLINE =
  "At Feroza Telecom FZCO, we repair and refurbish iPhones for businesses that can't afford inconsistent quality. Our facility in Dubai CommerCity runs on technical expertise, professional machinery and a commitment to getting every device right.";
const WHATSAPP =
  "https://wa.me/971559946415?text=" +
  encodeURIComponent(
    "Hello Feroza Telecom FZCO.\nMonthly volume:\nModels:\nThese units are our stock for refurbishment, or a purchase from you.",
  );

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;
    let rafId = 0;
    function raf(t: number) {
      lenis.raf(t);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  function onNavClick(e: MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    lenisRef.current?.scrollTo(el as HTMLElement, { offset: -24 });
  }

  return (
    <div className="page">
      <header
        className="hero-header"
      >
        <a href="/" className="brand">
          <span className="brand-lockup">
            <span className="brand-name">Feroza Telecom</span>
            <span className="brand-entity">FZCO</span>
          </span>
        </a>

        <nav className="nav-pill" aria-label="Primary">
          <a href="#offer" onClick={onNavClick}>
            Offer
          </a>
          <a href="#process" onClick={onNavClick}>
            Process
          </a>
          <a href="#materials" onClick={onNavClick}>
            Parts
          </a>
          <a href="#wholesale" onClick={onNavClick}>
            Wholesale
          </a>
          <a href="#warranty" onClick={onNavClick}>
            Warranty
          </a>
          <a href="#visit" onClick={onNavClick}>
            Visit
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-center">
          <p className="badge">B2B establishment</p>

          <WordLine
            as="h1"
            className="hero-heading"
            text={HEADING}
            ready={ready}
            baseDelay={90}
            stagger={36}
            duration={420}
            fromY={26}
          />

          <div className="stage" aria-hidden="true">
            <span className="metal">REPAIR</span>
            <img className="stage-phone" src="/phone.jpg" alt="" />
          </div>

          <WordLine
            as="p"
            className="hero-sub"
            text={SUBLINE}
            ready={ready}
            baseDelay={240}
            stagger={8}
            duration={360}
            fromY={14}
          />

          <p className="volume-line">
            Tell us your monthly volume, and we'll tell you how we can deliver.
          </p>

          <a className="pill hero-wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Send an inquiry
          </a>
          <p className="inquiry-note">
            Send the monthly volume, the models, and whether the units are your stock or a purchase.
          </p>
        </div>
      </section>

      <section className="band" id="offer">
        <div className="band-inner">
          <p className="kicker">What we offer</p>
          <h2 className="band-title">Quality, delivery, inspection, and payment.</h2>
          <p className="band-lead">
            Each order is quoted on quality, the delivery date, inspection,
            the units required, and the payment terms.
          </p>
          <ul className="service-grid">
            {SERVICES.map((item) => (
              <li key={item.title} className="service-tile">
                <span className="service-kicker">{item.kicker}</span>
                <span className="service-title">{item.title}</span>
                <span className="service-copy">{item.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-dim" id="process">
        <div className="band-inner">
          <p className="kicker">Our process</p>
          <h2 className="band-title">One process for every unit.</h2>
          <p className="band-lead">
            Each device is received, restored, tested, graded, and dispatched.
            The sample and the production lot are held to the same standard.
          </p>
          <ol className="service-grid process-grid">
            {STEPS.map((step, i) => (
              <li key={step.title} className="service-tile">
                <span className="service-kicker">0{i + 1}</span>
                <span className="service-title">{step.title}</span>
                <span className="service-copy">{step.copy}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="materials">
        <div className="band-inner">
          <p className="kicker">Materials</p>
          <h2 className="band-title">Components are stated on the quotation.</h2>
          <p className="band-lead">
            The part fitted to each device is named on the quotation. It is not left to assumption.
          </p>
          <div className="mat">
            <div className="mat-row mat-head">
              <span>Part</span>
              <span>Fitted</span>
              <span>Effect</span>
            </div>
            {MATERIALS.map((row) => (
              <div className="mat-row" key={row.part}>
                <span className="mat-part">{row.part}</span>
                <span>{row.fit}</span>
                <span className="mat-change">{row.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="imagine-break" aria-label="Device handling">
        <video
          src="/imagine.mp4"
          poster="/imagine-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <section className="band band-dim" id="wholesale">
        <div className="band-inner">
          <p className="kicker">B2B wholesale</p>
          <h2 className="band-title">Graded stock. A sample before volume.</h2>
          <p className="band-lead">
            Clients may purchase graded inventory or submit their own devices for refurbishment.
            Cosmetic grade is stated separately from function. Pricing is confirmed after the sample.
            Shipments are prepared for export to the GCC, Africa, and Europe.
          </p>
          <ul className="series">
            {SERIES.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <div className="grid-3">
            {GRADES.map((grade) => (
              <article key={grade.name} className={`glass-card tier-card${grade.featured ? " featured" : ""}`}>
                <p className="card-label">{grade.kicker}</p>
                <h3 className="card-title">{grade.name}</h3>
                <p className="tier-meter">{grade.meter}</p>
                <p className="card-body">{grade.body}</p>
                <ul className="card-list">
                  {grade.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="grid-3 partner-row">
            {TIERS.map((tier) => (
              <article key={tier.name} className="glass-card">
                <p className="card-label">{tier.kicker}</p>
                <h3 className="card-title">{tier.name}</h3>
                <p className="card-body">{tier.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="warranty">
        <div className="band-inner">
          <p className="kicker">Warranty</p>
          <h2 className="band-title">Functional warranty, agreed in advance.</h2>
          <p className="band-lead">
            Grade A and Grade B include a functional warranty. Grade C carries a limited warranty.
            The period is agreed before the order is accepted and is stated on the quotation.
          </p>
          <div className="mat">
            <div className="mat-row mat-head">
              <span>Term</span>
              <span>Covered</span>
              <span>Not covered</span>
            </div>
            {WARRANTY.map((row) => (
              <div className="mat-row" key={row.term}>
                <span className="mat-part">{row.term}</span>
                <span>{row.covered}</span>
                <span className="mat-change">{row.out}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-dim" id="visit">
        <div className="band-inner visit-split">
          <div>
            <p className="kicker">The facility</p>
            <h2 className="band-title">Dubai CommerCity facility.</h2>
            <p className="band-lead">
              A visit follows a sample and is arranged on WhatsApp. Clients review diagnostics, grading, and packing at the facility.
              Retail-ready and white-label packing are quoted with the order.
            </p>
          </div>
          <div className="visit-visual">
            <video
              src="/facility.mp4"
              poster="/facility.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Work on a device at the bench"
            />
          </div>
        </div>
      </section>

      <section className="band" id="faq">
        <div className="band-inner">
          <p className="kicker">Questions</p>
          <h2 className="band-title">Commercial questions.</h2>
          <div className="faq">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <div className="footer-facts">
          <p>
            <span>Address</span>
            Dubai CommerCity, DCC A01, Dubai, UAE
          </p>
          <p>
            <span>WhatsApp</span>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              +971 55 994 6415
            </a>
          </p>
          <p>
            <span>Opening</span>
            Monday to Saturday, 08:00–19:00
          </p>
        </div>
        <p>© 2026 Feroza Telecom FZCO — B2B iPhone refurbishment & wholesale.</p>
      </footer>
    </div>
  );
}

const SERVICES = [
  {
    kicker: "Standard",
    title: "Quality",
    copy: "Units are supplied to the agreed grade. The sample and the production lot meet the same standard.",
  },
  {
    kicker: "Date",
    title: "On-time delivery",
    copy: "Dispatch follows the date on the quotation. Shipments leave Dubai CommerCity on the agreed schedule.",
  },
  {
    kicker: "Check",
    title: "Inspection",
    copy: "Function, cosmetics, battery health, and IMEI are checked against the specification. Non-conforming units are not shipped.",
  },
  {
    kicker: "Spec",
    title: "Units supplied",
    copy: "Models, storage capacity, and grade are supplied as specified on the order.",
  },
  {
    kicker: "Terms",
    title: "Payment terms",
    copy: "Payment is by bank transfer, in AED or USD, on the terms stated on the quotation.",
  },
  {
    kicker: "Close",
    title: "Settlement",
    copy: "Invoices are issued against the quotation and settled on the agreed terms.",
  },
];

const STEPS = [
  {
    title: "Receive",
    copy: "Each device is logged by IMEI, photographed, and checked before work begins.",
  },
  {
    title: "Diagnose",
    copy: "Faults are recorded. Work follows the inspection record.",
  },
  {
    title: "Restore",
    copy: "Battery, display, housing, or board work is limited to the recorded requirement.",
  },
  {
    title: "Prove",
    copy: "Each device receives a function test and a seal pressure test. Non-conforming units are returned to the line.",
  },
  {
    title: "Grade",
    copy: "Cosmetic grade is assigned as A, B, or C. The component fitted is stated on the quotation.",
  },
  {
    title: "Ship",
    copy: "Data is erased, the unit is packed, and dispatch follows the agreed schedule.",
  },
];

const MATERIALS = [
  {
    part: "Display",
    fit: "Original panel with new glass, or a new OLED.",
    change: "Affects colour, thickness, and True Tone, where the panel supports it. An aftermarket display is not described as original.",
  },
  {
    part: "Battery",
    fit: "A new cell. Health is measured and stated on the quotation.",
    change: "Determines runtime. A used cell is lower cost and shorter lived. Health is stated only when measured.",
  },
  {
    part: "Seal",
    fit: "A new seal, followed by a pressure test. The result is stated on the quotation.",
    change: "A device is described as sealed only when the pressure test is passed. A bent frame will not pass.",
  },
  {
    part: "Housing",
    fit: "The original frame, where it is within tolerance. A replacement housing is used only if the original is bent.",
    change: "Affects seal fit and cosmetic grade. A bent frame is disclosed and is not concealed by a new display.",
  },
];

const WARRANTY = [
  {
    term: "What it covers",
    covered: "Functional failure after dispatch, including power, display, charging, audio, cameras, radios, and buttons.",
    out: "Physical damage, liquid exposure, or impact after dispatch. Cosmetic condition is the grade, not a defect.",
  },
  {
    term: "Battery",
    covered: "Health below the percentage stated on the quotation, within the agreed warranty period.",
    out: "Health that was not stated on the quotation. Wear after the warranty period.",
  },
  {
    term: "Dead on arrival",
    covered: "Reported with the IMEI and checked against the inspection record. Remedy is repair, replacement, or credit, as stated on the quotation.",
    out: "A device opened or repaired by a third party before the claim is submitted.",
  },
  {
    term: "Lock and IMEI",
    covered: "Clear at dispatch. A lock or blacklist identified on inspection before dispatch is covered.",
    out: "A lock or blacklist arising after a clear IMEI has left Dubai.",
  },
];

const SERIES = [
  "iPhone 11",
  "iPhone 12",
  "iPhone 13",
  "iPhone 14",
  "iPhone 15",
  "Current series",
];

const GRADES = [
  {
    kicker: "Grade A",
    name: "Like new",
    meter: "Minimal signs of use",
    body: "Suitable for retail display. Clean glass, clean housing, fully tested.",
    points: ["Minimal cosmetic wear", "All functions verified", "Functional warranty on the quotation"],
    featured: true,
  },
  {
    kicker: "Grade B",
    name: "Excellent",
    meter: "Light cosmetic marks",
    body: "The standard volume grade. Light wear, with no functional faults.",
    points: ["Minor cosmetic marks", "All functions verified", "Functional warranty on the quotation"],
    featured: false,
  },
  {
    kicker: "Grade C",
    name: "Good",
    meter: "Visible wear, fully working",
    body: "Visible cosmetic wear, disclosed in advance. Function meets the same standard as Grade A and Grade B.",
    points: ["Visible wear, disclosed on the quotation", "All functions verified", "Limited warranty, stated on the quotation"],
    featured: false,
  },
];

const TIERS = [
  {
    kicker: "Start",
    name: "Sample",
    body: "One device is refurbished from client stock, or supplied from our inventory, for inspection before a volume order.",
  },
  {
    kicker: "Scale",
    name: "Wholesale",
    body: "Single-model or mixed lots, graded and packed. Pricing is based on volume and confirmed after the sample.",
  },
  {
    kicker: "Stay",
    name: "Partner",
    body: "A facility visit, followed by a standing supply arrangement with agreed fulfillment priority and packing requirements.",
  },
];

const FAQS = [
  {
    q: "Which iPhones do you handle?",
    a: "Current and recent iPhone generations, either as refurbishment of client stock or as graded wholesale units. Availability is confirmed against the models requested.",
  },
  {
    q: "How does grading work?",
    a: "Three cosmetic grades. Grade A is like new, Grade B is light wear, and Grade C is visible wear with full function. The grade is stated on the quotation before the order is confirmed.",
  },
  {
    q: "Can you pack under our brand?",
    a: "Yes, on wholesale quantities. White-label packaging, client documentation, and retail-ready kits are scoped with the order.",
  },
  {
    q: "Do you ship outside the UAE?",
    a: "Dubai is the shipping point. Export documentation and tracked freight are arranged for the Gulf, Africa, Europe, and Asia. Destinations are confirmed per shipment.",
  },
  {
    q: "What warranty is on a device?",
    a: "Grade A and Grade B include a functional warranty. Grade C is limited. The period, coverage, and claim process are stated on the quotation before the order is accepted. Physical damage or liquid exposure after dispatch is excluded.",
  },
];

function WordLine({
  as: Tag,
  className,
  text,
  ready,
  baseDelay,
  stagger,
  duration,
  fromY,
}: {
  as: "h1" | "p";
  className: string;
  text: string;
  ready: boolean;
  baseDelay: number;
  stagger: number;
  duration: number;
  fromY: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`word${ready ? " in" : ""}`}
          style={
            {
              "--d": `${baseDelay + i * stagger}ms`,
              "--dur": `${duration}ms`,
              "--from": `${fromY}px`,
            } as CSSProperties
          }
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
