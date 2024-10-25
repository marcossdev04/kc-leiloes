import { CarouselComponent } from '@/components/Cards'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Register } from '@/components/Register'
import { Tutorial } from '@/components/Tutorial'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col mobile:px-5">
        <Hero />
        <Register />
        <CarouselComponent />
        <Tutorial />
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
