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
    domains: ["http2.mlstatic.com"]
  },
  // i18n: {
  //   defaultLocale: 'pt-BR',
  //   locales: ['en', 'pt-BR', 'es'],
  // },
  compilerOptions: {
    target: "es5",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    esModuleInterop: true,
    module: "esnext",
    moduleResolution: "bundler",
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: "preserve",
    incremental: true,
    baseUrl: ".",
    types: ["@testing-library/jest-dom"],
    paths: {
      "@/components/*": ["components/*"],
      "@/pages/*": ["pages/*"],
      "@/styles/*": ["styles/*"]
    },
    plugins: [
      {
        name: "next"
      }
    ]
  },
  include: [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "types.d.ts",
    ".next/types/**/*.ts"
  ],
  exclude: ["node_modules"]
};

export default nextConfig;
