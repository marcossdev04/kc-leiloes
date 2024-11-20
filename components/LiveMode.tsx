import { X } from 'lucide-react'
import { useState } from 'react'
import Logo from '@/assets/Ativo 10@20x.png'
import Image from 'next/image'

interface Props {
  liveLink: string | undefined
  onChange: (showLive: boolean) => void
  initialShowLive: boolean | undefined
  title: string | undefined
  dateTime: string | undefined
}

export function LiveMode({
  liveLink,
  onChange,
  initialShowLive,
  title,
  dateTime,
}: Props) {
  const [, setShowLive] = useState(initialShowLive)
  const handleClose = () => {
    setShowLive(false)
    onChange(false)
  }
  const data = new Date(dateTime !== undefined ? dateTime : '')
  const dataFormatada = data.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  })
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col mb-8 items-center justify-center">
        <Image src={Logo} alt="logo" className="w-[300px] mobile:w-[250px]" />
        <div className="text-3xl mobile:text-xl mobile:text-center -mt-10 mobile:-mt-6">
          {title}
        </div>
        <div className="text-2xl text-[#dbc994] mobile:text-lg">
          {dataFormatada}
        </div>
      </div>
      <div
        className="absolute top-5 cursor-pointer right-5"
        onClick={handleClose}
      >
        <X size={60} className="mobile:hidden" />
        <X
          size={40}
          className="desktop:hidden laptop:hidden tablet:hidden mt-6"
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="bg-white p-1 rounded-xl">
          <iframe
            className="w-[1300px] laptop:w-[900px] laptop:h-[500px] mobile:w-[350px] mobile:h-[220px] h-[700px] rounded-xl"
            src={liveLink}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
