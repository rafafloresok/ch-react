import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartContextProv from "./context/CartContext";

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import Cart from './components/Cart';
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/*" element={<Navigate to="/" replace/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProv>
  );
}

export default App;
