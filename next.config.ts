import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-icons",
      "@radix-ui/themes",
      "@tailwindcss/postcss",
      "tailwindcss",
      "tailwindcss-radix",
    ]
  },
  // Images domains
  images: {
    domains: ["images.samsung.com", "http2.mlstatic.com"]
  },
  // i18n: {
  //   defaultLocale: 'pt-BR',
  //   locales: ['en', 'pt-BR', 'es'],
  // },
};

export default nextConfig;
