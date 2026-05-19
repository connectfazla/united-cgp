import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack uses this workspace as the root
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
