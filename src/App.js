import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
