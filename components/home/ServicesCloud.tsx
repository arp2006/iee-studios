export default function StorySection() {
  const services = [
    {
      title: "Video editing",
      desc: "Years of cutting have taught us what most editors never learn when to leave it alone",
      className: "top-[18%] left-[35%]",
    },
    {
      title: "Creative Direction",
      desc: "One vision holds the whole thing together. We've spent long enough to trust ours",
      className: "top-[18%] right-[35%]",
    },
    {
      title: "Motion Graphics",
      desc: "Every element moves because it has somewhere to be not because it can.",
      className: "left-[28%] top-[42%]",
    },
    {
      title: "Storyboard",
      desc: "The film exists before the film exists. We just make sure it's the right one.",
      className: "right-[28%] top-[42%]",
    },
    {
      title: "Sound Engineering",
      desc: "What you hear is half of what you feel. We treat it that way.",
      className: "left-[30%] bottom-[22%]",
    },
    {
      title: "Script Writing",
      desc: "Every word either earns its place or loses it. We've gotten fast at knowing which.",
      className: "right-[28%] bottom-[22%]",
    },
    {
      title: "Branding",
      desc: "The film ends, the identity doesn't. We build the part that stays.",
      className: "bottom-[10%] left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] overflow-hidden">
      {/* Floating Services */}
      {services.map((service) => (
        <div
          key={service.title}
          className={`absolute max-w-[180px] text-left ${service.className}`}
        >
          <h3 className="text-[22px] leading-none font-medium text-neutral-600">
            {service.title}
          </h3>
          <p className="mt-1 text-[10px] leading-tight text-neutral-400">
            {service.desc}
          </p>
        </div>
      ))}

      {/* Center Content */}
      <div className="absolute left-1/2 top-1/2 w-[650px] -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-[64px] leading-[1.05] font-normal tracking-[-0.04em] text-neutral-800">
          Each story we tell teaches
        </h2>

        <h2 className="text-[64px] leading-[1.05] font-normal tracking-[-0.04em] text-neutral-400">
          us the next one
        </h2>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-[24px] text-neutral-500 underline underline-offset-4"
        >
          Work with us →
        </a>

        <p className="mx-auto mt-10 max-w-[620px] text-[20px] leading-[1.35] text-neutral-500">
          Everything we've ever made is in the room when we make yours.
          That's what taste is, not a mood board, not a reference folder.
          It's years of decisions that already happened so yours doesn't
          have to feel like a guess.
        </p>
      </div>
    </section>
  );
}