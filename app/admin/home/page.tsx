'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { api } from '@/api/api'
import { useQuery } from 'react-query'
import { Config } from '@/types/Config'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  Form,
} from '@/components/ui/form'
import { Loader, SquareArrowOutUpRight } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { AddPost } from '@/components/AddPost'
import { Auction } from '@/types/Auction'
import { DeletePost } from '@/components/DeletePost'
import Link from 'next/link'
import { queryClient } from '@/api/queryClient'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Logo from '@/assets/footerImage.png'
import { format, parseISO } from 'date-fns'

const FormSchema = z.object({
  url_video: z.string(),
  live: z.boolean().default(false),
  url_live: z.string(),
  live_title: z.string(),
  live_data_hora: z.string(),
})
export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    const response = await api.get('/site-config/')
    return response.data
  }
  const { data: config } = useQuery<Config>(['getconfig'], fetchData)

  async function fetchPosts() {
    const response = await api.get('/auctions/')
    return response.data
  }
  const { data: auctions } = useQuery<Auction[]>(['getAuctions'], fetchPosts)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url_video: config?.site_video,
      live: config?.live_mode,
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true)
      await api.put('/site-config/1/', {
        live_mode: data.live,
        site_video: data.url_video,
        live_link: data.url_live,
        live_titulo: data.live_title,
        live_data_hora: data.live_data_hora,
      })
      await queryClient.refetchQueries(['getAuctions'])
      toast.success('Configurações atualizadas com sucesso', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
      setIsLoading(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err)
      toast.error(
        err.response.data.live_link
          ? 'Live link com url inválida. Ex: htpps://...'
          : err.response.data.site_video
            ? 'Site link com url inválida. Ex: htpps://...'
            : 'Erro desconhecido',
        {
          position: 'bottom-right',
          theme: 'dark',
          closeOnClick: true,
        },
      )
      setIsLoading(false)
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('URL atualizada:', data.url_video)
    setIsLoading(false)
  }

  function removeTimeZone(dateString: string) {
    // Converte a string para um objeto Date
    const date = parseISO(dateString)

    // Formata a data sem o fuso horário
    return format(date, "yyyy-MM-dd'T'HH:mm:ss")
  }
  useEffect(() => {
    if (config) {
      form.setValue('url_video', config.site_video || '')
      form.setValue('live', config.live_mode || false)
      form.setValue('url_live', config.live_link || '')
      form.setValue('live_title', config.live_titulo)
      form.setValue('live_data_hora', removeTimeZone(config.live_data_hora))
    }
  }, [config, form.setValue, form])

  return (
    <div className="flex flex-col min-h-[100vh] items-center">
      <header className="px-20 w-full bg-white py-2">
        <div className="text-2xl flex items-center text-black">
          <Image src={Logo} width={200} alt="logo" />
        </div>
      </header>
      <div className="flex w-full justify-center items-center min-h-[9 0vh]">
        <Card className="w-1/2  mt-8">
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="live"
                  render={({ field }) => (
                    <FormItem className="mt-3 flex items-center gap-3 space-y-0">
                      <div className="flex h-9 items-center text-xl">
                        Modo live
                      </div>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url_video"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Url do vídeo</FormLabel>
                      <Input
                        placeholder="https://www.youtube.com/watch?v=x9Zg90Xo0PY"
                        className="placeholder:text-zinc-600"
                        type="text"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url_live"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Url da Live</FormLabel>
                      <Input
                        placeholder="https://www.youtube.com/watch?v=x9Zg90Xo0PY"
                        className="placeholder:text-zinc-600"
                        type="text"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="live_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título da live</FormLabel>
                      <Input
                        placeholder="Confira a live do Leilão X"
                        className="placeholder:text-zinc-600"
                        type="text"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="live_data_hora"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Horário do leilão</FormLabel>
                      <Input {...field} type="datetime-local" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full justify-end">
                  {isLoading ? (
                    <Button
                      type="submit"
                      className="bg-lime px-[38px] hover:bg-lime hover:bg-opacity-80"
                    >
                      <Loader />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-white hover:bg-lime hover:bg-opacity-80"
                    >
                      Atualizar
                    </Button>
                  )}
                </div>
              </form>
            </Form>
            <div className="grid grid-cols-3 gap-2 mt-6">
              <AddPost />
              {auctions?.map((auction, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-800  p-2 gap-2 rounded-lg flex flex-col"
                  >
                    <div className="flex justify-center text-xl">
                      {auction.nome_leilao}
                    </div>
                    <div>Lance inicial: R${auction.lance_inicial}</div>
                    <div>Plataforma: {auction.fonte_leilao}</div>
                    <Link
                      target="_blank"
                      className="underline flex w-fit gap-1 items-center"
                      href={auction.link_lote}
                    >
                      <div>{auction.link_lote}</div>
                      <div>
                        <SquareArrowOutUpRight size={18} />
                      </div>
                    </Link>
                    <div className="flex justify-end">
                      <DeletePost auction={auction} />
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
