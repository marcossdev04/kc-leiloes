'use client'
import React, { useState, FormEvent } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('URL atualizada:', videoUrl)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center">
      <header className="px-20 w-full bg-white py-2">
        <div className="text-2xl text-black">KC Admin</div>
      </header>

      <Card className="w-1/2 mt-8">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 flex flex-col gap-3">
              <Label htmlFor="videoUrl">URL Atual</Label>
              <Input disabled value={'teste'} />
              <Label htmlFor="videoUrl">URL do Vídeo do YouTube</Label>
              <Input
                id="videoUrl"
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={videoUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setVideoUrl(e.target.value)
                }
                className="w-full"
                required
                pattern="^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Atualizando...' : 'Atualizar URL'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
