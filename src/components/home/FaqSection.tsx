import faqs from "@/constants/faqs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import Headline from "../shared/Heading";
import UnderlineText from "../shared/UnderlineText";
import Paragraph from "../shared/Paragraph";

function FaqSection() {
  return (
    <div>
      <div className="mb-10 text-center">
        <Headline>
          Frequently Asked Questions<UnderlineText> (FAQ) </UnderlineText>
        </Headline>
        <Paragraph className="max-w-[600px] mx-auto">
          Find answers to common questions about AtoZTools, a collection of
          free, privacy-friendly, frontend-based tools.
        </Paragraph>
      </div>
      {faqs.map((faq) => {
        return (
          <Accordion type="single" collapsible>
            <AccordionItem value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

export default FaqSection;
