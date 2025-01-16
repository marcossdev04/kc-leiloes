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
          <div className="grid md:grid-cols-2 gap-8 mobile:gap-3 mini:gap-3 mb-16">
            <div className="space-y-3">
              <Card className="bg-white/10 border-none p-6 mini:p-2 mobile:p-2">
                <CardContent className="p-0">
                  <h3 className="text-xl laptop:text-base mobile:text-sm mini:text-sm font-medium text-[#dbc994] mb-2">
                    Trajetória Profissional
                  </h3>
                  <p className="text-zinc-200 leading-relaxed mobile:text-[11px] text-sm mini:text-[11px] laptop:text-xs">
                    Atuando há 06 anos como leiloeira pública oficial, Kátia
                    encontrou nos leilões um renovo para sua carreira. Com uma
                    abordagem única que combina profissionalismo e leveza, ela
                    revolucionou a forma de comunicar e educar sobre o mundo dos
                    leilões, tornando-o acessível para todos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-none p-6 mini:p-2 mobile:p-2">
                <CardContent className="p-0">
                  <h3 className="text-xl laptop:text-base mini:text-sm mobile:text-sm font-medium text-[#dbc994] mb-2">
                    Missão e Valores
                  </h3>
                  <p className="text-zinc-200 leading-relaxed mini:text-[11px] text-sm mobile:text-[11px] laptop:text-xs">
                    Por entender e vivenciar as oportunidades que os leilões
                    podem oferecer, Kátia dedica-se a compartilhar seu
                    conhecimento e experiências. Seu objetivo é capacitar
                    pessoas que desejam não apenas arrematar, mas também se
                    reencontrar e se potencializar profissionalmente neste
                    mercado promissor.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none p-6 mini:p-2 mobile:p-2">
                <CardContent className="p-0">
                  <h3 className="text-xl font-medium mobile:text-sm mini:text-sm laptop:text-base text-[#dbc994] mb-2">
                    Compromisso com o Sucesso
                  </h3>
                  <p className="text-zinc-200 leading-relaxed mini:text-[11px] text-sm mobile:text-[11px] laptop:text-xs">
                    Como educadora e mentora, Kátia não apenas compartilha
                    técnicas e estratégias, mas também inspira seus alunos a
                    desenvolverem uma mentalidade empreendedora e visão
                    estratégica no mercado de leilões. Seu compromisso é
                    transformar conhecimento em oportunidades reais de
                    crescimento e sucesso para seus mentorados.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 mobile:space-y-2 mini:space-y-2">
              <Card className="bg-white/10 border-none p-6 mini:p-2 mobile:p-2">
                <CardContent className="p-0">
                  <h3 className="text-xl font-medium laptop:text-base mini:text-sm mobile:text-sm text-[#dbc994] mb-4">
                    Diferencial
                  </h3>
                  <p className="text-zinc-200 leading-relaxed mini:text-[11px] laptop:text-xs mobile:text-[11px] text-sm">
                    O que destaca Kátia no mercado é sua capacidade de simplicar
                    processos complexos e burocráticos, tornando o universo dos
                    leilões mais acessível e compreensível. Sua abordagem
                    combina expertise técnica com uma comunicação clara e
                    objetiva, permitindo que iniciantes se sintam seguros em
                    suas primeiras experiências com leilões.
                  </p>
                </CardContent>
              </Card>

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
