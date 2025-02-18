import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Section() {
  return (
    <div className="relative h-screen">
     
      <section className="relative h-full">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Car being painted"
            src="/images/drziw.jpg"
            width={1920}
            height={1080}
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white mb-6">
              Sklep lakierniczy F.H Kolor w&nbsp;Katowicach
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sklep F.H. Kolor w Katowicach działa od 2000 roku, zdobywając zaufanie klientów z
              branży motoryzacyjnej. Specjalizujemy się w sprzedaży lakierów do wszystkich marek
              aut. Pomagamy również dobrać odpowiedni odcień i precyzyjnie dopasować kolor dzięki
              naszej mieszalni farb i lakierów
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Skontaktuj Się z Nami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 hover:bg-background/40 text-white"
              >
                Czytaj WIęcej
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
