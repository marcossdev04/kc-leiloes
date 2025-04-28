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
      className="w-full h-[100vh] mobile:px-0 mini:px-0 mobile:gap-0 mini:gap-0 desktop:mx-auto laptop:mx-auto flex justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col justify-center h-full w-full">
        <div className="bg-gradient-to-r from-black/95 via-black/65 to-transparent h-[100vh] absolute w-[50%] laptop:w-[50%] mobile:w-full mini:w-full mini:h-full mobile:h-full z-10"></div>
        <div className="flex flex-col gap-3 mobile:gap-3 w-[40%] mobile:w-[215px] mini:w-[170px] relative z-10">
          <div className="flex w-full flex-col gap-3">
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
                <div>A moeda mais valiosa nos leilões é o conhecimento!</div>
                <div>
                  Vem comigo desvendar os segredos por trás de cada lance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-12 z-50 left-1/2 flex flex-col items-center gap-4 cursor-pointer hover:scale-110 transition-transform duration-300"
        style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 1,
            behavior: 'smooth',
          })
        }}
      >
        <div className="text-[#dbc994] text-base font-light tracking-wider">
          Descubra mais
        </div>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#dbc994] to-transparent"></div>
        <div className="w-10 h-10 rounded-full border-2 border-[#dbc994] flex items-center justify-center p-1 relative overflow-hidden">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#dbc994] to-[#dbc994]/30 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#dbc994]/10"></div>
        </div>
      </div>
    </div>
  )
}
