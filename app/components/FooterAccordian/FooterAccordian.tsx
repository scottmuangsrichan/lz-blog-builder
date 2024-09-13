import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Link } from "@remix-run/react";

const companyLinks = [
  "About",
  "Careers",
  "Contact",
  "Investors",
  "Press",
  "Affiliates & partners",
  "Fast Break for Small Business",
];

const supportLinks = [
  "Order Status",
  "Customer Care",
  "Speak with an attorney",
  "Join our attorney network",
  "Security",
];

const learnMoreLinks = [
  "Legal help articles",
  "Legal Forms",
  "Legal Zoom vs ZenBusiness",
];

export default function FooterAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="Company">
        <AccordionTrigger>Company</AccordionTrigger>
        <AccordionContent>
          {companyLinks.map((link) => {
            return (
              <>
                <p key={link}>
                  <Link to={`/${link}`}>{link}</Link>
                </p>
              </>
            );
          })}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Support">
        <AccordionTrigger>Support</AccordionTrigger>
        <AccordionContent>
          {supportLinks.map((link) => (
            <p key={link} className="flex flex-col gap-10">
              <Link to={`/${link}`}>{link}</Link>
            </p>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Learn More">
        <AccordionTrigger>Learn More</AccordionTrigger>
        <AccordionContent>
          {learnMoreLinks.map((link) => (
            <p key={link}>
              <Link to={`/${link}`}>{link}</Link>
            </p>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
