import Image from "next/image";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function ProductCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-16">
      <Card>
        <Link href={'/produkty/lakiery-samochodowe'}>
          <CardHeader>
            <Image
              alt="Lakiery samochodowe"
              src="/images/1.jpg"
              width={250}
              height={200}
              className="shadow-lg object-cover w-full"
            />
            <CardTitle className="font-heading mt-4">Lakiery samochodowe</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">
              W naszej ofercie znajdziecie m.in. lakier typu kompakt, służący do napraw lakierniczych
              powstałych na samochodzie zadrapań i środki pomocnicze, np. lakier podkładowy, spot
              blender itp.
            </p>
          </CardContent>
        </Link>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <Image
            alt="Środki do konserwacji"
            src="/images/2.jpg"
            width={250}
            height={200}
            className="shadow-lg object-cover w-full"
          />
          <CardTitle className="font-heading mt-4">Środki do konserwacji</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            Oferujemy sprzedaż środków konserwujących poszczególne części samochodu. U nas
            znajdziecie preparaty m.in. do nadwozia, podwozia, czy zabezpieczania progów auta.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Image
            alt="Tuning"
            src="/images/3.jpg"
            width={300}
            height={300}
            className="shadow-lg object-cover aspect-square object-left"
          />
          <CardTitle className="font-heading mt-4">Tuning</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            Szukacie środków do tuningu samochodu? Proponujemy Wam lakiery m.in. do alu-felg, do
            silników, zacisków przy hamulcach, do lamp, czy lakier podkładowy.
          </p>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <Image
            alt="Środki do pielęgnacji"
            src="/images/4.jpg"
            width={300}
            height={300}
            className="shadow-lg object-cover aspect-square object-left-top"
          />
          <CardTitle className="font-heading mt-4">Środki do pielęgnacji</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-center items-center">
          <p className="text-muted-foreground" >
            Oferujemy sprzedaż wysokojakościowych produktów przeznaczonych do domowego i
            profesjonalnego car detailingu. U nas kupicie m.in. preparaty do polerowania,
            woskowania, czyszczenia.
          </p>
        </CardContent>
      </Card>
      <Card>
        <Link href={"/#chuj"}>
          <CardHeader>
            <Image
              alt="Lakiery specjalistyczne"
              src="/images/5.jpg"
              width={300}
              height={300}
              className="shadow-lg object-cover aspect-square"
            />
            <CardTitle className="font-heading mt-4">Lakiery specjalistyczne</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">
              W naszej ofercie znajdziecie także wiele specjalistycznych lakierów do samochodów, m.in.
              cynk z efektem chromu, lakier żaroodporny, podkład pod plastik.
            </p>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <CardHeader>
          <Image
            alt="Spraye do graffiti"
            src="/images/6.jpg"
            width={300}
            height={300}
            className="shadow-lg object-cover aspect-square"
          />
          <CardTitle className="font-heading mt-4">Spraye do graffiti</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            Spraye dla profesjonalnych grafficiarzy, oferujemy produkty Montana w różnych kolorach.
            W naszym sklepie zakupicie także odpowiednie dysze.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Image
            alt="Lakiery uniwersalne"
            src="/images/7.jpg"
            width={300}
            height={300}
            className="shadow-lg object-cover aspect-square"
          />
          <CardTitle className="font-heading mt-4">Lakiery uniwersalne</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            W naszym sklepie zakupicie również lakiery uniwersalne, sprawdzające się świetnie do
            różnych powierzchni użytkowych, np. szkła, plastiku, tekstyliów.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Image
            alt="Spraye techniczne"
            src="/images/8.jpg"
            width={300}
            height={300}
            className="shadow-lg object-cover aspect-square object-left"
          />
          <CardTitle className="font-heading mt-4">Spraye techniczne</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            Oferujemy sprzedaż sprayów typowo technicznych do wykonywania prac stolarskich,
            produkcyjnych. W naszym asortymencie mamy m.in. preparaty spawalnicze, wazelinę w
            aerozolu itd.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
