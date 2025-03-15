import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const content = [
    {
        title: "Porady",
        desc: "Sprawdź nasze porady tak by móc samemu dokonać prostych naprawy",
        href: "/porady",
    },
    {
        title: "Blog",
        desc: "Zajrzyj na naszego bloga",
        href: "/blog"
    },
    {
        title: "Certyfikaty",
        desc: "Posiadamy certyfikaty, które \"na papierze\" potwierdzają nasze wieloletnie doświadczenie",
        href: "/certyfikaty"
    }
]

const KnowledgeBasePage = () => {
    return (
        <div className="relative h-screen">
            <section className="relative h-full">
                <div className="absolute inset-0 z-0">
                    <Image
                        alt="Car being painted"
                        src="/images/baza-wiedzy.jpg"
                        width={1920}
                        height={1080}
                        className="object-cover md:object-center w-full h-full brightness-[32%] "
                        loading="eager"
                    />
                </div>
                <div className="relative z-10 container mx-auto gap-4 px-4 py-32 h-full flex max-w-screen-md text-white flex-col items-stretch">
                    {content.map(entry => (
                        <div className="bg-black/60 text-white p-10 flex flex-col gap-5 hover:scale-105 transition-transform duration-300">
                            <h2 className="font-semibold text-4xl text-center"><Link href={entry.href}>{entry.title}</Link></h2>
                            <p className="text-center">{entry.desc}</p>
                            <Link href={entry.href}><Button className="w-full">Sprawdź</Button></Link>
                        </div>
                    ))}

                </div>
            </section >
        </div >
    )
}
export default KnowledgeBasePage