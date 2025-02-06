'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFooter from '@/assets/footerImage.png'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <footer className="flex py-2 mobile:py-2 mini:py-1 mobile:mt-2  bg-[#dbc994]  mx-auto w-full">
      <div className="w-[1600px] mobile:w-full mini:w-full text-zinc-900 flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 mobile:grid mobile:grid-cols-1 mini:grid-cols-1 mini:grid mobile:gap-0 justify-between w-full px-24 desktop:px-0 mobile:px-0 mini:px-0 items-center gap-2 ">
          <div className="flex flex-col mobile:gap-1 items-center">
            <div className="text-xl flex items-center mobile:text-xl mini:text-base">
              <Image
                src={imageFooter}
                className="w-[160px] mini:w-[130px]"
                alt="footerImage"
              />{' '}
            </div>
          </div>
          <div className="flex justify-center mobile:hidden mini:hidden gap-3 mobile:justify-between mobile:w-full mini:w-full mobile:px-16 items-center">
            <Link
              href={'https://wa.me/75998141403'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
            >
              <FaWhatsapp size={25} />
            </Link>
            <Link
              href={'https://www.instagram.com/kcleiloes/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              href={'https://x.com/KcLeiloes'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
            >
              <FaYoutube size={25} />
              {/* <Image width={22} src={x} alt="insta" /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
