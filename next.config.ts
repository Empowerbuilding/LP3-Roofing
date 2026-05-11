import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dwwfegzxjccqfrtgspzx.supabase.co" },
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
};
export default nextConfig;
