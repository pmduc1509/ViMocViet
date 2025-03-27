/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
      domains: ['example.com'],
      basePath: "/ViMocViet",
    },
};

export default nextConfig;
