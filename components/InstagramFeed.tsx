'use client'
import React from 'react'

export function InstagramFeed() {
  return (
    <div className="w-full bg-black/40 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-[#dbc994] mb-3">
            Me acompanhe no Instagram
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Siga @katiacasaes para acompanhar nossa jornada no mundo dos
            leilões, dicas exclusivas e oportunidades únicas.
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/katiacasaes/embed"
            className="w-full max-w-[550px] h-[750px] bg-transparent"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
