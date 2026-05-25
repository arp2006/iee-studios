import Footer from "../components/Footer";

export default function AboutPage() {
  const capabilities = [
    "Creative Direction",
    "Web Design",
    "Frontend Development",
    "Motion Systems",
    "Brand Identity",
    "Visual Storytelling",
  ];

  const process = [
    "Discovery",
    "Direction",
    "Production",
    "Refinement",
    "Delivery",
  ];

  const sectionClass =
    "min-h-[80vh] px-6 md:px-12 lg:px-24 py-32 w-full flex items-center justify-center bg-white";

  const containerClass = "w-full max-w-[1420px]";

  const labelClass =
    "text-[10px] uppercase tracking-[0.25em] text-black/30";

  return (
    <main className="bg-white text-black min-h-screen">

      {/* HERO + IMAGE */}
      <section className="min-h-screen w-full flex items-center justify-center bg-white px-6 md:px-12 lg:px-24 py-24">
        <div className={`${containerClass} flex flex-col justify-between gap-16`}>

          <div>
            <p className={labelClass}>About</p>

            <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl leading-[0.92] tracking-tight max-w-4xl">
              We create cinematic digital experiences that feel intentional,
              emotional, and memorable.
            </h1>

            <p className="mt-8 max-w-xl text-sm text-black/50 leading-relaxed">
              Placeholder Studio is a multidisciplinary creative practice focused
              on storytelling, motion, and interactive systems.
            </p>
          </div>

          {/* PLACEHOLDER IMAGE */}
          <section className="w-full h-[70vh] bg-neutral-200 flex items-center justify-center overflow-hidden">
            <p className="text-black/20 text-[10px] uppercase tracking-[0.25em]">
              Placeholder Visual
            </p>
          </section>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Philosophy</p>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl leading-[1.05] tracking-tight max-w-2xl">
              Good design creates feeling before explanation.
            </h2>

            <p className="mt-6 text-sm text-black/50 leading-relaxed max-w-xl">
              Every project begins with narrative, pacing, atmosphere, and
              restraint.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Capabilities</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8 content-center">
            {capabilities.map((item) => (
              <div
                key={item}
                className="text-lg md:text-xl tracking-tight text-black/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Background</p>
          </div>

          <div className="flex items-center">
            <p className="text-xl md:text-3xl leading-[1.15] tracking-tight max-w-3xl">
              Since 2023, Placeholder Studio has collaborated with startups and
              independent brands across launch films and digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Process</p>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between"
              >
                <span className="text-[10px] text-black/25">
                  0{index + 1}
                </span>

                <h3 className="text-xl md:text-3xl tracking-tight">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Personal</p>
          </div>

          <div className="flex items-center">
            <p className="text-sm leading-relaxed text-black/50 max-w-xl">
              Inspired by cinema, architecture, ambient sound design, and quiet
              interfaces.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}