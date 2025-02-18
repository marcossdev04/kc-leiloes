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
import { Calendar, Clock, Eye } from 'lucide-react'
import AOS from 'aos'
import { api } from '@/api/api'
import { id } from 'date-fns/locale'
import { useQuery } from 'react-query'
import { BlogPost as bloginterface } from '@/app/blog/[id]/page'
import { formatToHHMM, formatToMMYY, getRandomNumber } from '@/lib/utils'
import Link from 'next/link'

const BlogPost = ({ description1, title, created_at }: bloginterface) => {
  const formattedDate = formatToMMYY(created_at)
  const formattedTime = formatToHHMM(created_at)
  const view = getRandomNumber()
  return (
    <Card className="h-[320px] bg-white/5 border border-[#dbc994] text-white hover:bg-white/10 duration-300 transition-all">
      <CardHeader className="px-6 pt-6 pb-2">
        <h3 className="text-lg mini:text-base font-medium text-[#dbc994]">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="h-[180px] overflow-hidden">
        <p className="text-sm mini:text-xs text-zinc-100 line-clamp-[12]">
          {description1}
        </p>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full p-6 mini:mb-4 mini:ml-3 mini:p-0 border-white/10">
        <div className="flex items-center gap-4 text-zinc-300">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-sm mini:text-xs">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span className="text-sm mini:text-xs">{formattedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span className="text-sm mini:text-xs">{view}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export function BlogPosts() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  async function fetchPost() {
    const response = await api.get(`/api/v1/posts/`)
    return response.data
  }

  const { data: posts } = useQuery<bloginterface[]>(['getPost', id], fetchPost)
  return (
    <div className="max-w-[1370px] mx-auto mt-14 px-4">
      <Carousel className="w-full">
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
                  <BlogPost
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
        <CarouselPrevious className="text-[#dbc994] hover:text-white" />
        <CarouselNext className="text-[#dbc994] hover:text-white" />
      </Carousel>
    </div>
  )
}

export default BlogPosts
