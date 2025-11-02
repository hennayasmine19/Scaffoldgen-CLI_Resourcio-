import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

const faqData = [
  {
    id: "faq-1",
    question: "What is the ScaffoldingGen CLI Tool?",
  },
  {
    id: "faq-2",
    question: "How do I install the ScaffoldGen CLI Tool?",
  },
  {
    id: "faq-3",
    question: "What featuers does the ScaffoldGen CLI Tool have?",
  },
  {
    id: "faq-4",
    question: "How do I contribute to the Scaffolding CLI tool?",
  },
  {
    id: "faq-5",
    question: "Is the ScaffoldGen CLI tool free to use?",
  },
  {
    id: "faq-6",
    question: "Where can I get support?",
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-4 md:py-6 lg:py-8 w-full overflow-hidden">
      <div className="w-full max-w-[1520px] flex flex-col items-center gap-4 flex-shrink-0">
        <h2 className="self-stretch [font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[28px] md:text-[32px] text-center tracking-[0.04px] leading-tight">
          Organizations
        </h2>

        <div className="flex items-center justify-center gap-10 w-full">
          <Card className="w-[350px] h-[150px] md:h-[180px] rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] border-0">
            <CardContent className="relative w-full h-full p-0">
              <div className="absolute top-[110px] md:top-[130px] left-[calc(50.00%_-_106px)] [font-family:'Inter',Helvetica] font-semibold text-[#d6d2cd] text-lg md:text-xl text-center tracking-[-0.05px] leading-[30px] whitespace-nowrap">
                Resourcio Community
              </div>
              <img
                className="absolute top-[60px] md:top-[70px] left-[calc(50.00%_-_11px)] w-6 h-6 object-contain"
                alt="Gallery"
                src="/galley.png"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full max-w-[1520px] flex flex-col items-center gap-4 flex-1 min-h-0">
        <h2 className="self-stretch [font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[28px] md:text-[32px] text-center tracking-[0.04px] leading-tight">
          FAQ
        </h2>

        <div className="flex flex-col items-start gap-4 md:gap-6 w-full flex-1 min-h-0">
          <div className="grid grid-cols-3 gap-4 md:gap-6 w-full flex-1">
            {faqData.slice(0, 3).map((faq) => (
              <Accordion
                key={faq.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={faq.id} className="border-0">
                  <AccordionTrigger className="w-full h-full min-h-[80px] md:min-h-[90px] rounded-lg shadow-[0px_4px_10px_#68686866] bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] px-4 md:px-[30px] py-3 md:py-[26px] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.11px] leading-tight text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 w-full flex-1">
            {faqData.slice(3, 6).map((faq) => (
              <Accordion
                key={faq.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={faq.id} className="border-0">
                  <AccordionTrigger className="w-full h-full min-h-[80px] md:min-h-[90px] rounded-lg shadow-[0px_4px_10px_#68686866] bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] px-4 md:px-[30px] py-3 md:py-[26px] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.11px] leading-tight text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

