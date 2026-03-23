import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images non optimisées (pas de serveur d'images)
  images: {
    unoptimized: true,
  },

  // Trailing slashes pour compatibilité SEO
  trailingSlash: true,
};

export default nextConfig;
