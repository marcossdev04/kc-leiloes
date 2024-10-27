'use client'
import { ChevronsDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export function More() {
  const sections = ['passo-a-passo', 'tutorial', 'faq']
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const { top } = footer.getBoundingClientRect()
        const shouldHideButton = top <= window.innerHeight
        setIsVisible(!shouldHideButton)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNextSection = (event: React.MouseEvent) => {
    event.preventDefault()
    const currentSectionIndex = sections.findIndex((sectionId) => {
      const section = document.getElementById(sectionId)
      if (!section) return false
      const { top } = section.getBoundingClientRect()
      return top >= 0 && top <= window.innerHeight
    })

    const nextSectionIndex =
      currentSectionIndex + 1 < sections.length ? currentSectionIndex + 1 : 0
    const nextSection = document.getElementById(sections[nextSectionIndex])
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-0 left-1/2 transform z-50 -translate-x-1/2 text-[#dbc994] pt-2 w-full max-w-[200px] flex justify-center rounded-full"
    >
      <ChevronsDown className="animate-bounce" size={50} />
    </button>
  )
}
