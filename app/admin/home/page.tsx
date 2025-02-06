'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { api } from '@/api/api'
import { useQuery } from 'react-query'
import { Config } from '@/types/Config'

import { AddPost } from '@/components/AddPost'
import { AddVideo } from '@/components/AddVideo'
import { DeleteVideo } from '@/components/DeleteVideo'
import { Posts } from '@/types/Auction'
import { DeletePost } from '@/components/DeletePost'
import Image from 'next/image'
import Logo from '@/assets/footerImage.png'

export default function Home() {
  async function fetchData() {
    const response = await api.get('/api/v1/videos/?page_size=100')
    return response.data
  }
  const { data: videos } = useQuery<Config[]>(['getVideoUrls'], fetchData)
  console.log(videos)

  async function fetchPosts() {
    const response = await api.get('/api/v1/posts/')
    return response.data
  }
  const { data: posts } = useQuery<Posts[]>(['getPosts'], fetchPosts)
  console.log(posts)

  return (
    <div className="flex flex-col min-h-[100vh] items-center">
      <header className="px-20 flex justify-center mobile:px-0 w-full bg-black/20 py-2">
        <div className="text-2xl flex items-center ">
          <Image src={Logo} width={200} alt="logo" />
        </div>
      </header>
      <div className="flex w-full justify-center items-center min-h-[90vh]">
        <Card className="w-1/2 mobile:w-full mobile:mx-auto mt-8">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-3">
              {videos?.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full gap-2 justify-between"
                  >
                    <div className="bg-white/90 w-full text-black py-1 text-lg px-5 rounded-lg">
                      {video.url}
                    </div>
                    <DeleteVideo videoId={video.id} />
                    <AddVideo />
                  </div>
                )
              })}
            </div>
            <div className="grid grid-cols-3 mobile:grid-cols-1 gap-2 mt-6">
              <AddPost />
              {posts?.map((auction, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-800 p-4 gap-4 rounded-lg flex flex-col"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{auction.title}</h3>
                      <DeletePost auction={auction} />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-300 max-h-[200px] overflow-hidden">
                      <p className="line-clamp-[8] overflow-ellipsis">
                        {auction.description1}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
