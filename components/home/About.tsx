export default function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center bg-white"
    >
      <div className="w-full max-w-[1420px] min-h-[80vh] flex items-center justify-center px-5 sm:px-8 md:px-16">

        <div className="text-center w-full max-w-[802px] mx-auto px-6">
          <h2 className="md:w-[646px] mx-auto text-[20px] sm:text-[30px] md:text-4xl leading-[1.1] tracking-[-0.7px] text-black mx-auto">
            <span className="font-bold tracking-[-1.08px]">iee studios</span> produces and directs high-end
            launch films and videos for innovative
            tech and saas companies.
          </h2>
          <p className="mt-[13px] text-base tracking-[-0.048px] text-[#6C6C6C]">
            inspire · elevate · evolve
          </p>

          <div className="mt-12 md:mt-[80px] w-full md:w-[802px] flex flex-col md:flex-row gap-8 md:gap-[59px] text-left">
            <p className="text-[#414040] text-base md:text-xl lowercase tracking-[-0.6px] leading-[100.25%]">
              we don’t believe in mediocre stuff,
              any company can launch a video with
              generic saas animation videos and campaigns
              with no direction and end goal
            </p>

            <p className="text-[#414040] text-base md:text-xl lowercase tracking-[-0.6px] leading-[100.25%]">
              We partner with brands and companies
              to creatively launch and position their product
              into the market / mass we make stuff that lingers
              in your audience' minds
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}