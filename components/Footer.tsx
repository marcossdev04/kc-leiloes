'use client'
import wpp from '@/assets/whatsapp-svgrepo-com (1).svg'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import phone from '@/assets/phone-call.png'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFooter from '@/assets/footerImage.png'

export function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <footer className="flex py-2 mobile:py-3 mobile:mt-10 bg-[#dbc994]  mx-auto w-full">
      <div className="w-[1600px] mobile:w-full text-zinc-900 flex items-center justify-center mx-auto">
        <div className="flex mobile:grid mobile:grid-cols-1 mobile:gap-0 justify-between w-full px-24 desktop:px-0 mobile:px-0 items-center gap-2 ">
          <div className="flex text-2xl mobile:pb-2 justify-center items-center">
            Termos de uso
          </div>
          <div className="flex flex-col mobile:gap-1 items-center">
            <div className="text-xl flex items-center mobile:text-xl">
              <Image
                src={imageFooter}
                className="w-[160px]"
                alt="footerImage"
              />{' '}
            </div>
            <div className="ml-2 text-lg mobile:text-sm mobile:pb-4 flex items-center">
              Todos os direitos reservados
            </div>
          </div>
          <div className="flex  gap-3 mobile:justify-between mobile:w-full mobile:px-16 items-center">
            <div className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center">
              <Image width={22} src={wpp} alt="whatsapp" />
            </div>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={insta} alt="insta" />
            </Link>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={phone} alt="insta" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
