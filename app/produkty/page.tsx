import { ProductCards } from "@/components/sections/ProductCards";
import Image from "next/image";

const ProduktyPage = () => {
  return (
    <>
      <div className="relative h-[25vh]">
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
              Produkty
            </h1>
          </div>
        </section>
      </div>
      <ProductCards />
    </>)
};
export default ProduktyPage;
