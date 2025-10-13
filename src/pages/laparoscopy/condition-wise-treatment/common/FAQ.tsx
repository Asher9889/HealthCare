// src/pages/laparoscopy/condition-wise-treatment/common/FAQ.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQProps {
  city: string;
  faqs?: Array<{
    id: string;
    question: string;
    answer: string | React.ReactNode;
  }>;
  treatmentType: string;
}

export default function FAQ({ city, faqs = [], treatmentType }: FAQProps) {
  const defaultFaqs = [
    {
      id: "cost",
      question: `What is the cost of ${treatmentType} treatment in ${city}?`,
      answer: `The cost of ${treatmentType} treatment in ${city} varies based on the procedure type, hospital facilities, and surgeon's expertise. For an accurate estimate, please book a consultation with our specialists.`
    },
    {
      id: "insurance",
      question: `Does insurance cover ${treatmentType} treatment in ${city}?`,
      answer: `Most health insurance plans cover ${treatmentType} treatment when medically necessary. Our team can assist you with insurance verification and claims process.`
    },
    {
      id: "recovery",
      question: `What is the recovery time for ${treatmentType} treatment in ${city}?`,
      answer: `Recovery time varies by procedure, but most patients can return to normal activities within 1-2 weeks. Our specialists in ${city} will provide personalized recovery guidelines.`
    }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {displayFaqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-gray-600">
              {typeof faq.answer === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              ) : (
                faq.answer
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}