'use client'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import newsImage from '@/assets/news.png'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Gavel, Trophy, BookOpen } from 'lucide-react'

const achievements = [
  {
    icon: <Gavel className="w-6 h-6" />,
    title: 'Leiloeira Oficial',
    description:
      '6 anos de experiência como leiloeira pública oficial, conduzindo leilões de sucesso em diversos segmentos.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Casos de Sucesso',
    description:
      'Histórico comprovado de leilões bem-sucedidos, com alto índice de satisfação de compradores e vendedores.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Educadora',
    description:
      'Compartilha conhecimento e experiência através de mentorias e cursos especializados em leilões.',
  },
]

export function FormComponent() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <div className="w-[1600px] gap-5 h-full laptop:w-[1200px] mobile:w-full mini:w-full mini:py-10 items-center mobile:px-5 py-32 mobile:py-10 mx-auto flex">
      <div className="absolute inset-y-0 mobile:hidden mobile:h-[400px] mini:hidden mobile:top-[150px] mobile:w-[350px] mobile:-left-[220px] laptop:h-[700px] laptop:top-40  -left-[400px] bg-[#dbc994] top-32 rounded-full blur-2xl h-[950px] laptop:w-[700px]  w-[800px] "></div>
      <div className="absolute mobile:hidden inset-y-0 z-30 bg-[#141414] mini:hidden mobile:top-[430px] mobile:w-[220px] mobile:-left-[50px] laptop:top-[850px] top-[1000px]  mobile:rounded-none rounded-full blur-md mobile:blur-none h-[450px] laptop:w-[620px] laptop:h-[400px] laptop:left-[0px] left-[0px] w-[1000px]"></div>
      <div className="w-1/2 mobile:hidden mini:hidden mobile:w-2/3 relative flex justify-start">
        <Image
          className="w-[560px] mobile:w-[300px] laptop:w-[450px]"
          src={newsImage}
          alt="teste"
        />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-delay="0"
        className="w-1/2 z-50 mobile:w-full mini:w-full h-full flex justify-center gap-10 mobile:gap-3 mobile:mt-16 mini:mt-10 mini:px-1 flex-col mobile:px-1 "
      >
        <div className="mobile:text-center mini:text-center mini:text-base mobile:text-xl text-4xl laptop:text-3xl text-[#dbc994]">
          Quem é Katia?
        </div>
        <div className="flex flex-col gap-2 mobile:gap-0 text-xl mobile:text-base mini:text-xs laptop:text-lg">
          <div className="grid gap-8 mobile:gap-3 mini:gap-3 mb-16">
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-6 mobile:gap-2 mini:gap-2">
                {achievements.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 border-none p-4 mini:p-2 mobile:p-2"
                  >
                    <CardContent className="p-0 flex items-start gap-4 mobile:gap-2">
                      <div className="text-[#dbc994]">{item.icon}</div>
                      <div>
                        <h4 className="text-[#dbc994] laptop:text-base mobile:text-sm mini:text-sm font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-zinc-200 laptop:text-xs mini:text-[11px] mobile:text-[11px]">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
