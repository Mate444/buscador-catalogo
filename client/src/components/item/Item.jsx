import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Item = ({ product }) => {
  const { deleteProduct } = useContext(ProductsContext);
  const { name, price } = product;
  return (
    <div>
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={() => deleteProduct(name)}>X</button>
    </div>
  )
}

export default Item;
