import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { More } from '@/components/More'
import { Tutorial } from '@/components/Tutorial'

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-gradient-to-b from-[#2b2b2b] to-[#313131]">
        <Hero />
      </div>
      <div>
        <More />
      </div>
      <div
        id="passo-a-passo"
        className="bg-gradient-to-b from-[#313131] to-[#222222]"
      >
        <CarouselComponent />
      </div>

      <div
        id="tutorial"
        className="bg-gradient-to-b from-[#222222] to-[#191919] overflow-hidden relative"
      >
        <Tutorial />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b  from-[#191919] to-[#151515] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="faq"
        className="bg-gradient-to-b from-[#151515] to-[#000000] overflow-y-hidden"
      >
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
