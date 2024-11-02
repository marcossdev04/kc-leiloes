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
    <div className="w-[1600px] h-[120vh] mobile:h-[150vh] laptop:w-[1200px] mobile:w-full mx-auto mobile:mt-0 flex">
      <div className="w-full h-full flex  flex-col gap-10 justify-center">
        <div className="text-4xl laptop:text-3xl text-[#dbc994] mobile:text-center">
          Perguntas Frequentes
        </div>
        <Accordion type="single" collapsible className="w-full mobile:px-6">
          <AccordionItem data-aos="zoom-out" data-aos-delay="0" value="1">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Como posso ter certeza de que não estou pagando mais do que o
              valor de mercado?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Embora não possamos oferecer uma análise exata do valor de mercado
              para cada lote, disponibilizamos informações detalhadas sobre o
              bem, incluindo descrições, fotos e documentos relevantes.
              Recomendamos que você faça uma pesquisa de mercado utilizando
              essas informações, comparando o bem com outros similares
              disponíveis. Nossa equipe está disponível para orientá-lo sobre
              como conduzir essa análise, garantindo que você tenha uma boa
              noção do valor e do potencial da sua aquisição.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="0" value="2">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              O que acontece se o imóvel arrematado tiver ocupantes?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              É possível que um imóvel arrematado ainda tenha ocupantes. Nestes
              casos, o processo de desocupação fica por conta do arrematante e
              pode exigir ações legais. Recomendamos que você esteja ciente dos
              possíveis custos e da necessidade de paciência para lidar com esse
              processo, que é regulamentado por leis específicas. Embora não
              ofereçamos suporte jurídico direto, podemos orientá-lo sobre quais
              passos seguir e quais profissionais procurar para conduzir essa
              questão da melhor forma possível.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="100" value="3">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              É possível financiar um bem arrematado em leilão?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              A maioria dos leilões requer pagamento à vista, e o prazo para a
              quitação é geralmente curto. No entanto, existem bancos e
              instituições financeiras que oferecem linhas de crédito
              específicas para quem deseja financiar um bem arrematado em
              leilão. Recomendamos que, antes de participar, você se informe
              diretamente com seu banco sobre a possibilidade de financiamento e
              as condições oferecidas. Podemos fornecer orientações gerais sobre
              como procurar essas modalidades, mas é crucial que o valor seja
              disponibilizado a tempo para cumprir os prazos estabelecidos pelo
              leilão.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="150" value="4">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Preciso ser um especialista para participar de leilões?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Não, você não precisa ser um especialista para participar de um
              leilão. Nosso objetivo é tornar o processo acessível para todos,
              independentemente do nível de experiência. Disponibilizamos guias
              passo a passo, vídeos explicativos, e dicas práticas que vão desde
              a análise dos lotes até o momento de dar o lance. Além disso,
              nossa equipe está sempre pronta para esclarecer dúvidas e oferecer
              suporte ao vivo, garantindo que mesmo quem está começando se sinta
              seguro e confortável ao participar. Estamos aqui para simplificar,
              e não complicar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Quanto tempo leva para eu realmente ter a posse do bem arrematado?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              O tempo para obter a posse do bem pode variar de acordo com o tipo
              de bem arrematado. Para veículos, o processo geralmente é mais
              rápido, podendo ser concluído em algumas semanas. Já para imóveis,
              especialmente se houver necessidade de desocupação, o prazo pode
              ser mais longo, levando alguns meses. Embora não ofereçamos
              suporte jurídico direto, fornecemos orientações claras sobre o
              processo e os passos a seguir para ajudá-lo a garantir a posse o
              mais rapidamente possível. Cada caso pode ter particularidades,
              por isso recomendamos estar preparado para possíveis variações no
              prazo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="250" value="6">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              E se eu não tiver experiência em análise de valor e mercado, como
              faço para garantir que estou fazendo um bom negócio?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Não ter experiência em análise de valor e mercado não precisa ser
              uma barreira. Disponibilizamos informações detalhadas sobre cada
              lote, incluindo descrições completas e fotos, para ajudá-lo a
              fazer uma avaliação mais informada. Além disso, recomendamos que
              você compare os bens leiloados com outros similares no mercado,
              utilizando plataformas de pesquisa disponíveis para verificar
              preços e condições. Nossa equipe está à disposição para orientá-lo
              sobre como fazer essa pesquisa da maneira mais eficiente possível
              e garantir que você esteja bem preparado para o leilão.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="300" value="7">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Como posso ter certeza de que o bem está em bom estado?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Disponibilizamos registros fotográficos detalhados e descrições
              fornecidas pelos responsáveis pelos bens, que ajudam a dar uma
              noção do estado atual do lote. Recomendamos que você analise
              cuidadosamente todas as informações fornecidas. Em alguns casos,
              os leilões permitem visitas presenciais, e se essa opção estiver
              disponível, aconselhamos fortemente que faça uma inspeção pessoal
              antes de dar seu lance. Sabemos que não é possível garantir todos
              os detalhes do bem, mas nossa equipe está à disposição para
              responder a qualquer dúvida sobre as informações disponibilizadas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="350" value="8">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              E se eu perder o leilão? Ainda terei custos?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Não. Caso você não seja o vencedor do leilão, não haverá custos
              associados ao processo, além do seu tempo investido. A
              participação é gratuita até o momento do arremate. Aconselhamos
              que, se for iniciante, comece com valores que se encaixem no seu
              orçamento para adquirir experiência e minimizar frustrações.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="400" value="9">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Posso desistir de um bem após vencer o leilão?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              Não. Dar o lance vencedor em um leilão é um compromisso
              vinculativo e não há opção de desistência após o arremate. Por
              isso, é essencial que você tenha certeza absoluta sobre a compra
              antes de participar. Entenda todos os custos envolvidos, possíveis
              reparos e prazos antes de dar um lance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="450" value="10">
            <AccordionTrigger className="text-2xl laptop:text-xl mobile:text-base">
              Como é feito o pagamento do bem arrematado?
            </AccordionTrigger>
            <AccordionContent className="text-lg laptop:text-base mobile:text-sm">
              O pagamento do bem arrematado é feito por transferência bancária,
              dentro dos prazos estipulados em edital, que geralmente é curto. O
              não pagamento no prazo pode implicar multas e cancelamento da
              venda, além de outras sanções. Certifique-se de ter o valor
              disponível antes de participar para evitar complicações.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
