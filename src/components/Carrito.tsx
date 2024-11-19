import { useContext } from "react";
import { Products } from "./Products";
import { ProductsContext } from "../context/ProductsContext";

export const Carrito: React.FC = () => {
  const {
    products,
    totalPrice,
    totalQuantity,
    deleteAllProducts,
    createdDate,
  } = useContext(ProductsContext);

  const formattedDate = createdDate
    ? new Date(createdDate).toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="max-w-[1280px] mx-auto my-8 p-6  rounded-lg border border-[--primary-color]">
      <h5>
        Carrito de compra:
        {products.length > 0 && <strong> Iniciado el {formattedDate} </strong>}
      </h5>
      <Products />
      {products.length > 0 && (
        <>
          <div className="flex justify-end">
            <button
              className="bg-red-500 rounded text-white p-2 mt-4"
              type="button"
              onClick={() => deleteAllProducts()}
            >
              Vaciar carrito
            </button>
          </div>
          <div className="flex justify-between mt-5">
            <h5>Total de productos {totalQuantity}</h5>
            <h5>Precio total: {totalPrice.toFixed(2)}</h5>
          </div>
        </>
      )}
    </div>
  );
};
