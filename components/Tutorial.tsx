import youtube from '@/assets/youtube.png'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import macbook from '@/assets/macbook.svg'

export function Tutorial() {
  return (
    <div className="w-[1400px] pt-16 laptop:w-[1200px] mobile:w-full items-center mx-auto flex mobile:flex-col">
      <div className="w-1/2 mobile:w-full h-full flex  mobile:mt-16 flex-col gap-12 justify-between">
        <div className="h-full  mobile:text-center text-4xl text-[#dbc994]">
          Nossa mídias
        </div>
        <div className="h-full mobile:px-5 mobile:text-center  text-3xl">
          Siga-nos em nossas redes sociais e plataformas de vídeos para não
          ficar de fora de nenhum dos nossos riquíssimos conteudos que te
          auxiliará a ser uma abordagem assertiva no ramo de leilões
        </div>
        <div>
          <div className="flex justify-center gap-2 mobile:justify-center mobile:w-full mobile:px-16 items-center">
            <Link
              href={'/'}
              className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-44 justify-center hover:bg-opacity-80 transition-colors duration-300 p-3 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
              <div className="text-xl">Instagram</div>
            </Link>
            <div className="flex gap-2 bg-[#dbc994] text-zinc-900 font-medium w-44 justify-center hover:bg-opacity-80 transition-colors duration-300 p-2 rounded-xl items-center">
              <Image width={35} src={youtube} alt="youtube" />
              <div className="text-xl">Youtube</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative flex justify-end">
        <Image src={macbook} alt="laptop" />
        <div className="absolute top-[194px] mobile:top-[85px] laptop:left-[94px] left-[228px] mobile:left-[40px] z-10">
          <iframe
            className="w-[612px] mobile:w-[270px] h-[388px] mobile:h-[169px]"
            src="https://www.youtube.com/embed/QthVD2DND1o"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
