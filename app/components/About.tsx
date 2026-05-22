export default function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center bg-white"
    >
      <div className="w-full max-w-[1400px] min-h-[70vh] flex items-center justify-center px-8 md:px-16">
        
        <div className="text-center px-6">
          <h2 className="font-display font-light tracking-[-0.04em] leading-[1] text-black text-[clamp(2.5rem,5vw,5rem)]">
            Exclusive Launch Films
            <br />
            for Tech & SaaS
          </h2>

          <p className="mt-6 text-black/50 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            iee studios produces and directs high-end launch films and ads
            for innovative tech companies.
          </p>
        </div>

      </div>
    </section>
  );
}