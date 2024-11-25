'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Check } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
  siteVideo: string | undefined
}
export function Video({ siteVideo }: Props) {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  return (
    <div className="laptop:max-w-[1200px] mt-5 max-w-[1600px] gap-5 mx-auto flex flex-col h-full">
      <div
        data-aos="fade-down"
        data-aos-delay="0"
        className="flex justify-center text-[#dbc994] mobile:text-lg mobile:text-center text-4xl laptop:text-3xl"
      >
        Descubra como transformar seus sonhos em realidade com a KC Leilões!
      </div>
      <div className="text-lg w-[70%] mobile:w-full mobile:text-xs mobile:px-5 mx-auto">
        Neste vídeo, você aprenderá como participar de leilões de forma segura,
        estratégica e emocionante. Seja para conquistar sua casa própria, o
        carro dos sonhos ou expandir seu patrimônio, a KC Leilões está aqui para
        guiá-lo em cada etapa, garantindo transparência e sucesso!
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="flex justify-center mobile:flex-col mobile:px-5"
      >
        <div className="flex laptop:w-2/3 w-full flex-col justify-center laptop:gap-6 gap-10 mobile:gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <div>
                <Check size={30} className="text-[#dbc994]" />
              </div>
              <div className="laptop:text-lg mobile:text-sm desktop:text-xl">
                Como participar de leilões online e presenciais com segurança.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <div>
                <Check size={30} className="text-[#dbc994]" />
              </div>
              <div className="laptop:text-lg mobile:text-sm desktop:text-xl">
                Dicas estratégicas para identificar e conquistar grandes
                oportunidades.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <div>
                <Check size={30} className="text-[#dbc994]" />
              </div>
              <div className="laptop:text-lg mobile:text-sm desktop:text-xl">
                Passo a passo para cadastrar, dar lances e vencer com confiança.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <div>
                <Check size={30} className="text-[#dbc994]" />
              </div>
              <div className="laptop:text-lg mobile:text-sm desktop:text-xl">
                Benefícios exclusivos da KC Leilões para transformar sua
                experiência.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mobile:px-10 mobile:mt-10 relative flex justify-center">
          <div className="z-30 flex flex-col items-center">
            <div className="w-[710px] laptop:w-[600px] laptop:h-[370px] h-[460px] mobile:w-[360px] mobile:h-[210px] rounded-xl flex justify-center items-center bg-[#dbc994]">
              <iframe
                className="w-[700px] rounded-xl mobile:w-[350px] mobile:h-[200px] laptop:w-[590px] laptop:h-[360px] h-[450px]"
                src={siteVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
