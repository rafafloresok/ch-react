import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CartContextProv from "./context/CartContext";
import DbContextProv from "./context/DbContext";

import LoaderContainer from './components/LoaderContainer';
import ToastContainer from "./components/ToastContainer";
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
        <div className="App">
          <DbContextProv>
            <ToastContainer/>
            <LoaderContainer/>
            <Header/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:id" element={<ItemListContainer/>} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
              <Route path="/*" element={<Navigate to="/" replace/>} />
            </Routes>
          </DbContextProv>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProv>
  );
}

export default App;