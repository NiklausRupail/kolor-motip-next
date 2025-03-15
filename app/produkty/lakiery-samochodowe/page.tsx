"use client";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/Cards/ProductCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { content } from './copy'

const LakieryPage = () => {
  return (
    <>
      <div className="relative h-screen">
        <section className="relative h-full">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Car being painted"
              src="/images/products.jpg"
              width={1920}
              height={1080}
              className="object-cover w-full h-full brightness-[25%]"
              loading="eager"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-32 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading text-2xl md:text-5xl 4xl:text-6xl font-bold tracking-tight text-white mb-6">
                Lakiery samochodowe
              </h1>
              <p className="md:text-xl text-sm text-muted-foreground mb-8">
                Dysponujemy wieloma rodzajami lakierów oraz farb samochodowych w sprayu, które świetnie sprawdzają się do przeprowadzania prac naprawczych. Preparaty z serii Kompakt, które mamy w ofercie, przeznaczone są do wykonywania naprawy na lakierze oryginalnym. Lakiery samochodowe Kompakt posiadają wersje niemetaliczne, metaliczne oraz bezbarwne. Bogata gama kolorów pozwala na dobór odpowiedniego odcienia lakieru dla prawie każdego modelu auta. Ponadto dysponujemy lakierami podkładowymi i spot blenderami, które uzupełniają drobne ubytki i kryją nierówności. Sprzedajemy też lakiery bezbarwne oraz środki służące do odtłuszczania powierzchni.
              </p>
              <div className="flex gap-4">
                <a href='#content'>
                  <Button size="lg">
                    Sprawdzam <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>


      </div>
      <div className="w-full flex  justify-center items-center mt-24 mb-64">
        <div className="infoWrapper flex flex-col md:flex-row">
          <Image alt="Lakiery" src="/images/lakiery.png"
            width={700}
            height={500}
            className="object-cover"
          />
          <div className="bg-primary text-background flex flex-col gap-5 p-10 static md:relative top-36 left-5">
            <h2 className="text-3xl font-medium">Jaki odcień <br /> lakieru wybrać?</h2>
            <p className="max-w-sm">
              Samodzielny dobór odpowiedniego odcienia lakieru samochodowego może okazać się karkołomnym zadaniem. W niektórych przypadkach znajomość fabrycznego oznaczenia koloru to jedynie połowa sukcesu. Wraz z wiekiem kolor lakieru może matowieć lub blednąć. Mimo to, <strong>warto odszukać tabliczkę znamionową z oznaczeniem odcienia</strong>, ponieważ będzie ona stanowić punkt wyjścia w wyborze kolorystyki.
            </p>
          </div>
        </div>
        <div id="content" />
      </div>


      <div className="container mx-auto flex flex-col gap-10">
        <h2 className="text-3xl font-medium"> Rodzaje Lakierów</h2>

        {
          content.map((entry) => (
            <ProductCard codes={entry.codes} reverse={entry.reverse} key={entry.title} title={entry.title} description={entry.description} imgSrc={entry.imgSrc} />
          ))
        }
      </div>
    </>

  );
};
export default LakieryPage;
