import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [productos, setProductos] = useState([]);
  const refInput = useRef();

  const handleInput = e => {
    setName(e.target.value)
  };

  useEffect(() => {
    //debounce
    setTimeout(() => {
      if (name === refInput.current.value) {
        fetch(`https://universidad-react-api-test.luxfenix.now.sh/products?name=${name}`)
          .then(res => res.json())
          .then(data => setProductos(data.products));
      }
    }, 600);
  }, [name]);

  return (
    <div className="App">
      <input
        type='text'
        placeholder='ingresa tu búsqueda'
        ref={refInput}
        onChange={handleInput}
      />
      <ul>
        {
          productos.map((product, i) => (
            <li key={i}>{product.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
