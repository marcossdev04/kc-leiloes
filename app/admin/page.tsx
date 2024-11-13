'use client'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/store/UseAuth'
import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/assets/Ativo 10@20x.png'

interface FormData {
  username: string
  password: string
}

export default function LoginForm5() {
  const { handleSignIn, isLoading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    handleSignIn(data)
  }
  const formRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={`relative flex w-full items-center justify-center h-[100vh]`}
    >
      <Card
        ref={formRef}
        className=" border-none bg-transparent w-1/3 h-full flex items-center mobile:w-full shadow-none mobile:relative justify-center mobile:bg-black"
      >
        <CardContent className="mt-5 w-full">
          <div>
            <Image alt="logo" src={Logo} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-lime">
                  Email
                </Label>
                <Input
                  className=" focus-visible:ring-lime"
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  {...register('username')}
                />
                {errors.username && (
                  <span className="text-sm text-red-600">
                    {errors.username.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-lime">
                    Senha
                  </Label>
                </div>
                <Input
                  className="focus-visible:ring-lime"
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Senha é obrigatória',
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              {isLoading ? (
                <div className="w-full bg-white p-1 cursor-pointer flex justify-center items-center rounded-lg">
                  <LoaderCircle className="text-black animate-spin" size={28} />
                </div>
              ) : (
                <Button
                  type="submit"
                  className="bg-white flex w-full justify-center gap-1 hover:bg-lime hover:bg-opacity-80"
                >
                  <div>Login</div>
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
