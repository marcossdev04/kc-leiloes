'use client'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import tutorialImage from '@/assets/Sem nome (1080 x 1920 px) (1).png'
import {
  Dot,
  Ellipsis,
  Heart,
  MessageCircle,
  SendHorizontal,
} from 'lucide-react'
import image1 from '@/assets/image1.jpeg'
import image2 from '@/assets/image2.jpeg'
import image3 from '@/assets/image3.jpeg'
import Link from 'next/link'

const CAROUSEL_IMAGES = [image1, image2, image3] as const

export function Tutorial() {
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) =>
        prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1,
      )
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-[1600px] mobile:px-5 h-full mt-40 mobile:mt-0 mb-20 mini:px-3 mobile:mb-10 mini:mb-10 mini:mt-10 laptop:w-[1200px] mobile:w-full mini:w-full items-center mx-auto flex">
      <div className="absolute mobile:hidden  mobile:h-[400px] mini:hidden mobile:top-[80px] mobile:w-[350px] mobile:-right-[30px] inset-y-0 right-0 bg-[#dbc994] laptop:w-[500px] laptop:h-[650px] top-72  laptop:top-52 rounded-full blur-2xl h-[900px] w-[800px] translate-x-1/2"></div>
      <div className="absolute inset-y-0 mobile:hidden  mobile:top-[350px] mobile:h-[190px] mini:hidden mobile:rounded-none mobile:-right-[100px] mobile:w-[270px] blur-md mobile:blur-sm  z-50 laptop:w-[800px] laptop:h-[350px] laptop:top-[800px]  bg-[#0F0F0F] top-[1050px] laptop:right-[30px]  rounded-full  h-[500px] right-[90px] w-[800px]"></div>
      <Link
        target="blank"
        href={'https://www.instagram.com/katiacasaes/'}
        className="w-full  desktop:ml-40 desktop:w-[800px] laptop:w-[500px] laptop:ml-20 h-full flex justify-center gap-10 mobile:gap-2 mini:gap-2 flex-col"
      >
        <div className="bg-white/20 flex flex-col">
          <div className="flex justify-center text-xl font-medium py-1.5 border-b px-5">
            Post
          </div>
          <div className="flex flex-col">
            <div className="flex pr-2 items-center justify-between">
              <div className="flex gap-2 py-1">
                <div></div>
                <div className="flex gap-1 text-xl items-center">
                  <div>katiacasaes</div>
                  <div>
                    <Dot />
                  </div>
                  <div className="text-blue-500">Follow</div>
                </div>
              </div>
              <div>
                <Ellipsis size={25} />
              </div>
            </div>
            <div className="relative w-full desktop:h-[700px] h-[500px] overflow-hidden">
              {CAROUSEL_IMAGES.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`post${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
              ))}
            </div>
          </div>
          <div className="flex px-3 mt-3 mb-2 justify-between">
            <div className="flex items-center gap-3">
              <div>
                <Heart size={25} />
              </div>
              <div>
                <MessageCircle size={25} />
              </div>
              <div>
                <SendHorizontal size={25} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Link>
      <div className="z-40 mobile:hidden w-full mini:hidden mobile:w-2/3 flex justify-end">
        <Image
          className="w-[600px] mobile:w-[200px] laptop:w-[450px]"
          src={tutorialImage}
          alt="teste"
        />
      </div>
    </div>
  )
}
