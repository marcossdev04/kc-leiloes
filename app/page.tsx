'use client'
/* import { api } from '@/api/api' */
import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { More } from '@/components/More'
import { Tutorial } from '@/components/Tutorial'
import { Video } from '@/components/Video'
/* import { Config } from '@/types/Config'
import { useQuery } from 'react-query' */

export default function Home() {
  /*   async function fetchData() {
    const response = await api.get('/site-config')
    return response.data
  }
  const { data } = useQuery<Config>(['getConfig'], fetchData) */
  return (
    <div className="flex w-full flex-col">
      <div className="bg-gradient-to-b from-[#000000] to-[#000000]">
        <Hero />
      </div>
      <div id="video" className="bg-gradient-to-b from-[#000000] to-[#040404]">
        <Video />
      </div>
      <div>
        <More />
      </div>
      <div
        id="passo-a-passo"
        className="bg-gradient-to-b from-[#040404] to-[#080808]"
      >
        <CarouselComponent />
      </div>

      <div
        id="tutorial"
        className="bg-gradient-to-b from-[#080808] to-[#0b0b0b] overflow-hidden relative"
      >
        <Tutorial />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b  from-[#0b0b0b] to-[#050505] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="faq"
        className="bg-gradient-to-b from-[#050505] to-[#000000] overflow-y-hidden"
      >
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
