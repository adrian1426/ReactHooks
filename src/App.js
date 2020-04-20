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

  const incrementA = useCallback(() => {
    setA(a => a + 1);
  }, []);

  return (
    <div className="App">
      <Button callback={incrementA}>Inrementio</Button>
      <h1>{a}</h1>
    </div>
  );
}

export default App;
