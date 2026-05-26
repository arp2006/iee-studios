"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What's the turnaround time for a launch film?",
    answer:
      "Most projects are completed within 5–10 business days from kickoff to final delivery, depending on the scope and feedback process. We keep the workflow streamlined and collaborative to move efficiently without sacrificing quality. If you're working with a tight deadline, expedited turnaround options are also available.",
  },
  {
    question: "How is a Launch Film different from a launch video?",
    answer:
      "A launch film is cinematic, emotional and story-driven — designed to make people feel something. A launch video focuses more on explaining features and functionality. Our approach leans toward emotion first, creating work that connects with people before it sells to them.",
  },
  {
    question: "How does the process work?",
    answer:
      "You share your product, vision and goals. From there, we shape the creative direction, tone and structure of the film. Once aligned, we move into production, refinement and final delivery.",
  },
];

const ease = "cubic-bezier(0.76,0,0.24,1)";

function AccordionItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) setHeight(answerRef.current.scrollHeight);
  }, [faq.answer]);

  return (
    <div
      className="border-b border-black/10"
      style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
    >
      <button
        onClick={onClick}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
      >
        <h3
          className="font-light tracking-[-0.02em] text-black"
          style={{ fontSize: "clamp(1rem,4vw,1.3rem)" }}
        >
          {faq.question}
        </h3>
        <span
          className="shrink-0 text-black/40"
          style={{
            fontSize: 20,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: `transform 400ms ${ease}`,
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          height: isOpen ? height : 0,
          overflow: "hidden",
          transition: `height 400ms ${ease}`,
        }}
      >
        <div ref={answerRef} className="pb-5">
          <p
            className="text-black/60 font-light leading-relaxed"
            style={{ fontSize: "clamp(0.85rem,3.5vw,1rem)" }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── MOBILE: accordion ── */
  if (isMobile) {
    return (
      <section className="w-full bg-white py-10 px-6">
        <div className="w-full max-w-xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              faq={faq}
              isOpen={active === i}
              onClick={() => setActive(active === i ? null : i)}
            />
          ))}
        </div>
      </section>
    );
  }

  /* ── DESKTOP: original split layout ── */
  return (
    <section className="w-full flex justify-center bg-white py-10 overflow-hidden">
      <div className="w-full max-w-[1420px] min-h-[55vh] flex items-center justify-center">
        <div className="relative w-full min-h-[420px] overflow-hidden">

          {/* questions */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              active !== null
                ? "left-0 w-1/2 text-left"
                : "left-1/2 -translate-x-1/2"
            }`}
          >
            {faqs.map((faq, index) => (
              <button
                key={faq.question}
                onClick={() => setActive(index)}
                className={`group py-6 transition-all duration-300 block w-full text-left ${
                  active === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <h3 className="text-[clamp(1.2rem,1.8vw,1.7rem)] font-light tracking-[-0.02em] text-black">
                  {faq.question}
                </h3>
              </button>
            ))}
          </div>

          {/* answer */}
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              active !== null
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24 pointer-events-none"
            }`}
          >
            <div className="max-w-xl">
              <p className="text-black/70 text-[clamp(0.8rem,1.2vw,1.2rem)] leading-relaxed font-light">
                {active !== null ? faqs[active].answer : ""}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}