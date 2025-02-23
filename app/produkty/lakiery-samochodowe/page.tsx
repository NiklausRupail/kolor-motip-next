"use client";
import { ProductCard } from "@/components/ui/ProductCard";

const content = [
  {
    title: "Środek do konserwacji podwozi na bazie bitumenu 1000 ml",
    description:
      "Preparat zabezpieczający podwozie pojazdu. Preparat na bazie bitumenu jest odporny na wpływ czynników atmosferycznych i słabe kwasy i zasady, zapewnia doskonałą ochronę przed rdzą. Preparat zachowuje elastyczność i jest dźwiękochłonny. Środek do podwozia na bazie bitumenu jest dostępny w aerozolu w opakowaniach o poj. 500 ml i w puszkach o poj. 1.000 ml do nakładania za pomocą pistoletu UBC oraz w puszkach do malowania pędzlem po 1.300 gram i 2.500 gram. Art nr 0000033",
  },
];

const LakieryPage = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 mt-36 mx-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
        Środki do konserwacji
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10 text-md md:text-lg ">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Ochrona na Każdą Pogodę
          </h2>
          <p className="max-w-xl">
            Każdy samochód wymaga ochrony przed deszczem, śniegiem, gradem i
            palącym słońcem. W naszej ofercie znajdziesz profesjonalne kosmetyki
            samochodowe, które skutecznie zabezpieczą podwozie, nadwozie, progi
            i profile przed korozją oraz upływem czasu. Posiadamy środki na
            bazie bitumenu oraz preparaty do konserwacji podwozia, które tworzą
            trwałą warstwę ochronną. Dzięki szerokiemu wyborowi pojemności każdy
            kierowca znajdzie idealne rozwiązanie dla swojego auta!
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Jakie elementy samochodu warto zabezpieczać?
          </h2>
          <p className="max-w-xl">
            Choć przemysł motoryzacyjny poczynił postęp w ochronie karoserii,
            warto zadbać o dodatkową konserwację niektórych części auta.
            Elementy narażone na brud, wodę i chemikalia, jak{" "}
            <strong>poszycie podłogi, podłużnice, progi czy nadkola</strong>,
            wymagają regularnego czyszczenia i ochrony przed korozją. Aplikacja
            profesjonalnych środków do konserwacji przed pojawieniem się rdzy
            jest kluczowa. Ważne jest dokładne oczyszczenie powierzchni i
            precyzyjne naniesienie preparatów za pomocą kompresora i pistoletu
            natryskowego.{" "}
          </p>
        </div>
      </div>
      {content.map((entry) => (
        <ProductCard title={entry.title} description={entry.description} />
      ))}
    </section>
  );
};
export default LakieryPage;
