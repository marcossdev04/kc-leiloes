'use client'

import React, { useEffect, useState } from 'react'
import BlogHeader from '@/components/BlogHeader'
import { useQuery } from 'react-query'
import { api } from '@/api/api'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { formatToHHMM, formatToMMYY } from '@/lib/utils'
import Link from 'next/link'

export interface BlogPost {
  id: number
  title: string
  description1: string
  description2: string
  description3: string
  image1: string
  image2: string
  created_at: string
  updated_at: string
}

interface Props {
  params: {
    id: string
  }
}

export default function Blog({ params }: Props) {
  const { id } = params
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  async function fetchPost() {
    const response = await api.get(`/api/v1/posts/${id}/`)
    return response.data
  }

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery<BlogPost>(['getPost', id], fetchPost)

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#000000] to-[#0F0F0F] text-white">
        <BlogHeader />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#dbc994]" />
        </div>
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#000000] to-[#0F0F0F] text-white">
        <BlogHeader />
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-6 max-w-lg w-full text-center bg-black/40 backdrop-blur-sm border border-[#dbc994]/40">
            <h2 className="text-xl font-semibold text-[#dbc994] mb-2">
              Erro ao carregar o post
            </h2>
            <p className="text-zinc-300">
              Não foi possível carregar o conteúdo do post. Por favor, tente
              novamente mais tarde.
            </p>
          </Card>
        </div>
      </div>
    )
  }

  const formattedDate = formatToMMYY(post.created_at)
  const formattedTime = formatToHHMM(post.created_at)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0F0F0F] text-white flex flex-col relative overflow-hidden">
      <BlogHeader />

      {/* Elementos decorativos fixos */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#8B7355]/20 to-transparent rotate-[25deg] blur-3xl"></div>
        <div className="absolute -right-32 top-20 w-72 h-72 bg-gradient-to-l from-[#916f28]/25 to-transparent -rotate-[35deg] blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-gradient-to-t from-[#dbc994]/10 via-[#dbc994]/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-gradient-to-b from-[#dbc994]/10 via-[#dbc994]/5 to-transparent rotate-45 blur-3xl opacity-60"></div>
      </div>

      {/* Barra lateral removida conforme solicitado */}

      {/* Botão para voltar ao topo */}
      {scrollPosition > 300 && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-[#dbc994]/40 
                   flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all z-30
                   hover:border-[#dbc994] group"
        >
          <svg
            className="w-5 h-5 text-[#dbc994] group-hover:scale-110 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      )}

      <main className="container mx-auto py-12 px-4 flex-1 relative z-10">
        <article className="max-w-4xl mx-auto relative">
          {/* Breadcrumbs navigation */}
          <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-[#dbc994] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#dbc994] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#dbc994]/70 truncate max-w-[200px]">
              {post.title}
            </span>
          </div>

          {/* Header section with title and metadata */}
          <header className="mb-12 space-y-6 relative z-10">
            <h1 className="text-4xl font-light text-[#dbc994] tracking-wide leading-tight">
              {post.title}
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-[#dbc994] to-transparent mb-6"></div>

            <div className="flex items-center gap-6 text-zinc-300">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-md border border-[#dbc994]/20">
                <Calendar size={16} className="text-[#dbc994]" />
                <span className="text-sm">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-md border border-[#dbc994]/20">
                <Clock size={16} className="text-[#dbc994]" />
                <span className="text-sm">{formattedTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="text-zinc-100 space-y-12">
            {/* First section - Text and image side by side if available */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2 space-y-6">
                <div className="backdrop-blur-sm bg-black/20 p-6 rounded-md border-l-2 border-[#dbc994]">
                  <p className="text-lg leading-relaxed text-zinc-100 first-letter:text-4xl first-letter:text-[#dbc994] first-letter:mr-1 first-letter:float-left">
                    {post.description1}
                  </p>
                </div>
              </div>

              {post.image2 && (
                <div className="lg:w-1/2 transform w-full group lg:hover:translate-y-2 transition-all duration-500 relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-x-3 -inset-y-3 border-y border-[#dbc994]/30 z-0"></div>
                  <div className="absolute -inset-x-3 -inset-y-3 border-x border-[#dbc994]/30 z-0"></div>
                  <div className="absolute inset-0 border border-[#dbc994] z-0"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent z-0"></div>

                  {/* Image with overlay and effects */}
                  <div className="relative w-full h-[400px] overflow-hidden p-3 z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <Image
                      src={post.image2}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center my-12">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#dbc994]/50 to-transparent"></div>
            </div>

            {/* Second section - Text */}
            <div className="backdrop-blur-sm bg-black/10 p-8 rounded-md relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-[#dbc994]/10 to-transparent rotate-45 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-[#dbc994]/10 to-transparent rotate-45 blur-2xl"></div>

              <p className="text-lg leading-relaxed relative z-10">
                {post.description2}
              </p>
            </div>

            {/* Third section - Text and image side by side if available, in reversed order */}
            {post.image1 && (
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
                <div className="lg:w-1/2 space-y-6">
                  {post.description3 && (
                    <div className="backdrop-blur-sm bg-black/20 p-6 rounded-md border-r-2 border-[#dbc994]">
                      <p className="text-lg leading-relaxed text-zinc-100">
                        {post.description3}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2 w-full transform group lg:hover:translate-y-2 transition-all duration-500 relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-x-3 -inset-y-3 border-y border-[#dbc994]/30 z-0"></div>
                  <div className="absolute -inset-x-3 -inset-y-3 border-x border-[#dbc994]/30 z-0"></div>
                  <div className="absolute inset-0 border border-[#dbc994] z-0"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent z-0"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent z-0"></div>

                  {/* Image with overlay and effects */}
                  <div className="relative w-full h-[400px] overflow-hidden p-3 z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <Image
                      src={post.image1}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* If there's a third description but no image1, show it in a styled container */}
            {!post.image1 && post.description3 && (
              <div className="backdrop-blur-sm bg-black/10 p-8 rounded-md border border-[#dbc994]/30">
                <p className="text-lg leading-relaxed">{post.description3}</p>
              </div>
            )}

            {/* Footer section */}
            <footer className="mt-16 pt-8 border-t border-[#dbc994]/20 text-center">
              <div className="text-[#dbc994] opacity-70 font-light hover:opacity-100 transition-opacity">
                <p>
                  Kátia Casaes Leilões - O conhecimento é o melhor investimento
                </p>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </div>
  )
}
