import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, soy ItemListContainer!"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
