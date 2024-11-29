'use client'
import insta from '@/assets/insta-color.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageFooter from '@/assets/footerImage.png'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'
import x from '@/assets/Design sem nome.png'
import facebook from '@/assets/Design sem nome (2).png'
import { FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <footer className="flex py-2 mobile:py-2 mini:py-1 mobile:mt-2  bg-[#dbc994]  mx-auto w-full">
      <div className="w-[1600px] mobile:w-full mini:w-full text-zinc-900 flex items-center justify-center mx-auto">
        <div className="flex mobile:grid mobile:grid-cols-1 mini:grid-cols-1 mini:grid mobile:gap-0 justify-between w-full px-24 desktop:px-0 mobile:px-0 mini:px-0 items-center gap-2 ">
          <div className="flex mobile:hidden mini:hidden gap-3 mobile:justify-between mobile:w-full mobile:px-16 items-center">
            <Link
              href={'https://wa.me/75998141403'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <FaWhatsapp size={22} className="text-green-500" />
            </Link>
            <Link
              href={'https://www.instagram.com/kcleiloes/'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-2 rounded-xl items-center"
            >
              <Image width={30} src={insta} alt="insta" />
            </Link>
            <Link
              href={'https://x.com/KcLeiloes'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={x} alt="insta" />
            </Link>
            <Link
              href={'https://www.facebook.com/kcleiloes/?locale=pt_BR'}
              className="flex gap-2 bg-white hover:bg-opacity-90 transition-colors duration-300 bg-opacity-70 p-3 rounded-xl items-center"
            >
              <Image width={22} src={facebook} alt="facebook" />
            </Link>
          </div>

          <div className="flex flex-col mobile:gap-1 items-center">
            <div className="text-xl flex items-center mobile:text-xl mini:text-base">
              <Image
                src={imageFooter}
                className="w-[160px] mini:w-[130px]"
                alt="footerImage"
              />{' '}
            </div>
            <div className="ml-2 text-lg mobile:text-sm mini:text-xs mini:pb-1 mobile:pb-1 flex items-center">
              Todos os direitos reservados
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="flex text-2xl hover:bg-zinc-900 hover:bg-opacity-10 rounded-lg transition-colors duration-300 px-3 py-2 mobile:text-sm mini:text-xs mini:pb-1 mobile:pb-1 justify-center items-center">
              Termos de uso
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="flex text-[#dbc994] mini:text-lg justify-center text-2xl">
                Termos de Uso
              </DialogTitle>
              <div className="flex flex-col gap-5 laptop:gap-3 overflow-auto max-h-[90vh] mini:max-h-[82vh]">
                <div>
                  <div className="text-lg laptop:text-sm text-[#dbc994]">
                    1. Aceitação dos Termos
                  </div>
                  Ao acessar e utilizar o site KC Leilões, você concorda
                  integralmente em cumprir e estar sujeito aos presentes Termos
                  de Uso. Caso não concorde, pedimos que cesse o uso da
                  plataforma imediatamente.
                </div>
                <div>
                  <div className="text-lg laptop:text-sm text-[#dbc994]">
                    2. Descrição dos Serviços
                  </div>
                  O KC Leilões oferece uma plataforma digital que facilita o
                  acesso a leilões de diversos itens, incluindo imóveis,
                  veículos e outros bens. A plataforma permite que os usuários
                  participem de forma prática, segura e transparente, conforme
                  as condições aqui estabelecidas.
                </div>
                <div>
                  <div className="text-lg laptop:text-sm text-[#dbc994]">
                    3. Cadastro e Segurança da Conta
                  </div>
                  <div>
                    <div>
                      Para participar dos leilões, é necessário criar uma conta,
                      fornecendo informações precisas, completas e atualizadas.
                    </div>
                    <div>
                      Você é o único responsável por manter a confidencialidade.
                    </div>
                    <div>
                      Todas as atividades realizadas na sua conta são de sua
                      responsabilidade.
                    </div>
                    <div>
                      Em caso de uso não autorizado ou suspeita de violação de
                      segurança, entre em contato conosco imediatamente por meio
                      dos canais indicados abaixo.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-lg laptop:text-sm text-[#dbc994]">
                    4. Direitos e Responsabilidades do Usuário
                  </div>

                  <div>
                    <div>
                      Você concorda em utilizar nosso site de forma ética, sem
                      violar direitos de terceiros e sem realizar atividades
                      fraudulentas ou ilícitas. É proibido usar scripts,
                      automação, ou outros métodos que manipulem os leilões ou
                      sobrecarreguem o site.
                    </div>
                    <div>
                      <div>É expressamente proibido:</div>
                      <div>
                        Utilizar scripts, bots ou métodos automatizados para
                        manipular os leilões.
                      </div>
                      <div>
                        Executar atividades que sobrecarreguem o sistema ou
                        prejudiquem sua funcionalidade.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-lg laptop:text-sm text-[#dbc994]">
                    {' '}
                    5. Contato
                  </div>
                  Para dúvidas, suporte ou esclarecimentos sobre estes Termos de
                  Uso, entre em contato pelos seguintes canais: E-mail:
                  contato@kcleiloes.com.br WhatsApp: +55 75 99814-1403
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  )
}
