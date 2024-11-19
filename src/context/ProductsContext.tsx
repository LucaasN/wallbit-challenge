import { createContext } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  interface ProductsContextProps {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
    deleteAllProducts: () => void;
    totalPrice: number;
    totalQuantity: number;
    createdDate: string;
  }
  
  export const ProductsContext = createContext<ProductsContextProps>({
    products: [],
    addProduct: () => {},
    deleteProduct: () => {},
    deleteAllProducts: () => {},
    totalPrice: 0,
    totalQuantity: 0,
    createdDate: "",
  });