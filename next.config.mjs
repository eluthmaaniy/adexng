/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [new URL('https://res.cloudinary.com/dr83qj6bf/**')] },
  async redirects() { return [{ source: '/work/faith-forged-designs', destination: '/work', permanent: true }]; },
  async headers() {
    return process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'
      ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
      : [];
  },
};
export default nextConfig;
