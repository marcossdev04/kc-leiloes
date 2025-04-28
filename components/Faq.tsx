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
    <div className="max-w-[1200px] mx-auto mobile:pt-20 py-16">
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
              Preciso ser um especialista para participar de leilões?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Não. Ter conhecimento faz a diferença, mas para se tornar
              especialista é necessário prática. Comece de algum lugar e me
              acompanhe para aprender tudo sobre leilões.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="50" value="2">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              O que acontece se o imóvel arrematado tiver ocupantes?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              O processo de desocupação fica por conta do arrematante e pode
              exigir ações legais. Recomendamos que você esteja ciente dos
              custos e da necessidade de paciência. Nos meus leilões, sempre
              oriento quais profissionais procurar para conduzir essa questão.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="100" value="3">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Como faço o pagamento do bem arrematado?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              O pagamento é feito por transferência bancária, dentro dos prazos
              estipulados em edital. O não pagamento pode implicar multas e
              cancelamento da venda. Certifique-se de ter o valor disponível
              antes de participar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="150" value="4">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              É possível desistir do lance?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Não. Em regra, não é possível desistir de um lance após ele ser
              confirmado. Por isso, apenas faça o lance se houver real interesse
              e cumpra com o compromisso legal de compra.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              É possível financiar um leilão?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Depende. Se o leilão for judicial, não é possível realizar
              financiamento. Porém em alguns leilões extrajudiciais pode haver
              sim a possibilidade de financiar o bem. Contudo, leia o edital
              para obter todas as informações necessárias e pergunte a
              leiloeira.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Como saber se o imóvel tem dívidas ou pendências?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Antes de participar do leilão, é essencial consultar o edital e a
              matrícula atualizada do imóvel, onde constam possíveis dívidas
              como IPTU, condomínio ou financiamentos. Em alguns casos, essas
              dívidas acompanham o imóvel e são de responsabilidade do
              arrematante. Por isso, análise e cautela são fundamentais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Preciso pagar comissão ao leiloeiro?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Sim. Em geral, há uma comissão de 5% sobre o valor da arrematação,
              paga diretamente ao leiloeiro. Esse valor não está incluído no
              lance e deve ser pago separadamente, conforme regras do edital.
              Fique atento a essa despesa extra ao calcular seu orçamento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Como posso acompanhar os leilões disponíveis?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Existem diversos sites e plataformas de leilões judiciais e
              extrajudiciais, onde você pode visualizar imóveis, valores, datas
              e editais. Além disso, acompanhe perfis especializados nas redes
              sociais — como o meu — para receber dicas e oportunidades
              selecionadas com curadoria profissional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              O que é o edital do leilão e por que ele é importante?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              O edital é o documento oficial do leilão e contém todas as regras,
              prazos, formas de pagamento, situação do imóvel e outras
              informações essenciais. Ele é a sua principal fonte de segurança
              jurídica. Leia com atenção antes de participar para evitar
              surpresas e tomar decisões conscientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem data-aos="zoom-out" data-aos-delay="200" value="5">
            <AccordionTrigger className="text-xl laptop:text-lg text-white mini:text-sm">
              Posso visitar o imóvel antes do leilão?
            </AccordionTrigger>
            <AccordionContent className="text-base text-zinc-400 mini:text-sm">
              Na maioria dos casos, não é possível visitar o imóvel,
              especialmente em leilões judiciais, pois ele pode estar ocupado.
              No entanto, é possível analisar fotos, consultar o endereço e
              verificar informações nos documentos públicos. Uma boa análise
              prévia ajuda a diminuir os riscos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
