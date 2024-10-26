'use client'
import { ChevronsDown } from 'lucide-react'

export function More() {
  const scrollToSection = (event: React.MouseEvent) => {
    event.preventDefault()
    const section = document.getElementById('passo-a-passo')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button
      onClick={scrollToSection}
      className="bg-[#dbc994] text-black  pt-2 mobile:-mt-[110px] -mt-[87px] w-full flex justify-center"
    >
      <ChevronsDown className="animate-bounce" size={50} />
    </button>
  )
}
