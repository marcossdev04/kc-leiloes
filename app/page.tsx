'use client'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { Instagram } from '@/components/Instagram'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div className="bg-gradient-to-b from-[#000000] to-[#0F0F0F]">
        <Hero />
      </div>
      <div id="video" className="bg-gradient-to-b from-[#0F0F0F] to-[#0F0F0F]">
        <Video />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b from-[#0f0f0f] to-[#131313] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="instagram"
        className="bg-gradient-to-b from-[#131313] to-[#0f0f0f] overflow-hidden relative"
      >
        <Instagram />
      </div>
      <div
        id="faq"
        className="bg-gradient-to-b from-[#0f0f0f] to-[#000000] overflow-y-hidden"
      >
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
