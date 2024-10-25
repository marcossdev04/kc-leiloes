import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselComponent() {
  return (
    <div className="h-[100vh] justify-center mobile:h-full mobile:w-full mx-auto flex flex-col mt-40 mobile:mt-10 gap-10 laptop:max-w-[1200px] max-w-[1400px]">
      <div className="flex flex-col w-full gap-10">
        <div className="text-4xl mobile:text-center">
          <span className="text-[#dbc994]">Leilões em destaque</span>
        </div>
        <div className="w-[1400px] laptop:w-[1200px] mobile:w-[80%] mx-auto">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col w-full gap-10">
        <div className="text-4xl mobile:text-center text-[#dbc994]">
          Passo a Passo
        </div>
        <div className="w-[1400px] laptop:w-[1200px] mobile:w-[80%] mx-auto">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="h-52 w-full flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex w-full justify-evenly">
        <div className="flex w-1/4 text-xl  justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
          Link 1
        </div>
        <div className="flex w-1/4 text-xl  justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
          Link 2
        </div>
      </div>
    </div>
  )
}
