'use client'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function BlogPosts() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto py-16">
      <div className="flex flex-col items-center px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light text-[#dbc994] mb-3">
            Acompanhe minha jornada
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl">
            Siga @katiacasaes e faça parte dessa comunidade de investidores e
            entusiastas de leilões.
          </p>
        </div>

        <div className="w-full max-w-[550px]">
          <iframe
            src="https://www.instagram.com/katiacasaes/embed"
            className="w-full h-[750px] bg-transparent rounded-xl"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default BlogPosts
