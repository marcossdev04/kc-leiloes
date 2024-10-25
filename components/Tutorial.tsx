import macbook from '@/assets/macbook.svg'
import Image from 'next/image'

export function Tutorial() {
  return (
    <div className="w-[1400px] mobile:w-full mx-auto flex mobile:flex-col">
      <div className="w-2/5 mobile:w-full h-full flex mt-40 mobile:mt-16 flex-col gap-10 justify-between">
        <div className="h-full mobile:text-center text-4xl text-green-400">
          Por quê?
        </div>
        <div className="h-full  mobile:text-center  text-2xl">
          Veja os benefícios de entrar no mercado de leilões, adjunto de dicas
          de por onde começar e as melhores estratégias para maximizar seus
          lucros!
        </div>
      </div>
      <div className="w-full relative">
        <Image src={macbook} alt="laptop" />
        <div className="absolute top-[194px] mobile:top-[95px] left-[51px] mobile:left-[46px] z-10">
          <iframe
            className="w-[612px] mobile:w-[298px] h-[388px] mobile:h-[188px]"
            src="https://www.youtube.com/embed/QthVD2DND1o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
