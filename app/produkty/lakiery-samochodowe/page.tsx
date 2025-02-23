"use client";
import { ProductCard } from "@/components/ui/ProductCard";

const content = [
	{
		title: "Środek do konserwacji podwozi na bazie bitumenu 1000 ml",
		description: "Preparat zabezpieczający podwozie pojazdu. Preparat na bazie bitumenu jest odporny na wpływ czynników atmosferycznych i słabe kwasy i zasady, zapewnia doskonałą ochronę przed rdzą. Preparat zachowuje elastyczność i jest dźwiękochłonny. Środek do podwozia na bazie bitumenu jest dostępny w aerozolu w opakowaniach o poj. 500 ml i w puszkach o poj. 1.000 ml do nakładania za pomocą pistoletu UBC oraz w puszkach do malowania pędzlem po 1.300 gram i 2.500 gram. Art nr 0000033",
	},
];

const LakieryPage = () => {
	return (
		<section className="flex flex-col justify-center items-baseline gap-10 mt-36  ml-24">			
			<h1 className="text-3xl font-bold">Środki do konserwacji</h1>
			<p className="max-w-[500px]">
				Każdy samochód wymaga zabezpieczenia przed czynnikami zewnętrznymi
				takimi jak deszcz, grad, śnieg i prażące słońce. W naszym asortymencie
				kosmetyków samochodowych znajdziecie profesjonalne środki do
				konserwacji, które uchronią Wasze auto przed negatywnym wpływem warunków
				atmosferycznych i nieubłaganym upływem czasu. Kosmetyki samochodowe,
				które mamy w ofercie, są dedykowane podwoziu, nadwoziu, profilom oraz
				progom. Dobrze sprawdzają się w przypadku walki z korozją, która często
				odpowiada za degradację metalowych części pojazdu. Posiadamy środki na
				bazie bitumenu oraz środki do konserwacji podwozi. Dysponujemy butelkami
				o różnych pojemnościach, dzięki czemu każdy klient znajdzie optymalny
				środek do konserwacji swojego samochodu.",
			</p>
			<h2 className="text-2xl font-bold">Jakie elementy samochodu warto zabezpieczać?</h2>
			<p className="max-w-[500px]">
			Jakie elementy samochodu warto zabezpieczać?
Chociaż przemysł motoryzacyjny poszedł do przodu w kwestii zabezpieczenia karoserii przed rdzewieniem, nadal warto pochylić się nad dodatkową konserwacją niektórych części pojazdu. Elementy szczególnie narażone na negatywne działanie brudu, wody oraz substancji chemicznych powinny być regularnie oczyszczane i sprawdzane pod kątem powstającej korozji. W grupie podwyższonego ryzyka znajdują się m.in.: poszycie podłogi, podłużnice, progi oraz nadkola, które codziennie mają kontakt z ulicznymi zabrudzeniami oraz solą w okresie zimowym.

Zastosowanie profesjonalnych środków do konserwacji jeszcze przed powstaniem rdzawego nalotu, to klucz do osiągniecia trwałego zabezpieczenia wrażliwych elementów. Aby środki konserwujące dobrze się trzymały, należy w pierwszej kolejności zadbać o bardzo dokładne oczyszczenie konserwowanych części, a następnie przeprowadzić precyzyjną aplikację preparatów za pomocą kompresora i pistoletu natryskowego.
			</p>
			{content.map((entry) => (
				<ProductCard title={entry.title} description={entry.description} />
			))}
		</section>
	);
};
export default LakieryPage;
