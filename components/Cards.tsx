'use client'
import teste from '@/assets/leilao-vinhos-online-Winebid.webp'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CalendarClock, Gavel, Hourglass } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

export function CarouselComponent() {
  React.useEffect(() => {
    AOS.init({ duration: 1200 }) // Configure a duração da animação
  }, [])
  return (
    <div
      id="passo-a-passo"
      className="h-full mobile:px-5 mt-20 justify-center mobile:h-full mobile:w-full mx-auto flex flex-col mobile:mt-10 gap-10 laptop:max-w-[1200px] max-w-[1600px]"
    >
      <div className="flex flex-col w-full gap-5">
        <div className="text-4xl laptop:text-3xl mobile:text-center text-[#dbc994]">
          Passo a Passo
        </div>
        <div className="w-[1600px] laptop:w-[1200px] mobile:w-[80%] mx-auto">
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
              <CarouselItem
                data-aos="zoom-in-right"
                data-aos-delay="0"
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="h-52 w-full flex aspect-square p-6">
                      <div className="h-full px-5 flex items-center text-8xl text-[#dbc994]">
                        1
                      </div>
                      <div className="flex py-5 justify-center gap-0 items-center w-full flex-col">
                        <div className="text-2xl mb-2 text-[#dbc994]">
                          Passo um
                        </div>
                        <div className="text-center flex">
                          Faça seu cadastro em nossas plataformas!
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem
                data-aos="zoom-in-right"
                data-aos-delay="600"
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="h-52 w-full flex aspect-square p-6">
                      <div className="h-full px-5 flex items-center text-8xl text-[#dbc994]">
                        2
                      </div>
                      <div className="flex py-5 justify-center gap-0 items-center w-full flex-col">
                        <div className="text-2xl mb-2 text-[#dbc994]">
                          Passo dois
                        </div>
                        <div className="text-center flex">
                          Faça seu cadastro em nossas plataformas!
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem
                data-aos="zoom-in-right"
                data-aos-delay="1200"
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="h-52 w-full flex aspect-square p-6">
                      <div className="h-full px-5 flex items-center text-8xl text-[#dbc994]">
                        3
                      </div>
                      <div className="flex py-5 justify-center gap-0 items-center w-full flex-col">
                        <div className="text-2xl mb-2 text-[#dbc994]">
                          Passo três
                        </div>
                        <div className="text-center flex">
                          Faça seu cadastro em nossas plataformas!
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="text-4xl laptop:text-3xl text-center">
          <span className="text-[#dbc994]">Nossas plataformas</span>
        </div>
        <div className="w-[1600px] py-10 laptop:w-[1200px] mobile:w-full mobile:py-5 mx-auto">
          <div className="flex mobile:flex-col mobile:gap-10 justify-around w-full">
            <Card className="bg-zinc-800 shadow-[#dbc994] shadow-lg">
              <CardContent>
                <Image
                  className="w-[500px] mobile:w-[300px] border-4 border-[#dbc994] mobile:h-[200px] h-[400px] rounded-lg mt-5"
                  alt="img"
                  src={teste}
                />
                <div className=" mt-5 flex flex-col gap-5">
                  <CardTitle className="text-4xl mobile:text-xl">
                    <div> Cos D` Estournel 1950</div>
                  </CardTitle>
                  <div className="text-[#dbc994] flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <CalendarClock strokeWidth={1.5} />
                    </div>
                    <div>10 de outubro de 2024</div>
                  </div>
                  <div className="text-[#dbc994] flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <Gavel strokeWidth={1.5} />
                    </div>
                    <div>1º Lote: 10:30h</div>
                  </div>
                  <div className="w-full mt-5 transition-colors duration-300 cursor-pointer      hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                    <div>Em andamento</div>
                    <div>
                      <Hourglass />
                    </div>
                  </div>
                  <div className="text-white mb-2 bg-zinc-500 py-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                    <div className="flex items-center mobile:text-sm font-medium gap-2">
                      Lance inicial
                    </div>
                    <div>
                      <div className="text-[#dbc994] mobile:text-xl text-3xl font-semibold">
                        R$ 8.750,00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 shadow-[#dbc994] shadow-lg">
              <CardContent>
                <Image
                  className="w-[500px] mobile:w-[300px] border-4 border-[#dbc994] mobile:h-[200px] h-[400px] rounded-lg mt-5"
                  alt="img"
                  src={teste}
                />
                <div className=" mt-5 flex flex-col gap-5">
                  <CardTitle className="text-4xl mobile:text-xl">
                    <div> Cos D` Estournel 1950</div>
                  </CardTitle>
                  <div className="text-[#dbc994] flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <CalendarClock strokeWidth={1.5} />
                    </div>
                    <div>10 de outubro de 2024</div>
                  </div>
                  <div className="text-[#dbc994] flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <Gavel strokeWidth={1.5} />
                    </div>
                    <div>1º Lote: 10:30h</div>
                  </div>
                  <div className="w-full mt-5 transition-colors duration-300 cursor-pointer      hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                    <div>Em andamento</div>
                    <div>
                      <Hourglass />
                    </div>
                  </div>
                  <div className="text-white mb-2 bg-zinc-500 py-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                    <div className="flex items-center mobile:text-sm font-medium gap-2">
                      Lance inicial
                    </div>
                    <div>
                      <div className="text-[#dbc994] mobile:text-xl text-3xl font-semibold">
                        R$ 8.750,00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
