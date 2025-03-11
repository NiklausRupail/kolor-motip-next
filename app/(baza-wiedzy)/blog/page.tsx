import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BlogPage = () => {
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
            <div className="container">
                <h2 className="font-heading text-2xl md:text-4xl 4xl:text-5xl font-semibold tracking-tight mt-24">Ostatnie wpisy</h2>
            </div>
        </>
    )
}

export default BlogPage;