export default function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center bg-white"
    >
      <div className="w-full max-w-[1420px] min-h-[80vh] flex items-center justify-center px-8 md:px-16">

        <div className="text-center w-full max-w-[802px] mx-auto px-6">
          <h2 className="font-display tracking-[-0.03em] leading-tight text-black text-[clamp(1rem,1.7vw,1.7rem)] mx-auto">
            <span className="font-semibold">iee studios</span> produces and directs high-end
            <br />
            launch films and videos for innovative
            <br />
            tech and SaaS companies.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <p className="text-black/50 font-light leading-relaxed">
              We don't believe in mediocre launches.
              Any company can publish a video with
              generic SaaS animations and some fancy looking
              texts on gradient backgrounds.
            </p>

            <p className="text-black/50 font-light leading-relaxed">
              We partner with ambitious brands and companies
              to creatively launch and position their products
              in the market. We make stuff that lingers
              in your audience's minds.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}