import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... other configurations ...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aojvunrxuscqlxox.public.blob.vercel-storage.com",
      },
    ],
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
