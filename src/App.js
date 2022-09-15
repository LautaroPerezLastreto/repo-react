// import personas from './data/personas.json';
import React from 'react'
import './app/style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navegacion/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
// import inicio from './components/paginas/Inicio'
// import creatina from './components/paginas/Creatina'
// import proteina from './components/paginas/Proteina'

export const CartContext = React.createContext('');
console.log('CartContext: ', CartContext)
const App = () => {
  <div>
    <NavBar/>


  </div>
  return (
    <div className="App">
      <Router>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path = '/'  element={<ItemListContainer/>}/>
          <Route path = '/categoria/:categoriaid' element={<ItemListContainer/>}/>
          <Route path = '/cart' element={<Cart/>}/>
          <Route path = '/detalle/:detalleid' element={<ItemDetailContainer/>}/>
        </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
