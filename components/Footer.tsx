'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFooter from '@/assets/footerImage.png'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <footer className="relative w-full py-6 overflow-hidden bg-gradient-to-r from-black/50 via-black/30 to-black/50 backdrop-blur-sm border-t border-[#dbc994]/10">
      {/* Background gradients */}
      {/* Left Side */}
      <div className="absolute -left-28 top-0 w-96 h-full bg-gradient-to-r from-[#dbc994]/20 to-transparent -rotate-[22deg] blur-2xl"></div>
      <div className="absolute left-20 top-0 w-72 h-full bg-gradient-to-r from-[#dbc994]/15 via-[#dbc994]/10 to-transparent rotate-[15deg] blur-2xl"></div>
      <div className="absolute -left-10 top-0 w-80 h-full bg-gradient-to-r from-[#dbc994]/15 to-transparent rotate-[35deg] blur-2xl"></div>

      {/* Right Side */}
      <div className="absolute -right-28 top-0 w-96 h-full bg-gradient-to-l from-[#dbc994]/20 to-transparent rotate-[22deg] blur-2xl"></div>
      <div className="absolute right-20 top-0 w-72 h-full bg-gradient-to-l from-[#dbc994]/15 via-[#dbc994]/10 to-transparent -rotate-[15deg] blur-2xl"></div>
      <div className="absolute -right-10 top-0 w-80 h-full bg-gradient-to-l from-[#dbc994]/15 to-transparent -rotate-[35deg] blur-2xl"></div>

      {/* Center */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-full bg-gradient-to-b from-[#dbc994]/15 to-transparent blur-3xl"></div>
      <div className="absolute left-1/3 top-0 w-96 h-full bg-gradient-to-r from-[#dbc994]/10 via-[#dbc994]/15 to-transparent rotate-[45deg] blur-2xl"></div>
      <div className="absolute right-1/3 top-0 w-96 h-full bg-gradient-to-l from-[#dbc994]/10 via-[#dbc994]/15 to-transparent -rotate-[45deg] blur-2xl"></div>

      {/* Additional Overlays */}
      <div className="absolute left-1/4 -top-5 w-80 h-[150%] bg-gradient-to-b from-[#dbc994]/10 via-[#dbc994]/5 to-transparent rotate-[30deg] blur-2xl"></div>
      <div className="absolute right-1/4 -top-5 w-80 h-[150%] bg-gradient-to-b from-[#dbc994]/10 via-[#dbc994]/5 to-transparent -rotate-[30deg] blur-2xl"></div>

      <div className="relative w-[1600px] mobile:w-full mini:w-full mx-auto px-6 mobile:px-0">
        <div className="flex mobile:flex-col items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              src={imageFooter}
              className="w-[140px] mini:w-[120px]"
              alt="footerImage"
            />
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-2">
            {/* Social Links */}
            <div className="flex items-center gap-4 mobile:gap-3 mini:gap-2">
              <Link
                href={
                  'https://wa.me/557599501970?text=Quero%20saber%20mais%20sobre%20leiloes'
                }
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <FaWhatsapp size={26} className="text-[#dbc994]" />
              </Link>

              <Link
                href={'https://www.instagram.com/kcleiloes/'}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <FaInstagram size={26} className="text-[#dbc994]" />
              </Link>

              <Link
                href={'https://www.youtube.com/@kcleiloes4509'}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <FaYoutube size={26} className="text-[#dbc994]" />
              </Link>
              <Link
                href={'https://x.com/KcLeiloes'}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <FaXTwitter size={26} className="text-[#dbc994]" />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-white/80 text-sm">
              © 2025 KC Leilões. Todos os direitos reservados.
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col mobile:flex-row items-end gap-2 text-sm">
            <Link
              href="/termos"
              className="text-white/90 hover:text-[#dbc994] transition-colors"
            >
              Termos de uso
            </Link>
            <Link
              href="/contatos"
              className="text-white/90 hover:text-[#dbc994] transition-colors"
            >
              Contatos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
