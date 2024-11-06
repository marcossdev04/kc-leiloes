'use client'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/store/UseAuth'
import { LoaderCircle } from 'lucide-react'

// Definir a tipagem dos dados do formulário
interface FormData {
  email: string
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
      className={`relative flex h-full w-full items-center justify-center mobile:h-[90vh]`}
    >
      <Card
        ref={formRef}
        className=" border-none bg-transparent w-1/3 shadow-none mobile:relative mobile:w-[90vh] mobile:bg-black"
      >
        <CardTitle className="flex justify-center tablet:hidden laptop:hidden desktop:hidden"></CardTitle>
        <CardContent className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-lime">
                  Email
                </Label>
                <Input
                  className=" focus-visible:ring-lime"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Insira um email válido',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
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
