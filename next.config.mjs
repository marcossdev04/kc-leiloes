/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Necessário para Docker
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
