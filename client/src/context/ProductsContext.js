import { createContext, useState } from "react";
import { productsData } from '../data/products';

export const ProductsContext = createContext(productsData)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const filterProducts = (search) => {
    if (search.length === 0) {
      return setProducts(productsData);
    }
    const filteredProducts = productsData.filter(p => {
    return p.name.toLowerCase().includes(search.toLowerCase())
    });
    setProducts(filteredProducts);
  };

  return (
  <ProductsContext.Provider value={{products, filterProducts}}>
      {children}
  </ProductsContext.Provider>
  );
};
