'use client'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './ui/dialog'
import { useState } from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { api } from '@/api/api'
import { queryClient } from '@/api/queryClient'
import { toast } from 'react-toastify'

interface DeleteVideoProps {
  videoId: number
}

export function DeleteVideo({ videoId }: DeleteVideoProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [loadign, setIsLoading] = useState(false)

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true)
      await api.delete(`/api/v1/videos/${id}/`)

      // Invalidate and refetch queries after successful deletion
      await queryClient.invalidateQueries(['getVideoUrls'])

      toast.success('URL de vídeo deletada com sucesso', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
      setOpen(false)
    } catch (err) {
      console.log(err)
      toast.error('Erro ao deletar URL do vídeo', {
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
      <DialogTrigger className="px-2 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white">
        <Trash size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Excluir Vídeo</DialogTitle>
        <p className="text-zinc-300">
          Tem certeza que deseja excluir este link de vídeo?
        </p>
        <DialogFooter className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent hover:bg-zinc-800"
          >
            Cancelar
          </Button>
          {loadign ? (
            <Button type="button" className="bg-red-600 hover:bg-red-700">
              Excluindo...
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => handleDelete(videoId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
