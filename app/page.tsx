import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Tutorial } from '@/components/Tutorial'

export default function Home() {
  return (
    <div>
      <div className="flex w-[100vw] flex-col">
        <Hero />
        <CarouselComponent />
        <div className="bg-zinc-950">
          <Tutorial />
        </div>
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
