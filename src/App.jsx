import './App.css';
import logo from './img/logo.png';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <nav className="nav-bar">
          <img className='logo' src={logo} alt="logo" />
          <div>
            <ul className="seccion">
              <li className='secc-list'>Productos</li>
              <li className='secc-list'>Combos</li>
              <li className='secc-list'>Mi cuenta</li>
              <li className='secc-list'>Ayuda</li>
            </ul>
          </div>
          <div>
            <input className='search-input' type="search" placeholder='busqueda' />
            <button className='search-button'>buscar</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
