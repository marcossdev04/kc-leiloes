import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function Faq() {
  return (
    <div className="w-[1600px] mobile:px-5 h-[100vh] laptop:w-[1200px] mobile:w-full mx-auto mobile:mt-0 flex">
      <div className="w-full h-full flex  flex-col gap-10 justify-center">
        <div className="text-4xl laptop:text-3xl text-[#dbc994] mobile:text-center">
          Perguntas Frequentes
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-2xl laptop:text-xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-lg laptop:text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
