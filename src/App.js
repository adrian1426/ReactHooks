import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMove = e => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  });

  return (
    <div className="App">
      <label>
        X: {mouseX} | Y: {mouseY}
      </label>
    </div>
  );
}

export default App;
