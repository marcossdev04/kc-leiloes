'use client'
import Image from 'next/image'
import macbook from '@/assets/macbook.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

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
    <div className="w-[1600px] mobile:px-5 mb-10 desktop:mx-auto laptop:mx-auto laptop:max-w-[1200px] mobile:w-full h-[100vh] flex mobile:flex-col mobile:h-[100vh] mobile:mt-5 justify-center items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="flex w-1/2 mobile:w-full flex-col gap-10"
      >
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="flex justify-center items-center text-6xl"
        >
          LOGO
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className="bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Valor abaixo do mercado</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className="bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Oportunidades de Negócio Exclusivas</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className="bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Variedade de Bens</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className="bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">
              Processo Transparente e Seguridade Jurídica
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="flex flex-col items-center gap-3"
        >
          <div className="text-xl mobile:text-center text-[#dbc994]">
            Cadastre-se em nossas plataformas!
          </div>
          <div className="flex w-full gap-3">
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

      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="200"
        className="w-full mobile:px-10 relative flex justify-end"
      >
        <Image src={macbook} className="w-full" alt="laptop" />
        <div className="absolute z-30 top-[263px] mobile:top-[76px] laptop:left-[97px] laptop:top-[196px] left-[130px] mobile:left-[77px]">
          <iframe
            className="w-[812px] mobile:w-[237px] laptop:w-[609px] laptop:h-[384px] h-[510px] mobile:h-[149px]"
            src="https://www.youtube.com/embed/QthVD2DND1o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
