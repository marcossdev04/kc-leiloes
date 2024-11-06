'use client'
import React, { useState, FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LoaderCircle } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import newsImage from '@/assets/newsImage.svg'
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
    <div className="w-[1600px] gap-5 h-full laptop:w-[1200px] mobile:w-full items-center py-32 mx-auto flex mobile:flex-col">
      <div className="absolute mobile:hidden inset-y-0 laptop:h-[600px] laptop:top-40  -left-[400px] bg-[#dbc994] top-32 rounded-full blur-2xl h-[800px] laptop:w-[600px]  w-[800px] "></div>
      <div className="absolute inset-y-0 z-50 mobile:hidden bg-[#151515] laptop:top-[700px] top-[850px] rounded-full blur-xl h-[500px] laptop:w-[400px] laptop:h-[400px] laptop:left-[50px] left-[20px] w-[600px]"></div>
      <div className="w-1/2 mobile:px-10 mobile:hidden relative flex justify-start">
        <Image
          className="w-[560px] laptop:w-[450px]"
          src={newsImage}
          alt="teste"
        />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-delay="0"
        className="w-1/2 mobile:w-full h-full flex justify-center gap-10 mobile:mt-16 flex-col "
      >
        <div className="mobile:text-center text-4xl laptop:text-3xl text-[#dbc994]">
          Assine nossa newsleatter
        </div>
        <div className=" mobile:px-5 mobile:text flex flex-col gap-2 text-xl laptop:text-lg">
          <div>
            Receba em primeira mão nossas atualizações, promoções exclusivas e
            conteúdos especiais.
          </div>
          <div>
            Nossa newsletter traz dicas, insights e materiais exclusivos que
            você não encontra nas redes sociais!
          </div>
          <div>
            Não perca a chance de estar sempre à frente com as melhores
            informações.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full flex flex-col mobile:px-5"
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
              className="w-full text-lg border-[#dbc994]"
              required
              pattern="^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+"
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg bg-[#dbc994] hover:bg-[#dbc994] hover:bg-opacity-80"
            disabled={isLoading}
          >
            {isLoading ? <LoaderCircle className="animate-spin" /> : 'Enviar'}
          </Button>
        </form>
      </div>
    </div>
  )
}
