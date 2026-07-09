"use client"

import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Video Editing", description: "Years of cutting have taught us what most editors never learn — when to leave it alone.", baseAngle: -90 },
  { title: "Creative Direction", description: "One vision holds the whole thing together. We've spent long enough to trust ours.", baseAngle: -90 + 360 / 7 },
  { title: "Motion Graphics", description: "Every element moves because it has somewhere to be, not because it can.", baseAngle: -90 + (360 / 7) * 2 },
  { title: "Storyboard", description: "The film exists before the film exists. We just make sure it's the right one.", baseAngle: -90 + (360 / 7) * 3 },
  { title: "Sound Engineering", description: "What you hear is half of what you feel. We treat it that way.", baseAngle: -90 + (360 / 7) * 4 },
  { title: "Script Writing", description: "Every word either earns its place or loses it. We've gotten fast at knowing which.", baseAngle: -90 + (360 / 7) * 5 },
  { title: "Branding", description: "The film ends; the identity doesn't. We build the part that stays.", baseAngle: -90 + (360 / 7) * 6 },
];

const RADIUS = 42;
const AUTO_SPEED = 0.010;
const SCROLL_MULT = 0.01;
const FRICTION = 0.90;
const DEG_TO_RAD = Math.PI / 180;

const BASE_RADS = services.map(s => s.baseAngle * DEG_TO_RAD);

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(services.map(() => null));

  const rotRef = useRef(0);
  const velRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const rPxRef = useRef(0);
  const isVisible = useRef(false);
  const anchorsReady = useRef(false);
  // Store container width so tick can read it without layout thrash
  const containerWRef = useRef(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const measureAnchors = () => {
    anchorsReady.current = true;
  };

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const updateSize = (w: number) => {
      rPxRef.current = (RADIUS / 100) * w;
      containerWRef.current = w;
    };
    updateSize(el.getBoundingClientRect().width);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        measureAnchors();
      });
    });

    const ro = new ResizeObserver(([entry]) => {
      updateSize(entry.contentRect.width);
      anchorsReady.current = false;
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        isVisible.current = e.isIntersecting;
        if (e.isIntersecting) {
          setVisible(true);
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

  function tick(now: number) {
    if (lastTime.current === null) lastTime.current = now;
    const dt = Math.min(now - lastTime.current, 64);
    lastTime.current = now;

    rotRef.current += AUTO_SPEED * dt + velRef.current;
    velRef.current *= FRICTION;

    if (!anchorsReady.current) measureAnchors();

    const rot = rotRef.current;
    const rPx = rPxRef.current;
    const cw = containerWRef.current;

    const ax = cw < 400 ? -28 : -45;
    const ay = cw < 400 ? -28 : -40;

    for (let i = 0; i < services.length; i++) {
      const angle = BASE_RADS[i] + rot * DEG_TO_RAD;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const ox = rPx * cos;
      const oy = rPx * 0.7 * sin;
      const card = cardRefs.current[i];
      if (card) card.style.transform = `translate(${ox + ax}px,${oy + ay}px)`;
    }

    rafRef.current = requestAnimationFrame(tick);
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-white flex items-center justify-center py-12 px-4 sm:px-6"
      style={{ minHeight: isMobile ? "100vw" : "70vh" }}
    >
      <div
        ref={orbitRef}
        className="relative aspect-square"
        style={{
          width: isMobile ? "min(92vw, 420px)" : "900px",
        }}
      >
        {/* Center copy */}
        <div
          className="absolute top-1/2 left-1/2 w-full flex flex-col items-center gap-3 text-center"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.9s ease 0.2s",
          }}
        >
          <div className="leading-snug">
            <span
              className="block font-semibold text-[#111] tracking-tight"
              style={{ fontSize: isMobile ? "clamp(0.9rem,4vw,1.1rem)" : "clamp(1.7rem,2.6vw,2.2rem)" }}
            >
              Each story we tell teaches
              <br />
              us the next one
            </span>
          </div>
          <a
            href="https://calendly.com/iee-studios/30-mins-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111] underline underline-offset-4 hover:opacity-40 transition-opacity"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            Book a call →
          </a>

        </div>

        {/* Service cards */}
        {services.map((svc, i) => {
          const fadeDelay = 0.08 + i * 0.07;
          return (
            <div key={i}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                className="absolute flex flex-col gap-[3px]"
                style={{
                  top: "50%",
                  left: "50%",
                  maxWidth: isMobile ? "72px" : "130px",
                  textAlign: "left",
                  transform: "translate(0px,0px)",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.7s ease ${fadeDelay}s`,
                  willChange: "transform",
                }}
              >
                <h3
                  className="leading-tight tracking-tight font-semibold text-[#111]"
                  style={{ fontSize: isMobile ? "clamp(0.67rem,2.8vw,0.8rem)" : "clamp(0.68rem,1.35vw,1rem)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="font-light text-[#c0c0c0] leading-relaxed"
                  style={{ fontSize: isMobile ? "clamp(0.38rem,1.95vw,0.5rem)" : "clamp(0.6rem,0.9vw,0.7rem)" }}
                >
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