/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  distDir: "build",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};
