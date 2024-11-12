'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Video() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  return (
    <div className="laptop:max-w-[1200px] mt-5 max-w-[1600px] gap-5 mx-auto flex flex-col h-full">
      <div
        data-aos="fade-down"
        data-aos-delay="0"
        className="flex justify-center text-[#dbc994] text-4xl laptop:text-3xl"
      >
        Assista à nossa aula de introdução gratuitamente e você vai aprender
        mais sobre:
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="flex justify-center"
      >
        <div className="w-full mobile:px-10 mobile:mt-10 relative flex justify-center">
          <div className="z-30 flex flex-col items-center">
            <div className="w-[1500px] laptop:w-[900px] laptop:h-[400px] h-[890px] mobile:w-[370px] mobile:h-[220px] rounded-xl flex justify-center items-center bg-black">
              <iframe
                className="w-[1490px] rounded-xl mobile:w-[350px] mobile:h-[200px] laptop:w-[880px] laptop:h-[380px] h-[880px]"
                src="https://www.youtube.com/embed/QthVD2DND1o"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
