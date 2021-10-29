const Item = ({ product }) => {
  const { name, price } = product;
  return (
    <div key={name}>
      <p>{name}</p>
      <p>${price}</p>
    <div>---</div>
    </div>
  )
}

export default Item;
