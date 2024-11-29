'use client'
import Logo from '@/assets/Ativo 10@20x.png'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { ArrowDown, Check } from 'lucide-react'
import imagemPrincipal from '@/assets/bgPrincipall.png'
import mobileImage from '@/assets/mobileHero.png'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import about from '@/assets/aboutImage.png'

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
      className="w-full h-[100vh] mobile:px-0 mini:px-0 mb-10 gap-5 mobile:gap-0 mini:gap-0 desktop:mx-auto laptop:mx-auto flex  justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-70 h-[100vh] absolute w-[750px] laptop:w-[600px] mobile:w-[215px] mini:w-[170px] mini:h-full mobile:h-full z-10"></div>
      <div className="flex flex-col gap-5 mobile:gap-5 w-[40%] mobile:w-[215px] mini:w-[170px] relative z-10 ">
        <div className="flex w-full flex-col">
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
            <div className="text-4xl mini:text-xs  laptop:text-4xl font-medium mobile:text-xl text-center text-white ">
              Transforme oportunidades em conquistas com os leilões da KC
              Leilões!
            </div>
          </div>
        </div>

        <div className="flex flex-col mobile:pl-0 gap-3 mobile:gap-1 mini:gap-0 pl-12 mobile:text-base mini:px-2 mini:text-xs mobile:px-4 text-2xl laptop:text-xl">
          <div className="flex items-center gap-2">
            <Check size={50} className="text-[#dbc994]" />
            Mais de 5.000 clientes satisfeitos: confiança e credibilidade em
            cada arremate.
          </div>
          <div className="flex items-center gap-2">
            <Check size={50} className="text-[#dbc994]" /> Diversidade de itens:
            imóveis, veículos, móveis, eletrônicos e muito mais!
          </div>
          <div className="flex items-center gap-2">
            <Check size={50} className="text-[#dbc994]" /> Participe de forma
            prática e segura, com lances acessíveis e suporte dedicado.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="bg-[#dbc994]  mx-12 mobile:mx-1 mini:mx-0 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 mobile:py-2 mini:py-1 text-3xl laptop:text-2xl mobile:text-base mini:text-xs text-black rounded-xl font-medium"
            onClick={() => {
              document
                .getElementById('plataforms')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="mobile:text-sm mini:text-[11px]">
              Explore nossos leilões agora!
            </div>
            <div>
              <ArrowDown
                className="mobile:hidden mini:hidden"
                size={35}
                strokeWidth={1.5}
              />
              <ArrowDown
                className="desktop:hidden mini:hidden laptop:hidden tablet:hidden"
                size={20}
                strokeWidth={1.5}
              />
              <ArrowDown
                className="desktop:hidden laptop:hidden tablet:hidden mobile:hidden"
                size={16}
                strokeWidth={1.5}
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="bg-zinc-500 bg-opacity-60 mini:mx-1  mini:text-xs mx-12 mobile:mx-1 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 mobile:py-2 mini:py-1 text-4xl laptop:text-2xl mobile:text-base text-zinc-300 rounded-xl font-medium">
              Sobre nós
            </DialogTrigger>
            <DialogContent className="max-w-[50%] mobile:max-w-[90%] mini:overflow-auto mini:max-w-full">
              <div className="flex items-center">
                <div>
                  <Image className="w-[1800px]" src={about} alt="about" />
                </div>
                <div className="text-xl flex flex-col gap-5">
                  <div className="text-2xl mobile:text-lg mini:text-sm text-[#dbc994]">
                    Sobre Kátia
                  </div>
                  <div className=" mobile:text-xs mini:text-xs">
                    Atuando há 06 anos como leiloeira pública oficial, Kátia se
                    encontrou neste ramo o qual trouxe um renovo para a sua
                    carreira. Apesar de atuar em uma área burocrática, Kátia
                    exala a sua leveza também no profissional, o que facilita a
                    comunicação e entendimento por parte daqueles que não
                    possuem conhecimento em leilões.
                  </div>
                  <div className=" mobile:text-xs mini:text-xs">
                    Por entender e vivenciar as oportunidades que os leilões
                    podem oferecer, hoje Kátia atua também como educadora,
                    compartilhando o seu conhecimento e suas vivências para
                    aqueles que desejam não apenas arrematar, mas também se e
                    reencontrar e se potencializar no meio profissional.
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
