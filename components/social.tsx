import x from '@/assets/Design sem nome.png'
import facebook from '@/assets/Design sem nome (2).png'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import insta from '@/assets/insta-color.svg'
export function Social() {
  return (
    <div className="flex gap-3 desktop:hidden laptop:hidden tablet:hidden mobile:justify-between mobile:w-full mobile:px-16 items-center">
      <Link
        href={'https://wa.me/75998141403'}
        className="flex gap-2 bg-white hover:bg-opacity-95 transition-colors duration-300 bg-opacity-80 p-3 rounded-xl items-center"
      >
        <FaWhatsapp size={22} className="text-[#74C992]" />
      </Link>
      <Link
        href={'https://www.instagram.com/kcleiloes/'}
        className="flex gap-2 bg-white hover:bg-opacity-95 transition-colors duration-300 bg-opacity-80 p-2 rounded-xl items-center"
      >
        <Image width={30} src={insta} alt="insta" />
      </Link>
      <Link
        href={'https://x.com/KcLeiloes'}
        className="flex gap-2 bg-white hover:bg-opacity-95 transition-colors duration-300 bg-opacity-80 p-3 rounded-xl items-center"
      >
        <Image width={22} src={x} alt="insta" />
      </Link>
      <Link
        href={'https://www.facebook.com/kcleiloes/?locale=pt_BR'}
        className="flex gap-2 bg-white hover:bg-opacity-95 transition-colors duration-300 bg-opacity-80 p-3 rounded-xl items-center"
      >
        <Image width={22} src={facebook} alt="facebook" />
      </Link>
    </div>
  )
}
