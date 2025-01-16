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

interface Posts {
  post: {
    id: number
    title: string
    content: string
    date: string
    time: string
    views: string
  }
}
// Dados de exemplo das postagens
const posts = [
  {
    id: 1,
    title: 'Como achar as melhores oportunidades de leilões?',
    content:
      'Encontrar as melhores oportunidades em leilões exige informação, estratégia e confiança nas fontes certas. É por isso que seguir Kátia Casaes é indispensável para quem deseja se destacar nesse mercado Encontrar as melhores oportunidades em leilões exige informação, estratégia e confiança nas fontes certas. É por isso que seguir Kátia Casaes é indispensável para quem deseja se destacar nesse mercado Encontrar as melhores oportunidades em leilões exige informação, estratégia e confiança nas fontes certas. É por isso que seguir Kátia Casaes é indispensável para quem deseja se destacar nesse mercado Encontrar as melhores oportunidades em leilões exige informação, estratégia e confiança nas fontes certas. É por isso que seguir Kátia Casaes é indispensável para quem deseja se destacar nesse mercado...',
    date: '11/01/2025',
    time: '20:30h',
    views: '200',
  },
  {
    id: 2,
    title: 'Dicas para participar de leilões online com segurança',
    content:
      'A participação em leilões online tem se tornado cada vez mais comum. Para garantir uma experiência segura e proveitosa, é fundamental conhecer a plataforma, verificar a documentação...',
    date: '10/01/2025',
    time: '15:45h',
    views: '197',
  },
  {
    id: 3,
    title: 'Os melhores investimentos em leilões de imóveis',
    content:
      'O mercado de leilões de imóveis oferece excelentes oportunidades para investidores. Com valores geralmente abaixo do mercado e possibilidades de alta valorização...',
    date: '09/01/2025',
    time: '18:20h',
    views: '1k',
  },
  {
    id: 4,
    title: 'Os melhores investimentos em leilões de imóveis',
    content:
      'O mercado de leilões de imóveis oferece excelentes oportunidades para investidores. Com valores geralmente abaixo do mercado e possibilidades de alta valorização...',
    date: '09/01/2025',
    time: '18:20h',
    views: '3k',
  },
]

const BlogPost = ({ post }: Posts) => {
  return (
    <Card className="h-[320px] bg-white/5 border border-[#dbc994] text-white hover:bg-white/10 duration-300 transition-all">
      <CardHeader className="px-6 pt-6 pb-2">
        <h3 className="text-lg mini:text-base font-medium text-[#dbc994]">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent className="h-[180px] overflow-hidden">
        <p className="text-sm mini:text-xs text-zinc-100 line-clamp-[12]">
          {post.content}
        </p>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full p-6 mini:mb-4 mini:ml-3 mini:p-0 border-white/10">
        <div className="flex items-center gap-4 text-zinc-300">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-sm mini:text-xs">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span className="text-sm mini:text-xs">{post.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span className="text-sm mini:text-xs">{post.views}</span>
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
  return (
    <div className="max-w-[1370px] mx-auto mt-14 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-[#dbc994] mb-4">Postagens</h2>
        <p className="text-lg text-zinc-100 max-w-3xl mx-auto">
          Semanalmente postamos pensamentos e ideias que a Katia deseja
          compartilhar com você!
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="px-4">
          {posts.map((post, index) => (
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
              <div className="p-2">
                <BlogPost post={post} />
              </div>
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
