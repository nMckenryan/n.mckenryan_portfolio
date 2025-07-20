import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... other configurations ...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aojvunrxuscqlxox.public.blob.vercel-storage.com',
      },
    ],
    minimumCacheTTL: 60, // 1 minute - ensures CDN caches the optimized images
    formats: ['image/webp'], // Serve WebP by default for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'public/fonts/',
          publicPath: '/fonts/',
        },
      },
    });
    return config;
  },
};


export default nextConfig;
