/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webcdn.hirezstudios.com',
        port: '',
        pathname: '/smite/item-icons/**'
      }
    ]
  }
}

module.exports = nextConfig