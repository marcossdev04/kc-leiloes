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
import { CalendarIcon, Loader, Plus } from 'lucide-react'
import InputMask from 'react-input-mask'
import CurrencyInput from 'react-currency-input-field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { api } from '@/api/api'
import { queryClient } from '@/api/queryClient'

const FormSchema = z.object({
  nome_leilao: z.string(),
  descricao_lote: z.string(),
  lance_inicial: z.string(),
  hora_primeiro_lote: z.string(),
  data_leilao: z.date(),
  link_lote: z.string(),
  foto_lote: z.string(),
  fonte_leilao: z.string(),
  id_lote: z.string(),
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
      await api.post('/auctions/', {
        fonte_leilao: data.fonte_leilao,
        nome_leilao: data.nome_leilao,
        foto_lote: data.foto_lote,
        descricao_lote: data.descricao_lote,
        link_lote: data.link_lote,
        data_leilao: format(data.data_leilao, 'yyyy-MM-dd'),
        hora_primeiro_lote: data.hora_primeiro_lote,
        lance_inicial: data.lance_inicial,
        id_lote: data.id_lote,
      })
      await queryClient.refetchQueries(['getAuctions'])
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
      toast.error(
        err.response.data.foto_lote
          ? 'Foto do lote com url inválida. Ex: htpps://...'
          : err.response.data.link_lote
            ? 'Link do lote com url inválida. Ex: htpps://...'
            : 'Erro desconhecido',
        {
          position: 'bottom-right',
          theme: 'dark',
          closeOnClick: true,
        },
      )
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('URL atualizada:', data)
    setIsLoading(false)
  }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger className="bg-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors duration-300 p-2 rounded-lg border border-dashed border-white flex justify-center items-center">
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
              name="nome_leilao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    placeholder="Leilão teste"
                    className="placeholder:text-zinc-600"
                    type="text"
                    {...field}
                  />
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
                    placeholder="Descrição teste"
                    className="placeholder:text-zinc-600"
                    type="text"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lance_inicial"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Lance Inicial</FormLabel>
                  <CurrencyInput
                    prefix="R$ "
                    decimalSeparator=","
                    groupSeparator="."
                    placeholder="R$ 0,00"
                    className="placeholder:text-zinc-600 border-[#27272A] px-3 bg-[#0B0B0B] border rounded-lg p-1"
                    decimalsLimit={2}
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link_lote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link do Leilão</FormLabel>
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
              name="foto_lote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto</FormLabel>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=x9Zg90Xo0PY"
                    className="placeholder:text-zinc-600"
                    type="text"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="id_lote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Lote</FormLabel>
                  <Input
                    placeholder="ID098"
                    className="placeholder:text-zinc-600"
                    type="text"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hora_primeiro_lote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário 1 lance</FormLabel>
                  <InputMask
                    mask="99:99"
                    maskChar={null}
                    placeholder="00:00"
                    {...field}
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        className="placeholder:text-zinc-600"
                        type="text"
                      />
                    )}
                  </InputMask>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="data_leilao"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 w-full">
                  <FormLabel>Data de Início</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fonte_leilao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plataforma</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Plataforma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Soleum">Soleum</SelectItem>
                      <SelectItem value="Bom valor">Bom Valor</SelectItem>
                    </SelectContent>
                  </Select>
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
