'use client'
import React from 'react'
import { Footer } from '@/components/Footer'
import { useQuery } from 'react-query'
import { api } from '@/api/api'
import { BlogPost as BlogPostInterface } from '@/app/blog/[id]/page'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, Eye } from 'lucide-react'
import Link from 'next/link'
import { formatToHHMM, formatToMMYY, getRandomNumber } from '@/lib/utils'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const BlogCard = ({ description1, title, created_at, id, image1 }: BlogPostInterface) => {
  const formattedDate = formatToMMYY(created_at)
  const formattedTime = formatToHHMM(created_at)
  const view = getRandomNumber()

  return (
    <Link href={`/blog/${id}`}>
      <Card className="h-[280px] relative overflow-hidden bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-sm border border-[#dbc994]/40 text-white group hover:border-[#dbc994] duration-300 transition-all">
        {/* Smoke effects for depth */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-8 left-4 w-32 h-32 bg-gradient-radial from-[#dbc994]/10 to-transparent blur-2xl"></div>
          <div className="absolute -bottom-4 right-4 w-24 h-24 bg-gradient-radial from-[#dbc994]/8 to-transparent blur-xl"></div>
          <div className="absolute top-2 left-1/3 w-20 h-20 bg-gradient-radial from-[#dbc994]/5 to-transparent blur-2xl"></div>
        </div>

        <div className="flex h-full relative z-10">
          {/* Image with frame */}
          <div className="w-1/3 p-3 relative">
            <div className="absolute inset-0 m-3 border border-[#dbc994]/30"></div>
            <div className="absolute inset-0 m-3 border-t border-l border-[#dbc994]"></div>
            <div className="absolute inset-0 m-3 border-r border-b border-[#dbc994]/50"></div>
            <div className="w-full h-full overflow-hidden relative">
              {image1 ? (
                <Image 
                  src={image1} 
                  alt={title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center">
                  <span className="text-[#dbc994]/70 text-xs">Sem imagem</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="w-2/3 flex flex-col p-4">
            <div className="mb-2">
              <h3 className="text-lg font-medium text-[#dbc994] group-hover:text-[#dbc994] transition-all duration-300">
                {title}
                <div className="w-1/4 h-px bg-[#dbc994]/50 mt-2 group-hover:w-1/2 transition-all duration-500"></div>
              </h3>
            </div>

            <div className="flex-grow overflow-hidden">
              <p className="text-sm text-zinc-100 line-clamp-5 group-hover:text-white transition-all duration-300">
                {description1}
              </p>
            </div>

            {/* Footer info */}
            <div className="mt-auto pt-2 border-t border-[#dbc994]/10 group-hover:border-[#dbc994]/30 transition-all duration-300">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#dbc994]/70" />
                  <span className="text-xs">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#dbc994]/70" />
                  <span className="text-xs">{formattedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-[#dbc994]/70" />
                  <span className="text-xs">{view}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default function BlogPage() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])

  async function fetchPosts() {
    const response = await api.get(`/api/v1/posts/`)
    return response.data
  }

  const { data: posts, isLoading } = useQuery<BlogPostInterface[]>('getAllPosts', fetchPosts)

  return (
    <div className="flex w-full flex-col overflow-x-hidden min-h-screen bg-gradient-to-b from-[#000000] to-[#0F0F0F]">
      <div className="content-wrapper flex-1">
        <div className="max-w-[1370px] mx-auto mt-10 px-4 pb-16">
          <div className="text-center mb-12" data-aos="fade-up">
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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-[360px] bg-black/20 animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts?.map((post, index) => (
                <div
                  key={post.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100 + 200}
                >
                  <BlogCard
                    id={post.id}
                    title={post.title}
                    description1={post.description1}
                    description2={post.description2}
                    description3={post.description3}
                    image1={post.image1}
                    image2={post.image2}
                    created_at={post.created_at}
                    updated_at={post.updated_at}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}