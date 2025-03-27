/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
      domains: ['example.com'],
    },
};

export default nextConfig;
