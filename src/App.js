import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    console.log('dentro de useEffect: ', click);
    console.log('----------------------------------');
    return () => {
      console.log('dentro de return: ', click);
    };
  });

  const addClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="App">
      <button onClick={addClick}>agregar {click} </button>
    </div>
  );
}

export default App;
