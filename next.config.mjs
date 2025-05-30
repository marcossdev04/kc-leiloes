/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Removido temporariamente para build tradicional
  images: {
    loader: 'default', // ou 'imgix' se precisar de mais controle
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Aceita qualquer hostname com HTTPS
      },
    ],
  },
}
export default nextConfig
