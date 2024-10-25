import acount from '@/assets/account.png'
import home from '@/assets/eco-home.png'
import call from '@/assets/video-call.png'
import clock from '@/assets/wall-clock.png'
import Image from 'next/image'
export function Register() {
  return (
    <div className="flex w-full max-w-[1400px] mx-auto -mt-36">
      <div className="flex flex-col w-full gap-10">
        <div className="text-4xl">
          Faça <span className="text-green-400">seu cadastro</span>
        </div>
        <div className="flex w-full justify-between gap-5">
          <div className="flex items-center w-1/4 gap-5 border-l-2 py-5 border-white px-2">
            <div>
              <Image width={50} src={clock} alt="relogio" />
            </div>
            <div>10 Minutos</div>
          </div>
          <div className="flex items-center w-1/4 gap-5 border-l-2 border-white px-2">
            <div>
              <Image width={50} src={acount} alt="segurança" />
            </div>
            <div>Ambiente Seguro</div>
          </div>
          <div className="flex items-center w-1/4 gap-5 border-l-2 border-white px-2">
            <div>
              <Image width={50} src={home} alt="casa" />
            </div>
            <div>Sem sair de casa, com conforto e praticidade</div>
          </div>
          <div className="flex items-center w-1/4 gap-5 border-l-2 border-white px-2">
            <div>
              <Image width={50} src={call} alt="suporte" />
            </div>
            <div>Suporte personalizado</div>
          </div>
        </div>
      </div>
    </div>
  )
}
