import Tip from "@/components/Tip"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


import { tipsContent } from "./data";


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
                            Porady
                        </h1>
                    </div>
                </section>
            </div>
            <section className="px-10 container mt-16 md:mt-32 ">
                <Accordion type="single" collapsible>
                    {tipsContent.map((entry, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{entry.name}</AccordionTrigger>
                            <AccordionContent>
                                <Tip key={entry.name} name={entry.name} products={entry.products} steps={entry.steps} desc={entry.desc} />
                            </AccordionContent>
                        </AccordionItem >

                    ))}
                </Accordion>
            </section>
        </>

    )
}
export default TipsPage