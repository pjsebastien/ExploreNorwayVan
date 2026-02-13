import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique pour un site 100% SSG
  output: 'export',

  // Optimisation des images pour export statique
  images: {
    unoptimized: true,
  },

  // Trailing slashes pour compatibilité hébergement statique
  trailingSlash: true,
};

export default nextConfig;
