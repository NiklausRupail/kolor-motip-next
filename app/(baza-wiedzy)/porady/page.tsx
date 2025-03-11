import Tip from "@/components/Tip"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


const content = [
    {
        name: "Pożółkłe Reflektory",
        products: {
            products: ["ColorMatic Plastic cleaner antistatic", "ColorMatic Plastic primer", "ColorMatic 2K Hi - Speed Clear Coat glossy"],
            src: "/public/placeholder.jpg",
        },
        steps: [
            {
                content: "Szlifować dokładnie mokrym papierem ściernym P800, aż wszystkie żółknięcia zostaną usunięte.",
                src: "/images/porady/reflektory/1.jpg",
            },
            {
                content: "Szlifować drobno papierem ściernym 2000.",
                src: "/images/porady/reflektory/2.jpg",
            }
        ],
        desc: "Starzenie się, wpływy atmosferyczne i inne warunki mogą sprawić, że plastik reflektorów będzie matowy i niejasny. Tylko przy niewielkim wysiłku można usunąć żółknięcie i trwały brud.",
    },
];



const TipsPage = () => {
    return (
        <>

            <div className="relative h-[50vh]">
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
                    <div className="relative z-10 container mx-auto px-4 py-32 h-full flex items-center justify-center">
                        <h1 className="text-center font-heading text-2xl md:text-5xl 4xl:text-6xl font-bold tracking-tight text-white mb-6">
                            Blog
                        </h1>
                    </div>
                </section>
            </div>
            <section className="px-10 container mt-16 md:mt-32 ">
                <Accordion type="multiple">
                        {content.map((entry,index) => (
                                <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{entry.name}</AccordionTrigger>
                                <AccordionContent>
                                    <Tip key={entry.name} name={entry.name} products={entry.products} steps={entry.steps} desc={entry.desc} />
                                </AccordionContent>
                            </AccordionItem >

                        ))}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Zarysowanie Lakieru</AccordionTrigger>
                        <AccordionContent>
                            <h2>Zarysowanie lakieru</h2>
                            <p>
                                ABY PONOWNIE NADAĆ POŻÓŁKŁYM REFLEKTOROM WYSOKI POŁYSK lampa samochodowa
                                Starzenie się, wpływy atmosferyczne i inne warunki mogą sprawić, że plastik reflektorów będzie matowy i niejasny.
                                Tylko przy niewielkim wysiłku można usunąć żółknięcie i trwały brud.
                            </p>
                            Potrzebne będą:
                            <ul className="list-disc">
                                <li className="list-item">Środki Czystości</li>
                                <li>ColorMatic Plastic cleaner antistatic</li>
                                <li>ColorMatic Plastic primer</li>
                                <li>ColorMatic 2K Hi-Speed Clear Coat glossy</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </>

    )
}
export default TipsPage