'use client'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Instagram() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto py-16">
      <div className="flex flex-row-reverse items-center gap-16 px-6">
        <div className="w-1/2">
          <div className="max-w-[450px] bg-black rounded-xl overflow-hidden">
            <iframe
              src="https://www.instagram.com/katiacasaes/embed"
              className="w-full h-[600px]"
              style={{ background: 'black', colorScheme: 'dark' }}
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </div>
        </div>

        <div className="w-1/2">
          <div className="max-w-[450px]">
            <h2 className="text-3xl font-light text-[#dbc994] mb-3">
              Acompanhe minha jornada
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-[#dbc994] to-transparent mb-6"></div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Siga <span className="text-[#dbc994]">@katiacasaes</span> e faça
              parte dessa comunidade de investidores e entusiastas de leilões.
              Compartilho diariamente conteúdos exclusivos e oportunidades
              únicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
