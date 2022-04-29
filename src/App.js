import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, soy ItemListContainer!"/>
    </div>
  );
}

export default App;
