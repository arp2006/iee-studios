const plans = [
  {
    name: "Essentials",
    price: "$8,000",
    note: "Starting from",
    desc: "For early-stage brands that need a strong foundation fast.",
    features: [
      "Brand identity system",
      "Logo + typography + color",
      "Brand guidelines PDF",
      "2 rounds of revision",
    ],
    highlight: false,
  },
  {
    name: "Studio",
    price: "$22,000",
    note: "Starting from",
    desc: "The full creative partnership — identity, web and launch assets.",
    features: [
      "Everything in Essentials",
      "Website design & development",
      "Motion & interactions",
      "Campaign creative",
      "Ongoing support (3 mo)",
    ],
    highlight: true,
  },
  {
    name: "Bespoke",
    price: "Custom",
    note: "Let's talk",
    desc: "Ongoing retainer or large-scale brand transformation.",
    features: [
      "Dedicated studio team",
      "Flexible monthly scope",
      "Priority turnaround",
      "Quarterly strategy sessions",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-[1420px]">
        
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-black/35">
            Pricing
          </p>

          <h2 className="max-w-[700px] text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.07em] text-black">
            Transparent
            <span className="ml-3 inline-block text-[1.15em]">
              investment
            </span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[13px] leading-relaxed text-black/45">
            Every project is scoped together. These tiers give a rough
            starting point — most engagements land somewhere between.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-[24px] border p-8 transition-all duration-500 ${
                plan.highlight
                  ? "border-black/20 bg-black text-white"
                  : "border-black/10 bg-[#fafafa] hover:border-black/20"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
                  Most popular
                </span>
              )}

              {/* Note */}
              <p
                className={`mb-4 text-[10px] uppercase tracking-[0.22em] ${
                  plan.highlight
                    ? "text-white/40"
                    : "text-black/30"
                }`}
              >
                {plan.note}
              </p>

              {/* Price */}
              <div className="mb-5">
                <h3
                  className={`text-[clamp(2.2rem,3vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.07em] ${
                    plan.highlight
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {plan.price}
                </h3>

                <p
                  className={`mt-2 text-[0.95rem] tracking-[-0.04em] ${
                    plan.highlight
                      ? "text-white/50"
                      : "text-black/40"
                  }`}
                >
                  {plan.name}
                </p>
              </div>

              {/* Description */}
              <p
                className={`mb-8 text-[13px] leading-relaxed ${
                  plan.highlight
                    ? "text-white/60"
                    : "text-black/45"
                }`}
              >
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="mb-10 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-[13px] ${
                      plan.highlight
                        ? "text-white/75"
                        : "text-black/55"
                    }`}
                  >
                    <span
                      className={`mt-[1px] text-[10px] ${
                        plan.highlight
                          ? "text-white/30"
                          : "text-black/20"
                      }`}
                    >
                      ●
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className={`flex items-center justify-center rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "border border-black/10 bg-white text-black hover:border-black/20"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}