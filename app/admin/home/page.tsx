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
import { Loader } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { AddPost } from '@/components/AddPost'

const FormSchema = z.object({
  url_video: z.string().optional(),
  live: z.boolean().default(false),
})
export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    const response = await api.get('/site-config/')
    return response.data
  }
  const { data: config } = useQuery<Config>(['getconfig'], fetchData)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url_video: config?.site_video,
      live: config?.live_mode,
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('URL atualizada:', data.url_video)
    setIsLoading(false)
  }

  useEffect(() => {
    if (config) {
      form.setValue('url_video', config.site_video || '')
      form.setValue('live', config.live_mode || false)
    }
  }, [config, form.setValue, form])

  return (
    <div className="flex flex-col items-center">
      <header className="px-20 w-full bg-white py-2">
        <div className="text-2xl text-black">KC Admin</div>
      </header>

      <Card className="w-1/2 mt-8">
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
                name="url_video"
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
          <AddPost />
        </CardContent>
      </Card>
    </div>
  )
}
