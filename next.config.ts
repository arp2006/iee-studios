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
        hostname: "ycjvjlkxkfopguxymwci.supabase.co",
      },
    ],
  },
};

export default nextConfig;