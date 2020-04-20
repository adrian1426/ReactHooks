import React, { useState, useCallback } from 'react';
import './App.css';

const getRandomColor = () => `#` + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ callback, children }) => {
  const color = getRandomColor();
  const styles = {
    padding: '1em',
    fontSize: '20px',
    background: color
  };

  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const incrementA = useCallback(() => {
    setA(a => a + 1);
  }, []);

  const incrementB = useCallback(() => {
    setB(b => b + a);
  }, [a]);

  return (
    <div className="App">
      <Button callback={incrementA}>InrementioA</Button>
      <Button callback={incrementB}>InrementioB</Button>
      <h1>a: {a} -- b: {b}</h1>
    </div>
  );
}

export default App;
