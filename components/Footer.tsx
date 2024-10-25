import wpp from '@/assets/whatsapp-svgrepo-com (1).svg'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import phone from '@/assets/phone-call.png'
export function Footer() {
  return (
    <footer className="flex flex-col py-10 mobile:py-3 mt-20 mobile:mt-10 bg-[#dbc994]  mx-auto w-full">
      <div className="w-[1400px] mobile:w-full text-zinc-900 flex items-center justify-center mx-auto">
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex mobile:flex-col mobile:gap-1 items-center">
            <div className="text-2xl flex items-center mobile:text-xl">
              KC LEILÕES ©
            </div>
            <div className="ml-2 text-2xl mobile:text-sm flex items-center">
              TODOS OS DIREITOS RESERVADOS
            </div>
          </div>
          <div className="flex gap-3 mobile:justify-between mobile:w-full mobile:px-16 items-center">
            <div className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center">
              <Image width={28} src={wpp} alt="whatsapp" />
            </div>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
            </Link>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={28} src={phone} alt="insta" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
