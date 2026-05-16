import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mosdorstroy",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
