import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "randomuser.me" }],
  },
  /* config options here */
};

export default nextConfig;
