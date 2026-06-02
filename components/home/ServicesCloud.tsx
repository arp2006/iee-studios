"use client";

const services = [
  {
    title: "Video Editing",
    description:
      "Years of cutting have taught us what most editors never learn when to leave it alone.",
    className: "top-20 left-1/4",
  },
  {
    title: "Creative Direction",
    description:
      "One vision holds the whole thing together. We've spent long enough to trust ours.",
    className: "top-20 right-1/4",
  },
  {
    title: "Motion Graphics",
    description:
      "Every element moves because it has somewhere to be not because it can.",
    className: "top-1/2 left-24 -translate-y-1/2",
  },
  {
    title: "Storyboard",
    description:
      "The film exists before the film exists. We just make sure it's the right one.",
    className: "top-1/2 right-24 -translate-y-1/2",
  },
  {
    title: "Sound Engineering",
    description:
      "What you hear is half of what you feel. We treat it that way.",
    className: "bottom-28 left-40",
  },
  {
    title: "Script Writing",
    description:
      "Every word either earns its place or loses it. We've gotten fast at knowing which.",
    className: "bottom-28 right-24",
  },
  {
    title: "Branding",
    description:
      "The film ends. The identity doesn't. We build the part that stays.",
    className: "bottom-8 left-1/2 -translate-x-1/2",
  },
];

export default function ServicesCloud() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Services */}
      {services.map((service) => (
        <div
          key={service.title}
          className={`absolute max-w-[280px] ${service.className}`}
        >
          <h3 className="text-4xl font-medium tracking-tight text-black/60">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black/35">
            {service.description}
          </p>
        </div>
      ))}

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="max-w-[900px] text-6xl md:text-7xl font-medium tracking-tight text-black/80 leading-none">
          Each story we tell teaches
          <br />
          <span className="text-black/25">us the next one</span>
        </h2>

        <a
          href="/contact"
          className="mt-8 border-b border-black/40 pb-1 text-3xl text-black/60 hover:text-black transition"
        >
          Work with us →
        </a>

        <p className="mt-12 max-w-[720px] text-2xl leading-relaxed text-black/40">
          Everything we've ever made is in the room when we make yours.
          That's what taste is. Not a mood board, not a reference folder.
          It's years of decisions that already happened so yours doesn't have
          to feel like a guess.
        </p>
      </div>
    </section>
  );
}