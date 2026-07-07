"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@mui/material/Container";

export default function BasicFAQ({ product }) {
  const { faqs } = product;

  const leftColumnFAQs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFAQs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="bg-gray-100 section">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
          <div className="mb-5">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to know about our electric rickshaws
            </p>
          </div>

          <div>
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              Get clear answers to the most common questions about our electric
              vehicles — from range and charging time to service, financing, and
              customization options.
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnFAQs.map((item, index) => (
                <AccordionItem key={index} value={`left-item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              {rightColumnFAQs.map((item, index) => (
                <AccordionItem
                  key={index + leftColumnFAQs.length}
                  value={`right-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
