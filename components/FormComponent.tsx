'use client'
import { useState, FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LoaderCircle } from 'lucide-react'

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
  return (
    <div className="w-[1600px] gap-5 h-[100vh] laptop:w-[1200px] mobile:w-full items-center mx-auto flex mobile:flex-col">
      <div className="w-full mobile:px-10 relative flex justify-start"></div>
      <div className="w-2/3 mobile:w-full h-full flex justify-center gap-10 mobile:mt-16 flex-col ">
        <div className="mobile:text-center text-4xl laptop:text-3xl text-[#dbc994]">
          Assine nossa newsleatter
        </div>
        <div className=" mobile:px-5 mobile:text-center flex flex-col gap-2 text-xl laptop:text-lg">
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
          className="space-y-6 w-full flex flex-col"
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
