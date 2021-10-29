import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import { ProductsProvider } from './context/ProductsContext';
import ItemListContainer from './layouts/ItemListContainer';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
      <SearchBar /> 
      <ItemListContainer />
      </ProductsProvider>
    </div>
  );
}

export default App;
