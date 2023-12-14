/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: process.env.NODE_ENV === 'production' ? 'docs' : '.next',

  async rewrites() {
    return [
      {
        source: '/api/v1/:slug*',
        destination: 'http://localhost:9528/api/v1/:slug*',
      }
    ]
  }
}
module.exports = nextConfig