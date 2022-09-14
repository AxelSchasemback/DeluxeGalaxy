import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import  CartProvider  from "./context/CartContext";
import { ItemCartContainer } from './components/ItemCartContainer/ItemCartContainer';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<ItemCartContainer />}></Route>
          <Route path="/category/:marca" element={<ItemListContainer />}></Route>
          <Route path="/Home" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;