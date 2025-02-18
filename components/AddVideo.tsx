'use client'
import { z } from 'zod'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader, Plus } from 'lucide-react'
import { toast } from 'react-toastify'
import { api } from '@/api/api'
import { queryClient } from '@/api/queryClient'

const FormSchema = z.object({
  url: z.string().url('URL inválida').min(1, 'URL é obrigatória'),
})

export function AddVideo() {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true)
      api.post('/api/v1/videos/', {
        url: data.url,
        title: 'oto',
      })
      queryClient.refetchQueries(['getVideoUrls'])
      toast.success('URL de vídeo adicionada com sucesso', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
      form.reset()
      setOpen(false)
    } catch (err) {
      console.log(err)
      toast.error('Erro ao adicionar URL do vídeo', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-2 items-center gap-2 hover:bg-opacity-80 transition-colors duration-300 py-3 w-full flex justify-center border-white border border-dotted rounded-md bg-[#27272B] text-white">
        <span>Novo Link</span>
        <Plus size={24} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Adicionar Vídeo</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL do YouTube</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.youtube.com/watch?v=exemplo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end">
              {isLoading ? (
                <Button
                  type="submit"
                  disabled
                  className="bg-white hover:bg-lime hover:bg-opacity-80"
                >
                  <Loader className="animate-spin" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-white hover:bg-lime hover:bg-opacity-80"
                >
                  Adicionar
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
