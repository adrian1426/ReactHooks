import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';

function App() {
  const [add, setAdd] = useState(0);

  useEffect(() => {
    console.log('useEffect 1');
  }, [add]);

  useEffect(() => {
    console.log('useEffect 2');
  }, [add]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1');
  }, [add]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2');
  }, [add]);

  const onClickAdd = () => setAdd(add + 1);

  return (
    <div className="App">
      <button onClick={onClickAdd}>Agregar {add} </button>
    </div>
  );
}

export default App;
