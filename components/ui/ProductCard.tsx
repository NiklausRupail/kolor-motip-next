"use client";
import Image from "next/image";
import { Button } from "./button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ProductCode {
  name: string | null;
  number: string | null;
}
interface ProductCardProps {
  title: string | null;
  description: string | null;
  imgSrc: string | null;
  reverse: boolean | null;
  codes: ProductCode[] | null;
}
export const ProductCard = (props: ProductCardProps) => {
  const { title, description, imgSrc, reverse, codes } = props;
  return (
    <div className={"flex md:items-start md:gap-0 gap-10 px-8 md:px-0 items-center justify-between shadow-lg py-8 md:py-14 md:flex-row flex-col" + (reverse ? " md:flex-row-reverse md:pr-14" : " md:pl-14")}>

      <div>
        <h1 className="text-xl md:text-2xl font-bold mb-8">{title}</h1>
        <Image className="md:hidden inline-block mb-8" src={`${imgSrc}`} width={200} height={300} alt="" />

        <p className="text-base md:text-lg leading-5 md:max-w-2xl mb-8 ">{description}</p>

        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full">Sprawdź Kod</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div>
              <ul className="flex flex-col gap-5 items-center">
                {codes !== null && (
                  codes.map((code) => (
                    <li key={code.number} className="text-left">{code.name}<br></br>Art nr {code.number}</li>
                  )))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Image className="hidden md:inline-block" src={`${imgSrc}`} width={250} height={300} alt="" />

    </div >
  );
};
