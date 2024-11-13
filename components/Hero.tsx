'use client'
import Logo from '@/assets/Ativo 10@20x.png'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { ArrowDown, Check } from 'lucide-react'
import imagemPrincipal from '@/assets/bgPrincipall.png'

export function Hero() {
  return (
    <div
      className="w-full h-[100vh] mobile:pt-5 mobile:px-0 mb-10 gap-5 mobile:gap-0 desktop:mx-auto laptop:mx-auto flex mobile:h-full justify-start items-center relative"
      style={{
        backgroundImage: `url(${imagemPrincipal.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-70 h-[100vh] absolute w-[750px] laptop:w-[600px] mobile:w-[170px] mobile:h-[40vh] z-10"></div>
      <div className="flex flex-col gap-10 mobile:gap-3 w-[40%] relative z-10 ">
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
            <div className="text-6xl  laptop:text-4xl font-medium mobile:text-sm text-center text-white ">
              Adentre no universo das oportunidades em leilões!
            </div>
          </div>
        </div>
        <div className="flex flex-col mobile:pl-0 gap-5 mobile:gap-2 pl-12 mobile:text-xs text-3xl laptop:text-xl">
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
          className="bg-[#dbc994]  mx-12 mobile:mx-1 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 mobile:py-0 text-4xl laptop:text-2xl mobile:text-[10px] text-black rounded-xl font-medium"
          onClick={() => {
            document
              .getElementById('plataforms')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div>Conheça nossos leilões</div>
          <div>
            <ArrowDown className="mobile:hidden" size={35} strokeWidth={1.5} />
            <ArrowDown
              className="desktop:hidden laptop:hidden tablet:hidden"
              size={20}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
