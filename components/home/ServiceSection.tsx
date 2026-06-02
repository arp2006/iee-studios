import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Video Editing",      description: "Years of cutting have taught us what most editors never learn — when to leave it alone.", baseAngle: -90 },
  { title: "Creative Direction", description: "One vision holds the whole thing together. We've spent long enough to trust ours.",        baseAngle: -90 + 360 / 7 },
  { title: "Motion Graphics",    description: "Every element moves because it has somewhere to be, not because it can.",                  baseAngle: -90 + (360 / 7) * 2 },
  { title: "Storyboard",         description: "The film exists before the film exists. We just make sure it's the right one.",            baseAngle: -90 + (360 / 7) * 3 },
  { title: "Sound Engineering",  description: "What you hear is half of what you feel. We treat it that way.",                            baseAngle: -90 + (360 / 7) * 4 },
  { title: "Script Writing",     description: "Every word either earns its place or loses it. We've gotten fast at knowing which.",       baseAngle: -90 + (360 / 7) * 5 },
  { title: "Branding",           description: "The film ends; the identity doesn't. We build the part that stays.",                       baseAngle: -90 + (360 / 7) * 6 },
];

const RADIUS      = 36;
const AUTO_SPEED  = 0.010;
const SCROLL_MULT = 0.01;
const FRICTION    = 0.90;
const DEG_TO_RAD  = Math.PI / 180;

function getTextAlign(deg: number) {
  const n = ((deg % 360) + 360) % 360;
  if (n > 200 && n < 340) return "right" as const;
  if (n > 20  && n <= 160) return "left"  as const;
  return "center" as const;
}

function getAnchorFactor(deg: number): [number, number] {
  const n = ((deg % 360) + 360) % 360;
  if (n > 200 && n < 340) return [-1,   -0.5];
  if (n >= 340 || n <= 20) return [-0.5, -1 ];
  if (n > 20  && n <= 160) return [0,   -0.5];
  return [-0.5, 0];
}

// Precompute base angles in radians — never recompute inside rAF
const BASE_RADS = services.map(s => s.baseAngle * DEG_TO_RAD);

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);

  const sectionRef  = useRef<HTMLDivElement>(null);
  const orbitRef    = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>(services.map(() => null));

  // All animation state in plain refs — zero React involvement during animation
  const rotRef      = useRef(0);
  const velRef      = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime    = useRef<number | null>(null);
  const rafRef      = useRef<number | null>(null);
  const rPxRef      = useRef(0);
  const isVisible   = useRef(false); // mirrors IntersectionObserver — pauses rAF when off-screen
  const anchorPx    = useRef<[number, number, number, number][]>(services.map(() => [0,0,0,0]));
  const anchorsReady = useRef(false);

  // Measure anchors — called once after first paint and again after resize
  const measureAnchors = () => {
    services.forEach((svc, i) => {
      const card = cardRefs.current[i];
      if (!card) return;
      const r = card.getBoundingClientRect();
      const [fx, fy] = getAnchorFactor(svc.baseAngle);
      // dot: center on orbit point; card: anchor corner
      anchorPx.current[i] = [0, 0, fx * r.width, fy * r.height];
    });
    anchorsReady.current = true;
  };

  // Container size + anchors — one ResizeObserver, measured synchronously first
  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const updateSize = (w: number) => { rPxRef.current = (RADIUS / 100) * w; };
    updateSize(el.getBoundingClientRect().width);

    // Measure anchors after fonts/layout settle
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        measureAnchors();
      });
    });

    const ro = new ResizeObserver(([entry]) => {
      updateSize(entry.contentRect.width);
      anchorsReady.current = false; // remeasure next frame
    });
    ro.observe(el);
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // IntersectionObserver — pause rAF when section is off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        isVisible.current = e.isIntersecting;
        if (e.isIntersecting) {
          setVisible(true); // fade-in (one-time)
          if (!rafRef.current) {
            lastTime.current = null;
            rafRef.current = requestAnimationFrame(tick);
          }
        } else {
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll → velocity (passive, no rAF involvement)
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      velRef.current += delta * SCROLL_MULT;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // rAF tick — defined outside useEffect so IntersectionObserver can reference it
  function tick(now: number) {
    if (lastTime.current === null) lastTime.current = now;
    const dt = Math.min(now - lastTime.current, 64);
    lastTime.current = now;

    // Advance rotation
    rotRef.current += AUTO_SPEED * dt + velRef.current;
    velRef.current *= FRICTION;

    // Measure anchors if needed (only after resize — 1 getBCR per card, one-time)
    if (!anchorsReady.current) measureAnchors();

    const rot = rotRef.current;
    const rPx = rPxRef.current;

    for (let i = 0; i < services.length; i++) {
      const angle = BASE_RADS[i] + rot * DEG_TO_RAD;
      const cos   = Math.cos(angle);
      const sin   = Math.sin(angle);
      const ox    = rPx * cos;
      const oy    = rPx * sin;
      const [,, ax, ay] = anchorPx.current[i];

      const card = cardRefs.current[i];
      if (card) card.style.transform = `translate(${ox + ax}px,${oy + ay}px)`;
    }

    rafRef.current = requestAnimationFrame(tick);
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex items-center justify-center py-16 px-6"
    >
      <div ref={orbitRef} className="relative w-[min(680px,90vw)] aspect-square">

        {/* Center — completely static, zero animation involvement */}
        <div
          className="absolute top-1/2 left-1/2 w-[44%] flex flex-col items-center gap-4 text-center z-10"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.9s ease 0.2s",
          }}
        >
          <div className="leading-snug">
            <span className="block text-[clamp(1.1rem,2.3vw,1.75rem)] font-semibold text-[#111] tracking-tight">
              Each story we tell teaches
            </span>
            <span className="block text-[clamp(1.1rem,2.3vw,1.75rem)] font-light text-[#aaa] tracking-tight">
              us the next one
            </span>
          </div>
          <button className="text-[0.7rem] tracking-widest text-[#111] underline underline-offset-4 hover:opacity-40 transition-opacity">
            Work with us →
          </button>
          <p className="text-[clamp(0.56rem,1.05vw,0.65rem)] font-light text-[#999] leading-relaxed">
            everything we've ever made is in the room when we make yours.
            that's what taste is — not a mood board, not a reference folder.
            it's years of decisions that already happened so yours doesn't
            have to feel like a guess.
          </p>
        </div>

        {services.map((svc, i) => {
          const fadeDelay = 0.08 + i * 0.07;
          return (
            <div key={i}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                className="absolute max-w-[130px] flex flex-col gap-[4px]"
                style={{
                  top: "50%", left: "50%",
                  textAlign: getTextAlign(svc.baseAngle),
                  transform: "translate(0px,0px)",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.7s ease ${fadeDelay}s`,
                  willChange: "transform",
                }}
              >
                <h3 className="text-[clamp(0.68rem,1.35vw,0.86rem)] leading-tight tracking-tight font-semibold text-[#111]">
                  {svc.title}
                </h3>
                <p className="text-[clamp(0.5rem,0.9vw,0.6rem)] font-light text-[#c0c0c0] leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}