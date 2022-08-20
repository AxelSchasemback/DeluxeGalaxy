import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import { ItemListContainer } from './components/ItemListContainer/ItemList';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <main className='mainContainer'>
        <Search searchProd="Buscar Producto" />
        {/* <ItemListContainer titulo= "Items List Containers"/> */}
        <ItemListContainer titulo="Item List Container" />
      </main>
    </div>
  )
}

export default App;