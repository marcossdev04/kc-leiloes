'use client'
import Logo from '@/assets/Ativo 10@20x.png'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import imagemPrincipal from '@/assets/foto_principal.svg'

export function Hero() {
  return (
    <div className="w-[1600px] h-[100vh]  mobile:pt-10 mobile:px-5 mb-10 gap-5 mobile:gap-2 desktop:mx-auto laptop:mx-auto laptop:max-w-[1200px] mobile:w-full flex mobile:h-full mobile:mt-5 justify-center items-center">
      <div className="absolute h-full mobile:hidden w-[600px] overflow-x-hidden right-0 bg-gradient-to-r from-transparent blur-lg to-[#dbc994]"></div>
      <div className="flex flex-col gap-10 w-full">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex w-full flex-col"
        >
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex justify-center items-center"
          >
            <Image
              src={Logo}
              className="laptop:hidden mobile:hidden"
              width={500}
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
            <div className="text-6xl font-medium mobile:text-xl text-center text-white ">
              As Melhores Oportunidades com Confiança e Economia!
            </div>
          </div>
        </div>
        <div className="mobile:text-sm text-center text-2xl">
          <span className="text-[#dbc994]">+5.000</span> clientes Satisfeitos –
          Compre com segurança. Imóveis e Veículos em Leilões Exclusivos Preços
          de Ocasião e Vantagens Reais
        </div>
        <div className="bg-[#dbc994] mx-16 mobile:mx-0 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 text-4xl mobile:text-xl text-black rounded-xl font-medium">
          <div>Conheça nossos leilões</div>
          <div>
            <ArrowDown size={35} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <div className="w-[90%] mobile:hidden z-20 flex flex-col">
        <Image
          src={imagemPrincipal}
          className="w-[1000px]"
          alt="foto_principal"
        />
      </div>
      {/* <div
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
      </div> */}
    </div>
  )
}
