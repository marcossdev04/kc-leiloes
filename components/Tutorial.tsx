'use client'
import youtube from '@/assets/youtube.png'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import tutorialImage from '@/assets/Sem nome (1080 x 1920 px) (1).png'
import x from '@/assets/Design sem nome.png'
import { FaFacebook } from 'react-icons/fa'

export function Tutorial() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="w-[1600px] h-full mt-40 mb-20 mobile:mb-10 mini:mb-10 mini:mt-10 mobile:mt-10 laptop:w-[1200px] mobile:w-full mini:w-full items-center mx-auto flex">
      <div className="absolute mobile:h-[400px] mini:hidden mobile:top-[80px] mobile:w-[350px] mobile:-right-[30px] inset-y-0 right-0 bg-[#dbc994] laptop:w-[500px] laptop:h-[650px] top-72  laptop:top-52 rounded-full blur-2xl h-[900px] w-[800px] translate-x-1/2"></div>
      <div className="absolute inset-y-0 mobile:top-[405px] mobile:h-[150px] mini:hidden mobile:rounded-none mobile:-right-[100px] mobile:w-[230px] blur-md mobile:blur-none  z-50 laptop:w-[800px] laptop:h-[350px] laptop:top-[800px]  bg-[#141414] top-[1050px] laptop:right-[30px]  rounded-full  h-[500px] right-[90px] w-[800px]"></div>
      <div className="w-full h-full flex justify-center gap-10 flex-col">
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:text-center mini:text-center mini:text-base text-4xl laptop:text-3xl mobile:text-xl text-[#dbc994]"
        >
          Siga a KC Leilões e aproveite as melhores oportunidades!
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:px-5 text-3xl mobile:text-base mini:text-xs laptop:text-2xl"
        >
          Conecte-se com a KC Leilões nas nossas redes sociais e plataformas de
          vídeos. Descubra conteúdos exclusivos, dicas práticas e alertas
          imperdíveis. Participe da nossa comunidade e transforme oportunidades
          em grandes conquistas!
        </div>
        <div>
          <div className="flex mobile:flex-col mini:flex-col justify-center gap-2 mobile:justify-center mini:justify-center mini:w-full mini:px-3 mobile:w-full mobile:px-5 items-center">
            <Link
              data-aos="zoom-out-right"
              data-aos-delay="0"
              href={'https://www.instagram.com/kcleiloes/'}
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center mobile:justify-start mini:justify-start mini:px-5 mini:p-2 mobile:px-8 hover:bg-opacity-80 transition-colors duration-300 p-3 mobile:p-2 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
              <div className="text-xl  mobile:text-lg mini:text-sm">
                Instagram
              </div>
            </Link>
            <Link
              href={'https://x.com/KcLeiloes'}
              data-aos="zoom-out-right"
              data-aos-delay="800"
              className="flex gap-2 bg-[#dbc994] desktop:p-2 text-zinc-900 font-medium w-full justify-center mobile:justify-start mini:justify-start mini:px-5 mini:p-2 mobile:px-8 hover:bg-opacity-80 transition-colors duration-300 p-3 laptop:p-2 mobile:p-2 rounded-xl items-center"
            >
              <Image width={35} src={x} alt="youtube" />
              <div className="text-xl mini:text-sm mobile:text-lg">X</div>
            </Link>
            <Link
              href={'https://www.youtube.com/@kcleiloes4509'}
              data-aos="zoom-out-right"
              data-aos-delay="1000"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 desktop:p-2 font-medium w-full justify-center mobile:justify-start mini:justify-start mini:px-5 mini:p-2 mobile:px-8 hover:bg-opacity-80 transition-colors duration-300 p-3 laptop:p-2 mobile:p-2 rounded-xl items-center"
            >
              <Image width={35} src={youtube} alt="youtube" />
              <div className="text-xl mobile:text-lg mini:text-sm">Youtube</div>
            </Link>
            <Link
              href={'https://www.facebook.com/kcleiloes/?locale=pt_BR'}
              data-aos="zoom-out-right"
              data-aos-delay="1000"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-full justify-center mobile:justify-start mini:justify-start mini:px-5 mini:p-2 mobile:px-8 hover:bg-opacity-80 transition-colors duration-300 p-3 mobile:p-2 rounded-xl items-center"
            >
              <FaFacebook size={25} />
              <div className="text-xl mobile:text-lg mini:text-sm">
                Facebook
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-40 w-full mini:hidden mobile:w-2/3 flex justify-end">
        <Image
          className="w-[600px] mobile:w-[200px] laptop:w-[450px]"
          src={tutorialImage}
          alt="teste"
        />
      </div>
    </div>
  )
}
