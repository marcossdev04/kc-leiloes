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
      className="w-full h-[100vh] mobile:px-0 mb-10 gap-5 mobile:gap-0 desktop:mx-auto laptop:mx-auto flex  justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-70 h-[100vh] absolute w-[750px] laptop:w-[600px] mobile:w-[215px] mobile:h-full z-10"></div>
      <div className="flex flex-col gap-10 mobile:gap-10 w-[40%] mobile:w-[215px] relative z-10 ">
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
              width={200}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-6xl  laptop:text-4xl font-medium mobile:text-2xl text-center text-white ">
              Adentre no universo das oportunidades em leilões!
            </div>
          </div>
        </div>

        <div className="flex flex-col mobile:pl-0 gap-5 mobile:gap-2 pl-12 mobile:text-lg mobile:px-4 text-3xl laptop:text-xl">
          <div className="flex items-center gap-2">
            <Check size={40} className="text-[#dbc994]" />
            5.000 Clientes Satisfeitos – Compra segura
          </div>
          <div className="flex items-center gap-2">
            <Check size={40} className="text-[#dbc994]" /> Imóveis e Veículos em
            Leilões Exclusivos
          </div>
          <div className="flex items-center gap-2">
            <Check size={40} className="text-[#dbc994]" /> Preços de Ocasião e
            Vantagens Reais
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="bg-[#dbc994]  mx-12 mobile:mx-1 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 mobile:py-2 text-4xl laptop:text-2xl mobile:text-base text-black rounded-xl font-medium"
            onClick={() => {
              document
                .getElementById('plataforms')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div>Conheça nossos leilões</div>
            <div>
              <ArrowDown
                className="mobile:hidden"
                size={35}
                strokeWidth={1.5}
              />
              <ArrowDown
                className="desktop:hidden laptop:hidden tablet:hidden"
                size={20}
                strokeWidth={1.5}
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="bg-zinc-500 bg-opacity-60  mx-12 mobile:mx-1 hover:bg-opacity-80 transition-all hover:scale-110 cursor-pointer duration-300 flex items-center gap-2 justify-center py-3 mobile:py-2 text-4xl laptop:text-2xl mobile:text-base text-zinc-300 rounded-xl font-medium">
              Sobre nós
            </DialogTrigger>
            <DialogContent className="max-w-[50%]">
              <div className="flex items-center">
                <div>
                  <Image className="w-[1800px]" src={about} alt="about" />
                </div>
                <div className="text-xl flex flex-col gap-5">
                  <div className="text-2xl text-[#dbc994]">Sobre Kátia</div>
                  <div>
                    Atuando há 06 anos como leiloeira pública oficial, Kátia se
                    encontrou neste ramo o qual trouxe um renovo para a sua
                    carreira. Apesar de atuar em uma área burocrática, Kátia
                    exala a sua leveza também no profissional, o que facilita a
                    comunicação e entendimento por parte daqueles que não
                    possuem conhecimento em leilões.
                  </div>
                  <div>
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
