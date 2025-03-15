import Image from "next/image";


interface Step {
    content: string;
    src: string;
}
interface Product {
    products: string[];
    src: string;
}

interface TipProps {
    name: string | null;
    products: Product;
    steps: Step[];
    desc: string;
}


const Tip = (props: TipProps) => {
    const { name, products, steps, desc } = props;
    return (
        <div className="flex flex-col justify-center gap-12 md:text-lg lg:text-xl">
            <p className="max-w-none md:max-w-[50%] ">{desc}</p>
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">Jakich produktów będziesz potrzebować?</h3>
                <div className="flex md:flex-row flex-col justify-around md:items-center items-start ">
                    <ol>
                        {products.products.map((product, index) => (
                            <li key={product}>{index + 1}. {product}</li>
                        ))}
                    </ol>
                    <Image src={products.src} alt="Użyte produkty" width={300} height={200} />
                </div>
            </div>
            <h4 className="font-semibold text-lg sm:text-xl md:text-2xl">Jak to zrobić krok po kroku: </h4>
            <div className="flex flex-col gap-10">
                {steps.map((step, index) => (
                    <div key={step.content} className="flex flex-col md:flex-row gap-5 md:gap-0 items-stretch md:items-center justify-between">
                        <h5 className="font-bold relative text-4xl lg:text-5xl text-black/25">0{index + 1}</h5>
                        <p className="w-full md:max-w-[50%]">{step.content}</p>
                        <Image alt="" className="w-full md:w-auto max-w-sm" width={200} height={100} src={step.src} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tip