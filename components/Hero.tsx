'use client'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Logo from '@/assets/kc-leilões.svg'

export function Hero() {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 0,
      delay: 0,
    })

    // Força a animação após o componente ser montado
    const timer = setTimeout(() => {
      AOS.refresh()
    }, 1)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[1100px] mobile:pt-10 mobile:px-5 mb-10 gap-5 mobile:gap-2 desktop:mx-auto laptop:mx-auto laptop:max-w-[1200px] mobile:w-full h-full flex flex-col mobile:h-full mobile:mt-5 justify-center items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="flex w-full flex-col "
      >
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="flex justify-center items-center"
        >
          <Image
            src={Logo}
            className="laptop:hidden mobile:hidden"
            width={300}
            alt="logo"
          />
          <Image
            src={Logo}
            className="mobile:hidden desktop:hidden"
            width={300}
            alt="logo"
          />
          <Image
            src={Logo}
            className="laptop:hidden desktop:hidden"
            width={250}
            alt="logo"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex flex-col mobile:pts-5 gap-2 justify-center items-center"
        >
          <div className="text-4xl mobile:text-xl text-center text-[#dbc994] ">
            Conquiste os Melhores Bens com Segurança e Vantagem – Oportunidades
            Exclusivas de Leilão!
          </div>
        </div>
      </div>
      <div className="mobile:text-sm mobile:text-center">
        <span className="text-[#dbc994]">+5.000</span> arrematantes{' '}
        <span className="text-[#dbc994]">satisfeitos</span> comprando imóveis,
        veículos e oportunidades únicas a preços que parecem impossíveis.
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="w-full mobile:px-10 mobile:mt-10 relative flex justify-center"
      >
        <div className="z-30 flex flex-col items-center">
          <div className="w-[1100px] laptop:w-[900px] laptop:h-[400px] h-[500px] mobile:w-[370px] mobile:h-[220px] rounded-xl flex justify-center items-center bg-[#dbc994]">
            <iframe
              className="w-[1080px] mobile:w-[350px] mobile:h-[200px] laptop:w-[880px] laptop:h-[380px] h-[480px]"
              src="https://www.youtube.com/embed/QthVD2DND1o"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="flex flex-col mobile:mt-10 items-center gap-3"
      >
        <div className="text-3xl mobile:text-base text-center text-[#dbc994]">
          Já assistiu ao vídeo? Clique aqui para entrar diretamente no leilão e
          não perder as melhores oportunidades agora!
        </div>
        <div className="flex w-full gap-5">
          <div className="w-full flex">
            <div className="flex w-full text-xl justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
              Link 1
            </div>
          </div>
          <div className="flex w-full text-xl justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
            Link 2
          </div>
        </div>
      </div>
    </div>
  )
}
