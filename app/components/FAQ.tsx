"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What's the turnaround time for a launch film?",
    answer:
      "Most projects are completed within 5–10 business days from kickoff to final delivery, depending on the scope and feedback process. We keep the workflow streamlined and collaborative to move efficiently without sacrificing quality. If you’re working with a tight deadline, expedited turnaround options are also available.",
  },
  {
    question: "How is a Launch Film different from a launch video?",
    answer:
      "A launch film is cinematic, emotional, and story-driven — designed to make people feel something. A launch video focuses more on explaining features and functionality. Our approach leans toward emotion first, creating work that connects with people before it sells to them.",
  },
  {
    question: "How does the process work?",
    answer:
      "You share your product, vision, and goals. From there, we shape the creative direction, tone, and structure of the film. Once aligned, we move into production, refinement, and final delivery.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full flex justify-center bg-white py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] min-h-[55vh] flex items-center justify-center">

        {/* heading */}


        {/* layout */}
        <div className="relative w-full min-h-[420px] overflow-hidden">

  {/* questions */}
  <div
    className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
      active !== null
        ? "left-0 w-1/2 text-left"
        : "left-1/2 -translate-x-1/2 "
    }`}
  >
    {faqs.map((faq, index) => (
      <button
        key={faq.question}
        onClick={() => setActive(index)}
        className={`group py-6 transition-all duration-300 block w-full text-left ${
          active === index
            ? "opacity-100"
            : "opacity-40 hover:opacity-70"
        }`}
      >
        <h3 className="text-[clamp(1.4rem,2.5vw,2.5rem)] font-light tracking-[-0.04em] text-black">
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
      <p className="text-black/70 text-xl leading-relaxed font-light">
        {active !== null ? faqs[active].answer : ""}
      </p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}