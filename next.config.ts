import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  images: {
    dangerouslyAllowSVG: true,
  },

  reactStrictMode: true,

  basePath: "/website",
};

export default nextConfig;
