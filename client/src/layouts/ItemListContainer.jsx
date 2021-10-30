import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Item from "../components/item/Item";

const ItemListContainer = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <p>Available Products</p>
      {
        products.map((p, i) => (
          <Item product={p} key={i}/>
        ))
      }
    </div>
  )
}

export default ItemListContainer;
