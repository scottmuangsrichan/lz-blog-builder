import type { RegisteredComponent } from "@builder.io/react";
import NavigationBar from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import StartYourBusinessCTA from "./components/StartYourBusinessCTA/StartYourBusinessCTA";
import FooterAccordian from "./components/FooterAccordian/FooterAccordian";
import ArticlesAccordian from "./components/ArticlesAccordian/ArticlesAccordian";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Calculator from "./components/Calculator/Calculator";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: NavigationBar,
    name: "NavigationBar",
  },
  {
    component: Header,
    name: "Header",
  },
  {
    component: StartYourBusinessCTA,
    name: "StartYourBusinessCTA",
  },
  {
    component: FooterAccordian,
    name: "Footer Accordian",
  },
  {
    component: ArticlesAccordian,
    name: "Articles Accordian",
  },
  {
    component: MobileNavigation,
    name: "Mobile Navigation",
  },
  {
    component: Calculator,
    name: "Calculator",
  },
];
