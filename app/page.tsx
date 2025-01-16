'use client'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { FormComponent } from '@/components/FormComponent'
import { Hero } from '@/components/Hero'
import { Social } from '@/components/social'
import { Tutorial } from '@/components/Tutorial'
import { Video } from '@/components/Video'
import BlogPosts from '@/components/Whois'

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div className="bg-gradient-to-b from-[#000000] to-[#0F0F0F]">
        <Hero />
      </div>
      <div id="video" className="bg-gradient-to-b from-[#0F0F0F] to-[#0F0F0F]">
        <Video />
      </div>
      <div id="whois" className="bg-gradient-to-b from-[#0F0F0F] to-[#0F0F0F]">
        <BlogPosts />
      </div>
      <div
        id="form"
        className="bg-gradient-to-b  from-[#0f0f0f] to-[#131313] overflow-hidden relative"
      >
        <FormComponent />
      </div>
      <div
        id="tutorial"
        className="bg-gradient-to-b from-[#131313] to-[#0f0f0f] overflow-hidden relative"
      >
        <Tutorial />
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
