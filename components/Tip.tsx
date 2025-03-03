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
    titleImage: string;
    products: Product;
    steps: Step[];
}


const Tip = (props: TipProps) => {
    const { name, titleImage, products, steps } = props;
    return (
        <div>
            <h2>{name}</h2>
            <Image alt={`${name}`} src={`${titleImage}`} width={300} />
            <Image alt={"Produkty użyte"} src={`${products.src}`} width={300} />
            {products.products.map((product) => (
                <li key={product}>{product}</li>
            ))}

            {steps.map((step) => (
                <div key={step.content}>
                    <Image src={`${step.src}`} alt="" />
                    <p>{step.content}</p>
                </div>
            ))}
        </div>
    )
}
export default Tip