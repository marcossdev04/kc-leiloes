import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { More } from '@/components/More'
import { Tutorial } from '@/components/Tutorial'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-gradient-to-b from-[#000000] to-[#101010]">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-[#101010] to-[#1e1e1e]">
        <Video />
      </div>
      <div>
        <More />
      </div>
      <div
        id="passo-a-passo"
        className="bg-gradient-to-b from-[#1e1e1e] to-[#202020]"
      >
        <CarouselComponent />
      </div>

      <div
        id="tutorial"
        className="bg-gradient-to-b from-[#202020] to-[#1e1e1e] overflow-hidden relative"
      >
        <Tutorial />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b  from-[#1e1e1e] to-[#101010] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="faq"
        className="bg-gradient-to-b from-[#101010] to-[#000000] overflow-y-hidden"
      >
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
