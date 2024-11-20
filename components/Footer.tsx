'use client'
import wpp from '@/assets/whatsapp-svgrepo-com (1).svg'
import insta from '@/assets/instagram-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import phone from '@/assets/phone-call.png'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFooter from '@/assets/footerImage.png'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'

export function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <footer className="flex py-2 mobile:py-2 mobile:mt-10 bg-[#dbc994]  mx-auto w-full">
      <div className="w-[1600px] mobile:w-full text-zinc-900 flex items-center justify-center mx-auto">
        <div className="flex mobile:grid mobile:grid-cols-1 mobile:gap-0 justify-between w-full px-24 desktop:px-0 mobile:px-0 items-center gap-2 ">
          <Dialog>
            <DialogTrigger className="flex text-2xl hover:bg-zinc-900 hover:bg-opacity-10 rounded-lg transition-colors duration-300 px-3 py-2 mobile:text-sm mobile:pb-1 justify-center items-center">
              Termos de uso
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="flex text-[#dbc994] justify-center text-2xl">
                Termos de Uso
              </DialogTitle>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="text-lg text-[#dbc994]">
                    1. Aceitação dos Termos
                  </div>
                  Ao acessar e utilizar o site KC Leilões, você concorda em
                  cumprir e estar sujeito aos presentes Termos de Uso.
                </div>
                <div>
                  <div className="text-lg text-[#dbc994]">
                    2. Descrição dos Serviços
                  </div>
                  KC Leilões oferece uma plataforma digital que facilita o
                  acesso a leilões de diversos itens, incluindo imóveis e
                  veículos, permitindo aos usuários participar de forma prática
                  e segura.
                </div>
                <div>
                  <div className="text-lg text-[#dbc994]">
                    3. Cadastro e Segurança da Conta
                  </div>
                  Para participar de nossos leilões, você precisará criar uma
                  conta fornecendo informações verdadeiras e completas. Você é
                  responsável por manter a confidencialidade dos dados da sua
                  conta e por todas as atividades realizadas nela. Notifique-nos
                  imediatamente caso suspeite de qualquer uso não autorizado da
                  sua conta.
                </div>
                <div>
                  <div className="text-lg text-[#dbc994]">
                    4. Direitos e Responsabilidades do Usuário
                  </div>
                  Você concorda em utilizar nosso site de forma ética, sem
                  violar direitos de terceiros e sem realizar atividades
                  fraudulentas ou ilícitas. É proibido usar scripts, automação,
                  ou outros métodos que manipulem os leilões ou sobrecarreguem o
                  site.
                </div>
                <div>
                  <div className="text-lg text-[#dbc994]"> 5. Contato</div>
                  Para dúvidas ou esclarecimentos sobre estes Termos de Uso,
                  entre em contato conosco pelo e-mail [seu_email@exemplo.com]
                  ou pelo telefone [seu_telefone].
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col mobile:gap-1 items-center">
            <div className="text-xl flex items-center mobile:text-xl">
              <Image
                src={imageFooter}
                className="w-[160px]"
                alt="footerImage"
              />{' '}
            </div>
            <div className="ml-2 text-lg mobile:text-sm mobile:pb-1 flex items-center">
              Todos os direitos reservados
            </div>
          </div>
          <div className="flex  gap-3 mobile:justify-between mobile:w-full mobile:px-16 items-center">
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={wpp} alt="whatsapp" />
            </Link>
            <Link
              href={'https://www.instagram.com/kcleiloes/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={insta} alt="insta" />
            </Link>
            <Link
              href={'/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={phone} alt="insta" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
