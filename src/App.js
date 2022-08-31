// import personas from './data/personas.json';
import './app/style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navegacion/NavBar'
// import inicio from './components/paginas/Inicio'
// import creatina from './components/paginas/Creatina'
// import proteina from './components/paginas/Proteina'

const App = () => {
  <div>
    <NavBar/>

  </div>
  return (
    <div className="App">
      <Router>
        <NavBar/>
        {/* <Routes>
          <Route path = '/' exact component={inicio}/>
          <Route path = '/creatina' component={creatina}/>
          <Route path = '/proteina' component={proteina}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
