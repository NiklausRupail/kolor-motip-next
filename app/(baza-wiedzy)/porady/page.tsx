import Tip from "@/components/Tip"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const content = [
    {
        name: "Pożółkłe Reflektory",
        titleImage: "/public/placeholder.jpg",
        products: {
            products: ["ColorMatic Plastic cleaner antistatic", "ColorMatic Plastic primer", "ColorMatic 2K Hi - Speed Clear Coat glossy"],
            src: "/public/placeholder.jpg",
        },
        steps: [
            {
                content: "Szlifować dokładnie mokrym papierem ściernym P800, aż wszystkie żółknięcia zostaną usunięte.",
                src: "/public/placeholder.jpg",
            },
            {
                content: "Szlifować drobno papierem ściernym 2000.",
                src: "/public/placeholder.jpg",
            }

        ]
    }
]



const TipsPage = () => {
    return (
        <section className="px-10">
            <Accordion type="multiple">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Pożółkłe Reflektory</AccordionTrigger>
                    <AccordionContent>
                        {content.map((entry) => (
                            <Tip name={entry.name} titleImage={entry.titleImage} products={entry.products} steps={entry.steps} />
                        ))}
                    </AccordionContent>
                </AccordionItem>
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
    )
}
export default TipsPage