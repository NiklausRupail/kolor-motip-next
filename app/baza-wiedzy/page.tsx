import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
                <div className="relative z-10 container mx-auto px-4 py-32 h-full flex items-center text-white flex-wrap">

                    <div>
                        <h2 className="font-semibold text-4xl hover:text-muted hover:-translate-y-2 transition-all duration-300"><Link href="/porady">Porady</Link></h2>
                        <p>Sprawdź nasze porady tak by móc samemu dokonać prostych napraw</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-4xl hover:text-muted hover:-translate-y-2 transition-all duration-300"><Link href="/blog">Blog</Link></h2>
                        <p>Zajrzyj na naszego bloga </p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-4xl hover:text-muted hover:-translate-y-2 transition-all duration-300"><Link href="/certyfikaty">Certyfikaty</Link></h2>
                        <p>Posiadamy certyfikaty, które "na papierze" potwierdzają nasze wieloletnie doświadczenie</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default KnowledgeBasePage