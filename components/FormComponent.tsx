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
    <div className="max-w-[1200px] min-h-[100vh] mx-auto py-12 mobile:mb-[400px]">
      <div className="flex flex-col h-[100vh] lg:flex-row items-center gap-12 px-6">
        <div className="lg:w-5/12 relative flex items-end">
          {/* Darker smoke effects */}
          <div className="absolute -right-32 top-20 w-52 h-44 bg-gradient-to-r from-[#8B7355]/30 to-transparent rotate-[25deg] blur-2xl"></div>
          <div className="absolute -left-20 top-0 w-48 h-40 bg-gradient-to-r from-[#916f28]/35 to-transparent -rotate-[35deg] blur-2xl"></div>
          <div className="absolute right-0 top-10 w-44 h-52 bg-gradient-to-l from-[#7d5f15]/25 to-transparent rotate-[40deg] blur-2xl"></div>
          <div className="absolute -right-24 bottom-20 w-48 h-44 bg-gradient-to-r from-[#8B7355]/20 to-transparent rotate-[15deg] blur-2xl"></div>
          <div className="absolute right-20 bottom-32 w-44 h-48 bg-gradient-to-l from-[#7d5f15]/30 to-transparent rotate-[60deg] blur-2xl"></div>

          {/* Medium tones smoke */}
          <div className="absolute -left-28 top-32 w-52 h-40 bg-gradient-to-r from-[#dbc994]/25 to-transparent -rotate-[22deg] blur-2xl"></div>
          <div className="absolute right-20 -top-10 w-44 h-48 bg-gradient-to-br from-[#dbc994]/20 to-transparent rotate-[55deg] blur-2xl"></div>
          <div className="absolute left-0 top-16 w-48 h-40 bg-gradient-to-r from-[#dbc994]/30 to-transparent rotate-[65deg] blur-2xl"></div>
          <div className="absolute -left-16 bottom-10 w-44 h-36 bg-gradient-to-r from-[#dbc994]/25 to-transparent rotate-[10deg] blur-2xl"></div>
          <div className="absolute -left-24 bottom-28 w-48 h-40 bg-gradient-to-r from-[#dbc994]/25 to-transparent rotate-[45deg] blur-2xl"></div>

          {/* Lighter smoke effects */}
          <div className="absolute -right-16 top-40 w-44 h-40 bg-gradient-to-r from-[#e8d5a9]/20 to-transparent -rotate-[25deg] blur-2xl"></div>
          <div className="absolute left-20 -top-5 w-48 h-44 bg-gradient-to-br from-[#f0e3c4]/15 to-transparent rotate-[30deg] blur-2xl"></div>
          <div className="absolute right-10 bottom-28 w-40 h-48 bg-gradient-to-l from-[#f5ebd8]/25 to-transparent rotate-[85deg] blur-2xl"></div>
          <div className="absolute -right-20 bottom-0 w-44 h-40 bg-gradient-to-r from-[#e8d5a9]/15 to-transparent rotate-[5deg] blur-2xl"></div>
          <div className="absolute -right-28 top-32 w-48 h-44 bg-gradient-to-r from-[#e8d5a9]/20 to-transparent -rotate-[15deg] blur-2xl"></div>
          <div className="absolute left-10 bottom-16 w-40 h-44 bg-gradient-to-br from-[#f0e3c4]/20 to-transparent rotate-[25deg] blur-2xl"></div>
          <div className="relative w-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/0 to-transparent"></div>
            <Image
              className="w-full relative"
              src={newsImage}
              alt="Katia Casaes"
            />
          </div>
        </div>

        <div className="lg:w-7/12 lg:-mt-28 lg:translate-x-12">
          <div className="mb-10">
            <h2 className="text-3xl font-light text-[#dbc994] mb-3">
              Quem é Katia?
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent mb-6"></div>
          </div>

          <div className="grid gap-5">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="group hover:translate-x-2 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#dbc994]/10 to-transparent rounded-lg"></div>
                  <Card className="bg-black/40 backdrop-blur-sm border border-[#dbc994]/10 overflow-hidden">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="shrink-0 p-2.5 bg-gradient-to-br from-[#dbc994]/20 to-transparent rounded-lg">
                        <div className="text-[#dbc994]">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-[#dbc994] text-lg font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
