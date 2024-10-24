import wpp from '@/assets/whatsapp-svgrepo-com (1).svg'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
export function Footer() {
  return (
    <footer className="flex flex-col bg-green-400 py-10 mt-20 text-black mx-auto w-full">
      <div className="w-[1200px] flex items-center justify-center mx-auto">
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex items-center">
            <div className="text-2xl flex items-center">KC LEILÕES</div>
            <div className="text-2xl ml-1 flex items-center">©</div>
            <div className="ml-2 text-2xl flex items-center">
              TODOS OS DIREITOS RESERVADOS
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center">
              <Image width={28} src={wpp} alt="whatsapp" />
              <div className="text-xl">Whatsapp</div>
            </div>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={28} src={insta} alt="insta" />
              <div className="text-xl">Instagram</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
