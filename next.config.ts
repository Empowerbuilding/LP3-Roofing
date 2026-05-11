import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dwwfegzxjccqfrtgspzx.supabase.co" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};
export default nextConfig;
