import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    cpus: 1,
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;