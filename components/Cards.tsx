'use client'
import teste from '@/assets/leilao-vinhos-online-Winebid.webp'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
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
      className="h-full mobile:px-5 mt-20 justify-center mobile:h-full mx-auto flex flex-col mobile:mt-10 gap-10 laptop:max-w-[1200px] max-w-[1600px]"
    >
      <div id="plataforms" className="flex flex-col w-full gap-5">
        <div className="text-4xl laptop:text-3xl text-center">
          <span className="text-[#dbc994]">Nossas plataformas</span>
        </div>
        <div className="w-[1600px] py-10 laptop:w-[1200px] mobile:w-full mobile:py-5 mx-auto">
          <div className="flex mobile:flex-col mobile:gap-10 justify-around w-full">
            <Card
              data-aos="zoom-in-right"
              data-aos-delay="0"
              className="bg-zinc-800 border-2 border-zinc-500"
            >
              <CardContent className="p-8">
                <Image
                  className="w-[500px] mobile:w-[300px]  mobile:h-[200px] h-[400px] rounded-lg"
                  alt="img"
                  src={teste}
                />
                <div className=" mt-5 flex flex-col gap-5">
                  <CardTitle className="text-4xl mobile:text-xl">
                    <div> Cos D` Estournel 1950</div>
                  </CardTitle>
                  <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <CalendarClock strokeWidth={1.5} />
                    </div>
                    <div>10 de outubro de 2024</div>
                  </div>
                  <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <Gavel strokeWidth={1.5} />
                    </div>
                    <div>1º Lote: 10:30h</div>
                  </div>
                  <div className="w-full mt-5 transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                    <div>Em andamento</div>
                    <div>
                      <Hourglass />
                    </div>
                  </div>
                  <div className="text-white py-2 bg-zinc-500 pt-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                    <div className="flex items-center mobile:text-sm font-medium gap-2">
                      Lance inicial
                    </div>
                    <div>
                      <div className="text-zinc-100 mobile:text-xl text-3xl font-semibold">
                        R$ 8.750,00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              data-aos="zoom-in-right"
              data-aos-delay="0"
              className="bg-zinc-800 border-2 border-zinc-500"
            >
              <CardContent className="p-8">
                <Image
                  className="w-[500px] mobile:w-[300px]  mobile:h-[200px] h-[400px] rounded-lg"
                  alt="img"
                  src={teste}
                />
                <div className=" mt-5 flex flex-col gap-5">
                  <CardTitle className="text-4xl mobile:text-xl">
                    <div> Cos D` Estournel 1950</div>
                  </CardTitle>
                  <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <CalendarClock strokeWidth={1.5} />
                    </div>
                    <div>10 de outubro de 2024</div>
                  </div>
                  <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                    <div>
                      <Gavel strokeWidth={1.5} />
                    </div>
                    <div>1º Lote: 10:30h</div>
                  </div>
                  <div className="w-full mt-5 transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                    <div>Em andamento</div>
                    <div>
                      <Hourglass />
                    </div>
                  </div>
                  <div className="text-white py-2 bg-zinc-500 pt-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                    <div className="flex items-center mobile:text-sm font-medium gap-2">
                      Lance inicial
                    </div>
                    <div>
                      <div className="text-zinc-100 mobile:text-xl text-3xl font-semibold">
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
