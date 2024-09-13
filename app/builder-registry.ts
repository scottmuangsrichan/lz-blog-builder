import type { RegisteredComponent } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import NavigationBar from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import StartYourBusinessCTA from "./components/StartYourBusinessCTA/StartYourBusinessCTA";
import FooterAccordian from "./components/FooterAccordian/FooterAccordian";
import ArticlesAccordian from "./components/ArticlesAccordian/ArticlesAccordian";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  {
    component: NavigationBar,
    name: "NavigationBar",
  },
  {
    component: Header,
    name: "Header",
  },
  {
    component: Blog,
    name: "Blog",
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
];
