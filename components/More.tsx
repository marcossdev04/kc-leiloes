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
      className="fixed bottom-0 left-1/2 transform z-50 -translate-x-1/2 text-[#dbc994] pt-2 w-full max-w-[200px] flex justify-center rounded-full"
    >
      <ChevronsDown className="animate-bounce" size={50} />
    </button>
  )
}
