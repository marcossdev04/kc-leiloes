import { Button } from '@/components/ui/button'
import { Loader, Trash, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { useState } from 'react'
import { api } from '@/api/api'
import { toast } from 'react-toastify'
import { Auction } from '@/types/Auction'
import { queryClient } from '@/api/queryClient'

interface Props {
  auction: Auction | undefined
}
export function DeletePost({ auction }: Props) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  async function handleDeletePlan() {
    try {
      setLoading(true)
      await api.delete(`/auctions/${auction?.id}/`)
      await queryClient.refetchQueries(['getAuctions'])
      toast.success('Post deletado com sucesso!', {
        position: 'bottom-right',
        closeOnClick: true,
        theme: 'dark',
      })
      setOpen(false)
      setLoading(false)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error('Erro ao deletar o post', {
        position: 'bottom-right',
        closeOnClick: true,
        theme: 'dark',
      })
      setOpen(false)
      setLoading(false)
    }
  }
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open)
      }}
    >
      <DialogTrigger className="">
        <Trash className="bg-red-500 p-1 rounded-full cursor-pointer hover:text-black transition-colors duration-300" />
      </DialogTrigger>
      <DialogContent className="max-w-[500px] mobile:max-w-[350px] mobile:rounded-xl tablet:rounded-2xl laptop:rounded-2xl desktop:rounded-2xl ">
        <DialogTitle className="text-lime">Deletar Post</DialogTitle>
        <DialogDescription>
          Você realmente deseja deletar este post?
        </DialogDescription>
        <div className="flex justify-end gap-2">
          <DialogClose>
            <Button
              className="flex items-center gap-1 rounded-xl px-3"
              variant={'ghost'}
            >
              <div>Cancelar</div>
            </Button>
          </DialogClose>
          {loading ? (
            <Button
              className="flex items-center gap-1 rounded-xl px-9"
              variant={'destructive'}
            >
              <div>
                <Loader className="animate-spin" />
              </div>
            </Button>
          ) : (
            <Button
              className="flex items-center gap-1 rounded-xl px-3"
              variant={'destructive'}
              onClick={handleDeletePlan}
            >
              <div>Deletar</div>
              <Trash2 size={18} strokeWidth={2.5} />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
