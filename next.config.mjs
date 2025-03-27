/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
      domains: ['example.com'],
    },
    basePath: "/ViMocViet",
    assetPrefix: "/ViMocViet", 
};

export default nextConfig;
