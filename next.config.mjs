/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Comentado para build tradicional
  images: {
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http', // Adicione esta parte
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true, // Se você tem SVGs
    contentDispositionType: 'attachment',
  },
}
export default nextConfig
