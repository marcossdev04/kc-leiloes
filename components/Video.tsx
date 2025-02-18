'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { api } from '@/api/api'
import { useQuery } from 'react-query'
import { Config } from '@/types/Config'

export function Video() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  async function fetchData() {
    const response = await api.get('/api/v1/videos/')
    return response.data
  }
  const { data: videos } = useQuery<Config[]>(['getVideoUrls'], fetchData, {
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true,
  })
  console.log(videos)

  return (
    <div className="mt-5 mobile:px-5 laptop:mt-2 max-w-[1600px] gap-6 mx-auto flex flex-col h-full">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="flex justify-center mobile:flex-col mini:flex-col  mini:px-5"
      >
        <div className="w-full mobile:px-0 mini:px-2 mini:mt-5 mobile:mt-5 mini:text-xs relative flex justify-center">
          <div className="z-30 flex flex-col mobile:w-full items-center">
            <div className="w-[1300px] laptop:w-[1300px] laptop:h-[700px] h-[700px] mobile:w-full mini:h-[170px] mini:w-full mobile:h-[250px] rounded-xl flex justify-center items-center bg-[#dbc994]">
              {videos !== undefined ? (
                <iframe
                  src={videos[0].url}
                  className="w-[1290px] rounded-xl mobile:w-[96%] mini:w-[95%] mini:h-[160px] mobile:h-[240px] laptop:w-[240px] laptop:h-[160px] h-[690px]"
                ></iframe>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
