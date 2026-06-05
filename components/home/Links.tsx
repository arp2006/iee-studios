"use client";

import Link from "next/link";

const links = [
  {
    first: "Curious about",
    highlight: "us",
    href: "/about",
  },
  {
    first: "All",
    highlight: "projects",
    href: "/projects",
  },
  {
    highlight: "Contact",
    suffix: "us",
    href: "/contact",
    noOffset: true,
  },
  {
    first: "Book a",
    highlight: "call",
    href: "https://calendly.com/iee-studios/30-mins-meeting",
  },
  {
    first: "Our",
    highlight: "twitter",
    href: "https://x.com/madtirth",
  },
];

export default function ExploreLinksSection() {
  return (
    <section className="flex w-full h-[56vh] tems-center justify-center bg-white px-6">
      <div className="flex flex-col items-center justify-center text-center">
        {links.map((link) => (
          <Link
            key={link.highlight}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            className="group py-2"
          >
            <h2 className="text-[clamp(1.2rem,1.8vw,1.7rem)] font-medium leading-[1] tracking-[-0.05em] text-black">
              {link.first && (
                <span className="inline-block transition-all duration-300 group-hover:-translate-x-2">
                  {link.first}
                </span>
              )}

              <span
                className={`relative inline-block text-[1.6em] leading-none transition-all duration-300 group-hover:scale-110 ${link.noOffset
                    ? "ml-0 group-hover:ml-0"
                    : "ml-2 group-hover:ml-4"
                  }`}
              >
                {link.highlight}

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </span>

              {link.suffix && (
                <span className="ml-2 inline-block">
                  {link.suffix}
                </span>
              )}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}