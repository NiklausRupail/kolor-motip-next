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
                                Tuning
                            </h1>
                            <p className="md:text-xl text-sm text-muted-foreground mb-8">
                                Każdy kierowca wie jak ważny jest wygląd samochodu i to by był zabezpieczony przed wszelkimi uszkodzeniami. Proponujemy Wam preparaty do tuningu auta, które pozwolą osiągnąć oryginalny efekt wizualny i zabezpieczyć samochód przed ewentualnymi zarysowaniami. Znajdziecie u nas wysokiej jakości specjalistyczne lakiery do zacisków hamulcowych, felg, lakiery podkładowe i lakiery do lamp. Wszystkie środki gwarantują dużą odporność na czynniki zewnętrzne, w tym korozję, mróz i wysoką temperaturę.                            </p>
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
            <div className="w-full flex justify-center items-center mt-24 mb-64 container">
                <div className="infoWrapper flex flex-col lg:flex-row">
                    <Image alt="Lakiery" src="/images/tuning.png"
                        width={700}
                        height={500}
                        className="object-cover"
                    />
                    <div className="bg-primary text-background flex flex-col gap-5 p-10 static lg:relative top-36 left-5">
                        <h2 className="text-3xl font-medium">Od czego zacząć  <br /> Tuning samochodu?</h2>
                        <p className="max-w-sm">
                            Chcesz, żeby Twoje auto wyróżniało się z tłumu? Postaw na tuning optyczny! <br />Lakiery do lamp, alufelg, silników czy zacisków hamulcowych – wszystko, co potrzebne, znajdziesz w naszym sklepie.<br /> Nadaj swojemu autu niepowtarzalny styl, który zwróci niejedną parę oczu!                        </p>
                    </div>
                </div>
                <div id="content" />
            </div >


            <div className="container mx-auto flex flex-col gap-10">
                <h2 className="text-3xl font-medium">Rodzaje Lakierów</h2>

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
