'use client'
import youtube from '@/assets/youtube.png'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import tutorialImage from '@/assets/Sem nome (1080 x 1920 px) (1).png'

export function Tutorial() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="w-[1600px] h-full mt-40 mb-20 laptop:w-[1200px] mobile:w-full items-center mx-auto flex">
      <div className="absolute mobile:h-[400px] mobile:top-[150px] mobile:w-[350px] mobile:-right-[30px] inset-y-0 right-0 bg-[#dbc994] laptop:w-[500px] laptop:h-[650px] top-72  laptop:top-52 rounded-full blur-2xl h-[900px] w-[800px] translate-x-1/2"></div>
      <div className="absolute inset-y-0 mobile:top-[450px] mobile:h-[200px] mobile:rounded-3xl mobile:-right-[100px] mobile:w-[300px]  z-50 laptop:w-[800px] laptop:h-[350px] laptop:top-[800px]  bg-[#141414] top-[1050px] laptop:right-[30px]  rounded-full blur-lg h-[500px] right-[90px] w-[800px]"></div>
      <div className="w-full h-full flex justify-center gap-10 flex-col">
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:text-center text-4xl laptop:text-3xl mobile:text-xl text-[#dbc994]"
        >
          Nossa mídias
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:px-5 text-3xl mobile:text-xs laptop:text-2xl"
        >
          Siga-nos em nossas redes sociais e plataformas de vídeos para não
          ficar de fora de nenhum dos nossos riquíssimos conteúdos que te
          auxiliará a ser uma abordagem assertiva no ramo de leilões.
        </div>
        <div>
          <div className="flex mobile:flex-col justify-center gap-2 mobile:justify-center mobile:w-full mobile:px-5 items-center">
            <Link
              data-aos="zoom-out-right"
              data-aos-delay="0"
              href={'/'}
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center     hover:bg-opacity-80 transition-colors duration-300 p-3 mobile:p-2 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
              <div className="text-xl  mobile:text-lg">Instagram</div>
            </Link>
            <div
              data-aos="zoom-out-right"
              data-aos-delay="800"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center hover:bg-opacity-80 transition-colors duration-300 p-2 mobile:p-1 rounded-xl items-center"
            >
              <Image width={35} src={youtube} alt="youtube" />
              <div className="text-xl mobile:text-lg">Youtube</div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-40 w-full flex justify-end">
        <Image
          className="w-[600px] mobile:w-[200px] laptop:w-[450px]"
          src={tutorialImage}
          alt="teste"
        />
      </div>
    </div>
  )
}
