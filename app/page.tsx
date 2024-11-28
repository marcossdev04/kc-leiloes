'use client'
import { api } from '@/api/api'
/* import { api } from '@/api/api' */
import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { LiveMode } from '@/components/LiveMode'
import { More } from '@/components/More'
import { Social } from '@/components/social'
import { Tutorial } from '@/components/Tutorial'
import { Video } from '@/components/Video'
import { Config } from '@/types/Config'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  async function fetchData() {
    const response = await api.get('/site-config')
    return response.data
  }
  const { data } = useQuery<Config>(['getConfig'], fetchData)
  const [showLive, setShowLive] = useState(data?.live_mode)
  useEffect(() => {
    setShowLive(data?.live_mode)
  }, [data])
  return showLive ? (
    <LiveMode
      dateTime={data?.live_data_hora}
      title={data?.live_titulo}
      liveLink={data?.live_link}
      onChange={setShowLive}
      initialShowLive={data?.live_mode}
    />
  ) : (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div className="bg-gradient-to-b from-[#000000] to-[#000000]">
        <Hero />
      </div>
      <div id="video" className="bg-gradient-to-b from-[#000000] to-[#090909]">
        <Video siteVideo={data?.site_video} />
      </div>
      <div>
        <More />
      </div>
      <div
        id="passo-a-passo"
        className="bg-gradient-to-b from-[#090909] to-[#0f0f0f]"
      >
        <CarouselComponent />
      </div>

      <div
        id="tutorial"
        className="bg-gradient-to-b from-[#0f0f0f] to-[#131313] overflow-hidden relative"
      >
        <Tutorial />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b  from-[#131313] to-[#0f0f0f] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="faq"
        className="bg-gradient-to-b from-[#0f0f0f] to-[#000000] overflow-y-hidden"
      >
        <Faq />
      </div>
      <div>
        <Social />
      </div>
      <Footer />
    </div>
  )
}
