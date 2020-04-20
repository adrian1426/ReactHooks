import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './App.css';

const FancyInput = forwardRef((props, ref) => {
  const inputHijo = useRef();
  const [text, setText] = useState('*****');

  useImperativeHandle(ref, () => ({
    dispatchAlert: () => {
      alert('Hola');
    },
    setParragraph: (message) => {
      setText(message);
    },
    focusInput: () => {
      inputHijo.current.focus();
    }
  }));

  return (
    <div>
      <p>{text}</p>
      <input
        type='text'
        placeholder='ingresa tu búsqueda'
        ref={inputHijo}
      />
    </div>
  );

});

function App() {
  const fancyInput = useRef();

  const handleClick = () => {
    fancyInput.current.setParragraph('desde App padre');
  };

  return (
    <div className="App">
      <FancyInput ref={fancyInput} />
      <button onClick={handleClick}>Dispatch</button>
    </div>
  );
}

export default App;
