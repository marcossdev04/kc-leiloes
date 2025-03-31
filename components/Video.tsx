'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { api } from '@/api/api'
import { useQuery } from 'react-query'
import { Config } from '@/types/Config'

export function Video() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  async function fetchData() {
    const response = await api.get('/api/v1/videos/')
    return response.data
  }
  const { data: videos } = useQuery<Config[]>(['getVideoUrls'], fetchData, {
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true,
  })

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 p-6 text-justify">
          <div>
            <h2 className="text-3xl font-light text-[#dbc994] mb-2">
              Simplifique sua jornada em leilões
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent"></div>
          </div>
          <div className="space-y-8 text-zinc-200">
            <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
              <div className="shrink-0 mt-1 p-2.5 bg-[#dbc994]/5 rounded-lg border border-[#dbc994]/10">
                <svg
                  className="w-5 h-5 text-[#dbc994]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-[#dbc994]">
                  Transparência e Segurança
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Tenha acesso a informações detalhadas e documentação completa
                  de cada lote, permitindo análises aprofundadas e decisões mais
                  seguras em suas participações.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
              <div className="shrink-0 mt-1 p-2.5 bg-[#dbc994]/5 rounded-lg border border-[#dbc994]/10">
                <svg
                  className="w-5 h-5 text-[#dbc994]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-[#dbc994]">
                  Oportunidades Exclusivas
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Explore uma seleção cuidadosamente curada de bens com valores
                  diferenciados e condições especiais de pagamento, maximizando
                  seu potencial de investimento.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
              <div className="shrink-0 mt-1 p-2.5 bg-[#dbc994]/5 rounded-lg border border-[#dbc994]/10">
                <svg
                  className="w-5 h-5 text-[#dbc994]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-[#dbc994]">
                  Suporte Especializado
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Conte com orientação profissional personalizada em todas as
                  etapas do processo, desde a análise inicial até a conclusão
                  bem-sucedida da sua aquisição.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-x-0 -inset-y-3 border-y border-[#dbc994]/30"></div>
          <div className="absolute -inset-x-3 inset-y-0 border-x border-[#dbc994]/30"></div>
          <div className="absolute inset-0 border border-[#dbc994]"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#dbc994] to-transparent"></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#dbc994] to-transparent"></div>
          <div className="relative aspect-video overflow-hidden m-6">
            {videos !== undefined ? (
              <iframe src={videos[0].url} className="w-full h-full"></iframe>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
