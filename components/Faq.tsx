'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Faq() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: false })
  }, [])
  return (
    <div className="max-w-[1200px] mx-auto py-16">
      <div className="flex flex-col gap-10">
        <div className="text-3xl font-light text-[#dbc994] text-center">
          Perguntas Frequentes
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full px-6 laptop:px-0"
        >
          <AccordionItem data-aos="zoom-out" data-aos-delay="0" value="1">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Como posso ter certeza de que não estou pagando mais do que o valor de mercado?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Disponibilizamos informações detalhadas sobre o bem, incluindo descrições, fotos e documentos relevantes.
              Recomendamos que você faça uma pesquisa de mercado comparando o bem com outros similares disponíveis.
              Nossa equipe está disponível para orientá-lo sobre como conduzir essa análise.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="50" value="2">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              O que acontece se o imóvel arrematado tiver ocupantes?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              O processo de desocupação fica por conta do arrematante e pode exigir ações legais. Recomendamos que você esteja ciente dos custos 
              e da necessidade de paciência. Nossa equipe pode orientá-lo sobre quais profissionais procurar para conduzir essa questão.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="100" value="3">
            <AccordionTrigger className="text-xl laptop:text-lg text-[#dbc994] mini:text-sm">
              É possível financiar um bem arrematado em leilão?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              A maioria dos leilões requer pagamento à vista. No entanto, existem bancos que oferecem linhas de crédito específicas. 
              Recomendamos que você se informe com seu banco antes de participar. É crucial que o valor esteja disponível dentro dos prazos estabelecidos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="150" value="4">
            <AccordionTrigger className="text-xl laptop:text-lg text-[#dbc994] mini:text-sm">
              Preciso ser um especialista para participar de leilões?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Não. Nosso objetivo é tornar o processo acessível para todos. Disponibilizamos guias passo a passo e nossa equipe está 
              sempre pronta para esclarecer dúvidas, garantindo que mesmo quem está começando se sinta seguro ao participar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-[#dbc994] mini:text-sm">
              Como é feito o pagamento do bem arrematado?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              O pagamento é feito por transferência bancária, dentro dos prazos estipulados em edital. O não pagamento pode implicar 
              multas e cancelamento da venda. Certifique-se de ter o valor disponível antes de participar.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
