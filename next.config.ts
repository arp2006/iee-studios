import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        // Active Supabase bucket (avatars & media used in LinkedInPostCard / projects page)
        hostname: "ysucykflidgcxqtvnmmr.supabase.co",
      },
      {
        protocol: "https",
        // Cloudinary (hero video thumbnail, Instagram reel covers)
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;