import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import Item from '../components/item/Item';

const ItemListContainer = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <p>
        Productos disponibles:
      </p>
      { 
        products.map(p => (
          <Item key={p.name} product={p}/>
        ))
      }
    </div>
  )
}

export default ItemListContainer;
