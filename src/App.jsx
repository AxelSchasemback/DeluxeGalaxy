import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/Productos/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Productos/ItemDetailContainer/ItemDetailContainer'
import CartProvider from "./context/CartContext";
import { AuthProvider } from './context/AuthContext';
import { ItemCartContainer } from './components/CarritoCompra/ItemCartContainer/ItemCartContainer';
import { Checkout } from './components/CarritoCompra/Checkout/Checkout'
import { Login } from './components/Users/Login/Login';
import { Register } from './components/Users/Register/Register'
import { ProtectedWhitNoUser } from './components/Utils/ProtectedRoute/ProtectedWhitNoUser'
import { ProtectedWhitUser } from './components/Utils/ProtectedRoute/ProtectedWhitUser'


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/login' element={
              <ProtectedWhitUser>
              <Login />
            </ProtectedWhitUser>
              } ></Route>
              <Route path='/register' element={
                <ProtectedWhitUser>
                  <Register />
                </ProtectedWhitUser>
              } ></Route>
              <Route path='/checkout' element={
                <ProtectedWhitNoUser>
                  <Checkout />
                </ProtectedWhitNoUser>
              } ></Route>
              <Route path='/cart' element={<ItemCartContainer />}></Route>
              <Route path="/category/:marca" element={<ItemListContainer />}></Route>
              <Route path="/Home" element={<ItemListContainer />} />
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;