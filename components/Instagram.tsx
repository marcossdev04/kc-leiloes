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
      <div className="flex flex-row-reverse mobile:flex-col-reverse items-center gap-16 mobile:gap-10  px-6">
        <div className="w-1/2 mobile:w-full">
          <div className="max-w-[450px] bg-zinc-950 rounded-xl overflow-hidden">
            <iframe
              src="https://www.instagram.com/katiacasaes/embed?theme=dark"
              className="w-full h-[384px]"
              style={{
                background: '#09090b',
                border: 'none',
                filter: 'brightness(0.9)',
              }}
              data-theme="dark"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="w-1/2 mobile:w-full">
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
