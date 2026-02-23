/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    // Avoid stale server chunk cache in dev that can cause missing chunk module errors.
    if (dev && isServer) {
      config.cache = false;
      // Keep dev server chunk filenames consistent with runtime `require("./<id>.js")`.
      if (config.output) {
        config.output.chunkFilename = '[id].js';
      }
    }
    return config;
  },
};

module.exports = nextConfig;
