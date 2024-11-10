'use client'
import Logo from '@/assets/Ativo 10@20x.png'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { ArrowDown, Check } from 'lucide-react'
import imagemPrincipal from '@/assets/foto_principal.svg'

export function Hero() {
  return (
    <div className="w-[1600px] h-[100vh] mobile:flex-col  mobile:pt-5 mobile:px-5 mb-10 gap-5 mobile:gap-0 desktop:mx-auto laptop:mx-auto laptop:max-w-[1200px] mobile:w-full flex mobile:h-full mobile:mt-5 justify-center items-center">
      <div className="absolute h-full mobile:hidden w-[600px] overflow-x-hidden right-0 bg-gradient-to-r from-transparent blur-lg to-[#dbc994]"></div>
      <div className="from-[#dbc994] desktop:hidden laptop:hidden tablet:hidden to-transparent blur-sm bg-gradient-to-b h-[380px] w-[300px] absolute top-[270px]"></div>
      <div className="flex flex-col gap-10 mobile:gap-3 w-full">
        <div className="flex w-full flex-col">
          <div className="flex justify-center items-center">
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
              width={150}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-6xl laptop:text-4xl font-medium mobile:text-2xl text-center text-white ">
              As Melhores Oportunidades com Confiança e Economia!
            </div>
          </div>
        </div>
        <div className="flex flex-col mobile:pl-5 gap-5 pl-12 mobile:text-base text-3xl laptop:text-xl">
          <div className="flex items-center gap-2">
            <Check className="text-[#dbc994]" />
            5.000 Clientes Satisfeitos – Compra segura
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#dbc994]" /> Imóveis e Veículos em Leilões
            Exclusivos
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-[#dbc994]" /> Preços de Ocasião e Vantagens
            Reais
          </div>
        </div>
        <div
          className="bg-[#dbc994] mobile:hidden mx-12 mobile:mx-0 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 text-4xl laptop:text-2xl mobile:text-xl text-black rounded-xl font-medium"
          onClick={() => {
            document
              .getElementById('plataforms')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div>Conheça nossos leilões</div>
          <div>
            <ArrowDown size={35} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <div className="w-[90%] z-20 flex justify-center mr-1 mobile:items-center flex-col">
        <Image
          src={imagemPrincipal}
          className="w-[600px] laptop:w-[520px] mobile:mt-6 mobile:w-[250px]"
          alt="foto_principal"
        />
      </div>
      <div className="bg-[#dbc994] mx-16 w-[80%] laptop:hidden desktop:hidden tablet:hidden hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 text-4xl mobile:text-xl text-black rounded-xl font-medium">
        <div>Conheça nossos leilões</div>
        <div>
          <ArrowDown size={35} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
