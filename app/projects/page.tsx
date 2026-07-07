"use client";

import { useEffect } from "react";
import Footer from "../../components/layout/Footer";
import TweetCard from "@/components/cards/TweetCard";
import InstagramReelCard from "@/components/cards/InstagramReelCard";
import LinkedInPostCard from "@/components/cards/LinkedinPostCard";

const tweetProjects = [
  {
    author: { name: "Euphoria", handle: "Euphoria_fi", avatarUrl: "https://pbs.twimg.com/profile_images/1878617867756744704/Eu_uhVHP_400x400.jpg", verified: true },
    content: `Euphoria mainnet is now live.\n\nIt's time to have some fun.\n\neuphoria.finance`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2054953112763301888/img/UsEv9ybFPfOeOEZY.jpg",
    timestamp: "9:30 PM · May 14, 2026",
    views: "339.8K", replies: 159, retweets: 227, likes: 913, bookmarks: 211,
    tweetUrl: "https://x.com/Euphoria_fi/status/2054954998375535097",
  },
  {
    author: { name: "Tirth", handle: "madtirth", avatarUrl: "https://pbs.twimg.com/profile_images/2055001661287067648/iYFi418S_400x400.jpg", verified: true },
    content: `Anyone can ship a launch video now\n\nVery few make you feel something in your chest\n\nNew film just dropped`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2038321781828980736/img/qINFKCcB0Z8QB8Aw.jpg",
    timestamp: "12:03 AM · Mar 30, 2026",
    views: "36.5K", replies: 44, retweets: 23, likes: 625, bookmarks: 0,
    tweetUrl: "https://x.com/madtirth/status/2038323701410844927",
  },
  {
    author: { name: "TradeZella", handle: "TradeZella", avatarUrl: "https://pbs.twimg.com/profile_images/2059284585725530112/lcJyhyKv_400x400.jpg", verified: true },
    content: `We've been cooking something...\n\nAnd you're about to meet her. 🪄\n\nTuesday, May 26.`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2057487880998559744/img/mFUaZrk42w9bMNSE.jpg",
    timestamp: "9:15 PM · May 21, 2026",
    views: "12K", replies: 6, retweets: 21, likes: 64, bookmarks: 10,
    tweetUrl: "https://x.com/TradeZella/status/2057487901206749656",
  },
  {
    author: { name: "Y Combinator", handle: "ycombinator", avatarUrl: "https://pbs.twimg.com/profile_images/1623777064821358592/9CApQWXe_400x400.png", verified: true },
    content: `Mochatrade (@mochatradeapp) is a perpetual futures trading platform that gives Indian traders access to 50+ US stocks (Tesla, Nvidia, Apple), indices and crypto – funded in INR via UPI, with up to 50x leverage, available 24/7.\n\nCongrats on the launch, @theblackmanda, @ichooserain, and @_ParthVader_!\n\nycombinator.com/launches/QJd-m...`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2054006260207611904/img/kwK2X0TO_clVpEyt.jpg",
    timestamp: "7:30 AM · May 12, 2026",
    views: "323.2K", replies: 93, retweets: 107, likes: 567, bookmarks: 330,
    tweetUrl: "https://x.com/ycombinator/status/2054018731479589362",
  },
  {
    author: { name: "CrowdReply", handle: "Crowdreply_io", avatarUrl: "https://pbs.twimg.com/profile_images/2032162693382021120/4lcUTHh8_400x400.jpg", verified: true },
    content: `We've been cooking something...\n\nAnd you're about to meet her. 🪄\n\nTuesday, May 26.`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2064363313048477696/img/gTTUduvQKGwwB5ZX.jpg",
    timestamp: "8:37 PM · Jun 9, 2026",
    views: "1.6M", replies: 96, retweets: 117, likes: 288, bookmarks: 286,
    tweetUrl: "https://x.com/Crowdreply_io/status/2064363868437258473",
  },
  {
    author: { name: "Tirth", handle: "madtirth", avatarUrl: "https://pbs.twimg.com/profile_images/2055001661287067648/iYFi418S_400x400.jpg", verified: true },
    content: `What peak taste and creativity feel like for a launch promo`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2051581686539046912/img/W-taOgEIAOlVSx2r.jpg",
    timestamp: "2:06 PM · May 5, 2026",
    views: "5,594", replies: 4, retweets: 2, likes: 111, bookmarks: 0,
    tweetUrl: "https://x.com/madtirth/status/2051581866269102567",
  },
  {
    author: { name: "Tirth", handle: "madtirth", avatarUrl: "https://pbs.twimg.com/profile_images/2055001661287067648/iYFi418S_400x400.jpg", verified: true },
    content: `Dropping the full thing soon.\nIntro from our in-progress launch film.`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2029152054267265025/img/WpL1OxSRq69OTce3.jpg",
    timestamp: "4:42 PM · Mar 4, 2026",
    views: "2,303", replies: 6, retweets: 2, likes: 111, bookmarks: 0,
    tweetUrl: "https://x.com/madtirth/status/2029153097587802344?s=20",
  },
];

