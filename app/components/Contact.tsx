export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f3] py-40 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left — copy */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">05 — Contact</span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-light leading-[1] mt-6 text-black">
              Let's make<br />
              something<br />
              <em>great.</em>
            </h2>
            <p className="text-black/40 mt-8 leading-relaxed max-w-sm">
              We take on a limited number of projects each quarter. If you have something in mind,
              get in touch early.
            </p>
            <div className="mt-12 space-y-3 text-sm">
              <a
                href="mailto:hello@studio.co"
                className="block text-black/40 hover:text-black transition-colors"
              >
                hello@studio.co
              </a>
              <a
                href="https://instagram.com"
                className="block text-black/40 hover:text-black transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form className="space-y-6 mt-8 md:mt-14">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-black/30 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder:text-black/20 focus:outline-none focus:border-black/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-black/30 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder:text-black/20 focus:outline-none focus:border-black/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-black/30 block mb-2">
                What do you need?
              </label>
              <select className="w-full bg-transparent border-b border-black/20 py-3 text-black/50 focus:outline-none focus:border-black/50 transition-colors text-sm appearance-none cursor-pointer">
                <option value="">Select a service</option>
                <option value="brand">Brand Identity</option>
                <option value="web">Web &amp; Digital</option>
                <option value="campaign">Campaign</option>
                <option value="full">Full Studio Package</option>
              </select>
            </div>

            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-black/30 block mb-2">
                Tell us about the project
              </label>
              <textarea
                rows={4}
                placeholder="What are you building, and when do you need it?"
                className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder:text-black/20 focus:outline-none focus:border-black/50 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 border border-black/30 text-black text-xs tracking-[0.3em] uppercase rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Send inquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
