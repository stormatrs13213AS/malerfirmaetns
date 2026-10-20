import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nytest",
  assetPrefix: "/nytest/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
