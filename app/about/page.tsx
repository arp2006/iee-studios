import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  const capabilities = [
    "Ideation",
    "Creative Direction",
    "Scripting",
    "Moodboard",
    "Storyboard",
    "Editing",
    "Motion Design",
    "Sound Engineering"
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
    "text-[15px] uppercase tracking-[0.25em] text-black/30";

  return (
    <main className="bg-white text-black min-h-screen">

      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-4xl leading-[0.9] tracking-[-0.05em] text-black md:text-6xl lg:text-7xl">
            We make you feel
            <br />
            something in your chest.
          </h1>
        </div>
      </section>


      {/* PHILOSOPHY */}
      <section className={sectionClass}>
        <div className={`grid lg:grid-cols-2 gap-12 ${containerClass}`}>
          <div className="lg:sticky lg:top-24 h-fit self-start">
            <p className={labelClass}>Philosophy</p>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl text-start md:text-3xl leading-[1.05] tracking-tight max-w-2xl">
              We belive in producing art 
            </h2>

            <p className="mt-6 text-sm text-black/50 leading-relaxed max-w-xl">
              Regular promotional content gets seen. Meaningful work gets remembered.
              <br />
              The goal is to make the audience feel something in their chest, an emotion that naturally resonates with your product.
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
              We were always inspired by cinema, art and abstract using our philosophy and marketing background we pivoted into launch films
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}