import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "@remix-run/react";

const menuLinks = ["Business", "Personal", "Attorneys", "Forms", "Support"];

export default function MobileNavigation() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const LinkAccordian = () => {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="Business">
          <AccordionTrigger>Business</AccordionTrigger>
          <AccordionContent>
            {menuLinks.map((link) => {
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
      </Accordion>
    );
  };

  return (
    <>
      <nav className="w-full flex flex-row justify-between items-center p-5">
        <h1>Logo</h1>
        <div className="flex gap-5">
          <button>
            <FaPhone />
          </button>
          <button className="bg-black rounded-full px-4 py-2 font-bold text-white">
            Sign in
          </button>
          {toggle ? (
            <div className="bg-white absolute z-10 w-screen h-screen top-0 left-0 right-0">
              <button onClick={() => handleClick()} className="pb-10">
                Close
              </button>
              <LinkAccordian />
            </div>
          ) : (
            <button onClick={() => handleClick()}>
              <HamburgerMenu />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
