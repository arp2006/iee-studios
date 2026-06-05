"use client";

import { useEffect } from "react";
import TweetCard from "../cards/TweetCard";
import InstagramReelCard from "@/components/cards/InstagramReelCard";
import Link from "next/link";

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
    <section className="w-full flex justify-center bg-white py-13" >
      <div className="w-full max-w-[1420px]">
        <div className="px-6 mb-8 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold text-black">
            Some of Our Work
          </h2>
          <p className="text-neutral-500 mt-2">
            Click any launch to view it on X or Instagram.
          </p>
        </div>
        <div className="grid px-6 grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-4 grid-rows-1 gap-5 bg-white">
          {/* Tweet 1 — col 1, row 1 */}
          <TweetCard
            author={{
              name: "Euphoria",
              handle: "Euphoria_fi",
              avatarUrl: "https://pbs.twimg.com/profile_images/1878617867756744704/Eu_uhVHP_400x400.jpg", // pink asterisk logo
              verified: true,
            }}
            content={`Euphoria mainnet is now live.\n\nIt's time to have some fun.\n\neuphoria.finance`}
            mediaUrl="https://pbs.twimg.com/amplify_video_thumb/2054953112763301888/img/UsEv9ybFPfOeOEZY.jpg"
            mediaAlt="Launch preview"
            timestamp="9:30 PM · May 14, 2026"
            views="339.8K"
            replies={159}
            retweets={227}
            likes={913}
            bookmarks={211}
            tweetUrl="https://x.com/Euphoria_fi/status/2054954998375535097"
          />

          <InstagramReelCard
            author={{
              name: "MarketMirror",
              handle: "marketmirror",
              avatarUrl: "https://pbs.twimg.com/profile_images/2047479335326736384/2xm5mMmH_400x400.jpg",
              verified: true,
            }}
            caption={`
              Welcome to @MarketMirror

              Every time you got liquidated. Every time you bought the top. Every time the market moved against you, that wasn’t bad luck. That was someone with better data on the other side of your trade.

              Billionaires see whale wallets move in real time. Hedge funds see liquidations before they trigger. You’ve been trading blind against people who see everything.

              Not anymore.

              Real-time Whale Tracking. Live Liquidation Heatmaps. AI Market Intelligence. Support & Resistance Levels. Social Sentiment. Dozens of Trading Features. All in one app.

              Same data. Same weapons. Your move.

              Don’t follow the Whale — Become the Whale.

              Market Mirror. Live on iOS. Next Week on Android! #Crypto #Trading #XRP
              `}
            mediaUrl="https://res.cloudinary.com/dpw1mj4zg/image/upload/v1779867134/700260688_18072864128671095_2321193982532100163_n_tmlggz.jpg"
            mediaAlt="Reel preview"
            timestamp="May 26, 2026"
            views="12.4K"
            likes={891}
            comments={43}
            reelUrl="https://www.instagram.com/reel/DYX-fAWS-0l/"
          />

          <TweetCard
            author={{
              name: "Tirth",
              handle: "madtirth",
              avatarUrl: "https://pbs.twimg.com/profile_images/2055001661287067648/iYFi418S_400x400.jpg", // dark avatar
              verified: true,
            }}
            content={`Anyone can ship a launch video now\n\nVery few make you feel something in your chest\n\nNew film just dropped`}
            mediaUrl="https://pbs.twimg.com/amplify_video_thumb/2038321781828980736/img/qINFKCcB0Z8QB8Aw.jpg"
            mediaAlt="Launch preview"
            timestamp="12:03 AM · Mar 30, 2026"
            views="36.5K"
            replies={44}
            retweets={23}
            likes={625}
            bookmarks={0}
            tweetUrl="https://x.com/madtirth/status/2038323701410844927"
          />

          <TweetCard
            author={{
              name: "Y Combinator",
              handle: "ycombinator",
              avatarUrl: "https://pbs.twimg.com/profile_images/1623777064821358592/9CApQWXe_400x400.png", // orange Y logo
              verified: true,
            }}
            content={`Mochatrade (@mochatradeapp) is a perpetual futures trading platform that gives Indian traders access to 50+ US stocks (Tesla, Nvidia, Apple), indices and crypto – funded in INR via UPI, with up to 50x leverage, available 24/7.\n\nCongrats on the launch, @theblackmanda, @ichooserain, and @_ParthVader_!\n\nycombinator.com/launches/QJd-m...`}
            mediaUrl="https://pbs.twimg.com/amplify_video_thumb/2054006260207611904/img/kwK2X0TO_clVpEyt.jpg"
            mediaAlt="Launch preview"
            timestamp="7:30 AM · May 12, 2026"
            views="323.2K"
            replies={93}
            retweets={107}
            likes={567}
            bookmarks={330}
            tweetUrl="https://x.com/ycombinator/status/2054018731479589362"
          />

        </div>
        <div className="w-full flex flex-col items-end pt-4 px-6">
          <Link
            href="/projects"
            className="text-[#111] underline underline-offset-4 hover:opacity-40 transition-opacity"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            View all works →
          </Link>
        </div>
      </div>
    </section>
  );
}