/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // M0.2: no public Blob hostname here — results are served only through
    // the authorized /api/proxy route as same-origin browser object URLs,
    // never rendered from a public Blob URL. These remaining entries stay
    // for the still-image preview path (`<img>`/next/image against Fal
    // asset hosts elsewhere in the app) and are unrelated to private assets.
    remotePatterns: [
      { protocol: 'https', hostname: 'fal.media' },
      { protocol: 'https', hostname: '*.fal.media' },
      { protocol: 'https', hostname: 'cdn.fal.ai' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
    ],
  },
}

module.exports = nextConfig
