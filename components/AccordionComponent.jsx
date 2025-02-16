import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = () => {
  const FAQS = [
    {
      id: "item-1",
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: "item-2",
      question: "Is it styled?",
      answer:
        "Yes. It comes with default styles that can be easily customized.",
    },
    {
      id: "item-3",
      question: "Is it animated?",
      answer:
        "Yes. It features smooth animations for a better user experience.",
    },
    {
      id: "item-4",
      question: "This if my first task",
      answer:
        "Yes. It feels very energetic and very awesome.",
    },
  ];

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center bg-white  border my-4 p-4">
      <h1 className="text-5xl text-center my-4 text-gray-700">Accordion</h1>
        <Accordion type="single" collapsible className="w-full max-w-md">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AccordionComponent;
