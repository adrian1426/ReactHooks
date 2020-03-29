import React, {useState} from 'react';
import './App.css';

function App() {
  const [esActivo, setActivo] = useState(false);

  const toggle = () => {
    setActivo(!esActivo);
  };

  return (
    <div className="App">
      <button onClick={toggle}>{esActivo ? 'Desactivar' : 'Activar'}</button>
    </div>
  );
}

export default App;
