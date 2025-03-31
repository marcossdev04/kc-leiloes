'use client'
import BlogPostss from '@/components/Blog'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { Instagram } from '@/components/Instagram'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div className="bg-gradient-to-b from-[#000000] to-[#0F0F0F] pb-0">
        <Hero />
      </div>
      <div className="content-wrapper min-h-screen -mt-1">
        <FormComponent />
        <Video />
        <BlogPostss />
        <Instagram />
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
