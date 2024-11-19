import { useState, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialValue = JSON.parse(
    localStorage.getItem("products") || "[]"
  ) as Product[];
  const [products, setProducs] = useState<Product[]>(initialValue);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const initialValueCreatedDate = localStorage.getItem("createdDate") || "";
  const [createdDate, setCreatedDate] = useState(initialValueCreatedDate);

  const addProduct = (product: Product) => {
    setProducs([...products, product]);
  };

  const deleteProduct = (id: number) => {
    setProducs(products.filter((products) => products.id !== id));
  };

  const deleteAllProducts = () => {
    setProducs([]);
    setCreatedDate("");
    localStorage.removeItem("createdDate");
  };

  useEffect(() => {
    const totalPrice = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    const totalQuantity = products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);

    if (products.length > 0 && !createdDate) {
      const initial = new Date().toISOString();
      setCreatedDate(initial);
      localStorage.setItem("createdDate", initial);
    }

    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        deleteAllProducts,
        totalPrice,
        totalQuantity,
        createdDate
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
