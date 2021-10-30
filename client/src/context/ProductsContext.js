import { createContext, useState } from 'react';
import { productsData } from '../data/products';

export const ProductsContext = createContext(productsData);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const filterProducts = (search) => {
    const filteredProducts = productsData.filter((p) => {
      return p.name.toLowerCase().includes(search.toLowerCase());
    })

    setProducts(filteredProducts);
  };
  const deleteProduct = (name) => {
   const deletedProducts = products.filter((p) => p.name !== name);
   setProducts(deletedProducts);
  }
  return <ProductsContext.Provider value={{products, filterProducts, deleteProduct}}>
      {children}
  </ProductsContext.Provider>
};
