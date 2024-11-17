'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CalendarClock, Gavel, Hourglass } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'
import Logo from '@/assets/cardLogo.png'
import { api } from '@/api/api'
import { useQuery } from 'react-query'
import { Auction } from '@/types/Auction'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { motion, AnimatePresence } from 'framer-motion'

export function CarouselComponent() {
  const [currentCardIndexBV, setCurrentCardIndexBV] = React.useState(0)
  const [currentCardIndexSoleum, setCurrentCardIndexSoleum] = React.useState(0)

  async function fetchPosts() {
    const response = await api.get('/auctions/')
    return response.data.results
  }

  const { data: auctions } = useQuery<Auction[]>(['getAuctions'], fetchPosts)

  const cardsBomValor =
    auctions?.filter((auction) => auction.fonte_leilao === 'Bom valor') || []

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndexBV(
        (prevIndex) => (prevIndex + 1) % cardsBomValor.length,
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [cardsBomValor.length])

  React.useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  const formattedTimeBV = cardsBomValor[currentCardIndexBV]?.hora_primeiro_lote
    ? cardsBomValor[currentCardIndexBV].hora_primeiro_lote.slice(0, 5)
    : ''

  const formattedDateBV = cardsBomValor[currentCardIndexBV]?.data_leilao
    ? format(
        new Date(cardsBomValor[currentCardIndexBV].data_leilao),
        "dd 'de' MMMM 'de' yyyy",
        { locale: ptBR },
      )
    : ''
  const formattedLanceInicialBV = cardsBomValor[currentCardIndexBV]
    ?.lance_inicial
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseInt(cardsBomValor[currentCardIndexBV].lance_inicial))
    : ''

  const cardsSoleum =
    auctions?.filter((auction) => auction.fonte_leilao === 'Soleum') || []

  const formattedTimeSoleum = cardsSoleum[currentCardIndexSoleum]
    ?.hora_primeiro_lote
    ? cardsSoleum[currentCardIndexSoleum].hora_primeiro_lote.slice(0, 5)
    : ''

  const formattedLanceInicialSoleum = cardsSoleum[currentCardIndexSoleum]
    ?.lance_inicial
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseInt(cardsSoleum[currentCardIndexSoleum].lance_inicial))
    : ''

  const formattedDateSoleum = cardsSoleum[currentCardIndexSoleum]?.data_leilao
    ? format(
        new Date(cardsSoleum[currentCardIndexSoleum].data_leilao),
        "dd 'de' MMMM 'de' yyyy",
        { locale: ptBR },
      )
    : ''

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndexSoleum(
        (prevIndex) => (prevIndex + 1) % cardsSoleum.length,
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [cardsSoleum.length])

  if (
    !cardsSoleum[currentCardIndexSoleum] ||
    !cardsBomValor[currentCardIndexBV]
  ) {
    return null
  }
  return (
    <div
      id="passo-a-passo"
      className="h-full mobile:px-5 mt-20 justify-center mobile:h-full mx-auto flex flex-col mobile:mt-10 gap-10 laptop:max-w-[1200px] max-w-[1600px]"
    >
      <div id="plataforms" className="flex flex-col w-full gap-5">
        <div className="text-4xl laptop:text-3xl text-center">
          <span className="text-[#dbc994]">Nossas plataformas</span>
        </div>
        <div className="w-[1600px] py-10 laptop:w-[1200px] mobile:w-full mobile:py-5 mx-auto">
          <div className="flex relative mobile:flex-col mobile:gap-10 justify-around gap-20 w-full">
            <div className="absolute left-1/2 h-[150%] border mobile:hidden border-white"></div>
            <div className="flex flex-col items-center">
              <div data-aos="zoom-in-right" data-aos-delay="0">
                <Image className="w-[300px]" src={Logo} alt="logo" />
                <div className="text-2xl text-center mb-2">SOLEUM</div>
              </div>
              <Card
                data-aos="zoom-in-right"
                data-aos-delay="0"
                className="bg-zinc-800 border-2 border-zinc-500"
              >
                <CardContent className="p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={cardsSoleum[currentCardIndexSoleum].foto_lote}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        className="w-[400px] mobile:w-[300px]  mobile:h-[200px] h-[300px] rounded-lg"
                        alt="img"
                        width={400}
                        height={300}
                        src={`${
                          cardsSoleum[currentCardIndexSoleum]?.foto_lote
                            ? cardsSoleum[currentCardIndexSoleum].foto_lote
                            : ''
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className=" mt-5 flex flex-col gap-3">
                    <CardTitle className="text-4xl mobile:text-xl">
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={
                              cardsSoleum[currentCardIndexSoleum]?.nome_leilao
                            }
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {cardsSoleum[currentCardIndexSoleum]?.nome_leilao}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </CardTitle>
                    <div className="text-zinc-100 fflex items-center gap-3 mobile:text-lg text-xl">
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedDateSoleum}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {cardsSoleum[currentCardIndexSoleum].descricao_lote}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                      <div>
                        <CalendarClock strokeWidth={1.5} />
                      </div>
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedDateSoleum}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {formattedDateSoleum}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                      <div>
                        <Gavel strokeWidth={1.5} />
                      </div>
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedDateSoleum}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            1º Lote: {formattedTimeSoleum}h
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="w-full mt-5 transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                      <div>Em andamento</div>
                      <div>
                        <Hourglass />
                      </div>
                    </div>
                    <div className="text-white py-2 bg-zinc-500 pt-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                      <div className="flex items-center mobile:text-sm font-medium gap-2">
                        Lance inicial
                      </div>
                      <div>
                        <div className="text-zinc-100 mobile:text-xl text-3xl font-semibold">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={formattedLanceInicialSoleum}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {formattedLanceInicialSoleum}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col items-center">
              <div data-aos="zoom-in-left" data-aos-delay="0">
                <Image className="w-[300px]" src={Logo} alt="logo" />
                <div className="text-2xl text-center mb-2">Bom valor</div>
              </div>
              <Card
                data-aos="zoom-in-left"
                data-aos-delay="0"
                className="bg-zinc-800 border-2 border-zinc-500"
              >
                <CardContent className="p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={cardsBomValor[currentCardIndexBV].foto_lote}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        className="w-[400px] mobile:w-[300px]  mobile:h-[200px] h-[300px] rounded-lg"
                        alt="img"
                        width={400}
                        height={300}
                        src={`${
                          cardsBomValor[currentCardIndexBV]?.foto_lote
                            ? cardsBomValor[currentCardIndexBV].foto_lote
                            : ''
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className=" mt-5 flex flex-col gap-3">
                    <CardTitle className="text-4xl mobile:text-xl">
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={cardsBomValor[currentCardIndexBV].nome_leilao}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {cardsBomValor[currentCardIndexBV].nome_leilao}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </CardTitle>
                    <div className="text-zinc-100 fflex items-center gap-3 mobile:text-lg text-xl">
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedDateSoleum}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {cardsBomValor[currentCardIndexBV].descricao_lote}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                      <div>
                        <CalendarClock strokeWidth={1.5} />
                      </div>
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedDateBV}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {formattedDateBV}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="text-zinc-100 flex items-center gap-3 mobile:text-lg text-2xl">
                      <div>
                        <Gavel strokeWidth={1.5} />
                      </div>
                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={formattedTimeBV}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            1º Lote: {formattedTimeBV}h
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="w-full mt-5 transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-black font-medium mobile:text-base text-xl py-1 bg-[#dbc994] rounded-lg px-5 flex justify-center  items-center">
                      <div>Em andamento</div>
                      <div>
                        <Hourglass />
                      </div>
                    </div>
                    <div className="text-white py-2 bg-zinc-500 pt-1 rounded-lg bg-opacity-50 flex flex-col justify-center items-center ">
                      <div className="flex items-center mobile:text-sm font-medium gap-2">
                        Lance inicial
                      </div>
                      <div>
                        <div className="text-zinc-100 mobile:text-xl text-3xl font-semibold">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={formattedLanceInicialBV}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {formattedLanceInicialBV}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
