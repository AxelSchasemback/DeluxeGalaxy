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
        <ItemListContainer
          title="Item List Container"
          img="https://celularapagos.com/wp-content/uploads/2022/04/moto-G71-azul.png"
          titleCard="Moto G71"
          price="$92000"
        />
      </main>
    </div>
  )
}

export default App;