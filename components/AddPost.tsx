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
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader, Plus } from 'lucide-react'
import { toast } from 'react-toastify'
import { api } from '@/api/api'
import { queryClient } from '@/api/queryClient'

const FormSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description1: z.string().min(1, 'Descrição 1 é obrigatória'),
  description2: z.string().min(1, 'Descrição 2 é obrigatória'),
  description3: z.string().min(1, 'Descrição 3 é obrigatória'),
  image1: z.string().url('URL inválida'),
  image2: z.string().url('URL inválida'),
})
export function AddPost() {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true)
      await api.post('/api/v1/posts/', {
        title: data.title,
        description1: data.description1,
        description2: data.description2,
        description3: data.description3,
        image1: data.image1,
        image2: data.image2,
      })
      await queryClient.refetchQueries(['getPosts'])
      toast.success('Post adicionado com sucesso', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
      setOpen(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err)
      setIsLoading(false)
      toast.error(err.response?.data?.message || 'Erro ao criar post', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
  }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger className="bg-zinc-800 mobile:h-[180px] cursor-pointer hover:bg-zinc-900 transition-colors duration-300 p-2 rounded-lg border border-dashed border-white flex justify-center items-center">
        <Plus size={40} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Criar Post</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Título do post" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição 1</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Primeira descrição"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição 2</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Segunda descrição"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição 3</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Terceira descrição"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem 1</FormLabel>
                  <FormControl>
                    <Input placeholder="URL da primeira imagem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem 2</FormLabel>
                  <FormControl>
                    <Input placeholder="URL da segunda imagem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end">
              {isLoading ? (
                <Button
                  type="submit"
                  className="bg-white hover:bg-lime hover:bg-opacity-80"
                >
                  <Loader className="animate-spin" />
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
      </DialogContent>
    </Dialog>
  )
}
