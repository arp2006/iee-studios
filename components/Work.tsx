"use client";

import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterScript.charset = "utf-8";
    document.body.appendChild(twitterScript);

    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);

    return () => {
      document.body.removeChild(twitterScript);
      document.body.removeChild(igScript);
    };
  }, []);

  return (
    <section className="w-full flex justify-center bg-white py-10" >
      <div className="w-full max-w-[1420px]">
        <div className="grid grid-cols-3 grid-rows-1 gap-5 ">

          {/* Tweet 1 — col 1, row 1 */}
          <div
            className="h-[570px] overflow-hidden flex items-start justify-center"
            data-lenis-prevent
            dangerouslySetInnerHTML={{ __html: `
              <blockquote class="twitter-tweet" data-theme="light">
                <p lang="en" dir="ltr">Euphoria mainnet is now live.<br><br>It's time to have some fun.<a href="https://t.co/PGBVCJSvSJ">https://t.co/PGBVCJSvSJ</a></p>
                &mdash; Euphoria (@Euphoria_fi)
                <a href="https://twitter.com/Euphoria_fi/status/2054954998375535097?ref_src=twsrc%5Etfw">May 14, 2026</a>
              </blockquote>
            `}}
          />

          {/* Instagram — col 2, rows 1–2 */}
          <div
            className="row-span-2 overflow-hidden flex items-start justify-center py-3"
            data-lenis-prevent
            dangerouslySetInnerHTML={{ __html: `
              <blockquote
                class="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DYX-fAWS-0l/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); width:100%; max-width:100%; min-width:0;">
              </blockquote>
            `}}
          />

          {/* Tweet 3 — col 3, row 1 */}
          <div
            className="h-[570px] overflow-hidden flex items-start justify-center"
            data-lenis-prevent
            dangerouslySetInnerHTML={{ __html: `
              <blockquote class="twitter-tweet" data-theme="light">
                <p lang="en" dir="ltr">Anyone can ship a launch video now<br><br>Very few make you feel something in your chest<br><br>New film just dropped</p>
                &mdash; Tirth (@madtirth)
                <a href="https://twitter.com/madtirth/status/2038323701410844927?ref_src=twsrc%5Etfw">March 29, 2026</a>
              </blockquote>
            `}}
          />
          {/* Tweet 4 — col 3, row 2 */}
          <div
            className="h-[570px] overflow-hidden flex items-start justify-center"
            data-lenis-prevent
            dangerouslySetInnerHTML={{ __html: `
              <blockquote class="twitter-tweet" data-theme="light">
                <p lang="en" dir="ltr">We've been cooking something...<br><br>And you're about to meet her. 🪄<br><br>Tuesday, May 26.</p>
                &mdash; TradeZella 🦄 (@TradeZella)
                <a href="https://twitter.com/TradeZella/status/2057487901206749656?ref_src=twsrc%5Etfw">May 21, 2026</a>
              </blockquote>
            `}}
          />
          
          <div
            className="h-[640px] overflow-hidden flex items-start justify-center"
            data-lenis-prevent
            dangerouslySetInnerHTML={{ __html: `
              <blockquote class="twitter-tweet" data-theme="light">
                <p lang="en" dir="ltr">Mochatrade (@mochatradeapp) is a perpetual futures trading platform that gives Indian traders access to 50+ US stocks...</p>
                &mdash; Y Combinator (@ycombinator)
                <a href="https://twitter.com/ycombinator/status/2054018731479589362?ref_src=twsrc%5Etfw">May 12, 2026</a>
              </blockquote>
            `}}
          />


        </div>
      </div>
    </section>
  );
}