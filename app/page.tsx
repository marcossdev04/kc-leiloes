import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { More } from '@/components/More'
import { Tutorial } from '@/components/Tutorial'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex w-[100vw] flex-col">
        <div className="bg-gradient-to-b from-[#212121] to-[#1d1d1d]">
          <Hero />
        </div>
        <div>
          <More />
        </div>
        <div className="bg-gradient-to-b from-[#1d1d1d] to-[#111111]">
          <CarouselComponent />
        </div>

        <div className="bg-gradient-to-b from-[#111111] to-[#080808]">
          <Tutorial />
        </div>
        <div className="bg-gradient-to-b from-[#080808] to-[#000000]">
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  )
}
