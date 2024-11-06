'use client'
import youtube from '@/assets/youtube.png'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import tutorialImage from '@/assets/imagetest.svg'

export function Tutorial() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="w-[1600px] h-full mt-40 mb-20 laptop:w-[1200px] mobile:w-full items-center mx-auto flex mobile:flex-col ">
      <div className="absolute mobile:hidden inset-y-0 right-0 bg-[#dbc994] laptop:w-[600px] laptop:h-[600px] top-32 laptop:top-40 rounded-full blur-2xl h-[800px] w-[800px] translate-x-1/2"></div>
      <div className="absolute inset-y-0 z-50 mobile:hidden laptop:w-[400px] laptop:h-[400px]  bg-[#191919] top-[880px] rounded-full blur-xl h-[500px] right-[80px] w-[800px]"></div>
      <div className="w-1/2 mobile:w-full h-full flex justify-center gap-10 mobile:mt-16 flex-col">
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:text-center text-4xl laptop:text-3xl text-[#dbc994]"
        >
          Nossa mídias
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:px-5 text-3xl mobile:text-xl laptop:text-2xl"
        >
          Siga-nos em nossas redes sociais e plataformas de vídeos para não
          ficar de fora de nenhum dos nossos riquíssimos conteúdos que te
          auxiliará a ser uma abordagem assertiva no ramo de leilões.
        </div>
        <div>
          <div className="flex justify-center gap-2 mobile:justify-center mobile:w-full mobile:px-16 items-center">
            <Link
              data-aos="zoom-out-right"
              data-aos-delay="0"
              href={'/'}
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center hover:bg-opacity-80 transition-colors duration-300 p-3 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
              <div className="text-xl">Instagram</div>
            </Link>
            <div
              data-aos="zoom-out-right"
              data-aos-delay="800"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center hover:bg-opacity-80 transition-colors duration-300 p-2 rounded-xl items-center"
            >
              <Image width={35} src={youtube} alt="youtube" />
              <div className="text-xl">Youtube</div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-40 mobile:hidden">
        <Image
          className=" w-[800px] laptop:w-[650px]"
          src={tutorialImage}
          alt="teste"
        />
      </div>
    </div>
  )
}
