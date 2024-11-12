import { Loader, Plus, Trash } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'

const FormSchema = z.object({
  fonte_leilao: z.string(),
  nome_leilao: z.string(),
  id_lote: z.string(),
  foto_lote: z.string(),
  descricao_lote: z.string(),
  link_lote: z.string(),
  data_leilao: z.date(),
  hora_primeiro_lote: z.string(),
  lance_inicial: z.number(),
})
export function AddPost() {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('URL atualizada:', data.descricao_lote)
    setLoading(false)
  }
  return (
    <div className="grid grid-cols-3 gap-2 mt-6">
      <Dialog>
        <DialogTrigger className="bg-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors duration-300 p-2 rounded-lg border border-dashed border-white flex justify-center items-center">
          <Plus size={40} />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Criar leilão</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="nome_leilao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      placeholder="Onix 2018"
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
                name="descricao_lote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <Input
                      placeholder="Ótimo estado, dono único"
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
                name="link_lote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <Input
                      placeholder="https://mercado.bomvalor.com.br"
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
                name="data_leilao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data {field.name}</FormLabel>
                    {/* <Input
                      placeholder="https://www.youtube.com/watch?v=x9Zg90Xo0PY"
                      className="placeholder:text-zinc-600"
                      type="text"
                      {...field}
                    /> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hora_primeiro_lote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário 1 lance</FormLabel>
                    <Input
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
                name="fonte_leilao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fonte {field.name}</FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lance_inicial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lance Inicial</FormLabel>
                    <Input
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
        </DialogContent>
      </Dialog>

      <div className="bg-zinc-800 p-2 rounded-lg flex flex-col">
        <div>oi</div>
        <div>oi</div>
        <div>oi</div>
        <div className="flex justify-end">
          <Trash className="bg-red-500 p-1 rounded-full cursor-pointer hover:text-black transition-colors duration-300" />
        </div>
      </div>
      <div className="bg-zinc-800">oi</div>
      <div className="bg-zinc-800">oi</div>
    </div>
  )
}
