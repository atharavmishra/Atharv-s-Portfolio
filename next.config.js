/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    // react-icons exposes its subpaths (react-icons/ai, /bs, /hi) as directories
    // with no "main". Modern Node refuses to resolve those as ESM, which breaks
    // `next build` at the page-data step. Keeping externals on CJS avoids it.
    esmExternals: false,
  },
};

module.exports = nextConfig;
