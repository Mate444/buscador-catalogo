import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const { filterProducts } = useContext(ProductsContext);
  return (
    <div>
      <input onChange={(e) => setSearchInput(e.target.value)}/>
      <button onClick={() => filterProducts(searchInput)}>Buscar</button>
    </div>
  )
}

export default SearchBar;
