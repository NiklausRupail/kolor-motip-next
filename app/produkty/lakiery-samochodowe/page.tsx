"use client";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/Cards/ProductCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const content = [
  {
    title: "Kompakt",
    description:
      "Wysokiej jakości lakier samochodowy do napraw bazujący na oryginalnych farbach pojazdu. Znajduje zastosowanie podczas upiększania i naprawy częci samochodowych. System Kompakt zawiera farby niemetaliczne, metaliczne i bezbarwny lakier. Za pomocą Colour Info Book i Kompaktcolor Index (wachlarz kolorów) łatwo można znaleźć pasujący odcień farby. Kompakt można zakupić jako lakier w sprayu o pojemności 400 ml i jako sztyft lakierowy w opakowaniu 12 ml.",
    imgSrc: "/images/produkty/lakiery/1.jpg",
    reverse: false,
    codes: [
      { number: "41000 - 46999", name: "Farba niemetaliczna 400ml" },
      { number: "941000 - 946999", name: "Farba niemetaliczna 12ml" },
      { number: "51000 - 56000", name: "Farba metaliczna 400ml" },
      { number: "951000 - 956000", name: "Farba metaliczna 12ml" }
    ]
  },
  {
    title: "Bezbarwny 500ml",
    description:
      "Szybkoschnący lakier bezbarwny o długotrwałym połysku do powierzchni obrabianych i nie poddanych obróbce z drewna, metalu, aluminium, szkła, kamienia i różnych tworzyw sztucznych. Ten lakier bezbarwny zapewnia dobrą ochronę przed korozją i bardzo dobrą przyczepność. Jest on odporny na zadrapania i uderzenia jak i działanie benzyny, substancji chemicznych i warunków atmosferycznych. Lakier bezbarwny MoTip dostępny jest w puszkach o pojemności 500 ml i jako sztyft lakierowy 12 ml.",
    imgSrc: "/images/produkty/lakiery/2.jpg",
    reverse: true,
    codes: [
      { number: "04009", name: "Lakier bezbarwny 500ml" }
    ]
  },
  {
    title: "Podkładowy 500ml",
    description:
      "Szybkoschnący lakier podkładowy o bardzo dobrych właściwościach kryjących do wypełniania drobnych nierówności w obrabianych i nie poddanych obróbce podłożach z drewna, metalu i aluminium. Podkład ma bardzo dobre właściwości wypełniające, bardzo dobrą przyczepność i zapewnia dobrą ochronę przed korozją. Można go łatwo szlifować, zarówno w stanie suchym jak i mokrym (ziarnowanie 400), można na niego nanosić lakiery wszystkich systemów.",
    imgSrc: "/images/produkty/lakiery/3.jpg",
    reverse: false,
    codes: [
      { number: "04053", name: "Podkładowy lakier akrylowy żółty 500ml" },
      { number: "04054", name: "Podkładowy lakier akrylowy szary 500ml" },
      { number: "04055", name: "Podkładowy lakier akrylowy czerwony 500ml" },
      { number: "04056", name: "Podkładowy lakier akrylowy biały 500ml" }
    ]
  },
  {
    title: "Spot blender",
    description:
      "Preparat Spot Blender MoTip jest mieszaniną rozpuszczalników przeznaczoną do wyrównania przejść w obrębie napraw miejscowych. Poprzez naniesienie warstewki sprayu na miejsce objęte naprawą, uzyskuje się gładkie przejście pomiędzy starym i nowym lakierem. Preparat jest nanoszony cienkim, ukierunkowanym strumieniem, co pozwala na uzyskanie natychmiastowego (nie)widocznego efektu.",
    imgSrc: "/images/produkty/lakiery/4.jpg",
    reverse: true,
    codes: [
      { number: "00108", name: "Spot Blender" }
    ]
  },
  {
    title: "Środek odtłuszczający 200 ml",
    description:
      "Wysokiej jakości odtłuszczacz do oczyszczania metalowych częci poddanych obróbce jak i do różnych rodzajów tworzyw sztucznych. Odtłuszczacz MoTip 600 charakteryzuje się wysokimi właściwościami rozpuszczającymi, nie przewodzi i nie powoduje korozji. Odtłuszczacz MoTip 600 usuwa silikon, smołę i wosk nie pozostawiając żadnych śladów.",
    imgSrc: "/images/produkty/lakiery/5.jpg",
    reverse: false,
    codes: [
      { number: "00185", name: "Środek odtłuszczający 200ml" }
    ]
  },
  {
    title: "Środek odtłuszczający 500 ml",
    description:
      "Wysokiej jakości odtłuszczacz do oczyszczania metalowych częci poddanych obróbce jak i do różnych rodzajów tworzyw sztucznych. Odtłuszczacz MoTip 600 charakteryzuje się wysokimi właściwościami rozpuszczającymi, nie przewodzi i nie powoduje korozji. Odtłuszczacz MoTip 600 usuwa silikon, smołę i wosk nie pozostawiając żadnych śladów.",
    imgSrc: "/images/produkty/lakiery/6.jpg",
    reverse: true,
    codes: [
      { number: "00186", name: "Środek odtłuszczający 500ml" }
    ]
  }
];

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
