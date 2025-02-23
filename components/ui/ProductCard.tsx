import srodek from "@/public/images/srodek-do-konserwacji-1.jpg";
import Image from "next/image";

interface ProductCardProps {
  title: string | null;
  description: string | null;
}
export const ProductCard = (props: ProductCardProps) => {
  const { title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold ">{title}</h1>

      <p className="max-w-[500px]">{description}</p>
      <Image src={srodek} alt="" />
    </div>
  );
};
