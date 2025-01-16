'use client'
import youtube from '@/assets/youtube.png'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import tutorialImage from '@/assets/Sem nome (1080 x 1920 px) (1).png'
import { FaFacebook } from 'react-icons/fa'

export function Tutorial() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="w-[1600px] h-full mt-40 mb-20 mini:px-3 mobile:mb-10 mini:mb-10 mini:mt-10 mobile:mt-10 laptop:w-[1200px] mobile:w-full mini:w-full items-center mx-auto flex">
      <div className="absolute mobile:h-[400px] mini:hidden mobile:top-[80px] mobile:w-[350px] mobile:-right-[30px] inset-y-0 right-0 bg-[#dbc994] laptop:w-[500px] laptop:h-[650px] top-72  laptop:top-52 rounded-full blur-2xl h-[900px] w-[800px] translate-x-1/2"></div>
      <div className="absolute inset-y-0 mobile:top-[350px] mobile:h-[190px] mini:hidden mobile:rounded-none mobile:-right-[100px] mobile:w-[270px] blur-md mobile:blur-sm  z-50 laptop:w-[800px] laptop:h-[350px] laptop:top-[800px]  bg-[#0F0F0F] top-[1050px] laptop:right-[30px]  rounded-full  h-[500px] right-[90px] w-[800px]"></div>
      <div className="w-full h-full flex justify-center gap-10 mobile:gap-2 mini:gap-2 flex-col">
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:text-center mini:text-center mini:text-base text-4xl laptop:text-2xl mobile:text-xl text-[#dbc994]"
        >
          Conecte-se com Kátia Casaes
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:px-5 text-2xl mobile:text-xs mini:text-xs laptop:text-xl"
        >
          Acompanhe Kátia Casaes nas redes sociais e em nossas plataformas de
          vídeos. Descubra conteúdos exclusivos, dicas práticas, insights sobre
          leilões e alertas que farão a diferença. Junte-se à nossa comunidade e
          transforme conhecimento em grandes conquistas. Inspirando você a
          aproveitar as melhores oportunidades!
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-delay="0"
          className="mobile:px-5 text-2xl mobile:text-xs mini:text-xs laptop:text-xl"
        >
          Aqui, você encontra muito mais do que informações sobre leilões:
          descubra histórias inspiradoras, estratégias para fazer bons negócios
          e tendências do mercado. Com a experiência de Kátia Casaes, você
          estará sempre um passo à frente para identificar e aproveitar as
          melhores oportunidades. Não perca a chance de se conectar e aprender
          com quem entende do assunto!
        </div>
        <div>
          <div className="flex mobile:flex mini:gap-5 justify-evenly px-36  gap-2 mobile:gap-3 mobile:justify-center mini:justify-center mini:w-full mini:px-3 mobile:w-full mobile:px-5 items-center">
            <Link
              data-aos="zoom-out-right"
              data-aos-delay="200"
              href={'https://www.instagram.com/kcleiloes/'}
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium justify-center mobile:justify-start mini:justify-start mini:p-2 mobile:px-2 mini:px-2 hover:bg-opacity-80 transition-colors duration-300 p-3.5 mobile:p-2 rounded-full items-center"
            >
              <Image
                className="w-[50px] mobile:w-[20px] mini:w-[20px]"
                src={insta}
                alt="insta"
              />
            </Link>
            <Link
              href={'https://www.youtube.com/@kcleiloes4509'}
              data-aos="zoom-out-right"
              data-aos-delay="600"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 desktop:p-2 font-medium  justify-center mobile:justify-start mini:justify-start mini:px-2 mini:p-2 mobile:px-2 hover:bg-opacity-80 transition-colors duration-300 p-3.5 laptop:p-2 mobile:p-2 rounded-full items-center"
            >
              <Image
                className="w-[50px] mobile:w-[20px] mini:w-[20px]"
                src={youtube}
                alt="youtube"
              />
            </Link>
            <Link
              href={'https://www.facebook.com/kcleiloes/?locale=pt_BR'}
              data-aos="zoom-out-right"
              data-aos-delay="1000"
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium justify-center mobile:justify-start mini:justify-start mini:px-2 mini:p-2 mobile:px-2 hover:bg-opacity-80 transition-colors duration-300 p-3.5 mobile:p-2 rounded-full items-center"
            >
              <FaFacebook className="w-[50px] mobile:w-[20px] mini:w-[20px]" />
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
