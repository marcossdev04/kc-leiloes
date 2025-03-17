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
        <div className="bg-gradient-to-r from-black/95 via-black/65 to-transparent h-[100vh] absolute w-[50%] laptop:w-[50%] mobile:w-full mini:w-full mini:h-full mobile:h-full z-10"></div>
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
              <div className="text-2xl mini:text-xs px-3 laptop:text-2xl mobile:text-base text-center text-[#dbc994] font-extralight">
                Conhecimento é poder, e nos leilões não seria diferente, aprenda
                sobre leilões e tenha mais segurança para seus lances
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
