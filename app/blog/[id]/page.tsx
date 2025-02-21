'use client'

import React from 'react'
import BlogHeader from '@/components/BlogHeader'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useQuery } from 'react-query'
import { api } from '@/api/api'
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

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
      <TracingBeam>
        <div className="min-h-screen flex flex-col">
          <BlogHeader />
          <div className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        </div>
      </TracingBeam>
    )
  }

  if (isError || !post) {
    return (
      <TracingBeam>
        <div className="min-h-screen flex flex-col">
          <BlogHeader />
          <div className="flex-1 flex items-center justify-center">
            <Card className="p-6 max-w-lg w-full text-center">
              <h2 className="text-xl font-semibold text-destructive mb-2">
                Erro ao carregar o post
              </h2>
              <p className="text-muted-foreground">
                Não foi possível carregar o conteúdo do post. Por favor, tente
                novamente mais tarde.
              </p>
            </Card>
          </div>
        </div>
      </TracingBeam>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <BlogHeader />
      <TracingBeam>
        <main className="container mx-auto py-8 px-4 flex-1">
          <article className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-6 text-lg leading-relaxed">
                {post.description1}
              </p>

              {post.image2 && (
                <div className="my-8 rounded-lg overflow-hidden">
                  <Image
                    width={800}
                    height={800}
                    src={post.image2}
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}

              <p className="mb-6 text-lg leading-relaxed">
                {post.description2}
              </p>

              {post.image1 && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    width={800}
                    height={800}
                    src={post.image1}
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}

              {post.description3 && (
                <p className="text-lg leading-relaxed">{post.description3}</p>
              )}
            </div>
          </article>
        </main>
      </TracingBeam>
    </div>
  )
}
