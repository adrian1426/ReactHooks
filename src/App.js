import React, { useRef } from 'react';
import './App.css';

function App() {
  const entradaText = useRef();

  return (
    <div className="App">
      <input
        type='text'
        placeholder='ingresa tu texto'
        ref={entradaText}
      />
      <button onClick={() => entradaText.current.focus()}>Focus</button>
      <button onClick={() => entradaText.current.blur()}>Blur</button>
    </div>
  );
}

export default App;
