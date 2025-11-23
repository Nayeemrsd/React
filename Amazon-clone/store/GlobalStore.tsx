// import React, {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import type { CartItem, Product } from "../src/types";

// interface StoreContextType {
//   cart: CartItem[];
//   setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
//   product: Product[];
//   setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
//   cartProductCount: number;
// }

// const GlobalStore = createContext<StoreContextType | undefined>(undefined);

// export const useStore = () => {
//   const context = useContext(GlobalStore);
//   if (!context) {
//     throw new Error("useStore only use with in the provider");
//   }
//   return context;
// };

// export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [product, setProduct] = useState<Product[]>([]);
//   const [cartProductCount, setCartProductCount] = useState(0);

//   useEffect(() => {
//     setCartProductCount(cart.length);
//   }, [cart]);

//   const value: StoreContextType = {
//     cart,
//     setCart,
//     product,
//     setProduct,
//     cartProductCount,
//   };

//   return <GlobalStore.Provider value={value}>{children}</GlobalStore.Provider>;
// };
