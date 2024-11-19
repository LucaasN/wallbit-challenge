import { useContext, useState } from "react";
import { showToast } from "../utils/toast";
import { ProductsContext } from "../context/ProductsContext";

export const Form: React.FC = () => {

  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const URL_API = `https://fakestoreapi.com/products`;
  const { addProduct } = useContext(ProductsContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) {
      showToast("error", "Ingrese un id valido.");
      return;
    }

    if (!quantity) {
      showToast("error", "Ingrese una cantidad valida.");
      return;
    }

    try {
      const response = await fetch(`${URL_API}/${id}`);
      const data = await response.json();
      data.quantity = quantity;
      addProduct(data);
      setId("");
      setQuantity(0);
      showToast("success", "Producto agregado al carrito!");
    } catch (error) {
      showToast("error", `Error al obtener datos de la API: ${error}`);
    }
  };

  return (
    <>
      <h5 className="mb-4">Agrega productos a tu carrito de compra</h5>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="ID del producto"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-[--primary-color] rounded w-full p-2 bg-transparent"
        />
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          className="border border-[--primary-color] rounded w-full p-2 bg-transparent"
        />
        <button className="bg-[--bg-primary-color] p-4 rounded">Agregar</button>
      </form>
    </>
  );
};
