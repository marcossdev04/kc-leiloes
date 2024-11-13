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
import { useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const FormSchema = z.object({
  fonte_leilao: z.string(),
  nome_leilao: z.string(),
  id_lote: z.string(),
  foto_lote: z.string(),
  descricao_lote: z.string(),
  link_lote: z.string(),
  hora_primeiro_lote: z.string(),
  lance_inicial: z.string(),
})
export function Teste() {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true)

    console.log('URL atualizada:', data.nome_leilao)
    setLoading(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="nome_leilao"
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

        <div className="flex w-full justify-end">
          {loading ? (
            <Button
              type="submit"
              className="bg-lime px-[38px] hover:bg-lime hover:bg-opacity-80"
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
  )
}
