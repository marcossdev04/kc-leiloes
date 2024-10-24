import macbook from '@/assets/macbook.svg'
import Image from 'next/image'

export function Tutorial() {
  return (
    <div className="w-[1200px] mx-auto flex">
      <div className="w-full h-full flex mt-40 flex-col gap-10 justify-between">
        <div className="h-full text-4xl text-green-400">Tutorial</div>
        <div className="h-full text-xl">
          Veja como realizar o cadastro nas nossas plataformas de leilões para
          não ficar de fora de nenhuma novidade!
        </div>
      </div>
      <div className="w-full relative">
        <Image src={macbook} alt="laptop" />
        <div className="absolute top-[146px] left-[71px] z-10">
          <iframe
            width={458}
            height={289}
            src="https://www.youtube.com/embed/QthVD2DND1o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
