"use client"

import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  {
    label: "Calendly",
    href: "https://calendly.com/iee-studios/30-mins-meeting",
  },
];

const EMAIL = "hello@ieestudios.com";
const LOGO_W = 42;
const CONTACT_W = 80;
const CONTACT_EXPANDED = 260;

const ease = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = 700;

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const [logoHovered, setLogoHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const logoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contactEnterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const onLogoEnter = () => {
    logoTimer.current = setTimeout(() => setLogoHovered(true), 200);
  };

  const onLogoLeave = () => {
    if (logoTimer.current) clearTimeout(logoTimer.current);
    setLogoHovered(false);
  };

  const onContactEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);

    contactEnterTimer.current = setTimeout(() => {
      setContactHovered(true);
    }, 200);
  };

  const onContactLeave = () => {
    if (contactEnterTimer.current)
      clearTimeout(contactEnterTimer.current);

    leaveTimer.current = setTimeout(() => {
      setContactHovered(false);
    }, 120);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">

      {/* LOGO */}
      <div
        onClick={() => router.push("/")}
        onMouseEnter={onLogoEnter}
        onMouseLeave={onLogoLeave}
        className="flex items-center justify-center bg-amber-400 rounded-full overflow-hidden cursor-pointer shrink-0"
        style={{
          width: logoHovered ? 100 : LOGO_W,
          height: 40,
          transition: `width ${DURATION}ms ${ease}`,
        }}
      >
        <span
          className="text-amber-900 font-semibold text-sm whitespace-nowrap"
          style={{
            opacity: logoHovered ? 1 : 0,
            transition: logoHovered
              ? "opacity 100ms ease 100ms"
              : "opacity 50ms ease",
          }}
        >
          iee studios
        </span>
      </div>

      {/* NAV LINKS */}
      <div
        className="flex items-center bg-white rounded-full shrink-0 shadow-sm"
        style={{
          height: 40,
          padding: "0 6px",
        }}
      >
        {links.map(({ label, href }) => {
          const isHovered = hoveredLink === label;

          const isActive =
            pathname === href ||
            (href !== "/" && pathname.startsWith(href));

          return (
            <a
              key={label}
              href={href}
              target={label === "Calendly" ? "_blank" : undefined}
              rel={
                label === "Calendly"
                  ? "noopener noreferrer"
                  : undefined
              }
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-sm whitespace-nowrap no-underline flex items-center justify-center"
              style={{
                padding: "6px 20px",
                color: isActive
                  ? "#ffffff"
                  : isHovered
                    ? "#171717"
                    : "#a3a3a3",
                transition: "color 200ms ease",
              }}
            >
              {/* expanding bg */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: isActive ? "#171717" : "#f5f5f5",
                  transform:
                    isHovered || isActive
                      ? "scale(1)"
                      : "scale(0)",
                  transformOrigin: "center",
                  transition: `transform ${DURATION}ms ${ease}`,
                }}
              />

              <span className="relative z-10">
                {label}
              </span>
            </a>
          );
        })}
      </div>

      {/* CONTACT */}
      <div
        onMouseEnter={onContactEnter}
        onMouseLeave={onContactLeave}
        className="relative shrink-0"
        style={{
          width: contactHovered
            ? CONTACT_EXPANDED
            : CONTACT_W,
          height: 40,
          transition: `width ${DURATION}ms ${ease}`,
        }}
      >
        <div
          className="absolute right-0 top-0 flex items-center overflow-hidden rounded-full cursor-pointer"
          style={{
            width: contactHovered
              ? CONTACT_EXPANDED
              : CONTACT_W,
            height: 40,
            background: contactHovered
              ? "#FACC15"
              : "#171717",
            transition: `width ${DURATION}ms ${ease}, background ${DURATION}ms ease`,
          }}
        >
          {/* CONTACT LABEL */}
          <span
            className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white whitespace-nowrap pointer-events-none"
            style={{
              opacity: contactHovered ? 0 : 1,
              transition: "opacity 120ms ease",
            }}
          >
            Contact
          </span>

          {/* EMAIL */}
          <div
            className="flex items-center w-full gap-2"
            style={{
              padding: "0 12px",
              opacity: contactHovered ? 1 : 0,
              transition: contactHovered
                ? "opacity 160ms ease 160ms"
                : "opacity 80ms ease",
            }}
          >
            <span className="text-amber-900 text-sm font-medium flex-1 pl-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {EMAIL}
            </span>

            <button
              onClick={handleCopy}
              className="bg-white text-amber-900 text-xs font-semibold rounded-full shrink-0 cursor-pointer hover:bg-amber-50 transition-colors duration-100"
              style={{
                padding: "6px 12px",
                border: "none",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}