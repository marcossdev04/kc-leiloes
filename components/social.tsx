import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export function Social() {
  return (
    <div className="flex gap-3 desktop:hidden laptop:hidden mini:py-2 tablet:hidden mobile:justify-between mobile:w-full mobile:px-16 mini:justify-center items-center">
      <Link
        href={'https://wa.me/75998141403'}
        className="flex gap-2 bg-[#dbc994] hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
      >
        <FaWhatsapp size={25} className="text-black" />
      </Link>
      <Link
        href={'https://www.instagram.com/kcleiloes/'}
        className="flex gap-2 bg-[#dbc994] hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
      >
        <FaInstagram size={25} className="text-black" />
      </Link>
      <Link
        href={'https://x.com/KcLeiloes'}
        className="flex gap-2 bg-[#dbc994] hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
      >
        <FaYoutube size={25} className="text-black" />
        {/* <Image width={22} src={x} alt="insta" /> */}
      </Link>
    </div>
  )
}
