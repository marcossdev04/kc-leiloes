'use client'
import React, { useState, FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LoaderCircle } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import newsImage from '@/assets/news.png'
import Image from 'next/image'

export function FormComponent() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Email atualizado:', email)
    setIsLoading(false)
  }
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <div className="w-[1600px] gap-5 h-full laptop:w-[1200px] mobile:w-full mini:w-full mini:py-10 items-center py-32 mobile:py-10 mx-auto flex">
      <div className="absolute inset-y-0 mobile:h-[400px] mini:hidden mobile:top-[150px] mobile:w-[350px] mobile:-left-[220px] laptop:h-[700px] laptop:top-40  -left-[400px] bg-[#dbc994] top-32 rounded-full blur-2xl h-[950px] laptop:w-[700px]  w-[800px] "></div>
      <div className="absolute inset-y-0 z-30 bg-[#0F0F0F] mini:hidden mobile:top-[430px] mobile:w-[220px] mobile:-left-[50px] laptop:top-[850px] top-[1000px]  mobile:rounded-none rounded-full blur-md mobile:blur-none h-[450px] laptop:w-[620px] laptop:h-[400px] laptop:left-[0px] left-[0px] w-[1000px]"></div>
      <div className="w-1/2 mini:hidden mobile:w-2/3 relative flex justify-start">
        <Image
          className="w-[560px] mobile:w-[300px] laptop:w-[450px]"
          src={newsImage}
          alt="teste"
        />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-delay="0"
        className="w-1/2 z-50 mobile:w-full mini:w-full h-full flex justify-center gap-10 mobile:mt-16 mini:mt-10 mini:px-1 flex-col mobile:px-1 "
      >
        <div className="mobile:text-center mini:text-center mini:text-base mobile:text-xl text-4xl laptop:text-3xl text-[#dbc994]">
          Assine nossa newsletter
        </div>
        <div className="flex flex-col gap-2 text-xl mobile:text-base mini:text-xs laptop:text-lg">
          <div>
            Faça parte da nossa comunidade exclusiva e receba as melhores
            oportunidades de leilões diretamente no seu e-mail! Cadastre-se
            agora para acessar dicas valiosas, novidades imperdíveis e ofertas
            incríveis. Tudo isso de forma simples, segura e gratuita. Não perca
            nenhuma chance de arrematar grandes conquistas!
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full flex flex-col mini:px-1 mobile:px-1"
        >
          <div className="space-y-2">
            <Input
              id="videoUrl"
              type="url"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="w-full text-lg mini:text-sm border-[#dbc994]"
              required
              pattern="^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+"
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg bg-[#dbc994] mini:text-sm hover:bg-[#dbc994] hover:bg-opacity-80"
            disabled={isLoading}
          >
            {isLoading ? <LoaderCircle className="animate-spin" /> : 'Enviar'}
          </Button>
        </form>
      </div>
    </div>
  )
}
