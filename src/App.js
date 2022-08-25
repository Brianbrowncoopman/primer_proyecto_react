
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
      <p> {name} @React.com </p>
      <label htmlFor='name'>tu correo</label>
      <input type="text" name="name" onChange={onChange}/>
      <Presentacion />
    </div>
  );
}

export default App;
