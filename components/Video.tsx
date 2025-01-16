'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'

export function Video() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  return (
    <div className="mt-5 mobile:px-5 laptop:mt-2 max-w-[1600px] gap-6 mx-auto flex flex-col h-full">
      <div
        data-aos="fade-down"
        data-aos-delay="0"
        className="flex justify-center text-[#dbc994] mobile:text-xl mini:text-base mobile:text-center mini:text-center text-4xl laptop:text-3xl"
      >
        Descubra como transformar seus sonhos em realidade com a KC Leilões!
      </div>
      <div className="text-lg w-[70%] mini:px-2 mobile:w-full mini:w-full mobile:text-lg mini:text-sm mobile:px-5 mx-auto">
        Neste vídeo, você aprenderá como participar de leilões de forma segura,
        estratégica e emocionante. Seja para conquistar sua casa própria, o
        carro dos sonhos ou expandir seu patrimônio, a KC Leilões está aqui para
        guiá-lo em cada etapa, garantindo transparência e sucesso!
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="md:px-40">
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/3 basis-full">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                className="flex justify-center mobile:flex-col mini:flex-col  mini:px-5"
              >
                <div className="w-full mobile:px-2 mini:px-2 mini:mt-5 mobile:mt-5 mini:text-xs relative flex justify-center">
                  <div className="z-30 flex flex-col items-center">
                    <div className="w-[400px] laptop:w-[350px] laptop:h-[240px] h-[260px] mobile:w-full mini:h-[170px] mini:w-full mobile:h-[210px] rounded-xl flex justify-center items-center bg-[#dbc994]">
                      <iframe className="w-[390px] rounded-xl mobile:w-[95%] mini:w-[95%] mini:h-[160px] mobile:h-[200px] laptop:w-[240px] laptop:h-[160px] h-[250px]"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
