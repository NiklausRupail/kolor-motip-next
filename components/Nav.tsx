"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { AccordionContent, AccordionTrigger, Accordion, AccordionItem } from "./ui/navAccordion";

const mobileNavContent = [
  { title: "O Nas", href: "/o-nas" },
  { title: "Partnerzy", href: "/partnerzy" },
  { title: "Kontakt", href: "/kontakt" }
];

const knowledgeBase =
  [
    { title: "Blog", href: "/blog", },
    { title: "Porady", href: "/porady", },
    { title: "Certyfikaty", href: "/certyfikaty", },
  ];

const products = [
  { title: "Lakiery samochodowe", href: "/produkty/lakiery-samochodowe" },
  { title: "Środki do konserwacji", href: "/produkty/srodki-do-konserwacji" },
  { title: "Tuning", href: "/produkty/tuning" },
  { title: "Środki do pielęgnacji samochodów", href: "/produkty/srodki-do-pielegnacji-samochodow" },
  { title: "Lakiery specjalistyczne", href: "/produkty/lakiery-specjalistyczne" },
  { title: "Spraye do graffiti", href: "/produkty/spraye-do-graffiti" },
  { title: "Lakiery uniwersalne", href: "/produkty/lakiery-uniwersalne" },
  { title: "Spraye techniczne", href: "/produkty/spraye-techniczne" },
  { title: "Mieszalnia farb i lakierów", href: "/produkty/mieszalnia-farb-i-lakierow" }
];

const Nav = () => {


  const windowWidth = useWindowSize().width;
  const breakpoint = 1024;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:scale-95 transition-transform duration-300">
            <Image
              alt="Auto Paint Pro Logo"
              src="/images/logo.png"
              width={150}
              height={40}
              className="rounded-sm"
            />
          </Link>
        </div>
        {windowWidth > breakpoint && (<nav className="hidden md:flex items-center space-x-6">
          <a
            href="#services"
            className="text-sm font-medium hover:text-primary"
          >
            O Nas
          </a>
          {/* Don't touch this */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <a
                    href="/produkty"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Produkty
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 items-center p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-9 transition-transform hover:scale-95 duration-300">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/produkty"
                        >
                          <Image
                            alt="Auto Paint Pro Logo"
                            src="/images/logo.png"
                            width={40}
                            height={40}
                            className="rounded-sm"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Nasze Produkty
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Zapraszamy do obejrzenia naszej szerokiej gamy produktów.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    {products.map((entry) => (
                      <li key={entry.title}>
                        <NavigationMenuLink asChild>
                          <a className="hover:text-primary hover:underline transition-all duration-200" href={`${entry.href}`}>{entry.title}</a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>

                  <a
                    href="/baza-wiedzy"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Baza Wiedzy
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 items-center justify-center p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
                    <li className="row-span-3 transition-transform hover:scale-95 duration-300">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Image
                            alt="Auto Paint Pro Logo"
                            src="/images/logo.png"
                            width={40}
                            height={40}
                            className="rounded-sm"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Baza Wiedzy
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Chciałbyś dowiedzieć się więcej o pielegnacji samochodu z naszymi produktami?<br /><strong>Nasza Baza Wiedzy to miejsce dla Ciebie.</strong>
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    {knowledgeBase.map((entry) => (
                      <li key={entry.title}>
                        <NavigationMenuLink asChild>
                          <a className="text-lg py-8 px-3 hover:text-primary hover:underline transition-all duration-200" href={`${entry.href}`}>{entry.title}</a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
          {/* Under No circumstances touch the code above */}
          <Link href="/partnerzy" className="text-sm font-medium hover:text-primary">
            Partnerzy
          </Link>
          <Link href="/kontakt">
            <Button className="hover:text-primary hover:bg-background hover:border-primary border-transparent border-2 transition-colors px-6 py-5 duration-300">Skontaktuj Się</Button>
          </Link>
        </nav>) || (
            <>
              <Sheet>
                <SheetTrigger asChild>
                  <Button asChild
                    size="icon"
                    variant="ghost"
                  >
                    <Menu className="h-7 w-7" />
                  </Button>

                </SheetTrigger>
                <SheetContent side="left">

                  <SheetHeader>
                    <SheetTitle className="flex items-center justify-center">
                      <Link href="/">
                        <Image
                          alt="Auto Paint Pro Logo"
                          src="/images/logo.png"
                          width={150}
                          height={40}
                          className="rounded-sm hover:scale-95 transition-transfosinglerm duration-300" />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col items-center mt-8 gap-5">


                    <Accordion type="multiple" >
                      <AccordionItem value="produkty">
                        <AccordionTrigger className="my-0">Produkty</AccordionTrigger>
                        <AccordionContent className="flex flex-col text-center gap-3 ">
                          {products.map((entry) => (
                            <Link key={entry.href} href={entry.href} className="text-sm font-medium hover:text-primary">
                              {entry.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {mobileNavContent.map((entry) => (
                      <Link key={entry.href} href={entry.href} className="text-sm font-medium hover:text-primary">
                        {entry.title}
                      </Link>
                    ))}

                    <Accordion type="multiple" >
                      <AccordionItem value="baza-wiedzy">
                        <AccordionTrigger className="my-0">Baza Wiedzy</AccordionTrigger>
                        <AccordionContent className="flex flex-col text-center gap-3 ">
                          {knowledgeBase.map((entry) => (
                            <Link key={entry.href} href={entry.href} className="text-sm font-medium hover:text-primary">
                              {entry.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>


                  </div>
                </SheetContent>
              </Sheet>
            </>
          )}




      </div>
    </header >
  );
};
export default Nav;
