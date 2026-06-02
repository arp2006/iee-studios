"use client"

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Book a call", href: "https://calendly.com/iee-studios/30-mins-meeting" },
];

const EMAIL = "inspireelevateevovle@gmail.com";
const LOGO_W = 40;
const CONTACT_W = 80;
const CONTACT_EXPANDED = 260;
const cssEase = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = 700;

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();

  const [logoHovered, setLogoHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Route transition blur/fade
  const prevPathname = useRef(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsTransitioning(true);
      setSheetOpen(false);
      const t = setTimeout(() => setIsTransitioning(false), 550);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Sliding active pill
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

  const activeIndex = links.findIndex(
    ({ href }) =>
      !href.startsWith("http") &&
      (pathname === href || (href !== "/" && pathname.startsWith(href)))
  );

  useEffect(() => {
    const activeEl = linkRefs.current[activeIndex];
    const containerEl = containerRef.current;
    if (!activeEl || !containerEl) return; // ← don't null out, just bail
    const containerRect = containerEl.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    setPillStyle({ left: elRect.left - containerRect.left, width: elRect.width });
  }, [activeIndex, pathname]);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close sheet on outside tap
  useEffect(() => {
    if (!sheetOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-sheet]") && !target.closest("[data-sheet-trigger]"))
        setSheetOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sheetOpen]);

  const logoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contactEnterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onLogoEnter = () => { logoTimer.current = setTimeout(() => setLogoHovered(true), 200); };
  const onLogoLeave = () => { if (logoTimer.current) clearTimeout(logoTimer.current); setLogoHovered(false); };
  const onContactEnter = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); contactEnterTimer.current = setTimeout(() => setContactHovered(true), 200); };
  const onContactLeave = () => { if (contactEnterTimer.current) clearTimeout(contactEnterTimer.current); leaveTimer.current = setTimeout(() => setContactHovered(false), 120); };
  const handleCopy = () => { navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const motionProps = {
    animate: reduce ? {} : isTransitioning
      ? { opacity: 0.45, y: 6, filter: "blur(2px)" }
      : { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] as const },
  };

  /* ── MOBILE ── */
  if (isMobile) {
    return (
      <>
        {/* Backdrop */}
        <div
          onClick={() => setSheetOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 40,
            opacity: sheetOpen ? 1 : 0,
            pointerEvents: sheetOpen ? "auto" : "none",
            transition: `opacity 300ms ${cssEase}`,
          }}
        />

        {/* Bottom sheet */}
        <div
          data-sheet
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "white",
            borderRadius: "20px 20px 0 0",
            padding: "12px 20px 40px",
            transform: sheetOpen ? "translateY(0)" : "translateY(100%)",
            transition: `transform 400ms ${cssEase}`,
          }}
        >
          {/* Handle */}
          <div style={{ width: 36, height: 4, background: "#e5e5e5", borderRadius: 99, margin: "0 auto 20px" }} />

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map(({ label, href }) => {
              const isExternal = href.startsWith("http");
              const isActive = !isExternal && (pathname === href || (href !== "/" && pathname.startsWith(href)));
              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => !isExternal && setSheetOpen(false)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: isActive ? "#f5f5f5" : "transparent",
                    color: isActive ? "#171717" : "#525252",
                    fontSize: 16,
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: "none",
                    transition: "background 150ms, color 150ms",
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#f5f5f5", margin: "16px 0" }} />

          {/* Email row */}
          <div style={{
            background: "#FACC15",
            borderRadius: 14,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <span style={{ color: "#92400e", fontSize: 14, fontWeight: 500, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {EMAIL}
            </span>
            <button
              onClick={handleCopy}
              style={{ background: "white", color: "#92400e", fontSize: 12, fontWeight: 600, borderRadius: 999, padding: "6px 14px", border: "none", cursor: "pointer", flexShrink: 0 }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Floating trigger bar */}
        <motion.nav
          className="fixed left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3"
          style={{ bottom: 20 }}
          {...motionProps}
        >
          <div
            onClick={() => router.push("/")}
            className="flex items-center justify-center bg-amber-400 rounded-full cursor-pointer shrink-0"
            style={{ width: LOGO_W, height: 40 }}
          />
          <button
            data-sheet-trigger
            onClick={() => setSheetOpen(v => !v)}
            style={{
              background: "#171717",
              color: "white",
              border: "none",
              borderRadius: 999,
              padding: "0 20px",
              height: 40,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {sheetOpen ? "Close" : "Menu"}
            <span style={{ display: "inline-block", transform: sheetOpen ? "rotate(180deg)" : "rotate(0deg)", transition: `transform 400ms ${cssEase}`, fontSize: 12 }}>↑</span>
          </button>
        </motion.nav>
      </>
    );
  }

  /* ── DESKTOP ── */
  return (
    <motion.nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-4"
      {...motionProps}
    >
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        onMouseEnter={onLogoEnter}
        onMouseLeave={onLogoLeave}
        className="flex items-center justify-center bg-black rounded-full overflow-hidden cursor-pointer shrink-0"
        style={{
          width: logoHovered ? 100 : 40,
          height: 40,
          padding: "0 16px",
          transition: `width ${DURATION}ms ${cssEase}`,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
        }}
      >
        <span className="text-white font-medium text-sm flex items-center">
          <span>iee</span>
          <span
            style={{
              display: "inline-block",
              maxWidth: logoHovered ? 80 : 0,
              opacity: logoHovered ? 1 : 0,
              overflow: "hidden",
              transition: logoHovered
                ? `max-width 1100ms ease, opacity 300ms ease 250ms`  // ← slower
                : `max-width 500ms ease, opacity 100ms ease`,
            }}
          >
            &nbsp;studios
          </span>
        </span>
      </div>

      {/* Nav links */}
      <div
        ref={containerRef}
        className="flex items-center bg-white rounded-full shrink-0 shadow-sm"
        style={{ height: 40, padding: "0 6px", position: "relative" }}
      >
        {pillStyle && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 4, bottom: 4,
              left: pillStyle.left,
              width: pillStyle.width,
              background: "#171717",
              borderRadius: 9999,
              transition: reduce ? "none" : `left 500ms cubic-bezier(0.76, 0, 0.24, 1), width 500ms cubic-bezier(0.76, 0, 0.24, 1)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
        {links.map(({ label, href }, i) => {
          const isHovered = hoveredLink === label;
          const isActive = i === activeIndex;
          const isExternal = href.startsWith("http");
          return (
            <a
              key={label}
              ref={(el) => { linkRefs.current[i] = el; }}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-sm whitespace-nowrap no-underline flex items-center justify-center"
              style={{ padding: "6px 20px", color: isActive ? "#ffffff" : isHovered ? "#171717" : "#a3a3a3", transition: "color 200ms ease", zIndex: 1 }}
            >
              {!isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "#f5f5f5",
                    transform: isHovered ? "scale(1)" : "scale(0)",
                    transformOrigin: "center",
                    transition: `transform ${DURATION}ms ${cssEase}`,
                    zIndex: -1,
                  }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          );
        })}
      </div>

      {/* Contact */}
      <div
        onMouseEnter={onContactEnter}
        onMouseLeave={onContactLeave}
        className="relative shrink-0"
        style={{ width: contactHovered ? CONTACT_EXPANDED : CONTACT_W, height: 40, transition: `width ${DURATION}ms ${cssEase}` }}
      >
        <div
          className="absolute right-0 top-0 flex items-center overflow-hidden rounded-full cursor-pointer"
          style={{
            width: contactHovered ? CONTACT_EXPANDED : CONTACT_W,
            height: 40,
            background: contactHovered ? "#171717" : "#171717",
            transition: `width ${DURATION}ms ${cssEase}, background ${DURATION}ms ease`,
          }}
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white whitespace-nowrap pointer-events-none"
            style={{ opacity: contactHovered ? 0 : 1, transition: "opacity 120ms ease" }}
          >
            Contact
          </span>
          <div
            className="flex items-center w-full gap-2"
            style={{ padding: "0 12px", opacity: contactHovered ? 1 : 0, transition: contactHovered ? "opacity 160ms ease 160ms" : "opacity 80ms ease" }}
          >
            <span className="text-white text-sm font-medium flex-1 pl-1 whitespace-nowrap overflow-hidden ">{EMAIL}</span>
            <button
              onClick={handleCopy}
              className="bg-white text-black text-xs font-semibold rounded-full shrink-0 cursor-pointer hover:bg-amber-50 transition-colors duration-100"
              style={{ padding: "6px 12px", border: "none" }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}