const collaborations = [
  {
    author: { name: "POV", handle: "POVMarket", avatarUrl: "https://pbs.twimg.com/profile_images/2047048607250132992/6TouI1Pm_400x400.jpg", verified: true },
    content: `For thousands of years, people have had opinions.\n\nBut they've never been able to monetize them.\n\nUntil now.\n\nStart questing: http://pov.co`,
    mediaUrl: "https://pbs.twimg.com/amplify_video_thumb/2067656017819623424/img/KKySPcXqGcoKO3_c.jpg",
    timestamp: "10:40 PM · Jun 18, 2026",
    views: "264.5K", replies: 10000, retweets: 6100, likes: 10000, bookmarks: 171,
    tweetUrl: "https://x.com/POVMarket/status/2067656214964531632",
  },
]

const reelProjects = [
  {
    author: { name: "MarketMirror", handle: "marketmirror", avatarUrl: "https://pbs.twimg.com/profile_images/2047479335326736384/2xm5mMmH_400x400.jpg", verified: true },
    caption: `Welcome to @MarketMirror\n\nEvery time you got liquidated. Every time you bought the top. Every time the market moved against you, that wasn't bad luck. That was someone with better data on the other side of your trade.\n\nBillionaires see whale wallets move in real time. Hedge funds see liquidations before they trigger. You've been trading blind against people who see everything.\n\nNot anymore.\n\nReal-time Whale Tracking. Live Liquidation Heatmaps. AI Market Intelligence. Support & Resistance Levels. Social Sentiment. Dozens of Trading Features. All in one app.\n\nSame data. Same weapons. Your move.\n\nDon't follow the Whale — Become the Whale.\n\nMarket Mirror. Live on iOS. Next Week on Android! #Crypto #Trading #XRP`,
    mediaUrl: "https://res.cloudinary.com/dpw1mj4zg/image/upload/v1779867134/700260688_18072864128671095_2321193982532100163_n_tmlggz.jpg",
    timestamp: "May 26, 2026",
    views: "12.4K", likes: 891, comments: 43,
    reelUrl: "https://www.instagram.com/reel/DYX-fAWS-0l/",
  },
];

const linkedinPosts = [
  {
    author: {
      name: "Lanesurf",
      headline: "4726 Followers",
      avatarUrl:
        "https://ysucykflidgcxqtvnmmr.supabase.co/storage/v1/object/public/images/lane_surf_logo.jpg",
      verified: false,
    },
    content: `Every carrier on your lane is about to get a call, email, and text RIGHT NOW — until someone books it.\n\nJK 😀\n\nLanesurf just launched auto-outbound. See live: https://www.lanesurf.com/`,
    mediaUrl:
      "https://ysucykflidgcxqtvnmmr.supabase.co/storage/v1/object/public/images/lane_surf_thumb_1.jpg",
    mediaAlt: "Video thumbnail",
    timestamp: "1:05",
    reactions: 10,
    comments: 1,
    reposts: 2,
    postUrl: "https://linkedin.com/posts/janedoe_...",
  },
  // add more posts here — each one renders as its own card
];

export default function Projects() {
  useEffect(() => {
    const twitterScript = Object.assign(document.createElement("script"), {
      src: "https://platform.twitter.com/widgets.js",
      async: true,
      charset: "utf-8",
    });
    const igScript = Object.assign(document.createElement("script"), {
      src: "https://www.instagram.com/embed.js",
      async: true,
    });

    document.body.appendChild(twitterScript);
    document.body.appendChild(igScript);

    return () => {
      document.body.removeChild(twitterScript);
      document.body.removeChild(igScript);
    };
  }, []);

  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-4xl leading-[0.9] tracking-[-0.05em] text-black md:text-6xl lg:text-7xl">
            Building cinematic
            <br />
            digital experiences.
          </h1>
        </div>
      </section>

      {/* Twitter Campaigns */}
      <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1420px]">
          <div className="mb-14">
            <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">X Campaigns</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tweetProjects.map((project) => (
              <TweetCard key={project.tweetUrl} mediaAlt="Launch preview" {...project} />
            ))}
          </div>
        </div>
      </section>

       <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1420px]">
          <div className="mb-14">
            <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">Collaborations</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collaborations.map((project) => (
              <TweetCard key={project.tweetUrl} mediaAlt="Launch preview" {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Campaigns */}
      <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1420px]">
          <div className="mb-14">
            <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">Other Campaigns</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reelProjects.map((project) => (
              <InstagramReelCard key={project.reelUrl} mediaAlt="Reel preview" {...project} />
            ))}
            {linkedinPosts.map((post) => (
              <LinkedInPostCard key={post.postUrl} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}