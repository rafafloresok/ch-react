import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { cartContext } from "./context/cartContext";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <cartContext.Provider value={[]}>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/*" element={<Navigate to="/" replace/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
