
import './App.css';
import './Style.css';
import HelloWorld from './HelloWorld';
import Presentacion from './MiTarjeta';
import { useState } from 'react';




function App() {
  const [name, setName] = useState('');

  function onChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <p>Hola {name}</p>
      <label htmlFor='name'>Nombre</label>
      <input type="text" name="name" onChange={onChange}/>
      <HelloWorld />
      <Presentacion />
    </div>
  );
}

export default App;
