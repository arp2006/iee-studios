"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLParagraphElement>(null);
  const bottomRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const MAX_OFFSET = 60;

    const update = () => {
      const section = sectionRef.current;
      const top = topRef.current;
      const bot = bottomRef.current;
      if (!section || !top || !bot) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const elapsed = vh - rect.top;
      const total = rect.height + vh;
      const raw = Math.min(Math.max(elapsed / total, 0), 1);

      const p = raw < 0.5 ? 2 * raw * raw : -1 + (4 - 2 * raw) * raw;

      const offset = MAX_OFFSET * (1 - p);
      const opacity = 0.2 + 0.8 * p;   // ← was 0.5 + 0.5 * p

      top.style.transform = `translateY(${offset}px)`;   // ← was -offset
      bot.style.transform = `translateY(${offset}px)`;   // ← was +offset

      // inside update()
      const heading = headingRef.current;

      const headingOffset = MAX_OFFSET * (1 - p);  // starts -60px (up), settles to 0
      if (heading) heading.style.transform = `translateY(${-headingOffset}px)`;

      // paragraphs stay the same (positive offset = start below, come up)
      top.style.transform = `translateY(${offset}px)`;
      bot.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full flex justify-center bg-white"
    >
      <div className="w-full max-w-[1420px] min-h-[80vh] flex items-center justify-center px-5 sm:px-8 md:px-16">
        <div className="text-center w-full max-w-[802px] mx-auto px-6">
          <div ref={headingRef} style={{ willChange: "transform" }}>
            <h2 className="md:w-[646px] mx-auto text-[20px] sm:text-[30px] md:text-4xl leading-[1.1] tracking-[-0.7px] text-black">
              <span className="font-bold tracking-[-1.08px]">iee studios</span>{" "}
              produces and directs high-end launch films and videos for innovative
              tech and saas companies.
            </h2>
            <p className="mt-[13px] text-base tracking-[-0.048px] text-[#6C6C6C]">
              inspire · elevate · evolve
            </p>
          </div>

          <div className="mt-12 md:mt-[80px] w-full md:w-[802px] flex flex-col md:flex-row gap-8 md:gap-[59px] text-left">
            <p
              ref={topRef}
              style={{ willChange: "transform, opacity" }}
              className="text-[#414040] text-base md:text-xl lowercase tracking-[-0.6px] leading-[100.25%]"
            >
              we don't believe in mediocre stuff, any company can launch a video
              with generic saas animation videos and campaigns with no direction
              and end goal
            </p>

            <p
              ref={bottomRef}
              style={{ willChange: "transform, opacity" }}
              className="text-[#414040] text-base md:text-xl lowercase tracking-[-0.6px] leading-[100.25%]"
            >
              We partner with brands and companies to creatively launch and
              position their product into the market / mass we make stuff that
              lingers in your audience' minds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}