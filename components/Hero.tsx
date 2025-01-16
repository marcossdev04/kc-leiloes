'use client'
import Logo from '@/assets/KatiaCasaes.svg'
import 'aos/dist/aos.css'
import Image from 'next/image'
import imagemPrincipal from '@/assets/bgPrincipall.png'
import mobileImage from '@/assets/mobileHero.png'
import { useState, useEffect } from 'react'

export function Hero() {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const updateBackground = () => {
      setBackgroundImage(
        window.innerWidth > 800 ? imagemPrincipal.src : mobileImage.src,
      )
    }

    updateBackground()
    window.addEventListener('resize', updateBackground)

    return () => window.removeEventListener('resize', updateBackground)
  }, [])
  return (
    <div
      className="w-full h-[100vh] mobile:px-0 mini:px-0 mb-10 mobile:gap-0 mini:gap-0 desktop:mx-auto laptop:mx-auto flex  justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col justify-center h-full w-full">
        <div className="bg-black bg-opacity-70 h-[100vh] absolute w-[750px] laptop:w-[600px] mobile:w-[215px] mini:w-[170px] mini:h-full mobile:h-full z-10"></div>
        <div className="flex flex-col gap-5 mobile:gap-5 w-[40%] mobile:w-[215px] mini:w-[170px] relative z-10 ">
          <div className="flex w-full flex-col mt-32 mobile:mt-8 mini:mt-0 laptop:mt-8">
            <div className="flex justify-center items-center">
              <Image
                src={Logo}
                className="laptop:hidden mini:hidden mobile:hidden"
                width={400}
                alt="logo"
              />
              <Image
                src={Logo}
                className="mobile:hidden mini:hidden desktop:hidden"
                width={300}
                alt="logo"
              />
              <Image
                src={Logo}
                className="laptop:hidden mini:hidden desktop:hidden"
                width={200}
                alt="logo"
              />
              <Image
                src={Logo}
                className="laptop:hidden mobile:hidden desktop:hidden"
                width={200}
                alt="logo"
              />
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-4xl mini:text-xs px-3 laptop:text-4xl font-medium mobile:text-base text-center text-white ">
                Transparência e segurança em cada lance, conectando sonhos a
                oportunidades reais
              </div>
            </div>
            <div className="px-10 mobile:px-1 mini:px-1 mini:text-xs text-lg mobile:text-xs text-zinc-200 text-center mt-3">
              Atuando há 06 anos como leiloeira pública oficial, Kátia se
              encontrou neste ramo o qual trouxe um renovo para a sua carreira.
              Apesar de atuar em uma área burocrática, Kátia exala a sua leveza
              também no profissional, o que facilita a comunicação e
              entendimento por parte daqueles que não possuem conhecimento em
              leilões.
            </div>
            <div className="w-[50%] mini:text-xs mini:w-[90%] flex font-medium text-xl mobile:text-sm mobile:w-[90%] mt-6 justify-center text-black mx-auto py-2 rounded-lg hover:bg-opacity-90 cursor-pointer duration-300 transition-colors text-center  bg-[#dbc994]">
              Explore o mundo dos leilões
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mini:hidden mt-36 mobile:mt-4 mini:mt-2 laptop:mt-0 w-full z-10 mx-auto">
          <div className="flex justify-evenly mobile:grid mobile:grid-cols-1 mobile:gap-3 mini:gap-2 mini:grid mini:grid-cols-1 w-full">
            <div className="bg-zinc-800 items-center gap-6 flex bg-opacity-50 rounded-xl px-3 h-[120px] w-[350px] mini:w-[300px] mini:mx-auto mobile:h-[80px] mini:h-[60px] relative mobile:mx-auto ">
              <div className="flex flex-col">
                <div className="text-2xl mobile:text-lg mini:text-base font-medium text-[#ead38e]">
                  Experiência
                </div>
                <div className="text-zinc-100 mini:text-[11px] text-sm mobile:text-xs">
                  Há mais de 6 anos no mercado, Katia tem propriedade e uma
                  vasta experiência
                </div>
              </div>
              <div className="flex justify-center flex-col text-[#ead38e] items-center">
                <div className="text-5xl mobile:text-2xl mini:text-xl font-semibold">
                  +6
                </div>
                <div className="text-lg mobile:text-sm mini:text-xs font-semibold">
                  ANOS
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 items-center gap-6 flex bg-opacity-50 rounded-xl px-3 h-[120px] w-[350px] mini:w-[300px] mini:mx-auto mobile:h-[80px] mini:h-[60px] relative mobile:mx-auto">
              <div className="flex flex-col">
                <div className="text-2xl mobile:text-lg mini:text-sm font-medium text-[#ead38e]">
                  Confiança
                </div>
                <div className="text-zinc-100 text-sm mini:text-[9px] mobile:text-xs">
                  Com mais de 6.000 clientes satisfeitos, Katia trás resultados
                  e seus seguidores comprovam!
                </div>
              </div>
              <div className="flex justify-center flex-col text-[#ead38e] items-center">
                <div className="text-5xl mobile:text-2xl mini:text-xl font-semibold">
                  +5K
                </div>
                <div className="text-lg mobile:text-xs mini:text-xs font-semibold">
                  CLIENTES
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 items-center gap-6 flex bg-opacity-50 rounded-xl px-3 h-[120px] mini:w-[300px] mini:mx-auto w-[350px] mobile:h-[80px] mini:h-[60px] relative mobile:mx-auto">
              <div className="flex flex-col">
                <div className="text-2xl mobile:text-lg mini:text-sm font-medium text-[#ead38e]">
                  Autoridade
                </div>
                <div className="text-zinc-100 mini:text-[11px] text-sm mobile:text-xs">
                  Katia possui todas as licenças e certificações necessárias e
                  desejáveis para um leiloeiro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
