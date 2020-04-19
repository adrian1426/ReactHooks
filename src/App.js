import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [click, setClick] = useState(0);
  const [emoji, setEmogi] = useState('😀');

  useEffect(() => {
    alert('useEffect');
  }, [emoji]);

  const addClick = () => setClick(click + 1);

  const toggleEmogi = () => {
    const nextEmogi = emoji === '😀' ? '🍔' : '😀';
    setEmogi(nextEmogi);
  };

  return (
    <div className="App">
      <button onClick={addClick}>agregar {click} </button>
      <button onClick={toggleEmogi}>Alternar emoji</button>
      <h1>{emoji}</h1>
    </div>
  );
}

export default App;
