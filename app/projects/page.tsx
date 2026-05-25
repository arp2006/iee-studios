"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";

const twitterProjects = [
  {
    num: "1",
    title: "Euphoria",
    year: "2026",
    height: "h-[570px]",
    embed: `
      <blockquote class="twitter-tweet" data-theme="light">
        <p lang="en" dir="ltr">
          Euphoria mainnet is now live.<br><br>
          It's time to have some fun.
          <a href="https://t.co/PGBVCJSvSJ">
            https://t.co/PGBVCJSvSJ
          </a>
        </p>
        &mdash; Euphoria (@Euphoria_fi)
        <a href="https://twitter.com/Euphoria_fi/status/2054954998375535097?ref_src=twsrc%5Etfw">
          May 14, 2026
        </a>
      </blockquote>
    `,
  },
  {
    num: "2",
    title: "Nebula AI Agents",
    year: "2026",
    height: "h-[570px]",
    embed: `
      <blockquote class="twitter-tweet" data-theme="light">
        <p lang="en" dir="ltr">
          Anyone can ship a launch video now<br><br>
          Very few make you feel something in your chest<br><br>
          New film just dropped
        </p>
        &mdash; Tirth (@madtirth)
        <a href="https://twitter.com/madtirth/status/2038323701410844927?ref_src=twsrc%5Etfw">
          March 29, 2026
        </a>
      </blockquote>
    `,
  },
  {
    num: "3",
    title: "TradeZella",
    year: "2026",
    height: "h-[570px]",
    embed: `
      <blockquote class="twitter-tweet" data-theme="light">
        <p lang="en" dir="ltr">
          We've been cooking something...<br><br>
          And you're about to meet her. 🪄<br><br>
          Tuesday, May 26.
        </p>
        &mdash; TradeZella 🦄 (@TradeZella)
        <a href="https://twitter.com/TradeZella/status/2057487901206749656?ref_src=twsrc%5Etfw">
          May 21, 2026
        </a>
      </blockquote>
    `,
  },
  {
    num: "4",
    title: "Y Combinator",
    year: "2026",
    height: "h-[635px]",
    embed: `
      <blockquote class="twitter-tweet" data-theme="light">
        <p lang="en" dir="ltr">
          Mochatrade (@mochatradeapp) is a perpetual futures trading platform that gives Indian traders access to 50+ US stocks...
        </p>
        &mdash; Y Combinator (@ycombinator)
        <a href="https://twitter.com/ycombinator/status/2054018731479589362?ref_src=twsrc%5Etfw">
          May 12, 2026
        </a>
      </blockquote>
    `,
  },
  {
    num: "5",
    title: "Carekeep",
    year: "2026",
    height: "h-[570px]",
    embed: `
      <blockquote class="twitter-tweet" data-theme="light">
        <p lang="en" dir="ltr">What peak taste and creativity feel like for a launch promo <a href="https://t.co/9oS0UMU8aQ">pic.twitter.com/9oS0UMU8aQ</a></p>
        &mdash; Tirth (@madtirth)
        <a href="https://twitter.com/madtirth/status/2051581866269102567?ref_src=twsrc%5Etfw">
          May 5, 2026
        </a>
      </blockquote>
    `,
  },
];

const instagramProjects = [
  {
    num: "7",
    title: "Market Mirror",
    year: "2026",
    embed: `
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DYX-fAWS-0l/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);width:100%;max-width:100%;min-width:0;"
      >
      </blockquote>
    `,
  },
];

function EmbedCard({
  project,
}: {
  project: {
    num: string;
    title: string;
    year: string;
    embed: string;
    height?: string;
  };
}) {
  return (
    <div className="group">

      {/* top */}
      <div className="mb-6 border-b border-black/10 pb-4">
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-black/30">
          {project.year}
        </p>

        <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-[-0.04em] leading-none text-black">
          {project.title}
        </h3>
      </div>

      {/* embed */}
      <div
        className={`${project.height || "h-auto"} overflow-hidden flex items-start justify-center`}
        data-lenis-prevent
        dangerouslySetInnerHTML={{ __html: project.embed }}
      />
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterScript.charset = "utf-8";

    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;

    document.body.appendChild(twitterScript);
    document.body.appendChild(igScript);

    return () => {
      document.body.removeChild(twitterScript);
      document.body.removeChild(igScript);
    };
  }, []);

  return (
    <main className="bg-white text-black">

      {/* hero */}
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-4xl leading-[0.9] tracking-[-0.05em] text-black md:text-6xl lg:text-7xl">
            Building cinematic
            <br />
            digital experiences.
          </h1>
        </div>
      </section>

      {/* twitter */}
      <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1420px]">

          <div className="mb-14">
            <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">
              Twitter Campaigns
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {twitterProjects.map((project) => (
              <EmbedCard
                key={project.num}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

      {/* instagram */}
      <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1420px]">

          <div className="mb-14">
            <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">
              Instagram Campaigns
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {instagramProjects.map((project) => (
              <EmbedCard
                key={project.num}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}