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
    desc: "The full creative partnership — identity, web, and launch assets.",
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
    <section id="pricing" className="bg-white py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-black/30">04 — Pricing</span>
        <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-light mt-4 mb-6 text-black">
          Transparent investment
        </h2>
        <p className="text-black/40 max-w-xl mb-20 leading-relaxed">
          Every project is scoped together. These tiers give you a starting point — most work falls
          somewhere between.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-10 rounded-2xl border transition-all ${
                plan.highlight
                  ? "border-black/30 bg-[#f5f5f3]"
                  : "border-black/10 bg-transparent hover:border-black/20"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 text-[10px] tracking-[0.2em] uppercase bg-black text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <p className="text-xs tracking-[0.2em] uppercase text-black/30 mb-2">{plan.note}</p>
              <p className="font-display text-5xl font-light text-black mb-1">{plan.price}</p>
              <p className="font-display text-xl text-black/50 mb-6">{plan.name}</p>
              <p className="text-black/40 text-sm leading-relaxed mb-8">{plan.desc}</p>
              <ul className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-black/50">
                    <span className="text-black/20 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center text-xs tracking-[0.2em] uppercase py-3 rounded-full border transition-colors ${
                  plan.highlight
                    ? "border-black text-black hover:bg-black hover:text-white"
                    : "border-black/20 text-black/50 hover:border-black/40 hover:text-black"
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
