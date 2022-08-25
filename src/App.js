
import './App.css';
import './Style.css';
import Presentacion from './MiTarjeta';
import Caja from './Use';
import { useState } from 'react'; //no perder





function App() {

  const [name, setName] = useState('');
  function onChange(e) {
    setName(e.target.value);
  }
  return (

    <div className="App">
      <p>Hola este es mi inicio en REACt {name}</p>
      <label htmlFor='name'>Nombre</label>
      <input type="text" name="name" onChange={onChange}/>
      <Presentacion />
    </div>
  );
}

export default App;
