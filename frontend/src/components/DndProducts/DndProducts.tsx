
import { useDrag } from "react-dnd";
import { Product } from '../../types';

interface Props {
    product: Product;
}

export default function DndProducts({ product }: Props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: product.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div className="m-5 mb-5" >
            <img
                ref={drag}
                src={product.url}
                alt={product.name}
                width="95px"
                style={{ border: isDragging ? "2px solid gray" : "0px" }}
            />
            <div className="flex gap-2 w-1 text-xs">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
}
