/* eslint-disable camelcase */
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Calendar, Clock, Eye, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import { api } from '@/api/api'
import { id } from 'date-fns/locale'
import { useQuery } from 'react-query'
import { BlogPost as bloginterface } from '@/app/blog/[id]/page'
import { formatToHHMM, formatToMMYY, getRandomNumber } from '@/lib/utils'
import Link from 'next/link'

const BlogPosts = ({ description1, title, created_at, id }: bloginterface) => {
  const formattedDate = formatToMMYY(created_at)
  const formattedTime = formatToHHMM(created_at)
  const view = getRandomNumber()
  
  return (
    <Card className="h-[360px] relative overflow-hidden bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-sm border border-[#dbc994]/40 text-white group hover:border-[#dbc994] duration-300 transition-all">
      {/* Smoke effect in header only */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden z-0">
        <div className="absolute -top-8 left-4 w-32 h-32 bg-gradient-radial from-[#dbc994]/10 to-transparent blur-2xl"></div>
        <div className="absolute -top-4 right-4 w-24 h-24 bg-gradient-radial from-[#dbc994]/8 to-transparent blur-xl"></div>
        <div className="absolute top-2 left-1/3 w-20 h-20 bg-gradient-radial from-[#dbc994]/5 to-transparent blur-2xl"></div>
      </div>
      
      <CardHeader className="px-6 pt-6 pb-2 border-b border-[#dbc994]/10 group-hover:border-[#dbc994]/30 transition-all duration-300">
        <h3 className="text-lg mini:text-base font-medium text-[#dbc994] group-hover:text-[#dbc994] transition-all duration-300">
          {title}
          <div className="w-1/4 h-px bg-[#dbc994]/50 mt-2 group-hover:w-1/2 transition-all duration-500"></div>
        </h3>
      </CardHeader>
      
      <CardContent className="h-[200px] overflow-hidden px-6 py-4">
        <p className="text-sm mini:text-xs text-zinc-100 line-clamp-[12] group-hover:text-white transition-all duration-300">
          {description1}
        </p>
      </CardContent>
      
      <CardFooter className="absolute bottom-0 w-full p-5 mini:p-4 border-t border-[#dbc994]/10 bg-black/30 backdrop-blur-md group-hover:border-[#dbc994]/30 transition-all duration-300 z-10">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center gap-6 text-zinc-300">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#dbc994]/70" />
              <span className="text-xs mini:text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#dbc994]/70" />
              <span className="text-xs mini:text-xs">{formattedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-[#dbc994]/70" />
              <span className="text-xs mini:text-xs">{view}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export function BlogPostss() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  
  async function fetchPost() {
    const response = await api.get(`/api/v1/posts/`)
    return response.data
  }
  
  const { data: posts } = useQuery<bloginterface[]>(['getPost', id], fetchPost)
  
  return (
    <div className="max-w-[1370px] mx-auto mt-32 px-4">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-light text-[#dbc994] mb-3 tracking-wide">
          Blog da Kátia
        </h2>
        <div className="relative">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent mx-auto"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent mx-auto mt-1"></div>
        </div>
        <p className="text-zinc-300 mt-6 max-w-xl mx-auto text-sm">
          Confira os últimos leilões, oportunidades exclusivas e novidades do mercado
        </p>
      </div>
      
      <Carousel className="w-full">
        <div className="flex justify-end mb-6">
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 bg-black/20 border-[#dbc994]/30 hover:bg-[#dbc994]/10 hover:border-[#dbc994]" />
            <CarouselNext className="static translate-x-0 translate-y-0 bg-black/20 border-[#dbc994]/30 hover:bg-[#dbc994]/10 hover:border-[#dbc994]" />
          </div>
        </div>
        
        <CarouselContent className="px-4">
          {posts?.map((post, index) => (
            <CarouselItem
              data-aos="fade-up"
              data-aos-delay={
                index === 0
                  ? '200'
                  : index === 1
                    ? '300'
                    : index === 2
                      ? '400'
                      : '500'
              }
              key={post.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <Link className="w-full" href={`/blog/${post.id}`} key={post.id}>
                <div className="p-2">
                  <BlogPosts
                    created_at={post.created_at}
                    updated_at={post.updated_at}
                    title={post.title}
                    description1={post.description1}
                    description2={post.description2}
                    description3={post.description3}
                    id={post.id}
                    image1={post.image1}
                    image2={post.image2}
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default BlogPostss