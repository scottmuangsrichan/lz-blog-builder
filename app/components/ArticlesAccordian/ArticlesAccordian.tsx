import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const topics = [
  "Business Formation",
  "Estate Planning",
  "Intellectual Property",
  "Accounting & Bookkeping",
  "Business Management",
  "Family Legal Matters",
  "Money Matters",
  "Legal Help",
  "Real Estate",
  "Tips & Trends",
  "Legal News",
  "Espanol",
];

export default function ArticlesAccordian() {
  return (
    <div>
      {topics.map((topic) => {
        return (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={topic}>
              <AccordionTrigger>{topic}</AccordionTrigger>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
