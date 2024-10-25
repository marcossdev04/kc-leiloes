import acount from '@/assets/account.png'
import home from '@/assets/eco-home.png'
import call from '@/assets/video-call.png'
import clock from '@/assets/wall-clock.png'
import Image from 'next/image'
export function Register() {
  return (
    <div className="flex w-full max-w-[1400px] mobile:w-full mx-auto mobile:mt-16 -mt-36">
      <div className="flex flex-col w-full gap-10">
        <div className="text-4xl text-green-400 mobile:text-center">
          Faça seu cadastro
        </div>
        <div className="flex w-full mobile:grid mobile:items-center mobile:grid-cols-2 justify-between gap-5 mobile:gap-0">
          <div className="flex mobile:flex-col items-center w-1/4 mobile:w-full gap-5 desktop:border-l-2 laptop::border-l-2 mobile:border-b-2 py-5 border-white px-2">
            <div>
              <Image width={50} src={clock} alt="relogio" />
            </div>
            <div>10 Minutos</div>
          </div>
          <div className="flex mobile:flex-col  items-center w-1/4 mobile:w-full gap-5 desktop:border-l-2 laptop::border-l-2 mobile:border-b-2 py-5 border-white px-2">
            <div>
              <Image width={50} src={acount} alt="segurança" />
            </div>
            <div>Ambiente Seguro</div>
          </div>
          <div className="flex mobile:flex-col items-center mobile:w-full w-1/4 gap-5 desktop:border-l-2 laptop::border-l-2 mobile:border-b-2 py-5 border-white px-2">
            <div>
              <Image width={50} src={home} alt="casa" />
            </div>
            <div>Sem sair de casa, com conforto e praticidade</div>
          </div>
          <div className="flex mobile:flex-col  items-center w-1/4 mobile:w-full gap-5 desktop:border-l-2 laptop::border-l-2 mobile:border-b-2 py-5 border-white px-2">
            <div>
              <Image width={50} src={call} alt="suporte" />
            </div>
            <div>Suporte personalizado ao cliente</div>
          </div>
        </div>
      </div>
    </div>
  )
}
