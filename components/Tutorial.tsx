import macbook from '@/assets/macbook.svg'
import Image from 'next/image'

export function Tutorial() {
  return (
    <div className="w-[1400px] mx-auto flex">
      <div className="w-2/5 h-full flex mt-40 flex-col gap-10 justify-between">
        <div className="h-full text-4xl text-green-400">Por quê?</div>
        <div className="h-full  text-2xl">
          Veja os benefícios de entrar no mercado de leilões, adjunto de dicas
          de por onde começar e as melhores estratégias para maximizar seus
          lucros!
        </div>
      </div>
      <div className="w-full relative">
        <Image src={macbook} alt="laptop" />
        <div className="absolute top-[194px] left-[94px] z-10">
          <iframe
            className="w-[612px] h-[388px]"
            src="https://www.youtube.com/embed/QthVD2DND1o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
