import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

interface Product {
    id: number
    title: string
    price: number
    image: string
    quantity: number
  }

export const Products: React.FC = () => {
  
  const { products, deleteProduct } = useContext(ProductsContext) as { products: Product[] };
  
  return (
    <>
      <table className="table-fixed mt-4">
        <thead>
          <tr>
          <th className="w-20 p-2 border border-gray-300">Imagen</th>
            <th className="w-1/4 p-2 border border-gray-300">Título</th>
            <th className="w-1/6 p-2 border border-gray-300">Precio Unitario</th>
            <th className="w-1/6 p-2 border border-gray-300">Precio Total</th>
            <th className="w-1/6 p-2 border border-gray-300">Cantidad</th>
            <th className="w-20 p-2 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-center">
            <td className="p-2 border border-gray-300 flex justify-center">
              <img
                src={product.image}
                alt={`${product.title}'s image`}
                width={50}
                height={50}
                className="rounded img-product"
              />
            </td>
            <td className="p-2 border border-gray-300">{product.title}</td>
            <td className="p-2 border border-gray-300">{product.price}</td>
            <td className="p-2 border border-gray-300">
              {product.price * product.quantity}
            </td>
            <td className="p-2 border border-gray-300">{product.quantity}</td>
            <td className="p-2 border border-gray-300">
              <button className="text-red-500 hover:underline" type="button" onClick={ ()=>{ deleteProduct(product?.id) } }>Eliminar</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
