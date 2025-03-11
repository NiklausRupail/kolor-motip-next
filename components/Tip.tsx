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
        <div className="flex flex-col justify-center gap-5">
            <p>{desc}</p>
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">Jakich produktów będziesz potrzebować?</h3>
                <ol>
                    {products.products.map((product, index) => (
                        <li key={product}>{index + 1}. {product}</li>
                    ))}
                </ol>
            </div>
            <h4 className="font-semibold text-lg sm:text-xl md:text-2xl">Jak to zrobić krok po kroku: </h4>
            <div className="flex flex-col  gap-10">
                {steps.map((step, index) => (
                    <div key={step.content} className="flex flex-col md:flex-row md:items-center justify-between">
                        <h5 className="font-bold relative text-4xl text-black/25">0{index}</h5>
                        <p className="w-3/4 ">{step.content}</p>
                        <Image alt="" width={100} height={200} src={step.src} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tip