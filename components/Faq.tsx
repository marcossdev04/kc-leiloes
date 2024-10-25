import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function Faq() {
  return (
    <div className="w-[1400px] mx-auto mt-10 flex">
      <div className="w-full h-full flex  flex-col gap-10 justify-between">
        <div className="h-full text-4xl text-green-400">
          Perguntas Frequentes
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-2xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
