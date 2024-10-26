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
        <Hero />
        <More />
        <CarouselComponent />
        <div className="bg-zinc-950 mt-20">
          <Tutorial />
        </div>
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
