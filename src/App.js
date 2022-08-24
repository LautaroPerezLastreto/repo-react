import personas from './data/personas.json'
const App = () => {
  return (
    <div className="App">
      <p>Suplements World</p>
      {
        personas.map(persona =>(
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.precio}</p>
            <hr/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
